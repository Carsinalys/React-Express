(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{132:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n(7),c=n(12),l=n(14),s=n(8);function u(e){return r.a.createElement("svg",{className:"review__star__icon",version:"1.1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"}))}function v(e){return r.a.createElement("svg",{className:"review__star__icon review__star__icon__inactive",version:"1.1",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"}))}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(e){var t=d(Object(a.useState)(!1),2),n=t[0],i=t[1],o=d(Object(a.useState)(null),2),m=o[0],p=o[1];return r.a.createElement("div",{className:"reviews__main__cover"},r.a.createElement(c.a,{toggle:n},r.a.createElement("div",{className:"modal__delete"},r.a.createElement("div",{className:"modal__delete__cover"},r.a.createElement("div",null,r.a.createElement("h3",null,"Are you shure?")),r.a.createElement("div",{className:"modal__delete__buttons__cover"},r.a.createElement("button",{className:"modal__delete__button",onClick:function(){e.removeReview(m),i(!1)}},"Yes"),r.a.createElement("button",{className:"modal__delete__button",onClick:function(){return i(!1)}},"Cancel"))))),r.a.createElement("div",{className:"reviews__cover__global"},e.reviews.map((function(t){return r.a.createElement("section",{className:"review",key:t._id},e.id===t.id?r.a.createElement("span",{className:"reviews__edit_btn","data-id":t._id,onClick:function(t){return e.edit(t.target.dataset.id)}},"edit"):null,e.id===t.id?r.a.createElement("span",{className:"reviews__edit_btn","data-id":t._id,onClick:function(e){i(!0),p(e.target.dataset.id)}},"delete"):null,r.a.createElement("div",{className:"review__head"},r.a.createElement("p",{className:"review__author"},t.name),r.a.createElement("p",{className:"review__rating"},function(e){for(var t=[],n=0,a=0;a<5;a++)n<+e.rating?(t.push(r.a.createElement(u,{key:e+a})),n++):n<6&&(t.push(r.a.createElement(v,{key:e+a})),n++);return t}(t)),r.a.createElement("p",{className:"review__date"},t.date.split("T")[0])),r.a.createElement("div",{className:"review__body"},r.a.createElement("p",{className:"review__text"},t.text)))}))),r.a.createElement("div",{className:"pagination__list"},function(){for(var t=[],n=function(n){var a="/reviews/".concat(n+1);t.push(r.a.createElement(s.c,{to:a,key:n,onClick:function(){e.changePage("page=".concat(n+1,"&limit=5")),e.changeCurPage(n+1)},className:e.currentPageNum==n+1?"pagination__item pagination__item_active":"pagination__item"},n+1))},a=0;a<e.pagination;a++)n(a);return t}()),e.auth?r.a.createElement("div",{className:"review__add__btn__cover"},r.a.createElement("button",{className:"review__add__btn"},r.a.createElement(s.b,{to:"/reviews/addReview"},"Add new review"))):null,e.isEditMode?r.a.createElement(l.a,{to:"/reviews/addReview"}):null)},p=n(20);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?b(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){function t(){var e,n;f(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return E(b(n=g(this,(e=h(t)).call.apply(e,[this].concat(r)))),"state",{currentPage:1,modal:!1}),E(b(n),"currentPageHandler",(function(e){n.setState({currentPage:e})})),E(b(n),"deleteReviewHandler",(function(e){n.props.deleteReviewFun(e)})),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){if(this.props.location.pathname.indexOf("/reviews/")>=0){var e=this.props.location.pathname.replace("/reviews/","").trim();this.props.getReviews("page=".concat(e,"&limit=5")),this.setState({currentPage:e})}else this.props.getReviews("page=1&limit=5")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container reviews_container"},r.a.createElement(c.a,{toggle:this.props.isLoading},r.a.createElement(p.a,null)),r.a.createElement(c.a,{toggle:this.props.reviews.modal},r.a.createElement(p.a,null)),this.props.getReviews?r.a.createElement(m,{reviews:this.props.reviews.reviews,auth:this.props.auth.isAuthindicated,pagination:this.props.reviews.pagination,changeCurPage:this.currentPageHandler,changePage:this.props.getReviews,currentPageNum:this.state.currentPage,edit:this.props.editReviewFun,removeReview:this.deleteReviewHandler,id:this.props.auth.localId,isEditMode:this.props.isEditMode}):null)}}])&&w(n.prototype,a),i&&w(n,i),t}(r.a.Component);t.default=Object(l.g)(Object(i.b)((function(e){return{isLoading:e.reviews.isLoading,getReviews:e.reviews.getReviews,isEditMode:e.reviews.editMode,reviews:e.reviews,auth:e.auth}}),(function(e){return{getReviews:function(t){return e(Object(o.O)(t))},editReviewFun:function(t){return e(Object(o.C)(t))},deleteReviewFun:function(t){return e(Object(o.B)(t))}}}))(N))}}]);