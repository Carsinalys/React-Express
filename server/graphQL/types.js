const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Object
  scalar Date

  type Pizza {
    name: String!
    diameter: Int!
    weight: Int!
    cost: Float!
    ingredients: Object
    reviews: [Review_Build]
    id: String
  }

  type Order {
    _id: ID!
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
    id: String
  }

  type User {
    _id: ID
    createdAt: Date
    role: String
    photo: String
    phone: Float
    mail: String
    flat: Int
    house: Int
    street: String
    name: String
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
    _id: ID!
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

  type ChangeMailResponse {
    data: User
    error: String
  }

  type Message {
    _id: ID!
    createAt: Date!
    message: String!
    room: String!
    id: String
  }

  type Room {
    _id: ID!
    createAt: Date
    name: String
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
    page: String
    limit: String
    id: String
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

  input PizzaInput {
    name: String!
    diameter: Int!
    weight: Int!
    cost: Float!
    ingredients: Object
    reviews: Object
    id: String
  }

  input OrderInput {
    name: String!
    pizzaName: String!
    diameter: Int
    weight: Int
    cost: String
    totalCost: String
    phone: Float!
    street: String!
    house: Int!
    flat: Int!
    pizzas: [PizzaInput]
    ingredients: Object
    id: String!
  }

  input DeleteOrderInput {
    _id: String!
  }

  input DeleteMessageInput {
    _id: String!
  }

  input ChangeUserInfoFields {
    flat: String
    house: String
    name: String
    street: String
    phone: String
    mail: String
    photo: String
  }

  input ChangeUserInfo {
    data: ChangeUserInfoFields
    _id: String
  }

  input GetMessagesInput {
    room: String!
  }

  input AddRoomInput {
    name: String!
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
    getMessagesRoom(input: GetMessagesInput!): [Message]
    getRooms: [Room]
  }

  type Mutation {
    addBuildsReview(input: BuildsReviewsInput!): Review_Build!
    editBuildsReview(input: BuildsReviewsInput!): Review_Build!
    addReview(input: MutationReviewsInput!): Review!
    editReview(input: EditReviewsInput!): Review!
    deleteReview(input: EditReviewsInput!): Review!
    addOrder(input: OrderInput!): Order!
    deleteOrder(input: DeleteOrderInput!): Order!
    changeUserInfo(input: ChangeUserInfo!): User!
    changeUserMail(input: ChangeUserInfo!): ChangeMailResponse
    changeUserPhoto(input: ChangeUserInfo!): User!
    addRoomInput(input: AddRoomInput!): Room
    deleteMessageInput(input: DeleteMessageInput!): Message
  }
`;

module.exports = typeDefs;
