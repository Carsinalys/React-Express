(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{130:function(e,t,a){e.exports=a.p+"assets/img/pacman.svg"},131:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(5),r=a(127),c=a.n(r),l=a(9),u=a(3),m=a(31),i=a(2),_=a(7),p=function(e){var t=e.rooms?e.rooms.map(function(t){return s.a.createElement("li",{key:t,className:"chat__room__item",onClick:function(){e.choose(t),e.toggle(),e.resetLoadmore()}},t)}):null;return s.a.createElement("ul",{className:"chat__room__list"},t)};function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}c.a.initializeApp({apiKey:"AIzaSyDyUaUeFIdEP-t40XognUX4nOFU5X2Uy8s",authDomain:"pizzabuilder-e9539.firebaseapp.com",databaseURL:"https://pizzabuilder-e9539.firebaseio.com",projectId:"pizzabuilder-e9539",storageBucket:"pizzabuilder-e9539.appspot.com",messagingSenderId:"131366940948",appId:"1:131366940948:web:e7dd40e9005f2e80"});var N=c.a.database(),y=function(e){function t(e){var a,n,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,s=g(t).call(this,e),a=!s||"object"!==h(s)&&"function"!=typeof s?f(n):s,v(f(a),"state",{showList:!1,badName:!1,badMessage:!1,longMesssage:!1,messageQty:100,currentLengthMessages:0}),v(f(a),"snapshotHandler",function(){return N.ref("chat/rooms/".concat(a.props.chat.room)).limitToLast(a.state.messageQty).on("value",function(e){a.props.chatSetCurrentMessagesFun(e.val()),a.props.chatNewMessageOnFun(),a.setState({currentLengthMessages:Object.keys(e.val()).length}),console.log(e.val())})}),v(f(a),"toggleSelectRoomsHandler",function(){a.state.showList?a.setState({showList:!1}):a.setState({showList:!0})}),v(f(a),"sendUserNameHandler",function(){if(a.props.chat.userNameValue.length<5||a.props.chat.userNameValue.length>20)a.setState({badName:!0});else{var e={name:a.props.chat.userNameValue};a.props.chatSetUserNameFun(e,a.props.auth.localId,a.props.auth.token)}}),v(f(a),"sendMessageHanlder",function(){if(0===a.props.chat.userName.length)a.setState({badName:!0});else if(a.props.chat.messageValue.length>100)a.setState({longMesssage:!0});else if(0===a.props.chat.messageValue.length)a.setState({badMessage:!0});else{var e={name:a.props.chat.userName,message:a.props.chat.messageValue,id:a.props.auth.localId};a.props.chatSendMessageFun(e,a.props.chat.room,a.props.auth.token)}}),v(f(a),"resetLoadMoreHandler",function(){a.setState({loadMore:!1})}),v(f(a),"scrollHandler",function(e){0===e.target.scrollTop&&a.state.messageQty==a.state.currentLengthMessages&&a.setState(function(e){return{messageQty:e.messageQty+100}})}),v(f(a),"keyDownHandler",function(e){"Enter"===e.key&&a.sendMessageHanlder()}),a.snapshotHandler(),a}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,s.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.props.chatGetRoomsFun(),this.props.chatGetUsersNamesFun()}},{key:"componentWillUnmount",value:function(){this.props.chatNewMessageOffFun()}},{key:"componentDidUpdate",value:function(e,t){if(e.chat.room!==this.props.chat.room&&(this.props.chatNewMessageOffFun(),this.snapshotHandler()),t.messageQty!==this.state.messageQty&&this.props.chatNewMessageOffFun(),Object.keys(e.chat.messages).length!==Object.keys(this.props.chat.messages).length&&0===Object.keys(e.chat.messages).length){var a=document.querySelector(".chat__head__view__port");a.scrollTop=a.scrollHeight}if(this.state.currentLengthMessages-t.currentLengthMessages==1||this.props.chat.room!==e.chat.room){var n=document.querySelector(".chat__head__view__port");n.scrollTop=n.scrollHeight}}},{key:"render",value:function(){var e=this;return s.a.createElement("section",{className:"chat__section"},this.props.auth.isAuthindicated?null:s.a.createElement(l.a,{to:"/"}),s.a.createElement(u.a,{toggle:this.state.longMesssage},s.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:function(){return e.setState({longMesssage:!1})}},s.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"Too long message (it must be 100 symbols max)"))),s.a.createElement(u.a,{toggle:this.state.badName},s.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:function(){return e.setState({badName:!1})}},s.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"User name must be longer 5 symbols and shorter 20 symbols length"))),s.a.createElement(u.a,{toggle:this.state.badMessage},s.a.createElement("div",{className:"pizza__view__order__small__modal",onClick:function(){return e.setState({badMessage:!1})}},s.a.createElement("div",{className:"pizza__view__order__small__modal__content"},"You must enter some text in the message field"))),s.a.createElement(u.a,{toggle:this.props.chat.modal},s.a.createElement("div",null,s.a.createElement(_.a,null))),s.a.createElement("div",{className:"chat__main__cover"},s.a.createElement("div",{className:"chat__rooms__cover"},s.a.createElement("div",{className:"chat__rooms__select__cover"},s.a.createElement("button",{onClick:this.toggleSelectRoomsHandler,className:"chat__create__room__btn"},"Choose room"),s.a.createElement(m.a,{toggle:this.state.showList},s.a.createElement(p,{rooms:this.props.chat.rooms,choose:this.props.chatChooseRoomFun,toggle:this.toggleSelectRoomsHandler,resetLoadmore:this.resetLoadMoreHandler}))),s.a.createElement("div",null,this.props.chat.userName.length>0?s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("p",null,"Your nickname: ",this.props.chat.userName)),s.a.createElement("div",null,s.a.createElement("span",{className:"chat__change__name__btn",onClick:function(){return e.props.chatDeleteUserNameFun(e.props.auth.localId,e.props.auth.token)}},"Change nickname"))):s.a.createElement("div",{className:"chat__set__name__cover"},s.a.createElement("div",{className:"chat__set__name__cover__single"},s.a.createElement("input",{type:"text",placeholder:"Enter your name...",value:this.props.chat.userNameValue,onChange:function(){return e.props.chatOnNameInputFun(event)},className:"chat__create__room__input"})),s.a.createElement("div",{className:"chat__set__name__cover__single"},s.a.createElement("button",{onClick:this.sendUserNameHandler,className:"chat__create__room__btn"},"Set name")))),"mYKWkMG6IycSekAIhOri8keBfFh1"==this.props.auth.localId?s.a.createElement("div",{className:"chat__create__room__cover"},s.a.createElement("div",{className:"chat__create__room__btn__cover"},s.a.createElement("input",{type:"text",placeholder:"room name...",className:"chat__create__room__input",value:this.props.chat.roomValue,onChange:function(){return e.props.chatOnInputFun(event)}})),s.a.createElement("div",{className:"chat__create__room__btn__cover"},s.a.createElement("button",{className:"chat__create__room__btn",onClick:function(){return e.props.createChatRoomFun(e.props.chat.roomValue,e.props.auth.token)}},"Create room"))):null),s.a.createElement("div",{className:"chat__currnet__room__cover"},s.a.createElement("p",null,"Current room:"," ",s.a.createElement("span",{className:"chat__room__name"},""!=this.props.chat.room?this.props.chat.room:null))),s.a.createElement("div",{className:"chat__head__cover"},s.a.createElement("div",{className:"chat__head__title"},"Message window:"),s.a.createElement("div",{className:"chat__head__view__port",onScroll:function(t){return e.scrollHandler(t)}},Object.keys(this.props.chat.messages).length>0?Object.keys(this.props.chat.messages).map(function(t){return s.a.createElement("div",{key:t,className:e.props.auth.localId==e.props.chat.messages[t].id?"chat__message__cover relative":" relative"},s.a.createElement("span",{className:"chat__message__delete__single",onClick:function(){return e.props.auth.localId==e.props.chat.messages[t].id&&e.props.chatDeleteMessageFun(t,e.props.chat.room,e.props.auth.token)}}),s.a.createElement("p",{className:"chat__message__name"},e.props.chat.messages[t].name),s.a.createElement("p",{className:"chat__message__message"},e.props.chat.messages[t].message))}):null)),s.a.createElement("div",{className:"chat__footer__cover"},s.a.createElement("input",{type:"text",placeholder:"Your message",className:"chat__footer__send__input",value:this.props.chat.messageValue,onChange:function(){return e.props.chatOnMessageInputFun(event)},onKeyPress:function(t){return e.keyDownHandler(t)}}),this.props.chat.sending?s.a.createElement("button",{className:"chat__footer__send__btn",onClick:this.sendMessageHanlder},"Send",s.a.createElement("img",{src:a(130),alt:"spinner",className:"chat__footer__send__btn__spinner"})):s.a.createElement("button",{className:"chat__footer__send__btn",onClick:this.sendMessageHanlder},"Send"))))}}])&&d(n.prototype,o),r&&d(n,r),t}();t.default=Object(o.b)(function(e){return{auth:e.auth,chat:e.chat}},function(e){return{createChatRoomFun:function(t,a){return e(Object(i.r)(t,a))},chatOnInputFun:function(t){return e(Object(i.l)(t))},chatChooseRoomFun:function(t){return e(Object(i.e)(t))},chatOnMessageInputFun:function(t){return e(Object(i.m)(t))},chatSendMessageFun:function(t,a,n){return e(Object(i.o)(t,a,n))},chatSetUserNameFun:function(t,a,n){return e(Object(i.q)(t,a,n))},chatOnNameInputFun:function(t){return e(Object(i.n)(t))},chatDeleteUserNameFun:function(t,a){return e(Object(i.g)(t,a))},chatDeleteMessageFun:function(t,a,n){return e(Object(i.f)(t,a,n))},chatNewMessageOnFun:function(){return e(Object(i.k)())},chatNewMessageOffFun:function(){return e(Object(i.j)())},chatGetRoomsFun:function(){return e(Object(i.h)())},chatGetUsersNamesFun:function(){return e(Object(i.i)())},chatSetCurrentMessagesFun:function(t){return e(Object(i.p)(t))}}})(y)}}]);