import * as AC from "./ac";
import { reset_build } from "./index";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";
import { Dispatch } from "redux";
import { OrderInput, User } from '../interfaces/interfaces';

export const onInput = (event: Event) => {
  return {
    type: AC.SEND_ORDER_ON_INPUT,
    payload: event
  };
};

export const getInfoAddresCheckout = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(toggleModalOn());
    client!
      .query({ query: GQL.getUSerInfo, variables: { input: { id } } })
      .then(res => {
        dispatch(toggleModalOff());
        dispatch(getAddressCheckout(res.data.GetUserInfo));
      });
  };
};

export const callApiAddOrderr = (data: OrderInput) => {
  if (data.totalCost) data.totalCost = data.totalCost.toString();
  return (dispatch: Dispatch) => {
    dispatch(toggleModalOn());
    client!
      .mutate({ mutation: GQL.addOrder, variables: { input: data } })
      .then(res => {
        dispatch(toggleModalOff());
        dispatch(resetState());
        dispatch(reset_build());
        dispatch(resetMultiBuild());
      })
      .then(() => client!.resetStore());
  };
};

export const resetMultiBuild = () => {
  return {
    type: AC.MULTIPLE_ORDER_RESET
  };
};

export const getAddressCheckout = (data: User) => {
  return {
    type: AC.SEND_ORDER_ADDRES,
    payload: data
  };
};

export const resetState = () => {
  return {
    type: AC.SEND_ORDER_RESET
  };
};

export const toggleModalOn = () => {
  return {
    type: AC.SEND_ORDER_MODAL_ON
  };
};

export const toggleModalOff = () => {
  return {
    type: AC.SEND_ORDER_MODAL_OFF
  };
};

export const catchError = (err: string) => {
  return {
    type: AC.SEND_ORDER_ERROR,
    payload: err
  };
};
