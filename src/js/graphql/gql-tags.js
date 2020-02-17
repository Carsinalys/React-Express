import gql from "graphql-tag";

export const getBuilds = gql`
  {
    getBuilds {
      id
      name
      diameter
      weight
      cost
      ingredients
      reviews {
        id
        name
        date
        rating
        text
        build {
          id
        }
        user
      }
    }
  }
`;

export const addBuildsReview = gql`
  mutation addBuildsReview($input: BuildsReviewsInput) {
    addBuildsReview(input: $input) {
      id
      name
      date
      rating
      text
      user
      build {
        id
        name
      }
    }
  }
`;

export const editBuildsReview = gql`
  mutation editBuildsReview($input: BuildsReviewsInput) {
    editBuildsReview(input: $input) {
      id
      name
      date
      rating
      text
      user
      build {
        id
        name
      }
    }
  }
`;

export const getOrders = gql`
  query getOrders($input: GetOrdersInput) {
    GetOrders(input: $input) {
      id
      name
      pizzaName
      diameter
      weight
      cost
      totalCost
      phone
      street
      house
      flat
      pizzas {
        name
        diameter
        weight
        cost
        ingredients
      }
      ingredients
    }
  }
`;

export const getMoreOrders = gql`
  query getMoreOrders($input: GetOrdersInput) {
    GetMoreOrders(input: $input) {
      orders {
        id
        name
        pizzaName
        diameter
        weight
        cost
        totalCost
        phone
        street
        house
        flat
        pizzas {
          name
          diameter
          weight
          cost
          ingredients
        }
        ingredients
      }
      count
    }
  }
`;

export const singUp = gql`
  query singUp($input: UserSignUpInput!) {
    SignUp(input: $input) {
      expireAt
      localId
      name
      photo
      error
      status
      message
    }
  }
`;

export const singIn = gql`
  query singIn($input: UserSignInInput!) {
    SignIn(input: $input) {
      expireAt
      localId
      name
      photo
      error
      status
      message
    }
  }
`;

export const getUSerInfo = gql`
  query getUserInfo($input: GetUserInfoInput!) {
    GetUserInfo(input: $input) {
      id
      createdAt
      role
      photo
      phone
      mail
      flat
      house
      street
    }
  }
`;

export const getReviews = gql`
  query getReviews($input: ReviewsInput) {
    getReviews(input: $input) {
      data {
        _id
        name
        rating
        text
        date
        id
      }
      count
    }
  }
`;

export const addReview = gql`
  mutation addReview($input: MutationReviewsInput) {
    addReview(input: $input) {
      _id
      date
      name
      rating
      text
      id
      edited
    }
  }
`;
