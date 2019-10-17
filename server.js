const mongoose = require("mongoose");
// const cluster = require("cluster");
//
// if (cluster.isMaster) {
//   cluster.fork();
//   cluster.fork();
// } else {
process.on("uncaughtException", err => {
  console.log(err);
  console.log("In uncaught exception...");
  process.exit(1);
});

require("dotenv").config({ path: "./config.env" });
const app = require("./server/index");
const WebSocket = require("ws").Server;
const Message = require("./server/models/message");
const catchAsync = require("./server/utils/catchErrors");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(con => {
    console.log("connected to mongo atlas");
    //console.log(con.connections)
  })
  .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log("lisening on ", PORT));

process.on("unhandledRejection", err => {
  console.log(err);
  console.log("In unhandled rejection...");
  server.close(() => {
    process.exit(1);
  });
});
// this is heroku event with shoting down server every 24 hours
process.on("SIGTERM", () => {
  console.log("SIGTERM recieved, shouting down.");
  server.close(() => {
    console.log("process terminated.");
  });
});

const socketIo = require("socket.io");

const io = socketIo(server);

io.on("connection", async function(socket) {
  socket.emit("messageFromExpress", { socket: "connected" });
  socket.on("messageFromReact", async data => {
    const newMessage = await Message.create(data);
    io.emit("messageToState", newMessage);
  });
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});
// }
