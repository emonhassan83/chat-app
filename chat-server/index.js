const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:5173"],
  },
});

const port = 5000;

io.on("connection", (socket) => {
  console.log(socket.id);
});

server.listen(5000, () => {
  console.log(`Chat app listening on port: ${port}`);
});
