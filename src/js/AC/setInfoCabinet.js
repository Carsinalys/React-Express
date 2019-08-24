import * as AC from "./ac";

export const setCabinetOnInput = event => {
  return {
    type: AC.CABINET_SET_INFO_ON_INPUT,
    payload: event
  };
};

export const deleteCabinetAddres = (data, token, allGood, id) => {
  console.log("delete cabinet", data, token, allGood, id);
  return dispatch => {
    if (allGood) {
      dispatch(setCabinetToggleModal());
      fetch(
        `https://pizzabuilder-e9539.firebaseio.com/pizzaBuildes/users/${id}.json?auth=${token}`,
        {
          method: "DELETE"
        }
      )
        .then(res => {
          console.log(res);
          dispatch(setCabinetToggleModal());
          dispatch(setCabinetFetchOrder(data, token, allGood, id));
        })
        .catch(error => {
          dispatch(setCabinetToggleModal());
          dispatch(setCabinetCatchError(error));
        });
    }
  };
};

export const setCabinetFetchOrder = (data, token, allGood, id) => {
  console.log("send cabinet", data, token, allGood, id);
  return dispatch => {
    if (allGood) {
      dispatch(setCabinetToggleModal());
      fetch(
        `https://pizzabuilder-e9539.firebaseio.com/pizzaBuildes/users/${id}.json?auth=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "aplication/json"
          },
          body: JSON.stringify(data)
        }
      )
        .then(res => {
          dispatch(setCabinetToggleModal());
          dispatch(setCabinetResetState(res));
        })
        .catch(error => {
          dispatch(setCabinetToggleModal());
          dispatch(setCabinetCatchError(error));
        });
    }
  };
};

export const setCabinetResetState = res => {
  return {
    type: AC.CABINET_SET_INFO_RESET,
    payload: res
  };
};

export const setCabinetToggleModal = () => {
  return {
    type: AC.CABINET_SET_INFO_TOGGLE_MODAL
  };
};

export const setCabinetCatchError = err => {
  return {
    type: AC.CABINET_SET_INFO_ERROR,
    payload: err
  };
};
