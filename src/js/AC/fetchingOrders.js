import * as AC from "./ac";
import { port } from "../../../portForFront";
import client from "../graphql/client";
import gql from "graphql-tag";

export const gerOrders = (num = 3) => {
  return dispatch => {
    dispatch(startGetOrders());
    const data = { count: num };
    const getOrders = gql`
      query getOrders($input: GetOrdersInput) {
        GetOrders(input: $input) {
          id
          name
          pizzaName
          diameter
          weight
          cost
          totalCost
          phone
          street
          house
          flat
          pizzas {
            name
            diameter
            weight
            cost
            ingredients
          }
          ingredients
        }
      }
    `;
    client.query({ query: getOrders, variables: { input: data } }).then(res => {
      console.log(res);
      if (res.error) dispatch(getError(res.error));
      else dispatch(setOrders(res.data.GetOrders));
    });
  };
};

// export const gerOrders = () => {
//   return dispatch => {
//     dispatch(startGetOrders());
//     fetch(`${port}/api/v1.0/orders?count=3`, {
//       method: "GET"
//     })
//         .then(response => {
//           return response.json();
//         })
//         .then(data => {
//           dispatch(setOrders(data.data));
//         })
//         .catch(error => dispatch(getError(error)));
//   };
// };

export const getMoreOrders = count => {
  return dispatch => {
    dispatch(startGetOrders());
    const data = { count };
    const getOrders = gql`
      query getMoreOrders($input: GetOrdersInput) {
        GetMoreOrders(input: $input) {
          orders {
            id
            name
            pizzaName
            diameter
            weight
            cost
            totalCost
            phone
            street
            house
            flat
            pizzas {
              name
              diameter
              weight
              cost
              ingredients
            }
            ingredients
          }
          count
        }
      }
    `;
    client.query({ query: getOrders, variables: { input: data } }).then(res => {
      console.log(res);
      if (res.error) dispatch(getError(res.error));
      else dispatch(setMoreOrders(res.data.GetMoreOrders));
    });
  };
};

// export const getMoreOrders = count => {
//   return dispatch => {
//     dispatch(startGetOrders());
//     fetch(`${port}/api/v1.0/orders?show=${count}`, {
//       method: "GET"
//     })
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         console.log(data);
//         dispatch(setMoreOrders(data));
//       })
//       .catch(error => dispatch(getError(error)));
//   };
// };

export const setMoreOrders = data => {
  return {
    type: AC.GET_MORE_ORDERS_FINISH,
    payload: data.orders,
    count: data.count
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

export const setPhoto = data => {
  return {
    type: AC.GET_ORDERS_FINISH_PHOTO,
    payload: data
  };
};

export const gerUserPhotoAfterChange = id => {
  return dispatch => {
    dispatch(startGetOrders());
    fetch(`${port}/api/v1.0/user/getInfo?id=${id}`, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        dispatch(setPhoto(data.data));
      })
      .catch(error => dispatch(getError(error)));
  };
};
