const socket = require("socket.io");

const onlineUsers = [];

const addUser = (user, socketId) => {

  const isExist = onlineUsers.findIndex((item) => item._id === user._id);
  if(isExist !== -1){
    onlineUsers.splice(isExist, 1);
  } 

  user.socketId = socketId;
  onlineUsers.push(user);
};

const socketInit = (server) => {
  const io = socket(server, {
    cors: {
      origin: ["http://localhost:3000", "http://localhost:5173"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("ADD_USER", (user) => {
      addUser(user, socket?.id);
      io.emit("USER_ADDED", onlineUsers);
    });
  });
};

module.exports = socketInit;
