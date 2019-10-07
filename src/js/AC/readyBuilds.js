import { port } from "../../../portForFront";
import * as AC from "../AC/ac";

export const getBuilds = () => {
  return dispatch => {
    dispatch(getBuildsModalOn());
    fetch(`${port}/api/v1.0/builds`, {
      method: "GET"
    })
      .then(data => data.json())
      .then(data => {
        console.log(data.data);
        dispatch(getBuildsModalOf());
        dispatch(getBuildsFinish(data.data));
      })
      .catch(error => {
        dispatch(getBuildsModalOf());
        console.log(error);
      });
  };
};

export const getBuildsFinish = data => {
  return {
    type: AC.READY_BUILDS_GET_FINISH,
    payload: data
  };
};

export const getBuildsModalOn = () => {
  return {
    type: AC.READY_BUILDS_MODAL_ON
  };
};

export const getBuildsModalOf = () => {
  return {
    type: AC.READY_BUILDS_MODAL_OFF
  };
};

export const sendReview = data => {
  return dispatch => {
    dispatch(getBuildsModalOn());
    fetch(`${port}/api/v1.0/builds/addReview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(data => data.json())
      .then(data => {
        dispatch(getBuildsModalOf());
        dispatch(getBuilds());
      })
      .catch(error => {
        dispatch(getBuildsModalOf());
        console.log(error);
      });
  };
};
