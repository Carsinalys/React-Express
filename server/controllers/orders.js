const Orders = require("../models/order");
const cachAsync = require("../utils/catchErrors");
const factory = require("./handleFactory");

exports.getOrders = cachAsync(async (req, res) => {
  if (req.query.count !== undefined) {
    const count = await Orders.countDocuments();
    let response;
    if (count > req.query.count)
      response = await Orders.find().skip(count - req.query.count);
    else response = await Orders.find();
    res.status(200).json({
      status: "success",
      data: response,
      count
    });
  } else if (req.query.show !== undefined) {
    const countShow = await Orders.countDocuments();
    let responseShow;
    if (countShow > req.query.show)
      responseShow = await Orders.find().limit(+req.query.show);
    else responseShow = await Orders.find();
    res.status(200).json({
      status: "success",
      data: responseShow,
      countShow
    });
  } else if (
    req.query.page !== undefined &&
    req.query.limit !== undefined &&
    req.query.id !== undefined
  ) {
    const count = await Orders.countDocuments({ id: req.query.id });
    const page = req.query.page * 1;
    const limit = req.query.limit * 1;
    const skip = (page - 1) * limit;
    const collection = await Orders.find({ id: req.query.id })
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

exports.addOrder = factory.addOne(Orders);

exports.deleteOrder = factory.deleteOne(Orders);
