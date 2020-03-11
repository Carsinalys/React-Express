import * as AC from "../AC/ac";
import { Action, Order } from "../interfaces/interfaces";

interface InitState {
  modal: boolean;
  error: null | string;
  count: null | number;
  orders: Order[];
}

const initState: InitState = {
  modal: false,
  error: null,
  count: null,
  orders: []
};

const reducer = (state = initState, action: Action) => {
  switch (action.type) {
    case AC.CABINET_VIEW_ORDERS_SET:
      return {
        ...state,
        orders: action.payload.orders,
        count: action.payload.count
      };
    case AC.CABINET_VIEW_ORDERS_MODAL_ON:
      return {
        ...state,
        modal: true
      };
    case AC.CABINET_VIEW_ORDERS_MODAL_OFF:
      return {
        ...state,
        modal: false
      };
    case AC.CABINET_VIEW_ORDERS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case AC.CABINET_VIEW_ORDERS_RESET:
      return {
        ...state,
        orders: []
      };
    default:
      return { ...state };
  }
};

export default reducer;
