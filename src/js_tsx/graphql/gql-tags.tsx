import gql from "graphql-tag";

export const getBuilds = gql`
  {
    getBuilds {
      _id
      id
      name
      diameter
      weight
      cost
      ingredients
      reviews {
        _id
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
  mutation addBuildsReview($input: BuildsReviewsInput!) {
    addBuildsReview(input: $input) {
      _id
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
  mutation editBuildsReview($input: BuildsReviewsInput!) {
    editBuildsReview(input: $input) {
      _id
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
      _id
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
        _id
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
      _id
      name
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
  mutation addReview($input: MutationReviewsInput!) {
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

export const editReview = gql`
  mutation editReview($input: EditReviewsInput!) {
    editReview(input: $input) {
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

export const deleteReview = gql`
  mutation deleteReview($input: EditReviewsInput!) {
    deleteReview(input: $input) {
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

export const addOrder = gql`
  mutation addOrder($input: OrderInput!) {
    addOrder(input: $input) {
      _id
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
      id
    }
  }
`;

export const deleteOrder = gql`
  mutation deleteOrder($input: DeleteOrderInput!) {
    deleteOrder(input: $input) {
      _id
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
      id
    }
  }
`;

export const changeUserInfo = gql`
  mutation changeUserInfo($input: ChangeUserInfo!) {
    changeUserInfo(input: $input) {
      _id
      createdAt
      name
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

export const changeUserMail = gql`
  mutation changeUserMail($input: ChangeUserInfo!) {
    changeUserMail(input: $input) {
      data {
        _id
        createdAt
        role
        name
        photo
        phone
        mail
        flat
        house
        street
      }
      error
    }
  }
`;

export const changeUserPhoto = gql`
  mutation changeUserPhoto($input: ChangeUserInfo!) {
    changeUserPhoto(input: $input) {
      _id
      createdAt
      role
      photo
      name
      phone
      mail
      flat
      house
      street
    }
  }
`;

export const getMessagesRoom = gql`
  query getMessagesRoom($input: GetMessagesInput!) {
    getMessagesRoom(input: $input) {
      _id
      createAt
      id
      message
      room
    }
  }
`;

export const getRooms = gql`
  {
    getRooms {
      _id
      createAt
      name
    }
  }
`;

export const addRoom = gql`
  mutation addRoomInput($input: AddRoomInput!) {
    addRoomInput(input: $input) {
      _id
      createAt
      name
    }
  }
`;

export const deleteMessageRoom = gql`
  mutation deleteMessageInput($input: DeleteMessageInput!) {
    deleteMessageInput(input: $input) {
      _id
      createAt
      id
      message
      room
    }
  }
`;
