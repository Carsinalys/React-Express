import * as AC from "../AC/ac";
import {Order, Action} from '../interfaces/interfaces';

interface initState {
  orders: Order[],
  isLoaded: boolean,
  getOrders: boolean,
  isLoading: boolean,
  error: boolean,
  moreOrders: Order[],
  count: number
}

const initState: initState = {
  orders: [],
  isLoaded: false,
  getOrders: false,
  isLoading: false,
  error: false,
  moreOrders: [],
  count: 0
};

const ordersReducer = (state = initState, action: Action) => {
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
    case AC.GET_MORE_ORDERS_FINISH:
      return {
        ...state,
        isLoading: false,
        moreOrders: action.payload,
        count: action.count
      };
    case AC.GET_ORDERS_FINISH_PHOTO:
      return {
        ...state,
        isLoading: false,
        isLoaded: true
      };
    case AC.GET_ORDERS_ERROR:
      console.log(action.error);
      return { ...state, error: true };
    default:
      return { ...state };
  }
};

export default ordersReducer;
