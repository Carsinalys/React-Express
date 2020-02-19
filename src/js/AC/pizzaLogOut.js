import * as AC from "./ac";
import client from "../graphql/client";
import gql from "graphql-tag";

export const logOut = () => {
  return {
    type: AC.LOG_OUT
  };
};

export const fetchLogOut = () => {
  return dispatch => {
    const logOutQuery = gql`
      {
        LogOut
      }
    `;
    client.query({ query: logOutQuery }).then(() => {
      dispatch(logOut());
    });
  };
};
