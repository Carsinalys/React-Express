const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Pizza {
    name: String!
    diameter: Int!
    price: Int!
  }
  type Query {
    test: Pizza
  }
`;

module.exports = typeDefs;
