const AppError = require("../utils/errorHandler");
const catchAsync = require("../utils/catchErrors");
const Builds = require("../models/builds");
const ReviewsBuilds = require("../models/reviews_builds");

const { get, set, del } = require("../caching/redis");

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
  const data = await get("builds");
  if (data !== null) {
    res.status(200).json({
      status: "ok",
      data: JSON.parse(data)
    });
  } else {
    const builds = await Builds.find().populate({
      path: "reviews",
      select: "-__v -build"
    });
    await set("builds", JSON.stringify(builds));
    console.log("after saving in redis");
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
  await del("builds");
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
  await del("builds");
  res.status(200).json({
    status: "ok",
    data: oldReview
  });
});
