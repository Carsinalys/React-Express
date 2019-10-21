import * as AC from "../AC/ac";

const initState = {
  roomValue: "",
  messageValue: "",
  userNameValue: "",
  rooms: [],
  room: "default",
  modal: false,
  userName: "",
  role: "",
  sending: false,
  newMessage: false,
  messages: [],
  userCount: 0
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case AC.CHAT_USER_COUNT:
      return {
        ...state,
        userCount: action.payload
      };
    case AC.CHAT_ROOMS_MSG_TO_CHOOSE:
      if (action.payload.length > 0) {
        return {
          ...state,
          messages: action.payload
        };
      } else if (Object.keys(action.payload).length > 0) {
        return {
          ...state,
          messages: [action.payload]
        };
      } else {
        return {
          ...state,
          messages: action.payload
        };
      }

    case AC.CHAT_ROOMS_TO_STORE:
      return {
        ...state,
        rooms: action.payload
      };
    case AC.CHAT_SET_USER_ROLE:
      return {
        ...state,
        role: action.payload
      };
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
      if (action.payload.length > 0) {
        let newPayload = action.payload.filter(
          item => item.room === state.room
        );
        return {
          ...state,
          messages: [...state.messages, ...newPayload]
        };
      } else if (
        Object.keys(action.payload).length > 0 &&
        action.payload.room === state.room
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload]
        };
      } else {
        return {
          ...state
        };
      }
    default:
      return {
        ...state
      };
  }
};

export default reducer;
