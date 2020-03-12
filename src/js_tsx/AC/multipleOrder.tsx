import * as AC from "./ac";
import { reset_build } from "./index";
import { Dispatch } from "redux";
import { Pizza, Order } from '../interfaces/interfaces';

export const multipleAdd = (data: Pizza) => {
  return (dispatch: Dispatch) => {
    dispatch(runMultipleAdd(data));
    dispatch(reset_build());
  };
};

export const runMultipleAdd = (data: Pizza) => {
  return {
    type: AC.MULTIPLE_ORDER_ADD,
    payload: data
  };
};

export const multiPizzaTheSame = (data: Order) => {
  return {
    type: AC.MULTIPLE_ORDER_THE_SAME,
    payload: data
  };
};

export const deleteMultiOrder = (num: number) => {
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