import * as AC from "./ac";
import { port } from "../../../portForFront";

export const viewOrdersCabinet = query => {
  return dispatch => {
    dispatch(viewOrdersCabinetModalOn());
    fetch(`${port}/api/v1.0/orders${query}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(viewOrdersCabinetModalOff());
        dispatch(viewOrdesCabinetSet(data));
      })
      .catch(error => {
        dispatch(viewOrdersCabinetError());
        dispatch(viewOrdersCabinetError(error));
      });
  };
};

export const deleteOrder = (id, token) => {
  let data = {
    id: id
  };
  return dispatch => {
    dispatch(viewOrdersCabinetModalOn());
    fetch(`${port}/api/v1.0/orders`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(viewOrdersCabinetModalOff());
        dispatch(resetOrdersCabinet());
        dispatch(viewOrdersCabinet("?page=1&limit=4"));
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
