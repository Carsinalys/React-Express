const cachAsync = require("../utils/catchErrors");
const AppError = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const Token = require("../models/token");
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
  }
  //if token is undefined
  if (!token)
    return next(
      new AppError("You are not login, login to get access to route.", 401)
    );
  //validate token and user
  const decoded = await promisify(jwt.verify)(token, process.env.SALT);
  console.log(decoded);
  next();
});
