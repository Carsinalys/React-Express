import * as AC from "../AC/ac";
import {Action} from '../interfaces/interfaces';
import { Reducer } from "redux";

interface InitState {
  safari: boolean;
}

const initState = {
  safari: false
};

const reducer: Reducer<InitState, Action> = (state = initState, action) => {
  switch (action.type) {
    case AC.CHECK_BROWSER:
      let checkBrowser;
      checkBrowser = !(
        navigator.userAgent.indexOf("Chrome") >= 0 ||
        navigator.userAgent.indexOf("Firefox") >= 0
      );
      return {
        ...state,
        safari: checkBrowser
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
