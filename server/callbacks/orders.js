const Orders = require("../models/order");

exports.getOrders = async (req, res) => {
  try {
    const orders = await Orders.find();
    const count = await Orders.count((err, val) => console.log(val));

    res.status(200).json({
      status: "success",
      conut: count,
      data: orders
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.addOrder = async (req, res) => {
  try {
    const newOrder = await Orders.create(req.body);

    res.status(201).json({
      status: "success",
      data: newOrder
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.deleteOrder = async (req, res) => {
  //may use findbyId
  await Orders.find(req.body).deleteOne();

  res.status(204).json({
    status: "success",
    data: "null"
  });
};
