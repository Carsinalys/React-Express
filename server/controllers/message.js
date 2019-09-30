const catchAsync = require("../utils/catchErrors");
const Message = require("../models/message");
const AppError = require("../utils/errorHandler");
const factory = require("./handleFactory");

exports.getMessages = catchAsync(async (req, res, next) => {
  const curMessages = await Message.find({ room: req.query.room });
  if (!curMessages)
    next(new AppError("There is no any messages on this query", 404));
  res.status(200).json({
    status: "ok",
    data: curMessages
  });
});

exports.deleteMessage = factory.deleteOne(Message);
