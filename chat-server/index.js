const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const userController = require("./app/controller/user.controller");
const connectMongoDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

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

app.use("/users", userController);

connectMongoDB()
  .then(() => {
    server.listen(5000, () => {
      console.log(`Chat app listening on port: ${port}`);
    });
  })
  .catch((err) => console.error(err));
