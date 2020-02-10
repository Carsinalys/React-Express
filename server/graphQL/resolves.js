const resolvers = {
  Query: {
    test: () => {
      return {
        name: "Flora",
        diameter: 35,
        price: 15
      };
    }
  }
};

module.exports = resolvers;
