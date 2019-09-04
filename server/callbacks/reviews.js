const Reviews = require("../models/reviews");

exports.getReviews = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Get reviews"
  });
};

exports.addReviews = (req, res) => {
  res.status(201).json({
    status: "success",
    data: req.body
  });
};

exports.editReviews = async (req, res) => {
  //await Reviews.findByIdAndUpdate(req.params.id, req.body, {
  // "new": true,
  // "runValidators": true
  // );
  res.status(200).json({
    status: "success",
    data: req.body
  });
};
