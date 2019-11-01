import * as AC from "./ac";
import { port } from "../../../portForFront";

export const createChatRoom = str => {
  const data = {
    name: str
  };
  return dispatch => {
    if (str.length > 4) {
      dispatch(chatMdalOn());
      fetch(`${port}/api/v1.0/chatRooms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => {
          dispatch(chatResetRoomInput());
          dispatch(chatMdalOff());
          console.log(res);
        })
        .catch(error => {
          console.log(error);
          dispatch(chatMdalOn());
        });
    }
  };
};

export const getChatRooms = () => {
  return dispatch => {
    dispatch(chatMdalOn());
    fetch(`${port}/api/v1.0/chatRooms`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        dispatch(chatMdalOff());
        dispatch(roomsToStore(res.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(chatMdalOn());
      });
  };
};

export const roomsToStore = data => {
  return {
    type: AC.CHAT_ROOMS_TO_STORE,
    payload: data
  };
};

export const chatSetUserName = (obj, id) => {
  return dispatch => {
    dispatch(chatMdalOn());
    fetch(`${port}/api/v1.0/user/setAddress`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(res => {
        dispatch(chatMdalOff());
        dispatch(chatResetNameInput());
        dispatch(chatGetUsersNames(id));
        console.log(res);
      })
      .catch(error => {
        console.log(error);
        dispatch(chatMdalOn());
      });
  };
};

export const chatDeleteUserName = () => {
  return {
    type: AC.CHAT_RESET_NAME_STORE
  };
};

export const chatSendMsgSplinnerOn = () => {
  return {
    type: AC.CHAT_SEND_MSG_LOADING_ON
  };
};

export const chatSendMsgSplinnerOff = () => {
  return {
    type: AC.CHAT_SEND_MSG_LOADING_OFF
  };
};

export const chatOnInput = event => {
  return {
    type: AC.CHAT_ON_INPUT,
    payload: event
  };
};

export const chatOnMessageInput = event => {
  return {
    type: AC.CHAT_ON_MESSAGE_INPUT,
    payload: event
  };
};

export const chatOnNameInput = event => {
  return {
    type: AC.CHAT_NAME_ON_INPUT,
    payload: event
  };
};

export const chatResetRoomInput = () => {
  return {
    type: AC.CHAT_RESET_ROOM_INPUT
  };
};

export const chatResetNameInput = () => {
  return {
    type: AC.CHAT_RESET_NAME_INPUT
  };
};

export const chatResetMessageInput = () => {
  return {
    type: AC.CHAT_RESET_MESSAGE_INPUT
  };
};

export const chatMdalOn = () => {
  return {
    type: AC.CHAT_MODAL_ON
  };
};

export const chatMdalOff = () => {
  return {
    type: AC.CHAT_MODAL_OFF
  };
};

export const chatChooseRoom = room => {
  return dispatch => {
    dispatch(chatMdalOn());
    fetch(`${port}/api/v1.0/roomMessages?room=${room}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        dispatch(chatMdalOff());
        dispatch(chatChooseRoomToStore(room));
        dispatch(chatChooseRoomMsgToStore(res.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(chatMdalOn());
      });
  };
};

export const chatChooseRoomToStore = room => {
  return {
    type: AC.CHAT_ROOMS_CHOOSE,
    payload: room
  };
};

export const chatChooseRoomMsgToStore = data => {
  return {
    type: AC.CHAT_ROOMS_MSG_TO_CHOOSE,
    payload: data
  };
};

export const chatSetUserNameToRedux = data => {
  return {
    type: AC.CHAT_SET_USER_NAME,
    payload: data
  };
};

export const chatSetUserRoleToRedux = data => {
  return {
    type: AC.CHAT_SET_USER_ROLE,
    payload: data
  };
};

export const chatDeleteMessage = id => {
  const data = { id: id };
  return dispatch => {
    dispatch(chatSendMsgSplinnerOn());
    fetch(`${port}/api/v1.0/roomMessages`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        dispatch(deleteMsgFromDtore(id));
        dispatch(chatSendMsgSplinnerOff());
        console.log(res);
      })
      .catch(error => {
        console.log(error);
        dispatch(chatSendMsgSplinnerOff());
      });
  };
};

export const deleteMsgFromDtore = id => {
  return {
    type: AC.CHAT_DELETE_MSG_STORE,
    payload: id
  };
};

export const chatNewMessageOn = () => {
  return {
    type: AC.CHAT_NEW_MESSAGE_ON
  };
};

export const chatNewMessageOff = () => {
  return {
    type: AC.CHAT_NEW_MESSAGE_OFF
  };
};

export const chatGetUsersNames = id => {
  return dispatch => {
    dispatch(chatMdalOn());
    fetch(`${port}/api/v1.0/user/getInfo?id=${id}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        dispatch(chatMdalOff());
        if (res.data.name) dispatch(chatSetUserNameToRedux(res.data.name));
        if (res.data.role) dispatch(chatSetUserRoleToRedux(res.data.role));
      })
      .catch(error => {
        console.log(error);
        dispatch(chatMdalOn());
      });
  };
};

export const chatSetCurrentMessages = data => {
  return {
    type: AC.CHAT_SET_CURRENT_MESSAGES,
    payload: data
  };
};

export const chatGetCurMessages = room => {
  return dispatch => {
    dispatch(chatMdalOn());
    fetch(`${port}/api/v1.0/roomMessages?room=${room}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => {
        dispatch(chatMdalOff());
        dispatch(chatSetCurrentMessages(res.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(chatMdalOn());
      });
  };
};

export const userCount = num => {
  return {
    type: AC.CHAT_USER_COUNT,
    payload: num
  };
};

export const chatmessageFromAnotherRoom = data => {
  return {
    type: AC.CHAT_MESSAGE_FROM_ANOTHER_ROOM,
    payload: data
  };
};

export const chatmessageFromAnotherRoomReset = data => {
  return {
    type: AC.CHAT_MESSAGE_FROM_ANOTHER_ROOM_RESET,
    payload: data
  };
};

export const chatNewMessageBanner = () => {
  return {
    type: AC.CHAT_NEW_MESSAGE
  };
};
