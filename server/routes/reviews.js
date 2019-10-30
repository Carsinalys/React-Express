const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../controllers/isAuthenticated");
const builds = require("../controllers/builds");
const reviews = require("../controllers/reviews");
const restrictTo = require("../controllers/restrictTo");

router
  .route("/api/v1.0/builds/addReview")
  .post(isAuthenticated, builds.addReview)
  .patch(isAuthenticated, builds.editreview);

router
  .route("/api/v1.0/reviews")
  .get(reviews.getReviews)
  .post(isAuthenticated, reviews.addReviews)
  .patch(isAuthenticated, reviews.editReviews)
  .delete(isAuthenticated, restrictTo("user", "admin"), reviews.deleteReview);

module.exports = router;
