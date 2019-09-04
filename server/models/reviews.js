const mongoose = require("mongoose");

const reviewsShchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "No name"],
    unique: false
  },
  text: {
    type: String,
    trim: true,
    required: [true, "No text"],
    unique: false
  },
  rating: {
    type: Number,
    required: [true, "No rating"],
    unique: false
  },
  date: {
    type: Number,
    required: [true, "No date"],
    unique: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Reviews = mongoose.model("Reviews", reviewsShchema);

module.exports = Reviews;
