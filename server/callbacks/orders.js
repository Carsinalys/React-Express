const Orders = require("../models/order");

exports.getOrders = async (req, res) => {
  try {
    if (req.query.count !== undefined) {
      let response = await getRandomOrders(req);
      res.status(200).json({
        status: "success",
        data: response
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
    res.status(400).send({
      status: "fail",
      message: err
    });
  }
};

exports.deleteOrder = async (req, res) => {
  //may use findbyIdAndDelete
  let order = await Orders.findByIdAndRemove(req.body.id);

  res.status(200).json({
    status: "success",
    data: "null"
  });
};

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
