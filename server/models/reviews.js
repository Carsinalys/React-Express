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
  id: {
    type: String,
    required: [true, " No id"],
    unique: false
  },
  date: {
    type: Date,
    default: Date.now()
  },
  edited: {
    type: Boolean
  }
});

const Reviews = mongoose.model("Reviews", reviewsShchema);

module.exports = Reviews;
