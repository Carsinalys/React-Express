import * as AC from "../AC/ac";

const initState = {
  orders: {},
  isLoaded: false,
  getOrders: false,
  isLoading: false,
  error: false
};

const ordersReducer = (state = initState, action) => {
  switch (action.type) {
    case AC.GET_ORDERS_START:
      return { ...state, isLoading: true };
    case AC.GET_ORDERS_FINISH:
      return {
        ...state,
        isLoading: false,
        getOrders: true,
        isLoaded: true,
        orders: action.payload
      };
    case AC.GET_ORDERS_ERROR:
      console.log(action.error);
      return { ...state, error: true };
    default:
      return { ...state };
  }
};

export default ordersReducer;
