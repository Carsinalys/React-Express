import * as AC from "./ac";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";

export const viewOrdersCabinet = query => {
  const input = Object.fromEntries(
    query.split("&").map(item => item.split("="))
  );
  return dispatch => {
    dispatch(viewOrdersCabinetModalOn());
    client
      .query({ query: GQL.getMoreOrders, variables: { input } })
      .then(res => {
        client.resetStore();
        return res;
      })
      .then(res => {
        dispatch(viewOrdersCabinetModalOff());
        if (res.error) dispatch(viewOrdersCabinetError(res.error));
        else dispatch(viewOrdesCabinetSet(res.data.GetMoreOrders));
      });
  };
};

export const deleteOrder = (id, localId) => {
  return dispatch => {
    dispatch(viewOrdersCabinetModalOn());
    client
      .mutate({ mutation: GQL.deleteOrder, variables: { input: { _id: id } } })
      .then(res => {
        dispatch(viewOrdersCabinetModalOff());
        if (res.error) dispatch(viewOrdersCabinetError(res.error));
        else {
          dispatch(resetOrdersCabinet());
          dispatch(viewOrdersCabinet(`page=1&limit=4&id=${localId}`));
        }
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

export const viewOrdesCabinetSet = data => {
  return {
    type: AC.CABINET_VIEW_ORDERS_SET,
    payload: data
  };
};

export const viewOrdersCabinetError = err => {
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
