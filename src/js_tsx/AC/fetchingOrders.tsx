import * as AC from "./ac";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";
import { Dispatch } from "redux";
import { GetMoreOrders, Order } from "../interfaces/interfaces";

export const gerOrders = (num = 3) => {
  return (dispatch: Dispatch) => {
    dispatch(startGetOrders());
    const data = { count: num };
    client!
      .query({ query: GQL.getOrders, variables: { input: data } })
      .then(res => {
        dispatch(setOrders(res.data.GetOrders));
      });
  };
};

export const getMoreOrders = (count: number) => {
  return (dispatch: Dispatch) => {
    dispatch(startGetOrders());
    const data = { count };
    client!
      .query({ query: GQL.getMoreOrders, variables: { input: data } })
      .then(res => {
        dispatch(setMoreOrders(res.data.GetMoreOrders));
      });
  };
};

export const setMoreOrders = (data: GetMoreOrders) => {
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

export const setOrders = (data: Order) => {
  return {
    type: AC.GET_ORDERS_FINISH,
    payload: data
  };
};

export const getError = (error: string) => {
  return {
    type: AC.GET_ORDERS_ERROR,
    payload: error
  };
};
