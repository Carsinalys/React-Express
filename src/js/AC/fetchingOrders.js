import * as AC from "./ac";
import { port } from "../../../portForFront";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";

export const gerOrders = (num = 3) => {
  return dispatch => {
    dispatch(startGetOrders());
    const data = { count: num };
    client
      .query({ query: GQL.getOrders, variables: { input: data } })
      .then(res => {
        if (res.error) dispatch(getError(res.error));
        else dispatch(setOrders(res.data.GetOrders));
      });
  };
};

export const getMoreOrders = count => {
  return dispatch => {
    dispatch(startGetOrders());
    const data = { count };
    client
      .query({ query: GQL.getMoreOrders, variables: { input: data } })
      .then(res => {
        if (res.error) dispatch(getError(res.error));
        else dispatch(setMoreOrders(res.data.GetMoreOrders));
      });
  };
};

export const setMoreOrders = data => {
  return {
    type: AC.GET_MORE_ORDERS_FINISH,
    payload: data.orders,
    count: data.count
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
    client
      .query({ query: GQL.getUSerInfo, variables: { input: { id } } })
      .then(res => {
        if (res.error) dispatch(getError(res.error));
        else dispatch(setPhoto(res.data.GetUserInfo));
      });
  };
};
