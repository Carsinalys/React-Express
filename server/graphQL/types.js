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
    build: Pizza
  }

  input PizzasInput {
    minCost: Float
    maxCost: Float
  }

  input NewPizzaInput {
    name: String!
    diameter: Int!
    weight: Int!
    cost: Float!
    ingredients: Object
    reviews: Object
  }

  type Query {
    getReadyPizza(name: String!): Pizza
    getBuilds(input: PizzasInput): [Pizza]!
  }

  type Mutation {
    createPizzaBuild(input: NewPizzaInput!): Pizza!
  }
`;

module.exports = typeDefs;
