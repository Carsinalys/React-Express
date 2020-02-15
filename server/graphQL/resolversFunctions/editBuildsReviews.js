const ReviewsBuilds = require("../../models/reviews_builds");
const { del } = require("../../caching/redis");

const editBuildsRviews = async input => {
  const oldReview = await ReviewsBuilds.findOne({
    user: input.user,
    build: input.build
  });
  oldReview.name = input.name;
  oldReview.text = input.text;
  oldReview.rating = input.rating;
  oldReview.save();
  await del("builds");
  return oldReview;
};

module.exports = editBuildsRviews;
