import * as AC from "./ac";
import { port } from "../../../portForFront";

export const fetchResetPass = mail => {
  return dispatch => {
    dispatch(authResetMOdalOn());
    let data = {
      mail: mail
    };
    fetch(`${port}/api/v1.0/resetPassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (!data.error) {
          dispatch(authResetMessage());
        }
        dispatch(authResetMOdalOff());
      })
      .catch(error => {
        dispatch(authResetMOdalOff());
        console.log(data);
      });
  };
};

export const authResetOnInput = event => {
  return {
    type: AC.AUTH_RESET_ON_INPUT,
    payload: event
  };
};

export const authResetMOdalOn = () => {
  return {
    type: AC.AUTH_RESET_MODAL_ON
  };
};

export const authResetMOdalOff = () => {
  return {
    type: AC.AUTH_RESET_MODAL_OFF
  };
};

export const authResetMessage = () => {
  return {
    type: AC.AUTH_RESET_MESSAGE
  };
};
