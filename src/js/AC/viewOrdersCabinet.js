import * as AC from "./ac";

export const viewOrdersCabinet = (token, id, orders) => {
  return dispatch => {
    if (Object.keys(orders).length > 0) {
      dispatch(viewOrdesCabinetSet(orders));
    } else {
      dispatch(viewOrdersCabinetModalOn());
      fetch(
        `https://pizzabuilder-e9539.firebaseio.com/pizzaBuildes/order-history.json?auth=${token}&orderBy="id"&equalTo="${id}"`,
        {
          method: "GET"
        }
      )
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
    }
  };
};

export const deleteOrder = (id, token, userId) => {
  return dispatch => {
    dispatch(viewOrdersCabinetModalOn());
    fetch(
      `https://pizzabuilder-e9539.firebaseio.com/pizzaBuildes/order-history/${id}.json?auth=${token}"`,
      {
        method: "DELETE"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(viewOrdersCabinetModalOff());
        dispatch(resetOrdersCabinet());
        dispatch(refreshOrdersCabinetAfterDelete(token, userId));
      })
      .catch(error => {
        dispatch(viewOrdersCabinetModalOff());
        dispatch(viewOrdersCabinetError(error));
      });
  };
};

export const refreshOrdersCabinetAfterDelete = (token, id) => {
  return dispatch => {
    dispatch(viewOrdersCabinetModalOn());
    fetch(
      `https://pizzabuilder-e9539.firebaseio.com/pizzaBuildes/order-history.json?auth=${token}&orderBy="id"&equalTo="${id}"`,
      {
        method: "GET"
      }
    )
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

export const refreshOrdersCabinet = (token, id, order) => {
  return dispatch => {
    dispatch(resetOrdersCabinet());
    dispatch(viewOrdersCabinet(token, id, order));
  };
};
