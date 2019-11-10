const AppError = require("../utils/errorHandler");
const catchAsync = require("../utils/catchErrors");
const Builds = require("../models/builds");
const ReviewsBuilds = require("../models/reviews_builds");
const Redis = require("redis");
const Client =
  process.env.NODE_ENV === "production"
    ? Redis.createClient(process.env.REDIS_URL)
    : Redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
Client.set("test", "fucking test");
Client.get("test", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

let buffer = {};

exports.setBuilds = catchAsync(async (req, res, next) => {
  Object.keys(req.body).map(
    async item =>
      await Builds.create({
        name: item,
        cost: req.body[item].cost,
        diameter: req.body[item].diameter,
        weight: req.body[item].weight,
        ingredients: req.body[item].ingredients
      })
  );
});

exports.getBuilds = catchAsync(async (req, res, next) => {
  if (buffer.builds) {
    res.status(200).json({
      status: "ok",
      data: buffer.builds
    });
  } else {
    const builds = await Builds.find().populate({
      path: "reviews",
      select: "-__v -build"
    });
    buffer.builds = builds;
    if (!builds) next(new AppError("No build find", 404));
    res.status(200).json({
      status: "ok",
      data: builds
    });
  }
});

exports.addReview = catchAsync(async (req, res, next) => {
  const newReview = await ReviewsBuilds.create(req.body);
  const reviewBuild = await Builds.findById(newReview.build);
  reviewBuild.reviews.push(newReview._id);
  reviewBuild.save();
  buffer = {};
  res.status(200).json({
    status: "ok",
    data: reviewBuild
  });
});

exports.editreview = catchAsync(async (req, res, next) => {
  const oldReview = await ReviewsBuilds.findOne({
    user: req.body.user,
    build: req.body.build
  });
  oldReview.name = req.body.name;
  oldReview.text = req.body.text;
  oldReview.rating = req.body.rating;
  oldReview.save();
  buffer = {};
  res.status(200).json({
    status: "ok",
    data: oldReview
  });
});
