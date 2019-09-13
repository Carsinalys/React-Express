const mongoose = require("mongoose");

process.on("uncaughtException", err => {
  console.log(err);
  console.log("In uncaught exception...");
  process.exit(1);
});

require("dotenv").config({ path: "./config.env" });
const app = require("./server/index");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
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
