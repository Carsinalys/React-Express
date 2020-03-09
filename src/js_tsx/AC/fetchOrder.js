import * as AC from "./ac";
import { reset_build } from "./index";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";

export const onInput = event => {
  return {
    type: AC.SEND_ORDER_ON_INPUT,
    payload: event
  };
};

export const getInfoAddresCheckout = id => {
  return dispatch => {
    dispatch(toggleModalOn());
    client
      .query({ query: GQL.getUSerInfo, variables: { input: { id } } })
      .then(res => {
        dispatch(toggleModalOff());
        if (res.error) console.log(res.error);
        else dispatch(getAddressCheckout(res.data.GetUserInfo));
      });
  };
};

export const callApiAddOrderr = data => {
  if (data.totalCost) data.totalCost = data.totalCost.toString();
  return dispatch => {
    dispatch(toggleModalOn());
    client
      .mutate({ mutation: GQL.addOrder, variables: { input: data } })
      .then(res => {
        dispatch(toggleModalOff());
        if (res.error) dispatch(catchError(error));
        else {
          dispatch(resetState());
          dispatch(reset_build());
          dispatch(resetMultiBuild());
        }
      })
      .then(() => client.resetStore());
  };
};

export const resetMultiBuild = () => {
  return {
    type: AC.MULTIPLE_ORDER_RESET
  };
};

export const getAddressCheckout = data => {
  return {
    type: AC.SEND_ORDER_ADDRES,
    payload: data
  };
};

export const resetState = res => {
  return {
    type: AC.SEND_ORDER_RESET,
    payload: res
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

export const catchError = err => {
  return {
    type: AC.SEND_ORDER_ERROR,
    payload: err
  };
};
