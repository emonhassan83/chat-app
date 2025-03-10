const socket = require("socket.io");
const { saveMessage } = require("../app/controller/message.controller");

let onlineUsers = []; // Stored in memory, lost on restart

const addUser = (user, socketId) => {
  const isExist = onlineUsers.findIndex((item) => item._id === user._id);
  if (isExist !== -1) {
    onlineUsers.splice(isExist, 1);
  }

  user.socketId = socketId;
  onlineUsers.push(user);
};

const removeUser = (socketId) => {
  const isExist = onlineUsers = onlineUsers.filter((user) => user.socketId === socketId);

  if (isExist !== -1) {
    onlineUsers.splice(isExist, 1);
  }
};

const socketInit = (server) => {
  const io = socket(server, {
    cors: {
      origin: ["http://localhost:3000", "http://localhost:5173"],
    },
  });

  io.on("connection", (socket) => {
    console.log("New user connected:", socket.id);

    socket.on("ADD_USER", (user) => {
      addUser(user, socket.id);
      console.log("User added:", onlineUsers);
      io.emit("USER_ADDED", onlineUsers);
    });

    socket.on("SENT_MSG", async(message) => {
      console.log("Sent message from frontend:", message);
      const isSaved = await saveMessage(message);
      socket.to(message.receiver.socketId).to(message.sender.socketId).emit("RECEIVE_MSG", isSaved);
    });

    socket.on("DELETED_MSG", (message) => {
      socket.broadcast.to(message.receiver.socketId).emit("DELETED_MSG", message);
    });
    
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      removeUser(socket.id);
      io.emit("USER_ADDED", onlineUsers);
    });
  });
};

module.exports = socketInit;
