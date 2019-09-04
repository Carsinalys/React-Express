const mongoose = require("mongoose");

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

app.listen(PORT, () => console.log("lisening on ", PORT));
