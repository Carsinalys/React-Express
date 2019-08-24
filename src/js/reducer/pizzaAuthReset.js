import * as AC from "../AC/ac";

const initState = {
  modal: false,
  message: false,
  inputs: {
    mail: {
      value: "",
      isValid: false,
      pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"
    }
  }
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case AC.AUTH_RESET_ON_INPUT:
      let fuck = new RegExp(state.inputs.mail.pattern);
      return {
        ...state,
        inputs: {
          ...state.inputs,
          mail: {
            ...state.inputs.mail,
            value: action.payload.target.value,
            isValid: fuck.test(action.payload.target.value)
          }
        }
      };
    case AC.AUTH_RESET_MODAL_ON:
      return {
        ...state,
        modal: true
      };
    case AC.AUTH_RESET_MODAL_OFF:
      return {
        ...state,
        modal: false
      };
    case AC.AUTH_RESET_MESSAGE:
      return {
        ...state,
        message: true
      };
    default:
      return { ...state };
  }
};

export default reducer;
