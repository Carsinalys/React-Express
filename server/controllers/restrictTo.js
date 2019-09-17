const AppError = require("../utils/errorHandler");

module.exports = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError("You don't have permition for this route", 403));
    }
    next();
  };
};
