import * as AC from "../AC/ac";
import { Action, Pizza, Review_Build } from '../interfaces/interfaces';
import { Reducer } from "redux";

interface InitState {
  isLoading: boolean,
  builds: Pizza[],
  reviews: Review_Build[]
}

const initState : InitState = {
  isLoading: false,
  builds: [],
  reviews: []
};

const reducer: Reducer<InitState, Action> = (state = initState, action) => {
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
