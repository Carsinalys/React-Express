const factory = require("./handleFactory");
const Rooms = require("../models/rooms");
const catchAsync = require("../utils/catchErrors");
const AppError = require("../utils/errorHandler");

exports.getRooms = catchAsync(async (req, res, next) => {
  const curRooms = await Rooms.find();
  if (!curRooms) next(new AppError("No rooms", 404));
  res.status(200).json({
    status: "ok",
    data: curRooms
  });
});

exports.createroom = factory.addOne(Rooms);
