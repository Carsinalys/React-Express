import * as AC from "./ac";
import { port } from "../../../portForFront";

export const logOut = () => {
  return {
    type: AC.LOG_OUT
  };
};

export const fetchLogOut = () => {
  console.log("in logout");
  return dispatch => {
    console.log("in logout1", port);
    fetch(`${port}/api/v1.0/user/logOut`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(res => {
        dispatch(logOut());
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };
};
