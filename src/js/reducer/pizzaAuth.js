import * as AC from "../AC/ac";

const initState = {
  isLoading: false,
  isAuthindicated: false,
  expiresAt: null,
  localId: null,
  error: null,
  inputs: {
    mail: {
      id: "auth__email",
      placeholder: "Email",
      label: "Enter your email:",
      type: "email",
      value: "",
      isValid: false,
      pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"
    },
    password: {
      id: "auth__password",
      placeholder: "Password",
      label: "Enter your password:",
      type: "password",
      value: "",
      isValid: false,
      pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$"
    }
  }
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case AC.AUTH_ON_INPUT:
      let fuck = new RegExp(
        state.inputs[action.payload.target.dataset.name].pattern
      );
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.target.dataset.name]: {
            ...state.inputs[action.payload.target.dataset.name],
            value: action.payload.target.value,
            isValid: fuck.test(action.payload.target.value)
          }
        }
      };
    case AC.AUTH_SIGN_IN_FINISH:
      return {
        ...state,
        isAuthindicated: true,
        expiresAt: action.payload.expireAt,
        localId: action.payload.localId,
        error: null,
        isLoading: false
      };
    case AC.AUTH_SIGN_IN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case AC.AUTH_MODAL_ON:
      return {
        ...state,
        isLoading: true
      };
    case AC.AUTH_MODAL_OFF:
      return {
        ...state,
        isLoading: false
      };
    case AC.AUTH_CLEAR_INPUTS:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          mail: {
            ...state.inputs.mail,
            value: ""
          },
          password: {
            ...state.inputs.password,
            value: ""
          }
        }
      };
    case AC.AUTH_STORE_TOKEN_STAY_OUT:
      localStorage.setItem(
        "expiresAt",
        `${new Date().getTime() + action.payload.expireAt * 1000}`
      );
      localStorage.setItem("localId", `${action.payload.localId}`);
      return {
        ...state
      };
    case AC.AUTH_GET_TOKEN_FROM_COOKIE:
      let strExpiresAt = localStorage.getItem("expiresAt");
      let strLocalId = localStorage.getItem("localId");
      if (strLocalId && new Date().getTime() < strExpiresAt) {
        return {
          ...state,
          isAuthindicated: true,
          localId: strLocalId
        };
      } else {
        return {
          ...state,
          isAuthindicated: false,
          localId: null
        };
      }
    case AC.LOG_OUT: {
      localStorage.removeItem("expiresAt");
      localStorage.removeItem("localId");
      return {
        ...state,
        isAuthindicated: false,
        expiresAt: null,
        localId: null,
        error: null,
        stayIn: false
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default reducer;
