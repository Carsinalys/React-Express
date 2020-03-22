const nodeMailer = require("nodemailer");

module.exports = (mail: string, data: string) => {
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  let mailOptions = {
    from: '"Pizza builder" <andrei.baranau@onthespotdev.com>', // sender address
    to: mail, // list of receivers
    subject: "Refresh password", // Subject line
    text: "", // plain text body
    html: data // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
  });
};
