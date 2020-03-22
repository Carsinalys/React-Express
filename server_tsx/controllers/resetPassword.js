const fs = require("fs");
const path = require("path");
const User = require("../models/user");
const cachAsync = require("../utils/catchErrors");
const AppError = require("../utils/errorHandler");
const Mailer = require("../utils/mailer");
const crypto = require("crypto");

exports.resetPassword = cachAsync(async (req, res, next) => {
  const data = fs.readFileSync(path.join(__dirname, "../form.html"));
  const userRecord = await User.findOne({ mail: req.body.mail });
  if (!userRecord)
    return next(new AppError("User with this email is doesn`t exist", 404));
  const resetToken = userRecord.createPasswordResetToken();
  await userRecord.save({ validateBeforeSave: false });
  const link = `<div style="background: #cccccc; padding: 20px;"><a href="https://pizza-builder-app.herokuapp.com/api/v1.0/confirmPassword/${resetToken}" target="_blank">confirm email</a></div>`;
  Mailer(req.body.mail, data + link);
  res.status(200).json({
    status: "ok",
    data: req.body
  });
});

exports.confirmPassword = cachAsync(async (req, res, next) => {
  let data = fs
    .readFileSync(path.join(__dirname, "../refreshPage.html"))
    .toString();
  data = data.replace("replace", req.params.id);
  res.status(200).send(data);
});

exports.confirmRefresh = cachAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.body.id)
    .digest("hex");
  const userRecord = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExrires: { $gt: Date.now() }
  });
  if (!userRecord) {
    next(new AppError("link is expired or invalid", 400));
  }
  userRecord.password = req.body.password;
  userRecord.passwordResetToken = undefined;
  userRecord.passwordResetExrires = undefined;
  userRecord.passwordChanged = true;
  await userRecord.save();
  res.location("/").redirect("/");
});
