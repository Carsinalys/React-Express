const mongoose = require("mongoose");

const reviewsShchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "No name"],
      unique: false,
      minlength: 5,
      maxlength: 20
    },
    text: {
      type: String,
      trim: true,
      required: [true, "No text"],
      unique: false,
      minlength: 10,
      maxlength: 300
    },
    rating: {
      type: Number,
      required: [true, "No rating"],
      unique: false,
      min: 1,
      max: 5
    },
    id: {
      type: String,
      required: [true, "No id"],
      unique: false
    },
    date: {
      type: Date,
      default: Date.now()
    },
    edited: {
      type: Boolean
    },
    build: {
      type: mongoose.Schema.ObjectId,
      ref: "Builds"
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    }
  },
  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

const Reviews = mongoose.model("Reviews", reviewsShchema);

module.exports = Reviews;
