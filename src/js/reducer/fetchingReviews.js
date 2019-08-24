import * as AC from "../AC/ac";

const initState = {
  reviews: [],
  isLoading: false,
  getReviews: false,
  pagination: 0
};

const ordersReducer = (state = initState, action) => {
  switch (action.type) {
    case AC.GET_REVIEWS_START:
      return { ...state, isLoading: true };
    case AC.GET_REVIEWS_FINISH:
      return {
        ...state,
        isLoading: false,
        getReviews: true,
        reviews: action.payload,
        pagination: Math.ceil(Object.keys(action.payload).length / 5)
      };
    case AC.GET_REVIEWS_ERROR:
      console.log(action.error);
      return { ...state, error: true };
    default:
      return { ...state };
  }
};

export default ordersReducer;
