import * as AC from "./ac";
import { logOut } from "./index";

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
      email: mail,
      password: pass,
      returnSecureToken: true
    };
    fetch(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDyUaUeFIdEP-t40XognUX4nOFU5X2Uy8s",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
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
    dispatch(storeTokenStayIn(stayIn));
    dispatch(authModalOn());
    let data = {
      email: mail,
      password: pass,
      returnSecureToken: true
    };
    fetch(
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDyUaUeFIdEP-t40XognUX4nOFU5X2Uy8s",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
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

export const storeTokenStayIn = stayIn => {
  return {
    type: AC.AUTH_STORE_TOKEN_STAY_IN,
    payload: stayIn
  };
};

export const getTokenFromCookie = () => {
  return dispatch => {
    if (localStorage.getItem("refresh")) {
      dispatch(refreshToken(localStorage.getItem("refresh")));
      setInterval(() => {
        dispatch(refreshToken(localStorage.getItem("refresh")));
      }, 3600000);
    } else {
      dispatch(checkCookie());
      let remainingTime =
        new Date().getTime() < localStorage.expiresIn
          ? +localStorage.expiresIn - new Date().getTime()
          : 0;
      setTimeout(() => {
        dispatch(logOut());
      }, remainingTime);
    }
  };
};

export const checkCookie = () => {
  return {
    type: AC.AUTH_GET_TOKEN_FROM_COOKIE
  };
};

export const getTokenFromFirebase = data => {
  return {
    type: AC.AUTH_GET_TOKET_FROM_FIREBASE,
    payload: data
  };
};

export const refreshToken = refreshToken => {
  return dispatch => {
    dispatch(authModalOn());
    let data = {
      grant_type: "refresh_token",
      refresh_token: refreshToken
    };
    fetch(
      "https://securetoken.googleapis.com/v1/token?key=AIzaSyDyUaUeFIdEP-t40XognUX4nOFU5X2Uy8s",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          dispatch(authModalOff());
          dispatch(authError(data));
        } else {
          dispatch(getTokenFromFirebase(data));
          dispatch(authModalOff());
        }
      })
      .catch(error => {
        dispatch(authError(error));
        dispatch(authModalOff());
      });
  };
};
