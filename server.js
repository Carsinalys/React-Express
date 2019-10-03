const mongoose = require("mongoose");

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

const webSocketServer = new WebSocket({ server });

webSocketServer.on(
  "connection",
  catchAsync(async webSocket => {
    webSocket.on("message", async message => {
      const newMessage = await Message.create(JSON.parse(message));
      broadcast(JSON.stringify(newMessage));
    });
  })
);

function broadcast(data) {
  webSocketServer.clients.forEach(client => {
    client.send(data);
  });
}

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
