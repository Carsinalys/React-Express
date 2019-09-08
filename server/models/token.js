const mongoose = require("mongoose");

const tokenShchema = new mongoose.Schema({
  token: {
    type: String,
    trim: true,
    required: [true, "No mail"],
    unique: true
  },
  localId: {
    type: String,
    trim: true,
    required: [true, "No password"],
    unique: false
  },
  expireAt: {
    type: Number,
    required: [true, "No expire time"]
  }
});

const Token = mongoose.model("Token", tokenShchema);

module.exports = Token;
