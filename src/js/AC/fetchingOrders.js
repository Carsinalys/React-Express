import * as AC from "./ac";

// export const gerOrders = () => {
//   return dispatch => {
//     dispatch(startGetOrders());
//     fetch("/api/v1.0/orders", {
//       method: "GET"
//     })
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//         dispatch(setOrders(data));
//       })
//       .catch(error => dispatch(getError(error)));
//   };
// };

export const gerOrders = () => {
  return dispatch => {
    dispatch(startGetOrders());
    fetch(
      "https://pizzabuilder-e9539.firebaseio.com/pizzaBuildes/order-history.json?auth=jyVEHg4zePXslKNwI5GOR3yYw6TjiaZzWIQ01DS1",
      {
        method: "GET"
      }
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatch(setOrders(data));
      })
      .catch(error => dispatch(getError(error)));
  };
};

export const startGetOrders = () => {
  return {
    type: AC.GET_ORDERS_START
  };
};

export const setOrders = data => {
  return {
    type: AC.GET_ORDERS_FINISH,
    payload: data
  };
};

export const getError = error => {
  return {
    type: AC.GET_ORDERS_ERROR,
    payload: error
  };
};
