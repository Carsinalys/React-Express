const mongoose = require("mongoose");

const roomsShchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "No name"],
    unique: true,
    minlength: 5,
    maxlength: 20
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
});

const Rooms = mongoose.model("Rooms", roomsShchema);

module.exports = Rooms;
