const Reviews = require("../models/reviews");
const Token = require("../models/token");

exports.getReviews = async (req, res) => {
  try {
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
      if (skip >= count) throw new Error("this page doesn't exsist");
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
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: "fail",
      message: err
    });
  }
};

exports.addReviews = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(400).send({
      status: "fail",
      message: err
    });
  }
};

exports.editReviews = async (req, res) => {
  try {
    let { _id, ...data } = req.body;
    data.edited = true;
    console.log(data);
    await Reviews.findByIdAndUpdate(_id, data);
    res.status(200).json({
      status: "success"
    });
  } catch (err) {
    res.status(400).send({
      status: "fail",
      message: err
    });
  }
};
