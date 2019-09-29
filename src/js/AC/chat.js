import * as AC from "./ac";
import { port } from "../../../portForFront";

export const createChatRoom = (str, token) => {
  return dispatch => {
    if (str.length > 0) {
      dispatch(chatMdalOn());
      fetch(
        `https://pizzabuilder-e9539.firebaseio.com/chat/rooms/${str}.json?auth=${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "aplication/json"
          },
          body: JSON.stringify(str)
        }
      )
        .then(res => res.json())
        .then(res => {
          dispatch(chatResetRoomInput());
          dispatch(chatMdalOff());
          dispatch(chatGetRooms());
          console.log(res);
        })
        .catch(error => {
          console.log(error);
          dispatch(chatMdalOn());
        });
    }
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
  return {
    type: AC.CHAT_ROOMS_CHOOSE,
    payload: room
  };
};

export const chatSetUserNameToRedux = data => {
  return {
    type: AC.CHAT_SET_USER_NAME,
    payload: data
  };
};

export const chatDeleteMessage = (id, room, token) => {
  return dispatch => {
    dispatch(chatSendMsgSplinnerOn());
    fetch(
      `https://pizzabuilder-e9539.firebaseio.com/chat/rooms/${room}/${id}.json?auth=${token}`,
      {
        method: "DELETE"
      }
    )
      .then(res => res.json())
      .then(res => {
        dispatch(chatSendMsgSplinnerOff());
        console.log(res);
      })
      .catch(error => {
        console.log(error);
        dispatch(chatSendMsgSplinnerOff());
      });
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

export const chatGetCurMessages = () => {
  return dispatch => {
    dispatch(chatMdalOn());
    fetch(`${port}/api/v1.0/getRoomMessages`, {
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
