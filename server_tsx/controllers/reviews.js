const Reviews = require("../models/reviews");
const cachAsync = require("../utils/catchErrors");
const factory = require("./handleFactory");

exports.getReviews = cachAsync(async (req, res) => {
  if (req.query.id) {
    let review = await Reviews.findOne({ _id: req.query.id });
    res.status(200).json({
      status: "success",
      data: review
    });
  } else if (req.query.page && req.query.limit) {
    const allReviews = await Reviews.find();
    const count = await Reviews.countDocuments();
    const page = req.query.page * 1;
    const limit = req.query.limit * 1;
    const skip = (page - 1) * limit;
    const collection = await Reviews.find()
      .skip(skip)
      .limit(limit);
    if (skip >= count) {
      return res.status(400).json({
        status: "fail",
        message: "this page is doesn't exist",
        count: count,
        data: []
      });
    }
    res.status(200).json({
      status: "success",
      data: collection,
      count: count
    });
  } else {
    const data = await Reviews.find();
    res.status(200).json({
      status: "success",
      data: data
    });
  }
});

exports.deleteReview = factory.deleteOne(Reviews);
exports.addReviews = factory.addOne(Reviews);
exports.editReviews = factory.updateOne(Reviews);
