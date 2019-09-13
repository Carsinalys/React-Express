const Orders = require("../models/order");
const Token = require("../models/token");
const cachAsync = require("../utils/catchErrors");

exports.getOrders = cachAsync(async (req, res) => {
  if (req.query.count !== undefined) {
    let response = await getRandomOrders(req);
    res.status(200).json({
      status: "success",
      data: response
    });
  } else if (req.query.page !== undefined && req.query.limit !== undefined) {
    const count = await Orders.countDocuments();
    const page = req.query.page * 1;
    const limit = req.query.limit * 1;
    const skip = (page - 1) * limit;
    const collection = await Orders.find()
      .skip(skip)
      .limit(limit);
    if (skip >= count) {
      return res.status(404).json({
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
    const orders = await Orders.find();

    res.status(200).json({
      status: "success",
      data: orders
    });
  }
});

exports.addOrder = cachAsync(async (req, res) => {
  const tokenRecord = await Token.find({ token: req.body.token });
  if (
    tokenRecord.length > 0 &&
    tokenRecord[0].expireAt > new Date().getTime()
  ) {
    const newOrder = await Orders.create(req.body);
    res.status(201).json({
      status: "success",
      data: newOrder
    });
  }
});

exports.deleteOrder = cachAsync(async (req, res) => {
  await Orders.findByIdAndRemove(req.body.id);
  res.status(200).json({
    status: "success",
    data: "null"
  });
});

async function getRandomOrders(req) {
  let arr = [];
  const count = await Orders.countDocuments();
  do {
    let random = Math.floor(Math.random() * count);
    let randomOrder = await Orders.findOne().skip(random);
    if (
      arr.filter(item => item._id.toString() === randomOrder._id.toString())
        .length === 0
    ) {
      arr.push(randomOrder);
    } else {
    }
  } while (arr.length < req.query.count);
  return arr;
}
