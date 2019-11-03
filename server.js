const mongoose = require("mongoose");
const cluster = require("cluster");
const socket = require("./server/socket/socket");

if (cluster.isMaster) {
  cluster.fork();
  cluster.on("exit", function(worker) {
    console.log("Worker %d died", worker.id);
    cluster.fork();
  });
} else {
  process.on("uncaughtException", err => {
    console.log(err);
    console.log("In uncaught exception...");
    process.exit(1);
  });
  // env variabels
  require("dotenv").config({ path: "./config.env" });
  const app = require("./server/index");
  // condition for testing in travis
  let DB;
  if (process.env.NODE_ENV === "ci") {
    DB = "mongodb://127.0.0.1:27017/Orders";
  } else {
    DB = process.env.DATABASE.replace(
      "<password>",
      process.env.DATABASE_PASSWORD
    );
  }

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

  // some kind of middleware for querry to mongoDB
  require("./server/caching/caching");

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

  socket(server);
}
