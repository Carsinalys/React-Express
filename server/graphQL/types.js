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

  type Order {
    id: ID!
    name: String!
    pizzaName: String!
    diameter: Int
    weight: Int
    cost: Float
    totalCost: Float
    phone: String!
    street: String!
    house: Int!
    flat: Int!
    pizzas: [Pizza]
    ingredients: Object
  }

  type User {
    id: String!
    createdAt: Date
    role: String
    photo: String
    phone: Float
    mail: String
    flat: Int
    house: Int
    street: String
  }

  type Review {
    id: ID!
    name: String!
    date: Date!
    rating: Int
    text: String!
    build: Pizza
    user: String
  }

  type UserAuthObj {
    expireAt: Int
    localId: String
    name: String
    photo: String
    error: String
    status: String
    message: String
  }

  type GetMoreOrders {
    orders: [Order]!
    count: Int!
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

  input UserSignInInput {
    mail: String!
    password: String!
    stayIn: Boolean!
  }

  input UserSignUpInput {
    mail: String!
    password: String!
  }

  input GetOrdersInput {
    count: Int
  }

  input BuildsReviewsInput {
    name: String!
    rating: String!
    text: String!
    build: String!
    user: String!
  }

  input GetUserInfoInput {
    id: String!
  }

  type Query {
    GetOrders(input: GetOrdersInput): [Order]!
    GetMoreOrders(input: GetOrdersInput): GetMoreOrders!
    SignUp(input: UserSignUpInput!): UserAuthObj!
    SignIn(input: UserSignInInput!): UserAuthObj!
    LogOut: String
    GetUserInfo(input: GetUserInfoInput!): User!
    getBuilds(input: PizzasInput): [Pizza]!
  }

  type Mutation {
    addBuildsReview(input: BuildsReviewsInput): Review!
    editBuildsReview(input: BuildsReviewsInput): Review!
    createPizzaBuild(input: NewPizzaInput!): Pizza!
  }
`;

module.exports = typeDefs;
