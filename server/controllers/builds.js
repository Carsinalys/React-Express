const AppError = require("../utils/errorHandler");
const catchAsync = require("../utils/catchErrors");
const Builds = require("../models/builds");
const ReviewsBuilds = require("../models/reviews_builds");

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
  const builds = await Builds.find().populate({
    path: "reviews",
    select: "-__v -build"
  });
  if (!builds) next(new AppError("No build find", 404));
  res.status(200).json({
    status: "ok",
    data: builds
  });
});

exports.addReview = catchAsync(async (req, res, next) => {
  const newReview = await ReviewsBuilds.create(req.body);
  const reviewBuild = await Builds.findById(newReview.build);
  reviewBuild.reviews.push(newReview._id);
  reviewBuild.save();
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
  res.status(200).json({
    status: "ok",
    data: oldReview
  });
});