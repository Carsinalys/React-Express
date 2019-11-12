const mongoose = require("mongoose");
const catchAsync = require("../utils/catchErrors");

const ordersShchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name"],
    unique: false,
    minlength: 2,
    maxlength: 20
  },
  phone: {
    type: Number,
    required: [true, "No phone"],
    unique: false
  },
  street: {
    type: String,
    required: [true, "No street"],
    unique: false,
    minlength: 2,
    maxlength: 20
  },
  flat: {
    type: Number,
    required: [true, "No flat"],
    unique: false,
    minlength: 2,
    maxlength: 4
  },
  house: {
    type: Number,
    required: [true, "No house"],
    unique: false,
    minlength: 2,
    maxlength: 4
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
    type: String,
    minlength: 2,
    maxlength: 20
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
