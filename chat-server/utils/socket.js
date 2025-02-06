const socket = require("socket.io");

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
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
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

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      removeUser(socket.id);
      io.emit("USER_ADDED", onlineUsers);
    });
  });

};

module.exports = socketInit;
