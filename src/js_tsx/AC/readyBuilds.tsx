import * as AC from "../AC/ac";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";
import { Dispatch } from "redux";
import {Pizza, Review, BuildsReviewsInput} from '../interfaces/interfaces';

export const getBuilds = ():any => {
  return (dispatch: Dispatch) => {
    dispatch(getBuildsModalOn());
    client!.query({ query: GQL.getBuilds }).then(res => {
      dispatch(getBuildsModalOf());
      dispatch(getBuildsFinish(res.data.getBuilds));
    });
  };
};

export const getBuildsFinish = (data: Pizza[]) => {
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

export const setCurReviewsToShow = (data: Review[]) => {
  return {
    type: AC.READY_BUILDS_SET_CUR_REVIEWS,
    payload: data
  };
};

export const sendReview = (data: BuildsReviewsInput) => {
  data.rating = data.rating.toString();
  return (dispatch: Dispatch) => {
    dispatch(getBuildsModalOn());
    client!
      .mutate({
        mutation: GQL.addBuildsReview,
        variables: { input: data }
      })
      .then(res => {
        dispatch(getBuildsModalOf());
        dispatch(getBuilds());
      })
      .then(()=>client!.resetStore());
  };
};

export const sendEditedReview = (data: BuildsReviewsInput) => {
  data.rating = data.rating.toString();
  return (dispatch: Dispatch) => {
    dispatch(getBuildsModalOn());
    client!
      .mutate({
        mutation: GQL.editBuildsReview,
        variables: { input: data }
      })
      .then(res => {
        dispatch(getBuildsModalOf());
        dispatch(getBuilds());
      })
      .then(()=>client!.resetStore());
  };
};
