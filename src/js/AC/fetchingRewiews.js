import * as AC from "./ac";

export const getReviews = () => {
  return dispatch => {
    dispatch(startGetReviews());
    fetch(
      "https://pizzabuilder-e9539.firebaseio.com/pizzaBuildes/reviews.json?auth=jyVEHg4zePXslKNwI5GOR3yYw6TjiaZzWIQ01DS1",
      {
        method: "GET"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => dispatch(setReviews(data)))
      .catch(error => dispatch(getError(error)));
  };
};

export const startGetReviews = () => {
  return {
    type: AC.GET_REVIEWS_START
  };
};

export const setReviews = data => {
  return {
    type: AC.GET_REVIEWS_FINISH,
    payload: data
  };
};

export const getReviewsError = error => {
  return {
    type: AC.GET_REVIEWS_ERROR,
    payload: error
  };
};
