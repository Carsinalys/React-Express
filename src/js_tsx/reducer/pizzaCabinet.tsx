import * as AC from "../AC/ac";
import { Action } from "../interfaces/interfaces";

interface InitState {
  info: {
    createdAt: null | number;
    email: null | string;
    localId: null | string;
    password: null | string;
    lastLoginAt: null | string;
    name: string;
    phone: string;
    street: string;
    house: string;
    flat: string;
    mailChangeError: string;
  };
  modalShow: boolean;
  isAddresFilled: boolean;
}

const initState: InitState = {
  info: {
    createdAt: null,
    email: null,
    localId: null,
    password: null,
    lastLoginAt: null,
    name: "unset",
    phone: "unset",
    street: "unset",
    house: "unset",
    flat: "unset",
    mailChangeError: ""
  },
  modalShow: false,
  isAddresFilled: false
};

const reducer = (state = initState, action: Action) => {
  switch (action.type) {
    case AC.CABINET_GET_INFO:
      return {
        ...state,
        info: {
          ...state.info,
          createdAt: action.payload.createdAt,
          email: action.payload.mail,
          localId: action.payload.localId,
          password: action.payload.password,
          lastLoginAt: action.payload.lastLoginAt,
          name: action.payload.name,
          phone: action.payload.phone,
          street: action.payload.street,
          house: action.payload.house,
          flat: action.payload.flat
        }
      };
    case AC.CABINET_CHANGE_MAIL_ERROR:
      return {
        ...state,
        mailChangeError: action.payload
      };
    case AC.CABINET_CHANGE_MAIL_CLEAR_ERROR:
      return {
        ...state,
        mailChangeError: ""
      };
    case AC.CABINET_NEW_ADDRESS_SET:
      return {
        ...state,
        info: {
          ...state.info,
          name: action.payload.name,
          phone: action.payload.phone,
          street: action.payload.street,
          house: action.payload.house,
          flat: action.payload.flat
        }
      };
    case AC.CABINET_MODAL_ON:
      return {
        ...state,
        modalShow: true
      };
    case AC.CABINET_MODAL_OFF:
      return {
        ...state,
        modalShow: false
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
