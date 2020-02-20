import * as AC from "../AC/ac";

const initState = {
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
    flat: "unset"
  },
  modalShow: false,
  isAddresFilled: false
};

const reducer = (state = initState, action) => {
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
