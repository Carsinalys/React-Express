import * as AC from "./ac";

export const viewOrdersCabinet = () => {
  return dispatch => {
    dispatch(viewOrdersCabinetModalOn());
    fetch(`/api/v1.0/orders`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(viewOrdersCabinetModalOff());
        dispatch(viewOrdesCabinetSet(data.data));
      })
      .catch(error => {
        dispatch(viewOrdersCabinetError());
        dispatch(viewOrdersCabinetError(error));
      });
  };
};

export const deleteOrder = (id, token, userId) => {
  let data = {
    id: id,
    token: token,
    iserId: userId
  };
  return dispatch => {
    dispatch(viewOrdersCabinetModalOn());
    fetch(`/api/v1.0/orders`, {
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
        dispatch(viewOrdersCabinet());
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
