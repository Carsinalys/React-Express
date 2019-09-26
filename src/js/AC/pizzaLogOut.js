import * as AC from "./ac";
import { port } from "../../../portForFront";

export const fetchLogOut = () => {
  return {
    type: AC.LOG_OUT
  };
};

export const logOut = () => {
  console.log("in logout");
  return dispatch => {
    console.log("in logout1", port);
    fetch(`${port}/api/v1.0/user/logOut`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        dispatch(fetchLogOut());
      })
      .catch(error => {
        console.log(error);
      });
  };
};
