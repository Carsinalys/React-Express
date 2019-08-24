import * as AC from "./ac";

export const fetchResetPass = mail => {
  return dispatch => {
    dispatch(authResetMOdalOn());
    let data = {
      requestType: "PASSWORD_RESET",
      email: mail
    };
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDyUaUeFIdEP-t40XognUX4nOFU5X2Uy8s",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
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
