import * as AC from "./ac";
import { logOut } from "./index";
import { port } from "../../../portForFront";

export const authOnInput = event => {
  return {
    type: AC.AUTH_ON_INPUT,
    payload: event
  };
};

export const authSignUp = (mail, pass) => {
  return dispatch => {
    dispatch(authModalOn());
    let data = {
      mail: mail,
      password: pass
    };
    fetch(`${port}/api/v1.0/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          dispatch(authError(res));
          dispatch(authModalOff());
        } else {
          dispatch(authFinish(res));
          dispatch(authClearInputs());
          dispatch(storeToken(res));
          dispatch(authModalOff());
          dispatch(getTokenFromCookie());
        }
      })
      .catch(error => {
        dispatch(authError(error));
        dispatch(authModalOff());
      });
  };
};

export const authSignIn = (mail, pass, stayIn) => {
  return dispatch => {
    dispatch(authModalOn());
    let data = {
      mail: mail,
      password: pass,
      stayIn: stayIn
    };
    fetch(`${port}/api/v1.0/user/authentication`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          dispatch(authError(res));
          dispatch(authModalOff());
        } else {
          dispatch(authFinish(res));
          dispatch(authClearInputs());
          dispatch(storeToken(res));
          dispatch(authModalOff());
          dispatch(getTokenFromCookie());
        }
      })
      .catch(error => {
        dispatch(authModalOff());
        dispatch(authError(error));
      });
  };
};

export const authFinish = data => {
  return {
    type: AC.AUTH_SIGN_IN_FINISH,
    payload: data
  };
};

export const authError = error => {
  return {
    type: AC.AUTH_SIGN_IN_ERROR,
    payload: error
  };
};

export const authModalOn = () => {
  return {
    type: AC.AUTH_MODAL_ON
  };
};

export const authModalOff = () => {
  return {
    type: AC.AUTH_MODAL_OFF
  };
};

export const authClearInputs = () => {
  return {
    type: AC.AUTH_CLEAR_INPUTS
  };
};

export const storeToken = data => {
  return {
    type: AC.AUTH_STORE_TOKEN_STAY_OUT,
    payload: data
  };
};

export const getTokenFromCookie = () => {
  return dispatch => {
    dispatch(checkCookie());
    let remainingTime =
      new Date().getTime() < localStorage.expiresAt
        ? +localStorage.expiresAt - new Date().getTime()
        : 0;
    setTimeout(() => {
      dispatch(logOut());
    }, remainingTime);
  };
};

export const checkCookie = () => {
  return {
    type: AC.AUTH_GET_TOKEN_FROM_COOKIE
  };
};
