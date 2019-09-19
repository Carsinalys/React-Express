const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

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
  },
  passwordChangeAt: Date,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  },
  passwordResetToken: String,
  passwordResetExrires: Date
});

userShchema.pre("save", async function(next) {
  if (!this.isModified("password") || !this.isNew) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordChangeAt = Date.now() - 1000;
  next();
});

userShchema.methods.correctPassword = async function(userPassword, BDpassword) {
  return await bcrypt.compare(userPassword, BDpassword);
};

userShchema.methods.changedPasswordAfter = function(JWTTimeStamp) {
  if (this.passwordChangeAt) {
    const changedTime = (this.passwordChangeAt.getTime() / 1000).toFixed();
    return JWTTimeStamp < changedTime;
  }
  return false;
};

userShchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExrires = Date.now() + 600000;

  return resetToken;
};

const User = mongoose.model("User", userShchema);

module.exports = User;
