import * as AC from "./ac";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";
import { Dispatch } from "redux";
import { Order } from "../interfaces/interfaces";

export const viewOrdersCabinet = (query: string):any => {
  const input = Object.fromEntries(
    query.split("&").map(item => item.split("="))
  );
  return (dispatch: Dispatch) => {
    dispatch(viewOrdersCabinetModalOn());
    client!
      .query({ query: GQL.getMoreOrders, variables: { input } })
      .then(res => {
        client!.resetStore();
        return res;
      })
      .then(res => {
        dispatch(viewOrdersCabinetModalOff());
        dispatch(viewOrdesCabinetSet(res.data.GetMoreOrders));
      });
  };
};

export const deleteOrder = (id: string, localId: string) => {
  return (dispatch: Dispatch) => {
    dispatch(viewOrdersCabinetModalOn());
    client!
      .mutate({ mutation: GQL.deleteOrder, variables: { input: { _id: id } } })
      .then(res => {
        dispatch(viewOrdersCabinetModalOff());
        dispatch(resetOrdersCabinet());
        dispatch(viewOrdersCabinet(`page=1&limit=4&id=${localId}`));
      });
  };
};

export const viewOrdersCabinetModalOn = () => {
  return {
    type: AC.CABINET_VIEW_ORDERS_MODAL_ON
  };
};

export const viewOrdersCabinetModalOff = () => {
  return {
    type: AC.CABINET_VIEW_ORDERS_MODAL_OFF
  };
};

export const viewOrdesCabinetSet = (data: Order[]) => {
  return {
    type: AC.CABINET_VIEW_ORDERS_SET,
    payload: data
  };
};

export const viewOrdersCabinetError = (err: string) => {
  return {
    type: AC.CABINET_VIEW_ORDERS_ERROR,
    payload: err
  };
};

export const resetOrdersCabinet = () => {
  return {
    type: AC.CABINET_VIEW_ORDERS_RESET
  };
};
