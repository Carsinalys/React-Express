const Reviews = require("../models/reviews");
const Token = require("../models/token");
const cachAsync = require("../utils/catchErrors");

exports.getReviews = cachAsync(async (req, res) => {
  if (req.query.id) {
    let review = await Reviews.findOne({ _id: req.query.id });
    res.status(200).json({
      status: "success",
      data: review
    });
  } else if (req.query.page) {
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
        message: "this page is doesn't exist"
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

exports.addReviews = cachAsync(async (req, res) => {
  const tokenRecord = await Token.find({ localId: req.body.id });
  if (
    tokenRecord.length > 0 &&
    tokenRecord[0].expireAt > new Date().getTime()
  ) {
    Reviews.create(req.body);
    res.status(201).json({
      status: "success",
      data: req.body
    });
  }
});

exports.editReviews = cachAsync(async (req, res) => {
  let { _id, ...data } = req.body;
  data.edited = true;
  await Reviews.findByIdAndUpdate(_id, data);
  res.status(200).json({
    status: "success"
  });
});
