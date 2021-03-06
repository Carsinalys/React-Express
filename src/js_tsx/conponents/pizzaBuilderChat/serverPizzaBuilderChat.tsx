import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { Redirect } from "react-router-dom";

import {
  createChatRoom,
  chatOnInput,
  chatChooseRoom,
  chatOnMessageInput,
  chatSetUserName,
  chatOnNameInput,
  chatDeleteUserName,
  chatDeleteMessage,
  chatNewMessageOn,
  chatNewMessageOff,
  chatGetUsersNames,
  chatSetCurrentMessages
} from "../../AC/index";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Rooms from "./pizzaBuilderRooms";


import { InitStateAuth } from '../../reducer/pizzaAuth';
import { InitStateChat } from '../../reducer/chat';
import { Message, ChangeUserInfoFields } from '../../interfaces/interfaces';
import { Dispatch } from "redux";

const socket = {
  emit: (room: string) => console.log(room)
}

interface Props {
  auth: InitStateAuth;
  chat: InitStateChat;
  createChatRoomFun: (str: string)=>any;
  chatOnInputFun: (event: Event) => {
    type: string;
    payload: Event;
  }
  chatChooseRoomFun: (room:string) => any;
  chatOnMessageInputFun: (event: Event) => {
    type: string;
    payload: Event;
  }
  chatSetUserNameFun: (data: ChangeUserInfoFields, id: string) => any;
  chatOnNameInputFun: (event: Event) => {
    type: string;
    payload: Event;
  }
  chatDeleteUserNameFun: ()=>{type:string};
  chatDeleteMessageFun: (room: string, id: string) => any;
  chatGetUsersNamesFun: (id: string) => any;
  chatSetCurrentMessagesFun: (data:Message)=> {
    type: string;
    payload: Message;
  }
  chatResetMessageInputFun: ()=>{type:string};
  chatGetCurMessagesFun: (room:string)=>any;
  getChatRoomsFun: ()=>any;
  userCountFun: (num: number) => {
    type: string;
    payload: number;
  }
  chatmessageFromAnotherRoomFun: (msg: Message) => {
    type: string;
    payload: Message;
  }
  chatmessageFromAnotherRoomResetFun: (room: string) => {
    type: string;
    payload: string
  }
  chatNewMessageBannerFun: ()=>{type:string};
  chatNewMessageOffFun: ()=>{type:string};
}

interface State {
  showList: boolean;
  badName: boolean;
  badMessage: boolean;
  longMesssage: boolean;
  messageQty: number;
  currentLengthMessages: number;
  loadMore: boolean;
}

class Chat extends React.Component<Props, State> {
  state = {
    showList: false,
    badName: false,
    badMessage: false,
    longMesssage: false,
    messageQty: 100,
    currentLengthMessages: 0,
    loadMore: false
  };

  componentDidMount() {
    this.props.chatGetUsersNamesFun(this.props.auth.localId!);
  }

  componentWillUnmount() {
    this.props.chatNewMessageOffFun();
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (
      Object.keys(prevProps.chat.messages).length !=
        Object.keys(this.props.chat.messages).length &&
      Object.keys(prevProps.chat.messages).length == 0
    ) {
      const www = document.querySelector(".chat__head__view__port") as HTMLElement;
      www.scrollTop = www.scrollHeight;
    }
    if (
      this.state.currentLengthMessages - prevState.currentLengthMessages ===
        1 ||
      this.props.chat.room !== prevProps.chat.room
    ) {
      const www = document.querySelector(".chat__head__view__port") as HTMLElement;
      www.scrollTop = www.scrollHeight;
    }
  }

  toggleSelectRoomsHandler = () => {
    this.state.showList
      ? this.setState({ showList: false })
      : this.setState({ showList: true });
  };

  sendUserNameHandler = () => {
    if (
      this.props.chat.userNameValue.length < 5 ||
      this.props.chat.userNameValue.length > 20
    ) {
      this.setState({ badName: true });
    } else {
      let data = {
        name: this.props.chat.userNameValue
      };
      this.props.chatSetUserNameFun(
        data,
        this.props.auth.localId!
      );
    }
  };

  sendMessageHanlder = () => {
    if (this.props.chat.userName.length == 0) {
      this.setState({ badName: true });
    } else if (this.props.chat.messageValue.length > 100) {
      this.setState({ longMesssage: true });
    } else if (this.props.chat.messageValue.length == 0) {
      this.setState({ badMessage: true });
    } else {
      let data = {
        name: this.props.chat.userName,
        message: this.props.chat.messageValue,
        id: this.props.auth.localId
      };
    }
  };

  resetLoadMoreHandler = () => {
    this.setState({ loadMore: false });
  };

  scrollHandler = (event: Event) => {
    const el = event.target as HTMLElement;
    if (
      el.scrollTop === 0 &&
      this.state.messageQty == this.state.currentLengthMessages
    ) {
      this.setState(prevState => {
        return {
          messageQty: prevState.messageQty + 100
        };
      });
    }
  };

  keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter") this.sendMessageHanlder();
  };

  joinRoomHandler = (room: string) => {
    socket.emit(room);
  };

  render() {
    return (
      <section className="chat__section">
        {!this.props.auth.isAuthindicated ? <Redirect to="/" /> : null}
        <CSSTransition
          in={this.state.longMesssage}
          timeout={300}
          classNames="modal__global"
          mountOnEnter
          unmountOnExit
        >
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ longMesssage: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              Too long message (it must be 100 symbols max)
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={this.state.badName}
          timeout={300}
          classNames="modal__global"
          mountOnEnter
          unmountOnExit
        >
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badName: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              User name must be longer 5 symbols and shorter 20 symbols length
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={this.state.badMessage}
          timeout={300}
          classNames="modal__global"
          mountOnEnter
          unmountOnExit
        >
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badMessage: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              You must enter some text in the message field
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={this.props.chat.modal}
          timeout={300}
          classNames="modal__global"
          mountOnEnter
          unmountOnExit
        >
          <div>
            <Spinner />
          </div>
        </CSSTransition>
        <div className="chat__main__cover">
          <div className="chat__rooms__cover">
            <div className="chat__rooms__select__cover">
              <button
                onClick={this.toggleSelectRoomsHandler}
                className="chat__create__room__btn"
              >
                Choose room
              </button>
              <CSSTransition
                in={this.state.showList}
                timeout={300}
                classNames="select__global"
                mountOnEnter
                unmountOnExit
              >
                <Rooms
                  rooms={this.props.chat.rooms}
                  choose={this.props.chatChooseRoomFun}
                  toggle={this.toggleSelectRoomsHandler}
                  resetLoadmore={this.resetLoadMoreHandler}
                  join={this.joinRoomHandler}
                  resetCounter={this.props.chatmessageFromAnotherRoomResetFun}
                  newMsg={this.props.chat.newMsgCounter}
                  newMsgBanner={this.props.chatNewMessageBannerFun}
                />
              </CSSTransition>
            </div>
            <div>
              {this.props.chat.userName.length > 0 ? (
                <div>
                  <div>
                    <p>Your nickname: {this.props.chat.userName}</p>
                  </div>
                  <div>
                    <span
                      className="chat__change__name__btn"
                      onClick={this.props.chatDeleteUserNameFun}
                    >
                      Change nickname
                    </span>
                  </div>
                </div>
              ) : (
                <div className="chat__set__name__cover">
                  <div className="chat__set__name__cover__single">
                    <input
                      type="text"
                      placeholder="Enter your name..."
                      value={this.props.chat.userNameValue}
                      onChange={event => {
                        const newEvent = event as unknown as Event
                        this.props.chatOnNameInputFun(newEvent)
                      }}
                      className="chat__create__room__input"
                    />
                  </div>
                  <div className="chat__set__name__cover__single">
                    <button
                      onClick={this.sendUserNameHandler}
                      className="chat__create__room__btn"
                    >
                      Set name
                    </button>
                  </div>
                </div>
              )}
            </div>
            {this.props.auth.localId == "mYKWkMG6IycSekAIhOri8keBfFh1" ? (
              <div className="chat__create__room__cover">
                <div className="chat__create__room__btn__cover">
                  <input
                    type="text"
                    placeholder="room name..."
                    className="chat__create__room__input"
                    value={this.props.chat.roomValue}
                    onChange={() => {
                      const newEvent = event as unknown as Event;
                      this.props.chatOnInputFun(newEvent);
                    }}
                  />
                </div>
                <div className="chat__create__room__btn__cover">
                  <button
                    className="chat__create__room__btn"
                    onClick={() =>
                      this.props.createChatRoomFun(this.props.chat.roomValue)
                    }
                  >
                    Create room
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          <div className="chat__currnet__room__cover">
            <p>
              Current room:{" "}
              <span className="chat__room__name">
                {this.props.chat.room != "" ? this.props.chat.room : null}
              </span>
            </p>
          </div>
          <div className="chat__head__cover">
            <div className="chat__head__title">Message window:</div>
            <div
              className="chat__head__view__port"
              onScroll={event => {
                const newEvent = event as unknown as Event;
                this.scrollHandler(newEvent);
              }}
            >
              {Object.keys(this.props.chat.messages).length > 0
                ? Object.keys(this.props.chat.messages).map(item => {
                    return (
                      <div
                        key={item}
                        className={
                          this.props.auth.localId ==
                          this.props.chat.messages[+item].id
                            ? "chat__message__cover relative"
                            : " relative"
                        }
                      >
                        <span
                          className="chat__message__delete__single"
                          onClick={() =>
                            this.props.auth.localId ==
                            this.props.chat.messages[+item].id
                              ? this.props.chatDeleteMessageFun(
                                  item,
                                  this.props.chat.room,
                                )
                              : false
                          }
                        ></span>
                        <p className="chat__message__name">
                          {this.props.chat.messages[+item].name}
                        </p>
                        <p className="chat__message__message">
                          {this.props.chat.messages[+item].message}
                        </p>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <div className="chat__footer__cover">
            <input
              type="text"
              placeholder="Your message"
              className="chat__footer__send__input"
              value={this.props.chat.messageValue}
              onChange={() => {
                const newEvent = event as unknown as Event;
                this.props.chatOnMessageInputFun(newEvent);
              }}
              onKeyPress={event => {
                const newEvent = event as unknown as KeyboardEvent;
                this.keyDownHandler(newEvent)
              }}
            />
            {!this.props.chat.sending ? (
              <button
                className="chat__footer__send__btn"
                onClick={this.sendMessageHanlder}
              >
                Send
              </button>
            ) : (
              <button
                className="chat__footer__send__btn"
                onClick={this.sendMessageHanlder}
              >
                Send
                <img
                  src={require(`../../../img/pacman.svg`)}
                  alt="spinner"
                  className="chat__footer__send__btn__spinner"
                />
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }
}

const dispatchToProps = (dispatch: Dispatch) => {
  return {
    createChatRoomFun: (str: string) => dispatch(createChatRoom(str)),
    chatOnInputFun: (event: Event) => dispatch(chatOnInput(event)),
    chatChooseRoomFun: (room: string) => dispatch(chatChooseRoom(room)),
    chatOnMessageInputFun: (event: Event) => dispatch(chatOnMessageInput(event)),
    chatSetUserNameFun: (data: ChangeUserInfoFields, id: string) =>
      dispatch(chatSetUserName(data, id)),
    chatOnNameInputFun: (event: Event) => dispatch(chatOnNameInput(event)),
    chatDeleteUserNameFun: () =>
      dispatch(chatDeleteUserName()),
    chatDeleteMessageFun: (id: string, room: string) =>
      dispatch(chatDeleteMessage(id, room)),
    chatNewMessageOnFun: () => dispatch(chatNewMessageOn()),
    chatNewMessageOffFun: () => dispatch(chatNewMessageOff()),
    chatGetUsersNamesFun: (id: string) => dispatch(chatGetUsersNames(id)),
    chatSetCurrentMessagesFun: (data: Message) => dispatch(chatSetCurrentMessages(data))
  };
};

const stateToProps = (state: any) => {
  return {
    auth: state.auth,
    chat: state.chat
  };
};

export default connect(stateToProps, dispatchToProps)(Chat);
