const Orders = require("../models/order");

exports.getOrders = async (req, res) => {
  try {
    if (req.query.count != undefined) {
      let arr = [];
      while (arr.length < req.query.count) {
        const count = await Orders.countDocuments();
        const random = Math.floor(Math.random() * count);
        const randomOrder = await Orders.findOne().skip(random);
        if (arr.filter(item => item._id === randomOrder._id).length == 0)
          arr.push(randomOrder);
      }
      res.status(200).json({
        status: "success",
        data: arr
      });
    } else {
      const orders = await Orders.find();

      res.status(200).json({
        status: "success",
        data: orders
      });
    }
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
  //may use findbyIdAndDelete
  await Orders.find(req.body).deleteOne();

  res.status(204).json({
    status: "success",
    data: "null"
  });
};
