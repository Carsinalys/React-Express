// global setup for jest
// for example connecting to mongo db
// mongoose.Promise = global.Promise

console.log("logging from setup script");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
let DB;
DB = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD);
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

jest.setTimeout(6000000);
