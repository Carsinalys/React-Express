const mongoose = require("mongoose");
const catchAsync = require("../utils/catchErrors");

const messageShchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "No name"],
    unique: false,
    minlength: 5,
    maxlength: 20
  },
  message: {
    type: String,
    required: [true, "No message"],
    unique: false,
    maxlength: 100
  },
  room: {
    type: String,
    required: [true, "No room"]
  },
  id: {
    type: String,
    required: [true, "No id"]
  },
  createAt: {
    type: Date,
    default: Date.now()
  }
});

messageShchema.pre(
  "save",
  catchAsync(async function(next) {
    const countMsg = await Message.countDocuments();
    if (countMsg > 500) {
      const needToDelete = await Message.find().limit(countMsg - 15);
      needToDelete.length > 0
        ? needToDelete.map(
            async item => await Message.deleteOne({ _id: item._id })
          )
        : await Message.deleteOne({ _id: needToDelete._id });
    }
    next();
  })
);

const Message = mongoose.model("Message", messageShchema);

module.exports = Message;
