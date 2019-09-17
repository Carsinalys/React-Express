// const nodeMailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const User = require("../models/user");
//const Refresh = require("../models/refresh");
const cachAsync = require("../utils/catchErrors");
const bcrypt = require("bcryptjs");
const AppError = require("../utils/errorHandler");
const Mailer = require("../utils/mailer");

exports.resetPassword = cachAsync(async (req, res, next) => {
  console.log(req.body);
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

exports.confirmPassword = cachAsync(async (req, res) => {
  let data = fs
    .readFileSync(path.join(__dirname, "../refreshPage.html"))
    .toString();
  data = data.replace("replace", req.params.id);
  res.status(200).send(data);
});

exports.confirmRefresh = cachAsync(async (req, res) => {
  // const refreshRecord = await Refresh.findOne({ passwordResetToken: req.body.id });
  const userRecord = await User.findOne({ passwordResetToken: req.body.id });
  if (new Date().getTime() < userRecord.passwordResetExrires) {
    let newPass = await bcrypt.hash(req.body.password, 12);
    User.updateOne(
      userRecord,
      { $set: { password: newPass, passwordChangeAt: new Date().getTime() } },
      { new: true },
      (err, doc) => {
        if (err) throw new Error(err);
        res.location("/").redirect("/");
        //console.log(doc);
      }
    );
  } else {
    res.status(400).json({
      error: "link is expired",
      status: "fail"
    });
  }
});
