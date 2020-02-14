import * as AC from "./ac";
import { port } from "../../../portForFront";
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

// export const fetchLogOut = () => {
//   return dispatch => {
//     fetch(`${port}/api/v1.0/user/logOut`, {
//       method: "POST"
//     })
//         .then(res => res.json())
//         .then(res => {
//           dispatch(logOut());
//           console.log(res);
//         })
//         .catch(error => {
//           console.log(error);
//         });
//   };
// };
