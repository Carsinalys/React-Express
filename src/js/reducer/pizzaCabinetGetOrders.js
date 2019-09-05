import * as AC from "../AC/ac";

const initState = {
  modal: false,
  error: null,
  orders: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case AC.CABINET_VIEW_ORDERS_SET:
      return {
        ...state,
        orders: action.payload
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
        orders: {}
      };
    default:
      return { ...state };
  }
};

export default reducer;
