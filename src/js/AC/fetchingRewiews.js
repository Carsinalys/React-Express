import * as AC from "./ac";
import { port } from "../../../portForFront";

export const getReviews = param => {
  return dispatch => {
    dispatch(startGetReviews());
    fetch(`${port}/api/v1.0/reviews${param}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => dispatch(setReviews(data.data, data.count)))
      .catch(error => dispatch(getError(error)));
  };
};

export const editReview = id => {
  return dispatch => {
    fetch(`${port}/api/v1.0/reviews?id=${id.target.dataset.id}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(reviewsEditModeOn(data.data));
      })
      .catch(error => dispatch(getReviewsError(error)));
  };
};

export const editReviewSend = (data, id) => {
  let sendData = { ...data, _id: id };
  return dispatch => {
    fetch(`${port}/api/v1.0/reviews`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendData)
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatch(reviewsEditModeOff());
      })
      .catch(error => dispatch(getReviewsError(error)));
  };
};

export const startGetReviews = () => {
  return {
    type: AC.GET_REVIEWS_START
  };
};

export const setReviews = (data, count) => {
  return {
    type: AC.GET_REVIEWS_FINISH,
    payload: { data: data, count: count }
  };
};

export const getReviewsError = error => {
  return {
    type: AC.GET_REVIEWS_ERROR,
    payload: error
  };
};

export const reviewsEditModeOn = data => {
  return {
    type: AC.REVIEWS_EDIT_MODE_ON,
    payload: data
  };
};

export const reviewsEditModeOff = () => {
  return {
    type: AC.REVIEWS_EDIT_MODE_OFF
  };
};
