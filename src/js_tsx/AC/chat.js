import * as AC from "./ac";
import client from "../graphql/client";
import * as GQL from "../graphql/gql-tags";
import { setCabinetStoreNewPhotoAndName } from "./setInfoCabinet";

export const createChatRoom = str => {
  const data = {
    name: str
  };
  return dispatch => {
    if (str.length > 4) {
      dispatch(chatMdalOn());
      client
        .mutate({
          mutation: GQL.addRoom,
          variables: { input: data },
          update: (cache, payload) => {
            const { getRooms } = cache.readQuery({ query: GQL.getRooms });
            const newRooms = [...getRooms, payload.data.addRoomInput];
            cache.writeQuery({
              query: GQL.getRooms,
              data: { getRooms: newRooms }
            });
          }
        })
        .then(res => {
          dispatch(chatMdalOff());
          if (res.error) console.log(res.error);
          else {
            dispatch(getChatRooms());
            dispatch(chatResetRoomInput());
          }
        });
    }
  };
};

export const getChatRooms = () => {
  return dispatch => {
    dispatch(chatMdalOn());
    client.query({ query: GQL.getRooms }).then(res => {
      dispatch(chatMdalOff());
      if (res.error) console.log(res.error);
      else dispatch(roomsToStore(res.data.getRooms));
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
    const sendObj = {
      data: obj,
      _id: id
    };
    client
      .mutate({
        mutation: GQL.changeUserInfo,
        variables: { input: sendObj }
      })
      .then(res => {
        client.resetStore();
        return res;
      })
      .then(res => {
        dispatch(chatMdalOff());
        if (res.error) console.log(error);
        else {
          localStorage.setItem("name", res.data.changeUserInfo.name);
          dispatch(chatResetNameInput());
          dispatch(setCabinetStoreNewPhotoAndName(res.data.changeUserInfo));
          dispatch(chatSetNewName(res.data.changeUserInfo.name));
        }
      });
  };
};

export const chatSetNewName = name => {
  return {
    type: AC.CHAT_SET_NEW_NAME,
    payload: name
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
    client
      .query({ query: GQL.getMessagesRoom, variables: { input: { room } } })
      .then(res => {
        dispatch(chatMdalOff());
        if (res.error) console.log(error);
        else {
          dispatch(chatChooseRoomToStore(room));
          dispatch(chatChooseRoomMsgToStore(res.data.getMessagesRoom));
        }
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

export const chatDeleteMessage = (id, room) => {
  const data = { _id: id };
  return dispatch => {
    dispatch(chatSendMsgSplinnerOn());
    client
      .mutate({
        mutation: GQL.deleteMessageRoom,
        variables: { input: data },
        update: (cache, payload) => {
          const { getMessagesRoom } = cache.readQuery({
            query: GQL.getMessagesRoom,
            variables: { input: { room } }
          });
          const newMessages = getMessagesRoom.filter(
            item => item._id !== payload.data.deleteMessageInput._id
          );
          cache.writeQuery({
            query: GQL.getMessagesRoom,
            data: { getMessagesRoom: newMessages }
          });
        }
      })
      .then(res => {
        dispatch(chatSendMsgSplinnerOff());
        if (res.error) console.log(res.error);
        else dispatch(deleteMsgFromDtore(id));
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
    client
      .query({ query: GQL.getUSerInfo, variables: { input: { id } } })
      .then(res => {
        dispatch(chatMdalOff());
        if (res.error) console.log(res.error);
        else {
          dispatch(chatSetUserNameToRedux(res.data.GetUserInfo.name));
          dispatch(chatSetUserRoleToRedux(res.data.GetUserInfo.role));
        }
      });
  };
};

export const chatSetCurrentMessages = data => {
  if (data.room) {
    const { getMessagesRoom } = client.readQuery({
      query: GQL.getMessagesRoom,
      variables: { input: { room: data.room } }
    });
    const newMessages = [...getMessagesRoom, data];
    client.writeQuery({
      query: GQL.getMessagesRoom,
      data: { getMessagesRoom: newMessages }
    });
  }
  return {
    type: AC.CHAT_SET_CURRENT_MESSAGES,
    payload: data
  };
};

export const chatGetCurMessages = room => {
  return dispatch => {
    dispatch(chatMdalOn());
    client
      .query({
        query: GQL.getMessagesRoom,
        variables: { input: { room } }
      })
      .then(res => {
        dispatch(chatMdalOff());
        if (res.error) console.log(res.error);
        else dispatch(chatSetCurrentMessages(res.data.getMessagesRoom));
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
  if (data.room) {
    const { getMessagesRoom } = client.readQuery({
      query: GQL.getMessagesRoom,
      variables: { input: { room: data.room } }
    });
    const newMessages = [...getMessagesRoom, data];
    client.writeQuery({
      query: GQL.getMessagesRoom,
      data: { getMessagesRoom: newMessages }
    });
  }
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
