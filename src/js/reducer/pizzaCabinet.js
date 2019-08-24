import * as AC from "../AC/ac";

const initState = {
  info: {
    createdAt: null,
    email: null,
    lastLoginAt: null,
    localId: null,
    passwordHash: null,
    passwordUpdatedAt: null,
    validSince: null,
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
          createdAt: `${new Date(+action.payload.users[0].createdAt)}`,
          email: action.payload.users[0].email,
          lastLoginAt: `${new Date(+action.payload.users[0].lastLoginAt)}`,
          localId: action.payload.users[0].localId,
          passwordHash: action.payload.users[0].passwordHash,
          passwordUpdatedAt: `${new Date(
            +action.payload.users[0].passwordUpdatedAt
          )}`,
          validSince: `${new Date(+action.payload.users[0].validSince)}`
        }
      };
    case AC.CABINET_GET_INFO_ADDRES:
      let obj;
      Object.keys(action.payload).map(item => (obj = action.payload[item]));
      if (Object.keys(action.payload).length > 0) {
        return {
          ...state,
          isAddresFilled: true,
          info: {
            ...state.info,
            name: obj.name,
            phone: obj.phone,
            street: obj.street,
            house: obj.house,
            flat: obj.flat
          }
        };
      }
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
