import * as AC from "./ac";
import client from "../graphql/client";
import gql from "graphql-tag";
import { Dispatch } from "redux";

export const logOut = () => {
  return {
    type: AC.LOG_OUT
  };
};

export const fetchLogOut = ():any => {
  return (dispatch: Dispatch) => {
    const logOutQuery = gql`
      {
        LogOut
      }
    `;
    client!.query({ query: logOutQuery }).then(() => {
      dispatch(logOut());
    });
  };
};
