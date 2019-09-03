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

const ordersShchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pizza must have a name"],
    unique: false
  },
  cost: {
    type: Number,
    default: 9
  },
  diameter: Number,
  weight: Number,
  ingredients: Object
});

const Orders = mongoose.model("Orders", ordersShchema);

const testOrder = new Orders({
  name: "Fucking pizza",
  cost: 10,
  diameter: 35,
  weight: 900,
  ingredients: {
    one: 1,
    two: 2,
    tree: 3
  }
});

// testOrder
//   .save()
//   .then(doc => console.log(doc))
//   .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("lisening on ", PORT));
