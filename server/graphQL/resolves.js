const Builds = require("../models/builds");
const BuldReviews = require("../models/reviews_builds");
const User = require("../models/user");
const SignIn = require("./resolversFunctions/singIn");
const SignUp = require("./resolversFunctions/signUp");
const GetOrdegs = require("./resolversFunctions/getOrders");
const { set, get } = require("../caching/redis");
const addBuildsReviews = require("./resolversFunctions/addBuildsReviews");

const resolvers = {
  Query: {
    SignUp: async (_, { input }, { req, res }) => {
      const { result, newToken } = await SignUp(input);
      if (result.expireAt) {
        let time = input.stayIn ? 604800 : 3600;
        res.cookie("jwt", newToken, {
          expires: new Date(Date.now() + time * 1000),
          httpOnly: true,
          secure: req.secure
        });
      }
      return result;
    },
    SignIn: async (_, { input }, { req, res }) => {
      const { result, newToken } = await SignIn(input);
      if (result.expireAt) {
        let time = input.stayIn ? 604800 : 3600;
        res.cookie("jwt", newToken, {
          expires: new Date(Date.now() + time * 1000),
          httpOnly: true,
          secure: req.secure
        });
      }
      return result;
    },
    LogOut: async (_, __, { res }) => {
      res.cookie("jwt", "logingOut", {
        expires: new Date(Date.now() + 10000),
        httpOnly: true
      });
      return "";
    },
    GetOrders: async (_, { input }) => {
      const { result } = await GetOrdegs(input);
      return result;
    },
    GetMoreOrders: async (_, { input }) => {
      const { result, allCount } = await GetOrdegs(input);
      if (!input.count) throw new Error("No count");
      const orders = {
        orders: result,
        count: allCount
      };
      return orders;
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
      let builds = await get("builds");
      if (!builds) {
        if (input) {
          if (input.minCost || input.maxCost) {
            const min = input.minCost || 0;
            const max = input.maxCost || 1000;
            builds = await Builds.find({ cost: { $gt: min, $lt: max } });
          }
        } else {
          builds = await Builds.find();
        }
        await set("builds", JSON.stringify(builds));
      }
      return JSON.parse(builds);
    }
  },
  Mutation: {
    addBuildsReview: async (_, { input }) => {
      const review = await addBuildsReviews(input);
      return review;
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
    // user: async review => {
    //   const user = await User.findById(review.user);
    //   return (review.user = user);
    // }
  }
};

module.exports = resolvers;
