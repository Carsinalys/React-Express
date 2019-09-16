const AppError = require("../utils/errorHandler");

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
};
const sendErrorProd = (err, res) => {
  if (err.isOptional) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    console.error(err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong..."
    });
  }
};
const hadleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};
const hadleDuplicateFieldsDB = err => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value.`;
  return new AppError(message, 400);
};
const hadleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);
  const message = `Invalid input error. ${errors.join(". ")}`;
  return new AppError(message, 400);
};

const handleExpiredToken = err =>
  new AppError("Token has expired, please log in again.", 401);

const hndleJsonWebTokenError = err =>
  new AppError("Invalid token, please log in again.", 401);

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  err.message = err.message || "Internal server error";
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    if (error.name === "CastError") error = hadleCastErrorDB(error);
    if (error.code === 11000) error = hadleDuplicateFieldsDB(error);
    if (error.name === "ValidationError") error = hadleValidationErrorDB(error);
    if (error.name === "JsonWebTokenError")
      error = hndleJsonWebTokenError(error);
    if (error.name === "TokenExpiredError") error = handleExpiredToken(error);
    sendErrorProd(error, res);
  }
};
