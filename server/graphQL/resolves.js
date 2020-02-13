const Builds = require("../models/builds");
const BuldReviews = require("../models/reviews_builds");
const SignIn = require("./resolversFunctions/singIn");

const resolvers = {
  Query: {
    SignIn: async (_, { input }, { req, res }) => {
      const { result, newToken } = await SignIn(input);
      if (input.stayIn) {
        let time = input.stayIn ? 604800 : 3600;
        res.cookie("jwt", newToken, {
          expires: new Date(Date.now() + time * 1000),
          httpOnly: true,
          secure: req.secure
        });
      }
      return result;
    },
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
          builds = await Builds.find({ cost: { $gt: min, $lt: max } });
        }
      } else {
        builds = await Builds.find();
      }
      return builds;
    }
  },
  Mutation: {
    createPizzaBuild: async (_, { input }) => {
      console.log(input);
      return input;
    }
  },
  Pizza: {
    reviews: async pizza => {
      const reviews = await BuldReviews.find()
        .where("_id")
        .in(pizza.reviews);
      return (pizza.reviews = [...reviews]);
    }
  },
  Review: {
    build: async review => {
      const build = await Builds.findById(review.build);
      return (review.build = build);
    }
  }
};

module.exports = resolvers;
