exports.getOrders = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Get orders"
  });
};

exports.addOrder = (req, res) => {
  res.status(200).json({
    status: "success",
    data: req.body
  });
};

exports.deleteOrder = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "null"
  });
};
