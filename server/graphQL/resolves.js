const Builds = require("../models/builds");

const resolvers = {
  Query: {
    getReadyPizza: async (_, args) => {
      const result = await Builds.findOne({ name: args.name }).populate(
        "reviews"
      );
      console.log(result);
      return {
        id: result._id,
        name: result.name,
        diameter: result.diameter,
        price: result.cost,
        weight: result.weight,
        ingredients: result.ingredients,
        reviews: result.reviews
      };
    }
  }
};

module.exports = resolvers;
