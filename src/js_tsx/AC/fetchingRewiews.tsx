import * as AC from "./ac";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";
import { Dispatch } from "redux";
import {Review} from '../interfaces/interfaces';

export const getReviews = (param: string):any => {
  return (dispatch: Dispatch) => {
    dispatch(startGetReviews());
    const input = Object.fromEntries(
      param.split("&").map(item => item.split("="))
    );
    client!.query({ query: GQL.getReviews, variables: { input } }).then(res => {
        const { data, count } = res.data.getReviews;
        dispatch(setReviews(data, count));
    });
  };
};

export const addReview = (input: Review):any => {
  return (dispatch: Dispatch) => {
    client!
      .mutate({
        mutation: GQL.addReview,
        variables: { input }
      })
      .then(res => client!.resetStore());
  };
};

export const editReview = (id: string):any => {
  return (dispatch: Dispatch) => {
    client!
      .query({ query: GQL.getReviews, variables: { input: { id } } })
      .then(res => {
        const { data, count } = res.data.getReviews;
        dispatch(reviewsEditModeOn(data));
      });
  };
};

export const editReviewSend = (data: Review, id: string):any => {
  let sendData = { data, _id: id };
  return (dispatch: Dispatch) => {
    client!
      .mutate({
        mutation: GQL.editReview,
        variables: { input: sendData }
      })
      .then(res => {
        client!.resetStore();
      })
      .then(() => dispatch(reviewsEditModeOff()));
  };
};

export const deleteReview = (id: string):any => {
  let data = { _id: id };
  return (dispatch: Dispatch) => {
    dispatch(deleteReviewModalOn());
    client!
      .mutate({
        mutation: GQL.deleteReview,
        variables: { input: data }
      })
      .then(res => {
        dispatch(deleteReviewModalOff(res.data.deleteReview._id));
      })
      .then(() => client!.resetStore());
  };
};

export const startGetReviews = () => {
  return {
    type: AC.GET_REVIEWS_START
  };
};

export const setReviews = (data: Review[], count: number) => {
  return {
    type: AC.GET_REVIEWS_FINISH,
    payload: { data: data, count: count }
  };
};

export const getReviewsError = (error: string) => {
  return {
    type: AC.GET_REVIEWS_ERROR,
    payload: error
  };
};

export const reviewsEditModeOn = (data: Review) => {
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

export const deleteReviewModalOff = (id: string) => {
  return {
    type: AC.DELETE_REVIEW_MODAL_OFF,
    payload: id
  };
};
