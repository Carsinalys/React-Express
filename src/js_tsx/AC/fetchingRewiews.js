import * as AC from "./ac";
import { port } from "../../../portForFront";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";

export const getReviews = param => {
  return dispatch => {
    dispatch(startGetReviews());
    const input = Object.fromEntries(
      param.split("&").map(item => item.split("="))
    );
    client.query({ query: GQL.getReviews, variables: { input } }).then(res => {
      if (res.error) dispatch(getError(error));
      else {
        const { data, count } = res.data.getReviews;
        dispatch(setReviews(data, count));
      }
    });
  };
};

export const addReview = input => {
  return dispatch => {
    client
      .mutate({
        mutation: GQL.addReview,
        variables: { input }
      })
      .then(res => client.resetStore());
  };
};

export const editReview = id => {
  return dispatch => {
    client
      .query({ query: GQL.getReviews, variables: { input: { id } } })
      .then(res => {
        if (res.error) dispatch(getReviewsError(error));
        else {
          const { data, count } = res.data.getReviews;
          dispatch(reviewsEditModeOn(data));
        }
      });
  };
};

export const editReviewSend = (data, id) => {
  let sendData = { data, _id: id };
  return dispatch => {
    client
      .mutate({
        mutation: GQL.editReview,
        variables: { input: sendData }
      })
      .then(res => {
        if (res.error) dispatch(getReviewsError(error));
        client.resetStore();
      })
      .then(() => dispatch(reviewsEditModeOff()));
  };
};

export const deleteReview = id => {
  let data = { _id: id };
  return dispatch => {
    dispatch(deleteReviewModalOn());
    client
      .mutate({
        mutation: GQL.deleteReview,
        variables: { input: data }
      })
      .then(res => {
        dispatch(deleteReviewModalOff(res.data.deleteReview._id));
        if (res.error) console.log(error);
      })
      .then(() => client.resetStore());
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

export const deleteReviewModalOn = () => {
  return {
    type: AC.DELETE_REVIEW_MODAL_ON
  };
};

export const deleteReviewModalOff = id => {
  return {
    type: AC.DELETE_REVIEW_MODAL_OFF,
    payload: id
  };
};
