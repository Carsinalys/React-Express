import React from "react";
import { connect } from "react-redux";
import Firebase from "firebase/firebase";
import { CSSTransition } from "react-transition-group";
import { Redirect } from "react-router-dom";

import {
  createChatRoom,
  chatOnInput,
  chatChooseRoom,
  chatOnMessageInput,
  chatSendMessage,
  chatSetUserName,
  chatOnNameInput,
  chatDeleteUserName,
  chatDeleteMessage,
  chatNewMessageOn,
  chatNewMessageOff,
  chatGetRooms,
  chatGetUsersNames,
  chatSetCurrentMessages
} from "../../AC/index";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Rooms from "./pizzaBuilderRooms.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyUaUeFIdEP-t40XognUX4nOFU5X2Uy8s",
  authDomain: "pizzabuilder-e9539.firebaseapp.com",
  databaseURL: "https://pizzabuilder-e9539.firebaseio.com",
  projectId: "pizzabuilder-e9539",
  storageBucket: "pizzabuilder-e9539.appspot.com",
  messagingSenderId: "131366940948",
  appId: "1:131366940948:web:e7dd40e9005f2e80"
};
Firebase.initializeApp(firebaseConfig);

const watch = Firebase.database();

class Chat extends React.Component {
  state = {
    showList: false,
    badName: false,
    badMessage: false,
    longMesssage: false,
    messageQty: 100,
    currentLengthMessages: 0
  };

  componentDidMount() {
    this.props.chatGetRoomsFun();
    this.props.chatGetUsersNamesFun();
  }

  componentWillMount() {
    watch
      .ref(`chat/rooms/${this.props.chat.room}`)
      .limitToLast(this.state.messageQty)
      .on("value", snapshot => {
        this.props.chatSetCurrentMessagesFun(snapshot.val());
        this.props.chatNewMessageOnFun();
        this.setState({
          currentLengthMessages: Object.keys(snapshot.val()).length
        });
        console.log(snapshot.val());
      });
  }

  componentWillUnmount() {
    this.props.chatNewMessageOffFun();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.chat.room != this.props.chat.room) {
      watch
        .ref(`chat/rooms/${this.props.chat.room}`)
        .limitToLast(this.state.messageQty)
        .on("value", snapshot => {
          this.props.chatSetCurrentMessagesFun(snapshot.val());
          this.props.chatNewMessageOnFun();
          this.setState({
            currentLengthMessages: Object.keys(snapshot.val()).length
          });
          console.log(snapshot.val());
        });
    }
    if (prevState.messageQty != this.state.messageQty) {
      watch
        .ref(`chat/rooms/${this.props.chat.room}`)
        .limitToLast(this.state.messageQty)
        .on("value", snapshot => {
          this.props.chatSetCurrentMessagesFun(snapshot.val());
          this.props.chatNewMessageOnFun();
          this.setState({
            currentLengthMessages: Object.keys(snapshot.val()).length
          });
          console.log(snapshot.val());
        });
    }
    if (
      Object.keys(prevProps.chat.messages).length !=
        Object.keys(this.props.chat.messages).length &&
      Object.keys(prevProps.chat.messages).length == 0
    ) {
      const www = document.querySelector(".chat__head__view__port");
      www.scrollTop = www.scrollHeight;
    }
    if (
      this.state.currentLengthMessages - prevState.currentLengthMessages ===
        1 ||
      this.props.chat.room !== prevProps.chat.room
    ) {
      const www = document.querySelector(".chat__head__view__port");
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
        this.props.auth.localId,
        this.props.auth.token
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
      this.props.chatSendMessageFun(
        data,
        this.props.chat.room,
        this.props.auth.token
      );
    }
  };

  resetLoadMoreHandler = () => {
    this.setState({ loadMore: false });
  };

  scrollHandler = event => {
    if (
      event.target.scrollTop === 0 &&
      this.state.messageQty == this.state.currentLengthMessages
    ) {
      this.setState(prevState => {
        return {
          messageQty: prevState.messageQty + 100
        };
      });
    }
  };

  keyDownHandler = event => {
    if (event.key === "Enter") this.sendMessageHanlder();
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
                      onClick={() =>
                        this.props.chatDeleteUserNameFun(
                          this.props.auth.localId,
                          this.props.auth.token
                        )
                      }
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
                      onChange={() => this.props.chatOnNameInputFun(event)}
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
                    onChange={() => this.props.chatOnInputFun(event)}
                  />
                </div>
                <div className="chat__create__room__btn__cover">
                  <button
                    className="chat__create__room__btn"
                    onClick={() =>
                      this.props.createChatRoomFun(
                        this.props.chat.roomValue,
                        this.props.auth.token
                      )
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
              onScroll={event => this.scrollHandler(event)}
            >
              {Object.keys(this.props.chat.messages).length > 0
                ? Object.keys(this.props.chat.messages).map(item => {
                    return (
                      <div
                        key={item}
                        className={
                          this.props.auth.localId ==
                          this.props.chat.messages[item].id
                            ? "chat__message__cover relative"
                            : " relative"
                        }
                      >
                        <span
                          className="chat__message__delete__single"
                          onClick={() =>
                            this.props.auth.localId ==
                            this.props.chat.messages[item].id
                              ? this.props.chatDeleteMessageFun(
                                  item,
                                  this.props.chat.room,
                                  this.props.auth.token
                                )
                              : false
                          }
                        ></span>
                        <p className="chat__message__name">
                          {this.props.chat.messages[item].name}
                        </p>
                        <p className="chat__message__message">
                          {this.props.chat.messages[item].message}
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
              onChange={() => this.props.chatOnMessageInputFun(event)}
              onKeyPress={event => this.keyDownHandler(event)}
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

const dispatchToProps = dispatch => {
  return {
    createChatRoomFun: (str, token) => dispatch(createChatRoom(str, token)),
    chatOnInputFun: event => dispatch(chatOnInput(event)),
    chatChooseRoomFun: room => dispatch(chatChooseRoom(room)),
    chatOnMessageInputFun: event => dispatch(chatOnMessageInput(event)),
    chatSendMessageFun: (str, room, token) =>
      dispatch(chatSendMessage(str, room, token)),
    chatSetUserNameFun: (data, id, token) =>
      dispatch(chatSetUserName(data, id, token)),
    chatOnNameInputFun: event => dispatch(chatOnNameInput(event)),
    chatDeleteUserNameFun: (id, token) =>
      dispatch(chatDeleteUserName(id, token)),
    chatDeleteMessageFun: (id, room, token) =>
      dispatch(chatDeleteMessage(id, room, token)),
    chatNewMessageOnFun: () => dispatch(chatNewMessageOn()),
    chatNewMessageOffFun: () => dispatch(chatNewMessageOff()),
    chatGetRoomsFun: () => dispatch(chatGetRooms()),
    chatGetUsersNamesFun: () => dispatch(chatGetUsersNames()),
    chatSetCurrentMessagesFun: data => dispatch(chatSetCurrentMessages(data))
  };
};

const stateToProps = state => {
  return {
    auth: state.auth,
    chat: state.chat
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(Chat);
