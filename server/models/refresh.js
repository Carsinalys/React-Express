const mongoose = require("mongoose");

const refreshShchema = new mongoose.Schema({
  localId: {
    type: String,
    trim: true,
    required: [true, "No user id"],
    unique: false
  },
  expireAt: {
    type: Number,
    required: [true, "No expire time"]
  }
});

const Refresh = mongoose.model("Refresh", refreshShchema);

module.exports = Refresh;
