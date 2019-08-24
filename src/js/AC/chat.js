import * as AC from "./ac";

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

export const chatSetUserName = (obj, id, token) => {
  return dispatch => {
    console.log(obj, id, token);
    dispatch(chatMdalOn());
    fetch(
      `https://pizzabuilder-e9539.firebaseio.com/chat/users/${id}.json?auth=${token}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json"
        },
        body: JSON.stringify(obj)
      }
    )
      .then(res => res.json())
      .then(res => {
        dispatch(chatMdalOff());
        dispatch(chatResetNameInput());
        dispatch(chatGetUsersNames());
        console.log(res);
      })
      .catch(error => {
        console.log(error);
        dispatch(chatMdalOn());
      });
  };
};

export const chatDeleteUserName = (id, token) => {
  return dispatch => {
    dispatch(chatMdalOn());
    fetch(
      `https://pizzabuilder-e9539.firebaseio.com/chat/users/${id}.json?auth=${token}`,
      {
        method: "DELETE"
      }
    )
      .then(res => res.json())
      .then(res => {
        dispatch(chatMdalOff());
        dispatch(chatResetNameStore());
        console.log(res);
      })
      .catch(error => {
        console.log(error);
        dispatch(chatMdalOn());
      });
  };
};

export const chatSendMessage = (str, room, token) => {
  return dispatch => {
    dispatch(chatSendMsgSplinnerOn());
    fetch(
      `https://pizzabuilder-e9539.firebaseio.com/chat/rooms/${room}.json?auth=${token}`,
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
        dispatch(chatResetMessageInput());
        dispatch(chatSendMsgSplinnerOff());
        console.log(res);
      })
      .catch(error => {
        console.log(error);
        dispatch(chatchatSendMsgSplinnerOffMdalOn());
      });
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

export const chatResetNameStore = () => {
  return {
    type: AC.CHAT_RESET_NAME_STORE
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

export const chatRoomsToStore = data => {
  return {
    type: AC.CHAT_ROOMS_TO_STORE,
    payload: data
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


export const chatGetRooms = () => {
  return dispatch => {
      dispatch(chatMdalOn());
      fetch(
        `https://pizzabuilder-e9539.firebaseio.com/chat/rooms.json?auth=jyVEHg4zePXslKNwI5GOR3yYw6TjiaZzWIQ01DS1`,
        {
          method: "GET"
        }
      )
        .then(res => res.json())
        .then(res => {
          dispatch(chatMdalOff());
          dispatch(chatRoomsToStore(Object.keys(res)));
        })
        .catch(error => {
          console.log(error);
          dispatch(chatMdalOn());
        });
  };
};

export const chatGetUsersNames = () => {
  return (dispatch,getStore) => {
      dispatch(chatMdalOn());
      fetch(
        `https://pizzabuilder-e9539.firebaseio.com/chat/users.json?auth=jyVEHg4zePXslKNwI5GOR3yYw6TjiaZzWIQ01DS1`,
        {
          method: "GET"
        }
      )
        .then(res => res.json())
        .then(res => {
          dispatch(chatMdalOff());
          Object.keys(res).map(item=>{
            if (item === getStore().auth.localId) {
              let key = Object.keys(res[item])[0];
              dispatch(chatSetUserNameToRedux(res[item][key].name))
            }
          }) 
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
  }
}