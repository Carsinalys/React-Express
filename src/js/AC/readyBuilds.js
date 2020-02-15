import * as AC from "../AC/ac";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";

export const getBuilds = () => {
  return dispatch => {
    dispatch(getBuildsModalOn());
    client.query({ query: GQL.getBuilds }).then(res => {
      if (res.error) console.log(error);
      else {
        dispatch(getBuildsModalOf());
        dispatch(getBuildsFinish(res.data.getBuilds));
      }
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

export const setCurReviewsToShow = data => {
  return {
    type: AC.READY_BUILDS_SET_CUR_REVIEWS,
    payload: data
  };
};

export const sendReview = data => {
  data.rating = data.rating.toString();
  return dispatch => {
    dispatch(getBuildsModalOn());
    client
      .mutate({
        mutation: GQL.addBuildsReview,
        variables: { input: data },
        update: (cache, payload) => {
          const { getBuilds } = cache.readQuery({
            query: GQL.getBuilds
          });
          getBuilds.forEach(item => {
            if (item.name === payload.data.addBuildsReview.build.name) {
              item.reviews.push(payload.data.addBuildsReview);
            }
          });
          cache.writeQuery({
            query: GQL.getBuilds,
            data: { getBuilds }
          });
        }
      })
      .then(res => {
        if (res.error) console.log(error);
        else {
          dispatch(getBuildsModalOf());
          dispatch(getBuilds());
        }
      });
  };
};

export const sendEditedReview = data => {
  data.rating = data.rating.toString();
  return dispatch => {
    dispatch(getBuildsModalOn());
    client
      .mutate({
        mutation: GQL.editBuildsReview,
        variables: { input: data },
        update: (cache, payload) => {
          const { getBuilds } = cache.readQuery({
            query: GQL.getBuilds
          });
          getBuilds.forEach(item => {
            if (item.name === payload.data.editBuildsReview.build.name) {
              if (item.reviews.length) {
                item.reviews.forEach(review => {
                  if (review.user === payload.data.editBuildsReview.user) {
                    review.rating = payload.data.editBuildsReview.rating;
                    review.text = payload.data.editBuildsReview.text;
                    review.name = payload.data.editBuildsReview.name;
                  }
                });
              }
            }
          });
          cache.writeQuery({
            query: GQL.getBuilds,
            data: { getBuilds }
          });
        }
      })
      .then(res => {
        if (res.error) console.log(error);
        else {
          dispatch(getBuildsModalOf());
          dispatch(getBuilds());
        }
      });
  };
};
