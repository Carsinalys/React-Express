import * as AC from "../AC/ac";

const initState = {
  roomValue: "",
  messageValue: "",
  userNameValue: "",
  room: "Default",
  modal: false,
  userName: "",
  sending: false,
  newMessage: false,
  messages: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case AC.CHAT_DELETE_MSG_STORE:
      return {
        ...state,
        messages: state.messages.filter(item => item._id !== action.payload)
      };
    case AC.CHAT_ON_INPUT:
      return {
        ...state,
        roomValue: action.payload.target.value
      };
    case AC.CHAT_RESET_ROOM_INPUT:
      return {
        ...state,
        roomValue: ""
      };
    case AC.CHAT_NAME_ON_INPUT:
      return {
        ...state,
        userNameValue: action.payload.target.value
      };
    case AC.CHAT_ON_MESSAGE_INPUT:
      return {
        ...state,
        messageValue: action.payload.target.value
      };
    case AC.CHAT_RESET_MESSAGE_INPUT:
      return {
        ...state,
        messageValue: ""
      };
    case AC.CHAT_MODAL_ON:
      return {
        ...state,
        modal: true
      };
    case AC.CHAT_MODAL_OFF:
      return {
        ...state,
        modal: false
      };
    case AC.CHAT_ROOMS_CHOOSE:
      return {
        ...state,
        room: action.payload
      };
    case AC.CHAT_SET_USER_NAME:
      return {
        ...state,
        userName: action.payload
      };
    case AC.CHAT_RESET_NAME_INPUT:
      return {
        ...state,
        userNameValue: ""
      };
    case AC.CHAT_RESET_NAME_STORE:
      return {
        ...state,
        userName: ""
      };
    case AC.CHAT_SEND_MSG_LOADING_ON:
      return {
        ...state,
        sending: true
      };
    case AC.CHAT_SEND_MSG_LOADING_OFF:
      return {
        ...state,
        sending: false
      };
    case AC.CHAT_NEW_MESSAGE_ON:
      return {
        ...state,
        newMessage: true
      };
    case AC.CHAT_NEW_MESSAGE_OFF:
      return {
        ...state,
        newMessage: false
      };
    case AC.CHAT_SET_CURRENT_MESSAGES:
      let newPayload;
      if (action.payload.length > 0) newPayload = action.payload;
      else newPayload = [action.payload];
      return {
        ...state,
        messages: [...state.messages, ...newPayload]
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
