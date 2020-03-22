import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import * as crypto from 'crypto';

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
    type: Date,
    default: Date.now()
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
  passwordResetExrires: Date,
  photo: {
    type: String,
    default: "man.svg"
  }
});

userShchema.pre("save", async function(next) {
  if (this.passwordChanged) {
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordChangeAt = Date.now() - 1000;
  }
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
