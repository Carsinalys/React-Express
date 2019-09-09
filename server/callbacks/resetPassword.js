const nodeMailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const User = require("../models/user");
const Refresh = require("../models/refresh");

exports.resetPassword = async (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, "../form.html"));
    const userRecord = await User.findOne({ mail: req.body.mail });
    const link = `<div style="background: #cccccc; padding: 20px;"><a href="https://witty-cow-57.localtunnel.me/api/v1.0/confirmPassword/${userRecord.localId}" target="_blank">conform email</a></div>`;
    console.log(link);
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
      to: "Cardinalys81@gmail.com", // list of receivers
      subject: "test", // Subject line
      text: "test", // plain text body
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
  } catch (err) {
    res.status(400).send({
      error: err,
      status: "fail",
      message: err
    });
  }
};

exports.confirmPassword = async (req, res) => {
  console.log(req.body);
};

exports.confirmPasswordMiddleware = async (req, res, next) => {
  const refreshRecord = {
    localId: req.params.id,
    expireAt: new Date().getTime() + 600000
  };
  await Refresh.create(refreshRecord);
  next();
};
