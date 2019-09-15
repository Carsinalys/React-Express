const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

userShchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userShchema.methods.correctPassword = async function(userPassword, BDpassword) {
  return await bcrypt.compare(userPassword, BDpassword);
};

const User = mongoose.model("User", userShchema);

module.exports = User;
