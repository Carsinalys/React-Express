const nodeMailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

exports.resetPassword = async (req, res) => {
  try {
    let data = fs
      .readFileSync(path.join(__dirname, "../form.html"))
      .toLocaleString();
    data.split("placeholder");
    const link =
      '<div style="background: #cccccc; padding: 20px;"><a href="https://funny-bulldog-26.localtunnel.me">\n' +
      '        "https://funny-bulldog-26.localtunnel.me"\n' +
      "      </a></div>";
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
  console.log(req.params.id);
};
