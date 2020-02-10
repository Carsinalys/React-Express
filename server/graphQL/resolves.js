const Builds = require("../models/builds");

const resolvers = {
  Query: {
    getReadyPizza: async (_, args) => {
      const result = await Builds.findOne({ name: args.name }).populate(
        "reviews"
      );
      return {
        id: result._id,
        name: result.name,
        diameter: result.diameter,
        cost: result.cost,
        weight: result.weight,
        ingredients: result.ingredients,
        reviews: result.reviews
      };
    },
    getBuilds: async () => await Builds.find().populate("reviews")
  }
};

module.exports = resolvers;
