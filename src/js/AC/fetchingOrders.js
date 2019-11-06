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

export const getMoreOrders = count => {
  return dispatch => {
    dispatch(startGetOrders());
    fetch(`${port}/api/v1.0/orders?show=${count}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(setMoreOrders(data));
      })
      .catch(error => dispatch(getError(error)));
  };
};

export const setMoreOrders = data => {
  return {
    type: AC.GET_MORE_ORDERS_FINISH,
    payload: data.data,
    count: data.countShow
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

export const setPhoto = data => {
  return {
    type: AC.GET_ORDERS_FINISH_PHOTO,
    payload: data
  };
};

export const gerUserPhotoAfterChange = id => {
  return dispatch => {
    dispatch(startGetOrders());
    fetch(`${port}/api/v1.0/user/getInfo?id=${id}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(setPhoto(data.data));
      })
      .catch(error => dispatch(getError(error)));
  };
};
