const Builds = require("../models/builds");

const resolvers = {
  Query: {
    getReadyPizza: async (_, { name }) => {
      const result = await Builds.findOne({ name }).populate("reviews");
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
    getBuilds: async (_, { input }) => {
      let builds;
      if (input) {
        if (input.minCost || input.maxCost) {
          const min = input.minCost || 0;
          const max = input.maxCost || 1000;
          builds = await Builds.find({ cost: { $gt: min, $lt: max } }).populate(
            "reviews"
          );
        }
      } else {
        builds = await Builds.find().populate("reviews");
      }
      return builds;
    }
  },
  Mutation: {
    createPizzaBuild: async (_, { input }) => {
      console.log(input);
      return input;
    }
  }
};

module.exports = resolvers;
