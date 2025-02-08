const express = require("express");
const { createServer } = require("http");
const cors = require("cors");
const userController = require("./app/controller/user.controller");
const messageController = require("./app/route/message.route");
const connectMongoDB = require("./config/db");
const socket = require("./utils/socket");

const app = express();
const server = createServer(app);
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/users", userController);
app.use("/message", messageController);

connectMongoDB()
  .then(() => {
    server.listen(5000, () => {
      socket(server);
      console.log(`Chat app listening on port: ${port}`);
    });
  })
  .catch((err) => console.error(err));
