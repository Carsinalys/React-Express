exports.getReviews = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Get reviews"
  });
};

exports.addReviews = (req, res) => {
  res.status(200).json({
    status: "success",
    data: req.body
  });
};
