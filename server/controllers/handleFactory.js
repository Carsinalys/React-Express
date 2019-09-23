const cachAsync = require("../utils/catchErrors");
const AppError = require("../utils/errorHandler");

exports.deleteOne = Model =>
  cachAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndRemove(req.body.id);

    if (!doc)
      return next(new AppError("Record with this id is doesn`t exist.", 404));

    res.status(200).json({
      status: "success",
      data: "null"
    });
  });

exports.addOne = Model =>
  cachAsync(async (req, res) => {
    Model.create(req.body);
    res.status(201).json({
      status: "success",
      data: req.body
    });
  });

exports.updateOne = Model =>
  cachAsync(async (req, res, next) => {
    let { _id, ...data } = req.body;
    data.edited = true;
    const record = await Model.findByIdAndUpdate(_id, data, {
      new: true,
      runValidators: true
    });

    if (!record) return next(new AppError("No document with that id.", 404));

    res.status(200).json({
      status: "success",
      data: record
    });
  });
