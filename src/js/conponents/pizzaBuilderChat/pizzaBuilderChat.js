import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Modal from "../hoc/modal";
import ModalSlide from "../hoc/modalSlideUpDown";

import {
  createChatRoom,
  chatOnInput,
  chatChooseRoom,
  chatOnMessageInput,
  chatSetUserName,
  chatResetMessageInput,
  chatOnNameInput,
  chatDeleteUserName,
  chatDeleteMessage,
  chatNewMessageOn,
  chatNewMessageOff,
  chatGetUsersNames,
  chatSetCurrentMessages,
  chatGetCurMessages,
  getChatRooms
} from "../../AC/index";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Rooms from "./pizzaBuilderRooms.js";
import { socketType } from "../../../../portForFront";

const HOST = socketType + location.origin.split(":")[1];
const socket = new WebSocket(HOST);
socket.onopen = function() {
  console.log("Socket connected.");
};
socket.onclose = function(event) {
  if (event.wasClean) console.log("Socket connection closed clean");
  else console.log("Socket connection closed with error");
  console.log(`Code: ${event.code} reason:${event.reason}`);
};
socket.onmessage = function(event) {
  chatSetCurrentMessages(JSON.parse(event.data));
};
socket.onerror = function(error) {
  console.log(`Error ${error.message}error.message`);
};

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
    this.props.chatGetUsersNamesFun(this.props.auth.localId);
    if (this.props.chat.messages.length === 0)
      this.props.chatGetCurMessagesFun(this.props.chat.room);
    else
      this.setState({ currentLengthMessages: this.props.chat.messages.length });
    if (socket.readyState === 1) {
      socket.onmessage = event => {
        this.props.chatSetCurrentMessagesFun(JSON.parse(event.data));
      };
    }
    const www = document.querySelector(".chat__head__view__port");
    www.scrollTop = www.scrollHeight;
    this.props.getChatRoomsFun();
  }

  componentWillUnmount() {
    this.props.chatNewMessageOffFun();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.chat.messages.length !== this.props.chat.messages.length)
      this.setState({ currentLengthMessages: this.props.chat.messages.length });
    if (prevProps.chat.room !== this.props.chat.room) {
      this.props.chatNewMessageOffFun();
    }
    if (prevState.messageQty !== this.state.messageQty) {
      this.props.chatNewMessageOffFun();
    }
    if (
      prevProps.chat.messages.length !== this.props.chat.messages.length &&
      prevProps.chat.messages.length === 0
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
    localStorage.setItem("id", this.props.auth.localId);
    localStorage.setItem("nameChanged", "true");
    if (
      this.props.chat.userNameValue.length < 5 ||
      this.props.chat.userNameValue.length > 20
    ) {
      this.setState({ badName: true });
    } else {
      let data = {
        name: this.props.chat.userNameValue
      };
      this.props.chatSetUserNameFun(data, this.props.auth.localId);
    }
  };

  sendMessageHanlder = () => {
    if (this.props.chat.userName.length === 0) {
      this.setState({ badName: true });
    } else if (this.props.chat.messageValue.length > 100) {
      this.setState({ longMesssage: true });
    } else if (this.props.chat.messageValue.length === 0) {
      this.setState({ badMessage: true });
    } else {
      let data = {
        name: this.props.chat.userName,
        message: this.props.chat.messageValue,
        room: this.props.chat.room,
        id: this.props.auth.localId,
        createAt: new Date().getTime()
      };
      socket.send(JSON.stringify(data));
      this.props.chatResetMessageInputFun();
    }
  };

  resetLoadMoreHandler = () => {
    this.setState({ loadMore: false });
  };

  scrollHandler = event => {
    if (
      event.target.scrollTop === 0 &&
      this.state.messageQty === this.state.currentLengthMessages
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
        <Modal toggle={this.state.longMesssage}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ longMesssage: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              Too long message (it must be 100 symbols max)
            </div>
          </div>
        </Modal>
        <Modal toggle={this.state.badName}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badName: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              User name must be longer 5 symbols and shorter 20 symbols length
            </div>
          </div>
        </Modal>
        <Modal toggle={this.state.badMessage}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badMessage: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              You must enter some text in the message field
            </div>
          </div>
        </Modal>
        <Modal toggle={this.props.chat.modal}>
          <div>
            <Spinner />
          </div>
        </Modal>
        <div className="chat__main__cover">
          <div className="chat__rooms__cover">
            <div className="chat__rooms__select__cover">
              <button
                onClick={this.toggleSelectRoomsHandler}
                className="chat__create__room__btn"
              >
                Choose room
              </button>
              <ModalSlide toggle={this.state.showList}>
                <Rooms
                  rooms={this.props.chat.rooms}
                  choose={this.props.chatChooseRoomFun}
                  toggle={this.toggleSelectRoomsHandler}
                  resetLoadmore={this.resetLoadMoreHandler}
                />
              </ModalSlide>
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
            {this.props.chat.role == "admin" ? (
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
              onScroll={event => this.scrollHandler(event)}
            >
              {this.props.chat.messages.length > 0
                ? this.props.chat.messages.map(item => {
                    return (
                      <div
                        key={item._id.toString()}
                        className={
                          this.props.auth.localId == item.id
                            ? "chat__message__cover relative"
                            : " relative"
                        }
                      >
                        <span
                          className="chat__message__delete__single"
                          onClick={() =>
                            this.props.auth.localId === item.id
                              ? this.props.chatDeleteMessageFun(item._id)
                              : false
                          }
                        ></span>
                        <p className="chat__message__name">{item.name}</p>
                        <p className="chat__message__message">{item.message}</p>
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
    createChatRoomFun: str => dispatch(createChatRoom(str)),
    chatOnInputFun: event => dispatch(chatOnInput(event)),
    chatChooseRoomFun: room => dispatch(chatChooseRoom(room)),
    chatOnMessageInputFun: event => dispatch(chatOnMessageInput(event)),
    chatSetUserNameFun: (data, id) => dispatch(chatSetUserName(data, id)),
    chatOnNameInputFun: event => dispatch(chatOnNameInput(event)),
    chatDeleteUserNameFun: () => dispatch(chatDeleteUserName()),
    chatDeleteMessageFun: id => dispatch(chatDeleteMessage(id)),
    chatNewMessageOnFun: () => dispatch(chatNewMessageOn()),
    chatNewMessageOffFun: () => dispatch(chatNewMessageOff()),
    chatGetUsersNamesFun: id => dispatch(chatGetUsersNames(id)),
    chatSetCurrentMessagesFun: data => dispatch(chatSetCurrentMessages(data)),
    chatResetMessageInputFun: () => dispatch(chatResetMessageInput()),
    chatGetCurMessagesFun: room => dispatch(chatGetCurMessages(room)),
    getChatRoomsFun: () => dispatch(getChatRooms())
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
