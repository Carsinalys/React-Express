const Reviews = require("../../models/reviews");

const reviewsRegular = async input => {
  let response = { data: [], count: 0 };
  if (input.id) {
    const review = await Reviews.findOne({ _id: input.id });
    response.data = [review];
    response.count = 1;
  } else if (input.page && input.limit) {
    const allReviews = await Reviews.find();
    const count = await Reviews.countDocuments();
    const page = input.page * 1;
    const limit = input.limit * 1;
    const skip = (page - 1) * limit;
    const collection = await Reviews.find()
      .skip(skip)
      .limit(limit)
      .lean();
    if (skip >= count)
      response = {
        data: [],
        count
      };
    else
      response = {
        data: collection,
        count
      };
  } else response.data = await Reviews.find();
  return response;
};

module.exports = reviewsRegular;
