import * as AC from "./ac";
import { port } from "../../../portForFront";

export const gerOrders = () => {
  return dispatch => {
    dispatch(startGetOrders());
    fetch(`${port}/api/v1.0/orders?count=3`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(setOrders(data.data));
      })
      .catch(error => dispatch(getError(error)));
  };
};

export const startGetOrders = () => {
  return {
    type: AC.GET_ORDERS_START
  };
};

export const setOrders = data => {
  return {
    type: AC.GET_ORDERS_FINISH,
    payload: data
  };
};

export const getError = error => {
  return {
    type: AC.GET_ORDERS_ERROR,
    payload: error
  };
};
