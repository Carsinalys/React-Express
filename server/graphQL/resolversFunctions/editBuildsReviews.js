const ReviewsBuilds = require("../../models/reviews_builds");
const { del } = require("../../caching/redis");

const editBuildsRviews = async input => {
  const oldReview = await ReviewsBuilds.findOne({
    user: req.body.user,
    build: req.body.build
  });
  oldReview.name = req.body.name;
  oldReview.text = req.body.text;
  oldReview.rating = req.body.rating;
  oldReview.save();
  await del("builds");
  return oldReview;
};

module.exports = editBuildsRviews;
