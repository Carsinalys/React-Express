const catchAsync = require("../utils/catchErrors");
const Message = require("../models/message");
const AppError = require("../utils/errorHandler");

exports.getMessages = catchAsync(async (req, res, next) => {
  const curMessages = await Message.find();
  if (!curMessages)
    next(new AppError("There is no any messages on this query", 404));
  res.status(200).json({
    status: "ok",
    data: curMessages
  });
});
