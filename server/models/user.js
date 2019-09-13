const mongoose = require("mongoose");

const userShchema = new mongoose.Schema({
  mail: {
    type: String,
    trim: true,
    required: [true, "No mail"],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    trim: true,
    required: [true, "No password"],
    unique: false
  },
  localId: {
    type: String,
    required: [true, "no localId"]
  },
  refreshToken: {
    type: String,
    required: [true, " No refreshToken"],
    unique: false
  },
  name: {
    type: String
  },
  phone: {
    type: Number
  },
  street: {
    type: String
  },
  house: {
    type: Number
  },
  flat: {
    type: Number
  },
  createdAt: {
    type: Date
  },
  lastLoginAt: {
    type: Date
  }
});

const User = mongoose.model("User", userShchema);

module.exports = User;
