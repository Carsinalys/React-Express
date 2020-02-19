import * as AC from "./ac";
import { port } from "../../../portForFront";
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
        dispatch(viewOrdersCabinetModalOff());
        if (res.error) dispatch(viewOrdersCabinetError(res.error));
        else dispatch(viewOrdesCabinetSet(res.data.GetMoreOrders));
      });
  };
};

export const deleteOrder = (id, localId) => {
  let data = {
    id: id
  };
  return dispatch => {
    dispatch(viewOrdersCabinetModalOn());
    fetch(`${port}/api/v1.0/orders`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(viewOrdersCabinetModalOff());
        dispatch(resetOrdersCabinet());
        dispatch(viewOrdersCabinet(`?page=1&limit=4&id=${localId}`));
      })
      .catch(error => {
        dispatch(viewOrdersCabinetModalOff());
        dispatch(viewOrdersCabinetError(error));
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
