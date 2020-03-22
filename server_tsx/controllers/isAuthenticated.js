const cachAsync = require("../utils/catchErrors");
const AppError = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { promisify } = require("util");

exports.isAuthenticated = cachAsync(async (req, res, next) => {
  let token;
  //check and get passed token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }
  //if token is undefined
  if (!token)
    return next(
      new AppError("You are not login, login to get access route.", 401)
    );
  //check token and user
  const decoded = await promisify(jwt.verify)(token, process.env.SALT);
  const userRecord = await User.findById(decoded.id);
  if (!userRecord)
    return next(
      new AppError("The user belong this token is no longer exist", 401)
    );
  // check for changed password
  if (userRecord.changedPasswordAfter(decoded.iat))
    return next(
      new AppError("User recently chnged password! Please log in again.", 401)
    );
  req.user = userRecord;
  next();
});
