import * as AC from "../AC/ac";

const initState = {
  isLoading: false,
  builds: [],
  reviews: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case AC.READY_BUILDS_SET_CUR_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case AC.READY_BUILDS_MODAL_OFF:
      return {
        ...state,
        isLoading: false
      };
    case AC.READY_BUILDS_MODAL_ON:
      return {
        ...state,
        isLoading: true
      };
    case AC.READY_BUILDS_GET_FINISH:
      return {
        ...state,
        builds: action.payload
      };
    default:
      return { ...state };
  }
};

export default reducer;
