import * as AC from "./ac";
import { logOut } from "./index";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";
import { Dispatch, Action } from "redux";
import { UserAuthObj, DispatchVoid } from "../interfaces/interfaces";
import { ThunkAction, ThunkDispatch } from 'redux-thunk';


export const authOnInput = (event: Event) => {
  return {
    type: AC.AUTH_ON_INPUT,
    payload: event
  };
};

export const authSignUp = (mail: string, pass: string) => {
  return (dispatch: Dispatch) => {
    dispatch(authModalOn());
    let data = {
      mail: mail,
      password: pass
    };
    client!
      .query({
        query: GQL.singUp,
        variables: { input: data }
      })
      .then(res => {
        client!.resetStore();
        return res;
      })
      .then(res => {
        dispatch(authModalOff());
        if (res.data.SignUp.error) dispatch(authError(res.data.SignUp.error));
        else {
          dispatch(authFinish(res.data.SignUp));
          dispatch(authClearInputs());
          dispatch(storeToken(res.data.SignUp));
          dispatch(getTokenFromCookie());
        }
      });
  };
};

export const authSignIn = (mail: string, pass: string, stayIn: string) => {
  return (dispatch: Dispatch) => {
    dispatch(authModalOn());
    let data = {
      mail: mail,
      password: pass,
      stayIn: stayIn
    };
    client!
      .query({ query: GQL.singIn, variables: { input: data } })
      .then(res => {
        client!.resetStore();
        return res;
      })
      .then(res => {
        dispatch(authModalOff());
        if (res.data.SignIn.error) dispatch(authError(res.data.SignIn.error));
        else {
          dispatch(authFinish(res.data.SignIn));
          dispatch(authClearInputs());
          dispatch(storeToken(res.data.SignIn));
          dispatch(getTokenFromCookie());
        }
      });
  };
};

export const authFinish = (data: UserAuthObj) => {
  return {
    type: AC.AUTH_SIGN_IN_FINISH,
    payload: data
  };
};

export const authError = (error: string) => {
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

export const storeToken = (data: UserAuthObj) => {
  return {
    type: AC.AUTH_STORE_AUTH_DATA,
    payload: data
  };
};

export const getTokenFromCookie = () => {
  return (dispatch: ThunkAction<void, {},undefined, Action>) => {
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
