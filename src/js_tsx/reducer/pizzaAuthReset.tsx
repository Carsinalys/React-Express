import * as AC from "../AC/ac";
import { Action, Input } from "../interfaces/interfaces";
import { Reducer } from "redux";

export interface InitStateReset {
  message: boolean;
  modal: boolean;
  inputs: {
    mail: Input;
    mail1: Input;
    password?: Input;
  };
}

const initState: InitStateReset = {
  message: false,
  modal: false,
  inputs: {
    mail: {
      value: "",
      isValid: false,
      pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"
    },
    mail1: {
      value: "",
      isValid: false,
      pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"
    }
  }
};

const reducer: Reducer<InitStateReset, Action> = (state = initState, action) => {
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
    case AC.AUTH_CHANGE_MAIL_ON_INPUT:
      let fuck1 = new RegExp(state.inputs.mail1.pattern);
      return {
        ...state,
        inputs: {
          ...state.inputs,
          mail1: {
            ...state.inputs.mail1,
            value: action.payload.target.value,
            isValid: fuck1.test(action.payload.target.value)
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
    case AC.AUTH_RESET_INPUT:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          mail: {
            ...state.inputs.mail,
            value: "",
            isValid: false
          },
          mail1: {
            ...state.inputs.mail1,
            value: "",
            isValid: false
          }
        }
      };
    default:
      return { ...state };
  }
};

export default reducer;
