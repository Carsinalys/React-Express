import * as AC from "../AC/ac";

const initState = {
  reviews: [],
  isLoading: false,
  getReviews: false,
  pagination: 0,
  editMode: false,
  editReviewData: {},
  err: null,
  modal: false
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
        reviews: action.payload.data,
        pagination: Math.ceil(action.payload.count / 5)
      };
    case AC.GET_REVIEWS_ERROR:
      console.log("reviews error", action.error);
      return { ...state, error: true };
    case AC.REVIEWS_EDIT_MODE_ON:
      return {
        ...state,
        editMode: true,
        editReviewData: action.payload[0]
      };
    case AC.REVIEWS_EDIT_MODE_OFF:
      return {
        ...state,
        editMode: false,
        editReviewData: {}
      };
    case AC.DELETE_REVIEW_MODAL_ON:
      return {
        ...state,
        modal: true
      };
    case AC.DELETE_REVIEW_MODAL_OFF:
      const newReviews = state.reviews.filter(
        item => item._id !== action.payload
      );
      return {
        ...state,
        modal: false,
        reviews: newReviews
      };
    default:
      return { ...state };
  }
};

export default ordersReducer;
