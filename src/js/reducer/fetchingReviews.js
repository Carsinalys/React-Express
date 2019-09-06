import * as AC from "../AC/ac";

const initState = {
  reviews: [],
  isLoading: false,
  getReviews: false,
  pagination: 0,
  editMode: false,
  editReviewData: {},
  err: null
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
      console.log("reviews error", action.error);
      return { ...state, error: true };
    case AC.REVIEWS_EDIT_MODE_ON:
      return {
        ...state,
        editMode: true,
        editReviewData: action.payload
      };
    case AC.REVIEWS_EDIT_MODE_OFF:
      return {
        ...state,
        editMode: false,
        editReviewData: {}
      };
    default:
      return { ...state };
  }
};

export default ordersReducer;
