const Reviews = require("../models/reviews");

exports.getReviews = async (req, res) => {
  if (req.query.id) {
    let review = await Reviews.findOne({ _id: req.query.id });
    res.status(200).json({
      status: "success",
      data: review
    });
  } else {
    const data = await Reviews.find();
    res.status(200).json({
      status: "success",
      data: data
    });
  }
};

exports.addReviews = (req, res) => {
  console.log(req.body);
  Reviews.create(req.body);
  res.status(201).json({
    status: "success",
    data: req.body
  });
};

exports.editReviews = async (req, res) => {
  let { _id, ...data } = req.body;
  await Reviews.findByIdAndUpdate(_id, data, {
    edited: new Date().getDate()
  });
  res.status(200).json({
    status: "success"
  });
};
