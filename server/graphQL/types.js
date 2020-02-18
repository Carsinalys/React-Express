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
    reviews: [Review_Build]
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

  type Review_Build {
    id: ID!
    name: String!
    date: Date!
    rating: Int
    text: String!
    build: Pizza
    user: String
  }

  type Review {
    _id: String!
    date: Date!
    name: String!
    rating: Int!
    text: String!
    id: String!
    edited: Boolean
  }

  type ReviewAnswer {
    data: [Review]!
    count: Int
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

  input ReviewsInput {
    page: String
    limit: String
    id: String
  }

  input MutationReviewsInput {
    name: String!
    rating: Int!
    text: String!
    id: String!
    date: Date
    edited: Boolean
  }

  input EditReviewsInput {
    data: MutationReviewsInput
    _id: String!
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
    getReviews(input: ReviewsInput): ReviewAnswer
  }

  type Mutation {
    addBuildsReview(input: BuildsReviewsInput): Review_Build!
    editBuildsReview(input: BuildsReviewsInput): Review_Build!
    addReview(input: MutationReviewsInput): Review!
    editReview(input: EditReviewsInput): Review!
    deleteReview(input: EditReviewsInput): Review
  }
`;

module.exports = typeDefs;
