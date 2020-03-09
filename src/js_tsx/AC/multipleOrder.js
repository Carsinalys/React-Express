import * as AC from "./ac";
import { reset_build } from "./index";

export const multipleAdd = data => {
  return dispatch => {
    dispatch(runMultipleAdd(data));
    dispatch(reset_build());
  };
};

export const runMultipleAdd = data => {
  return {
    type: AC.MULTIPLE_ORDER_ADD,
    payload: data
  };
};

export const multiPizzaTheSame = data => {
  return {
    type: AC.MULTIPLE_ORDER_THE_SAME,
    payload: data
  };
};

export const deleteMultiOrder = num => {
  return {
    type: AC.MULTIPLE_ORDER_DELETE,
    payload: num
  };
};

export const resetMultiPizza = () => {
  return {
    type: AC.MULTIPLE_ORDER_RESET
  };
};
