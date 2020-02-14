const ReviewsBuilds = require("../../models/reviews_builds");
const Builds = require("../../models/builds");
const { del } = require("../../caching/redis");

const addBuildsReview = async input => {
  const newReview = await ReviewsBuilds.create(input);
  const reviewBuild = await Builds.findById(newReview.build);
  reviewBuild.reviews.push(newReview._id);
  await reviewBuild.save();
  await del("builds");
  return newReview;
};

module.exports = addBuildsReview;
