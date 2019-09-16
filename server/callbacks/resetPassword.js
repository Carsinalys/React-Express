const nodeMailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const User = require("../models/user");
const Refresh = require("../models/refresh");
const cachAsync = require("../utils/catchErrors");
const bcrypt = require("bcryptjs");

exports.resetPassword = cachAsync(async (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "../form.html"));
  const userRecord = await User.findOne({ mail: req.body.mail });
  const link = `<div style="background: #cccccc; padding: 20px;"><a href="https://pizza-builder-app.herokuapp.com/api/v1.0/confirmPassword/${userRecord.localId}" target="_blank">confirm email</a></div>`;
  const oldRefreshRecord = await Refresh.find({
    localId: userRecord.localId
  });
  if (oldRefreshRecord.length === 0) {
    const refreshRecord = {
      localId: userRecord.localId,
      expireAt: new Date().getTime() + 600000
    };
    await Refresh.create(refreshRecord);
  } else {
    await Refresh.findOneAndUpdate(
      { localId: userRecord.localId },
      { $set: { expireAt: new Date().getTime() + 600000 } },
      { new: true },
      (err, doc) => {
        if (err) throw new Error(err);
        //console.log(doc);
      }
    );
  }
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "andrei.baranau@onthespotdev.com",
      pass: "Cardinalys"
    }
  });
  let mailOptions = {
    from: '"Pizza builder" <andrei.baranau@onthespotdev.com>', // sender address
    to: req.body.mail, // list of receivers
    subject: "Refresh password", // Subject line
    text: "", // plain text body
    html: data + link // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
    res.render("index");
  });
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
  const refreshRecord = await Refresh.findOne({ localId: req.body.id });
  const userRecord = await User.findOne({ localId: req.body.id });
  if (new Date().getTime() < refreshRecord.expireAt) {
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
