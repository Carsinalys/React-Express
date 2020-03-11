import * as AC from "./ac";
import { port } from "../../../portForFront";
import { logOut } from "./index";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";
import { Dispatch } from "redux";

export const fetchResetPass = (mail: string) => {
  return (dispatch: Dispatch) => {
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
          console.log(data.error)
        }
        dispatch(authResetMOdalOff());
      })
      .catch(error => {
        dispatch(authResetMOdalOff());
        console.log(data);
      });
  };
};

export const fetchChangeEmail = (mail: string, id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(authResetMOdalOn());
    let data = {
      _id: id,
      data: { mail }
    };
    client!
      .mutate({ mutation: GQL.changeUserMail, variables: { input: data } })
      .then(res => {
        dispatch(authResetMOdalOff());
        dispatch(authResetInput());
        if (res.data.changeUserMail.error)
          dispatch(changeMailError(res.data.changeUserMail.error));
        else {
          dispatch(changeMailRedirect());
          dispatch(logOut());
        }
      })
      .then(() => client!.resetStore());
  };
};

export const changeMailError = (err: string) => {
  return {
    type: AC.CABINET_CHANGE_MAIL_ERROR,
    payload: err
  };
};

export const changeMailRedirect = () => {
  return {
    type: AC.CABINET_CHANGE_MAIL_CLEAR_ERROR
  };
};

export const authResetOnInput = (event: Event) => {
  return {
    type: AC.AUTH_RESET_ON_INPUT,
    payload: event
  };
};

export const authChangeMailOnInput = (event: Event) => {
  return {
    type: AC.AUTH_CHANGE_MAIL_ON_INPUT,
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

export const authResetInput = () => {
  return {
    type: AC.AUTH_RESET_INPUT
  };
};
