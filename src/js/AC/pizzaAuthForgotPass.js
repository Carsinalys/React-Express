import * as AC from "./ac";
import { port } from "../../../portForFront";
import { logOut } from "./index";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";

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

export const fetchChangeEmail = (mail, id) => {
  return dispatch => {
    dispatch(authResetMOdalOn());
    let data = {
      _id: id,
      data: { mail }
    };
    client
      .mutate({ mutation: GQL.changeUserMail, variables: { input: data } })
      .then(res => {
        console.log(error);
        dispatch(authResetMOdalOff());
        dispatch(authResetInput());
        if (res.error) {
          console.log(error);
          ispatch(authResetMessage());
        } else dispatch(logOut());
      })
      .then(() => client.resetStore());
  };
};

// export const fetchChangeEmail = (mail, id, token) => {
//   return dispatch => {
//     dispatch(authResetMOdalOn());
//     let data = {
//       id: id,
//       mail: mail
//     };
//     console.log(mail, id, token);
//     fetch(`${port}/api/v1.0/changeMail`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${token}`
//       },
//       body: JSON.stringify(data)
//     })
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//         if (!data.error) {
//           dispatch(authResetMessage());
//         }
//         dispatch(logOut());
//         dispatch(authResetMOdalOff());
//         dispatch(authResetInput());
//       })
//       .catch(error => {
//         dispatch(authResetMOdalOff());
//         dispatch(authResetInput());
//       });
//   };
// };

export const authResetOnInput = event => {
  return {
    type: AC.AUTH_RESET_ON_INPUT,
    payload: event
  };
};

export const authChangeMailOnInput = event => {
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

export const authResetMessage = () => {
  return {
    type: AC.AUTH_RESET_MESSAGE
  };
};

export const authResetInput = () => {
  return {
    type: AC.AUTH_RESET_INPUT
  };
};
