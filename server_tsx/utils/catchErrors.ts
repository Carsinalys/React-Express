const catchAsync = fn => {
  return (req: Express.Request, res: Express.Response, next) => {
    fn(req, res, next).catch(next);
  };
};
module.exports = catchAsync;
