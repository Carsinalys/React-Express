const Reviews = require("../models/reviews");

exports.getReviews = async (req, res) => {
  const data = await Reviews.find();
  res.status(200).json({
    status: "success",
    data: data
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
