import * as AC from "./ac";
import { port } from "../../../portForFront";

export const setCabinetOnInput = event => {
  return {
    type: AC.CABINET_SET_INFO_ON_INPUT,
    payload: event
  };
};

export const setCabinetFetchOrder = (data, token, allGood, id) => {
  const sendData = { ...data, id: id };
  console.log("send cabinet", sendData, allGood);
  return dispatch => {
    if (allGood) {
      dispatch(setCabinetToggleModal());
      fetch(`${port}/api/v1.0/user/setAddress`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`
        },
        body: JSON.stringify(sendData)
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
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
