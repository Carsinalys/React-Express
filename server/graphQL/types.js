const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Object
  scalar Date

  type Pizza {
    id: ID!
    name: String!
    diameter: Int!
    weight: Int!
    cost: Float!
    ingredients: Object
    reviews: [Review]
  }

  type Review {
    id: ID!
    name: String!
    date: Date!
    rating: Int
    text: String!
  }

  type Query {
    getReadyPizza(name: String!): Pizza
    getBuilds: [Pizza]!
  }
`;

module.exports = typeDefs;
