const Orders = require("../../models/order");

const getOrders = async input => {
  let result;
  let allCount;
  if (input.count !== undefined) {
    allCount = await Orders.countDocuments();
    let response;
    if (allCount > input.count)
      result = await Orders.find().skip(allCount - input.count);
    else result = await Orders.find();
  } else if (input.show !== undefined) {
    const countShow = await Orders.countDocuments();
    let responseShow;
    if (countShow > input.show)
      responseShow = await Orders.find().limit(+input.show);
    else responseShow = await Orders.find();
    result = {
      data: responseShow,
      countShow
    };
  } else if (
    input.page !== undefined &&
    input.limit !== undefined &&
    input.id !== undefined
  ) {
    allCount = await Orders.countDocuments({ id: input.id });
    const page = input.page * 1;
    const limit = input.limit * 1;
    const skip = (page - 1) * limit;
    result = await Orders.find({ id: input.id })
      .skip(skip)
      .limit(limit);
  } else {
    const orders = await Orders.find();

    result = {
      status: "success",
      data: orders
    };
  }
  return { result, allCount };
};

module.exports = getOrders;
