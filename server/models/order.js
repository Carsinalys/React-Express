const mongoose = require("mongoose");

const ordersShchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name"],
    unique: false
  },
  phone: {
    type: Number,
    required: [true, "No phone"],
    unique: false
  },
  street: {
    type: String,
    required: [true, "No street"],
    unique: false
  },
  flat: {
    type: Number,
    required: [true, "No flat"],
    unique: false
  },
  house: {
    type: Number,
    required: [true, "No house"],
    unique: false
  },
  totalCost: {
    type: Number
  },
  id: {
    type: String,
    required: [true, "No id"],
    unique: false
  },
  pizzaName: {
    type: String
  },
  cost: {
    type: Number
  },
  diameter: {
    type: Number,
    unique: false
  },
  weight: {
    type: Number,
    unique: false
  },
  ingredients: Object,
  pizzas: [Object]
});

const Orders = mongoose.model("Orders", ordersShchema);

module.exports = Orders;
