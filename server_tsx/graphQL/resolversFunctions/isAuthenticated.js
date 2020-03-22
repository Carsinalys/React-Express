const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const { promisify } = require("util");

const isAuth = async req => {
  try {
    let token;
    let cookie = req.headers.cookie
      .split(";")
      .filter(item => item.trim().startsWith("jwt="));
    if (cookie.length === 1) {
      token = cookie[0].split("jwt=").pop();
    }
    if (!token)
      throw new Error("You are not login, login to get access route.");
    const decoded = await promisify(jwt.verify)(token, process.env.SALT);
    const userRecord = await User.findById(decoded.id);
    if (!userRecord)
      throw new Error("The user belong this token is no longer exist");
    // check for changed password
    if (userRecord.changedPasswordAfter(decoded.iat))
      throw new Error("User recently changed password! Please log in again.");
    req.user = userRecord;
    return req;
  } catch (e) {
    console.log(e);
    return req;
  }
};

module.exports = isAuth;
