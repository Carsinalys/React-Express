const mongoose = require("mongoose");
const Reviews = require("./reviews");

const buildsShchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "No name"],
      unique: true
    },
    cost: {
      type: Number,
      trim: true,
      required: [true, "No cost"],
      unique: false
    },
    diameter: {
      type: Number,
      required: [true, "No diameter"],
      unique: false
    },
    weight: {
      type: Number,
      required: [true, "No weight"],
      unique: false
    },
    ingredients: {
      type: Object,
      required: [true, "No ingredients"]
    },
    reviews: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Reviews"
      }
    ]
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

const Builds = mongoose.model("Builds", buildsShchema);

module.exports = Builds;
