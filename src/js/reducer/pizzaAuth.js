import * as AC from "../AC/ac";

const initState = {
  isLoading: false,
  isAuthindicated: false,
  token: null,
  expiresIn: null,
  localId: null,
  refreshToken: null,
  error: null,
  stayIn: false,
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
      pattern: "^(?=.*d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$"
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
        token: action.payload.idToken,
        expiresIn: action.payload.expiresIn,
        localId: action.payload.localId,
        refreshToken: action.payload.refreshToken,
        error: null,
        isLoading: false
      };
    case AC.AUTH_GET_TOKET_FROM_FIREBASE:
      return {
        ...state,
        isAuthindicated: true,
        token: action.payload.id_token,
        expiresIn: action.payload.expires_in,
        localId: action.payload.user_id,
        refreshToken: action.payload.refresh_token,
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
      localStorage.setItem("token", `${action.payload.idToken}`);
      localStorage.setItem(
        "expiresIn",
        `${new Date().getTime() + action.payload.expiresIn * 1000}`
      );
      localStorage.setItem("localId", `${action.payload.localId}`);
      if (state.stayIn) {
        localStorage.setItem("refresh", `${action.payload.refreshToken}`);
      }
      return {
        ...state
      };
    case AC.AUTH_STORE_TOKEN_STAY_IN:
      return {
        ...state,
        stayIn: action.payload
      };
    case AC.AUTH_GET_TOKEN_FROM_COOKIE:
      let strToken = localStorage.getItem("token");
      let strExpiresIn = localStorage.getItem("expiresIn");
      let strLocalId = localStorage.getItem("localId");
      let strRefreshToken = localStorage.getItem("refresh");
      if (strToken && new Date().getTime() < strExpiresIn) {
        return {
          ...state,
          isAuthindicated: true,
          token: strToken,
          localId: strLocalId,
          refreshToken: strRefreshToken
        };
      }
    case AC.AUTH_SIGN_IN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case AC.LOG_OUT: {
      localStorage.removeItem("token");
      localStorage.removeItem("expiresIn");
      localStorage.removeItem("localId");
      localStorage.removeItem("refresh");
      return {
        ...state,
        isAuthindicated: false,
        token: null,
        expiresIn: null,
        localId: null,
        refreshToken: null,
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
