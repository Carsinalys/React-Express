(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{125:function(e,t){},128:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/img/pacman.svg"},133:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),o=a(14),c=a(12),l=a(78),i=a(98),m=a.n(i),u=a(7),_=a(20),h=function(e){var t=e.rooms?e.rooms.map((function(t){return s.a.createElement("li",{key:t._id.toString(),className:"chat__room__item",onClick:function(){e.choose(t.name),e.toggle(),e.resetLoadmore(),e.join(t.name),e.resetCounter(t.name),e.newMsgBanner()}},t.name,s.a.createElement("span",{className:"chat__room__item__newMsg"},e.newMsg[t.name]?" (".concat(e.newMsg[t.name],")"):null))})):null;return s.a.createElement("ul",{className:"chat__room__list"},t)},p=a(16),g=a(44),d=a(1);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?y(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var F=p.b+location.origin.split(":")[1],O=m()(F);O.on("connect",(function(){O.on("messageFromExpress",(function(e){console.log(e)}))})),O.on("disconnect",(function(){console.log("disconnected")})),O.on("messageToNav",(function(e){location.href.indexOf("chat")<0&&g.a.dispatch({type:d.J})}));var C=function(e){function t(){var e,a;v(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return M(y(a=N(this,(e=E(t)).call.apply(e,[this].concat(s)))),"state",{showList:!1,badName:!1,badMessage:!1,longMesssage:!1,messageQty:100,currentLengthMessages:0}),M(y(a),"toggleSelectRoomsHandler",(function(){a.state.showList?a.setState({showList:!1}):a.setState({showList:!0})})),M(y(a),"sendUserNameHandler",(function(){if(localStorage.setItem("id",a.props.auth.localId),localStorage.setItem("nameChanged","true"),a.props.chat.userNameValue.length<5||a.props.chat.userNameValue.length>20)a.setState({badName:!0});else{var e={name:a.props.chat.userNameValue};a.props.chatSetUserNameFun(e,a.props.auth.localId)}})),M(y(a),"sendMessageHanlder",(function(){if(0===a.props.chat.userName.length)a.setState({badName:!0});else if(a.props.chat.messageValue.length>100)a.setState({longMesssage:!0});else if(0===a.props.chat.messageValue.length)a.setState({badMessage:!0});else{var e={name:a.props.chat.userName,message:a.props.chat.messageValue,room:a.props.chat.room,id:a.props.auth.localId,createAt:(new Date).getTime()};O.emit("messageFromReact",e),a.props.chatResetMessageInputFun()}})),M(y(a),"resetLoadMoreHandler",(function(){a.setState({loadMore:!1})})),M(y(a),"scrollHandler",(function(e){0===e.target.scrollTop&&a.state.messageQty===a.state.currentLengthMessages&&a.setState((function(e){return{messageQty:e.messageQty+100}}))})),M(y(a),"keyDownHandler",(function(e){"Enter"===e.key&&a.sendMessageHanlder()})),M(y(a),"joinRoomHandler",(function(e){O.emit(e)})),a}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;this.props.chatGetUsersNamesFun(this.props.auth.localId),0===this.props.chat.messages.length?this.props.chatGetCurMessagesFun(this.props.chat.room):this.setState({currentLengthMessages:this.props.chat.messages.length}),O.connected&&O.on("messageToState",(function(t){e.props.chatSetCurrentMessagesFun(t),e.props.chatmessageFromAnotherRoomFun(t),e.props.chatNewMessageBannerFun()}));var t=document.querySelector(".chat__head__view__port");t.scrollTop=t.scrollHeight,this.props.getChatRoomsFun(),this.props.chatNewMessageOffFun(),O.emit("joinToDefault"),O.on("userCount",(function(t){e.props.userCountFun(t)}))}},{key:"componentDidUpdate",value:function(e,t){if(e.chat.messages.length!==this.props.chat.messages.length&&this.setState({currentLengthMessages:this.props.chat.messages.length}),e.chat.messages.length!==this.props.chat.messages.length||0===e.chat.messages.length){var a=document.querySelector(".chat__head__view__port");a.scrollTop=a.scrollHeight}if(this.state.currentLengthMessages-t.currentLengthMessages==1||this.props.chat.room!==e.chat.room){var n=document.querySelector(".chat__head__view__port");n.scrollTop=n.scrollHeight}}},{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"chat__section"},this.props.auth.isAuthindicated?null:s.a.createElement(o.a,{to:"/"}),s.a.createElement(c.a,{toggle:this.state.longMesssage},s.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:function(){return e.setState({longMesssage:!1})}},s.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"Too long message (it must be 100 symbols max)"))),s.a.createElement(c.a,{toggle:this.state.badName},s.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:function(){return e.setState({badName:!1})}},s.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"User name must be longer 5 symbols and shorter 20 symbols length"))),s.a.createElement(c.a,{toggle:this.state.badMessage},s.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:function(){return e.setState({badMessage:!1})}},s.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"You must enter some text in the message field"))),s.a.createElement(c.a,{toggle:this.props.chat.modal},s.a.createElement("div",null,s.a.createElement(_.a,null))),s.a.createElement("div",{className:"chat__main__cover"},s.a.createElement("div",{className:"chat__rooms__cover"},s.a.createElement("div",{className:"chat__rooms__select__cover"},s.a.createElement("button",{onClick:this.toggleSelectRoomsHandler,className:"chat__create__room__btn chat__create__room__btn_relative"},"Choose room",this.props.chat.newMsg&&"0"!==this.props.chat.newMsg?s.a.createElement("span",{className:"chat__create__room__btn_newBanner"},"1"):null),s.a.createElement(l.a,{toggle:this.state.showList},s.a.createElement(h,{rooms:this.props.chat.rooms,choose:this.props.chatChooseRoomFun,toggle:this.toggleSelectRoomsHandler,resetLoadmore:this.resetLoadMoreHandler,join:this.joinRoomHandler,resetCounter:this.props.chatmessageFromAnotherRoomResetFun,newMsg:this.props.chat.newMsgCounter,newMsgBanner:this.props.chatNewMessageBannerFun}))),s.a.createElement("div",null,this.props.chat.userName.length>0?s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",null,"Your nickname: ",this.props.chat.userName)),s.a.createElement("div",null,s.a.createElement("span",{className:"chat__change__name__btn",onClick:this.props.chatDeleteUserNameFun},"Change nickname"))):s.a.createElement("div",{className:"chat__set__name__cover"},s.a.createElement("div",{className:"chat__set__name__cover__single"},s.a.createElement("input",{type:"text",placeholder:"Enter your name...",value:this.props.chat.userNameValue,onChange:function(){return e.props.chatOnNameInputFun(event)},className:"chat__create__room__input"})),s.a.createElement("div",{className:"chat__set__name__cover__single"},s.a.createElement("button",{onClick:this.sendUserNameHandler,className:"chat__create__room__btn"},"Set name")))),"admin"==this.props.chat.role?s.a.createElement("div",{className:"chat__create__room__cover"},s.a.createElement("div",{className:"chat__create__room__btn__cover"},s.a.createElement("input",{type:"text",placeholder:"room name...",className:"chat__create__room__input",value:this.props.chat.roomValue,onChange:function(){return e.props.chatOnInputFun(event)}})),s.a.createElement("div",{className:"chat__create__room__btn__cover"},s.a.createElement("button",{className:"chat__create__room__btn",onClick:function(){return e.props.createChatRoomFun(e.props.chat.roomValue)}},"Create room"))):null),s.a.createElement("div",{className:"chat__currnet__room__cover"},s.a.createElement("p",null,"Current room:"," ",s.a.createElement("span",{className:"chat__room__name"},""!=this.props.chat.room?this.props.chat.room:null))),s.a.createElement("div",{className:"chat__head__cover"},s.a.createElement("div",{className:"chat__head__info"},s.a.createElement("div",{className:"chat__head__title"},"Message window:"),s.a.createElement("div",{className:"chat__head__info__users"},s.a.createElement("div",null,this.props.chat.userCount),s.a.createElement("div",{className:"chat__head__info__users__pic"},s.a.createElement("img",{src:"/assets/img/man.svg",alt:""})))),s.a.createElement("div",{className:"chat__head__view__port",onScroll:function(t){return e.scrollHandler(t)}},this.props.chat.messages.length>0?this.props.chat.messages.map((function(t){return s.a.createElement("div",{key:t._id.toString(),className:e.props.auth.localId==t.id?"chat__message__cover relative":" relative"},s.a.createElement("span",{className:"chat__message__delete__single",onClick:function(){return e.props.auth.localId===t.id&&e.props.chatDeleteMessageFun(t._id)}}),s.a.createElement("p",{className:"chat__message__name"},t.name),s.a.createElement("p",{className:"chat__message__date"},t.createAt.replace("T"," ").split(".")[0]),s.a.createElement("p",{className:"chat__message__message"},t.message))})):null)),s.a.createElement("div",{className:"chat__footer__cover"},s.a.createElement("input",{type:"text",placeholder:"Your message",className:"chat__footer__send__input",value:this.props.chat.messageValue,onChange:function(){return e.props.chatOnMessageInputFun(event)},onKeyPress:function(t){return e.keyDownHandler(t)}}),this.props.chat.sending?s.a.createElement("button",{className:"chat__footer__send__btn",onClick:this.sendMessageHanlder},"Send",s.a.createElement("img",{src:a(128),alt:"spinner",className:"chat__footer__send__btn__spinner"})):s.a.createElement("button",{className:"chat__footer__send__btn",onClick:this.sendMessageHanlder},"Send"))))}}])&&b(n.prototype,r),i&&b(n,i),t}(s.a.Component);t.default=Object(r.b)((function(e){return{auth:e.auth,chat:e.chat}}),(function(e){return{createChatRoomFun:function(t){return e(Object(u.y)(t))},chatOnInputFun:function(t){return e(Object(u.p)(t))},chatChooseRoomFun:function(t){return e(Object(u.h)(t))},chatOnMessageInputFun:function(t){return e(Object(u.q)(t))},chatSetUserNameFun:function(t,a){return e(Object(u.u)(t,a))},chatOnNameInputFun:function(t){return e(Object(u.r)(t))},chatDeleteUserNameFun:function(){return e(Object(u.j)())},chatDeleteMessageFun:function(t){return e(Object(u.i)(t))},chatNewMessageOnFun:function(){return e(Object(u.o)())},chatNewMessageOffFun:function(){return e(Object(u.n)())},chatGetUsersNamesFun:function(t){return e(Object(u.l)(t))},chatSetCurrentMessagesFun:function(t){return e(Object(u.t)(t))},chatResetMessageInputFun:function(){return e(Object(u.s)())},chatGetCurMessagesFun:function(t){return e(Object(u.k)(t))},getChatRoomsFun:function(){return e(Object(u.K)())},userCountFun:function(t){return e(Object(u.fb)(t))},chatmessageFromAnotherRoomFun:function(t){return e(Object(u.v)(t))},chatmessageFromAnotherRoomResetFun:function(t){return e(Object(u.w)(t))},chatNewMessageBannerFun:function(){return e(Object(u.m)())}}}))(C)},78:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(70);t.a=function(e){return s.a.createElement(r.a,{in:e.toggle,timeout:300,classNames:"select__global",mountOnEnter:!0,unmountOnExit:!0},e.children)}}}]);