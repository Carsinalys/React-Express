(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    245: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9),
            _AC_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4),
            _hoc_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11),
            react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              5
            ),
            _pizzaBuilderShowReviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              321
            ),
            _pizzaBuilder_pizzaBuilderSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              15
            ),
            enterModule;
          function _typeof(e) {
            return (_typeof =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function(e) {
                    return typeof e;
                  }
                : function(e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  })(e);
          }
          function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function _defineProperties(e, t) {
            for (var r = 0; r < t.length; r++) {
              var a = t[r];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          function _createClass(e, t, r) {
            return (
              t && _defineProperties(e.prototype, t),
              r && _defineProperties(e, r),
              e
            );
          }
          function _possibleConstructorReturn(e, t) {
            return !t || ("object" !== _typeof(t) && "function" != typeof t)
              ? _assertThisInitialized(e)
              : t;
          }
          function _getPrototypeOf(e) {
            return (_getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
          }
          function _assertThisInitialized(e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          }
          function _inherits(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              t && _setPrototypeOf(e, t);
          }
          function _setPrototypeOf(e, t) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function(e, t) {
                return (e.__proto__ = t), e;
              })(e, t);
          }
          function _defineProperty(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (e[t] = r),
              e
            );
          }
          (enterModule =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.enterModule
              : void 0),
            enterModule && enterModule(module);
          var __signature__ =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default.signature
                : function(e) {
                    return e;
                  },
            Reviews = (function(_React$Component) {
              function Reviews() {
                var e, t;
                _classCallCheck(this, Reviews);
                for (
                  var r = arguments.length, a = new Array(r), o = 0;
                  o < r;
                  o++
                )
                  a[o] = arguments[o];
                return (
                  _defineProperty(
                    _assertThisInitialized(
                      (t = _possibleConstructorReturn(
                        this,
                        (e = _getPrototypeOf(Reviews)).call.apply(
                          e,
                          [this].concat(a)
                        )
                      ))
                    ),
                    "state",
                    { currentPage: 1, modal: !1 }
                  ),
                  _defineProperty(
                    _assertThisInitialized(t),
                    "currentPageHandler",
                    function(e) {
                      t.setState({ currentPage: e });
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(t),
                    "deleteReviewHandler",
                    function(e) {
                      t.props.deleteReviewFun(e);
                    }
                  ),
                  t
                );
              }
              return (
                _inherits(Reviews, _React$Component),
                _createClass(Reviews, [
                  {
                    key: "componentDidMount",
                    value: function() {
                      if (
                        this.props.location.pathname.indexOf("/reviews/") >= 0
                      ) {
                        var e = this.props.location.pathname
                          .replace("/reviews/", "")
                          .trim();
                        this.props.getReviews("?page=".concat(e, "&limit=5")),
                          this.setState({ currentPage: e });
                      } else this.props.getReviews("?page=1&limit=5");
                    }
                  },
                  {
                    key: "render",
                    value: function() {
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "container reviews_container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_3__.a,
                          { toggle: this.props.isLoading },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _pizzaBuilder_pizzaBuilderSpinner__WEBPACK_IMPORTED_MODULE_6__.a,
                            null
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_3__.a,
                          { toggle: this.props.reviews.modal },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _pizzaBuilder_pizzaBuilderSpinner__WEBPACK_IMPORTED_MODULE_6__.a,
                            null
                          )
                        ),
                        this.props.getReviews
                          ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              _pizzaBuilderShowReviews__WEBPACK_IMPORTED_MODULE_5__.a,
                              {
                                reviews: this.props.reviews.reviews,
                                auth: this.props.auth.isAuthindicated,
                                pagination: this.props.reviews.pagination,
                                changeCurPage: this.currentPageHandler,
                                changePage: this.props.getReviews,
                                currentPageNum: this.state.currentPage,
                                edit: this.props.editReviewFun,
                                removeReview: this.deleteReviewHandler,
                                id: this.props.auth.localId,
                                isEditMode: this.props.isEditMode
                              }
                            )
                          : null
                      );
                    }
                  },
                  {
                    key: "__reactstandin__regenerateByEval",
                    value: function __reactstandin__regenerateByEval(
                      key,
                      code
                    ) {
                      this[key] = eval(code);
                    }
                  }
                ]),
                Reviews
              );
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),
            stateToProps = function(e) {
              return {
                isLoading: e.reviews.isLoading,
                getReviews: e.reviews.getReviews,
                isEditMode: e.reviews.editMode,
                reviews: e.reviews,
                auth: e.auth
              };
            },
            dispatchToProps = function(e) {
              return {
                getReviews: function(t) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_2__.N)(t));
                },
                editReviewFun: function(t) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_2__.B)(t));
                },
                deleteReviewFun: function(t) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_2__.A)(t));
                }
              };
            },
            _default = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.g)(
              Object(react_redux__WEBPACK_IMPORTED_MODULE_1__.b)(
                stateToProps,
                dispatchToProps
              )(Reviews)
            ),
            reactHotLoader,
            leaveModule;
          (__webpack_exports__.default = _default),
            (reactHotLoader =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                Reviews,
                "Reviews",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaReviews\\pizzaBuilderReviews.js"
              ),
              reactHotLoader.register(
                stateToProps,
                "stateToProps",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaReviews\\pizzaBuilderReviews.js"
              ),
              reactHotLoader.register(
                dispatchToProps,
                "dispatchToProps",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaReviews\\pizzaBuilderReviews.js"
              ),
              reactHotLoader.register(
                _default,
                "default",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaReviews\\pizzaBuilderReviews.js"
              )),
            (leaveModule =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module);
        }.call(this, __webpack_require__(2)(module));
    },
    321: function(e, t, r) {
      "use strict";
      (function(e) {
        var a,
          o = r(0),
          n = r.n(o),
          i = r(7),
          _ = r(5),
          l = r(322),
          s = r(323),
          c = r(11);
        function d(e, t) {
          return (
            (function(e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function(e, t) {
              if (
                !(
                  Symbol.iterator in Object(e) ||
                  "[object Arguments]" === Object.prototype.toString.call(e)
                )
              )
                return;
              var r = [],
                a = !0,
                o = !1,
                n = void 0;
              try {
                for (
                  var i, _ = e[Symbol.iterator]();
                  !(a = (i = _.next()).done) &&
                  (r.push(i.value), !t || r.length !== t);
                  a = !0
                );
              } catch (e) {
                (o = !0), (n = e);
              } finally {
                try {
                  a || null == _.return || _.return();
                } finally {
                  if (o) throw n;
                }
              }
              return r;
            })(e, t) ||
            (function() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            })()
          );
        }
        (a =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && a(e);
        var u =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default.signature
              : function(e) {
                  return e;
                },
          p = function(e) {
            var t = d(Object(o.useState)(!1), 2),
              r = t[0],
              a = t[1],
              u = d(Object(o.useState)(null), 2),
              p = u[0],
              v = u[1];
            return n.a.createElement(
              "div",
              { className: "reviews__main__cover" },
              n.a.createElement(
                c.a,
                { toggle: r },
                n.a.createElement(
                  "div",
                  { className: "modal__delete" },
                  n.a.createElement(
                    "div",
                    { className: "modal__delete__cover" },
                    n.a.createElement(
                      "div",
                      null,
                      n.a.createElement("h3", null, "Are you shure?")
                    ),
                    n.a.createElement(
                      "div",
                      { className: "modal__delete__buttons__cover" },
                      n.a.createElement(
                        "button",
                        {
                          className: "modal__delete__button",
                          onClick: function() {
                            e.removeReview(p), a(!1);
                          }
                        },
                        "Yes"
                      ),
                      n.a.createElement(
                        "button",
                        {
                          className: "modal__delete__button",
                          onClick: function() {
                            return a(!1);
                          }
                        },
                        "Cancel"
                      )
                    )
                  )
                )
              ),
              n.a.createElement(
                "div",
                { className: "reviews__cover__global" },
                Object.keys(e.reviews).map(function(t) {
                  return n.a.createElement(
                    "section",
                    { className: "review", key: t },
                    e.id === e.reviews[t].id
                      ? n.a.createElement(
                          "span",
                          {
                            className: "reviews__edit_btn",
                            "data-id": e.reviews[t]._id,
                            onClick: function(t) {
                              return e.edit(t);
                            }
                          },
                          "edit"
                        )
                      : null,
                    e.id === e.reviews[t].id
                      ? n.a.createElement(
                          "span",
                          {
                            className: "reviews__edit_btn",
                            "data-id": e.reviews[t]._id,
                            onClick: function(e) {
                              a(!0), v(e.target.dataset.id);
                            }
                          },
                          "delete"
                        )
                      : null,
                    n.a.createElement(
                      "div",
                      { className: "review__head" },
                      n.a.createElement(
                        "p",
                        { className: "review__author" },
                        e.reviews[t].name
                      ),
                      n.a.createElement(
                        "p",
                        { className: "review__rating" },
                        (function(t) {
                          for (var r = [], a = 0, o = 0; o < 5; o++)
                            a < +e.reviews[t].rating
                              ? (r.push(n.a.createElement(l.a, { key: t + o })),
                                a++)
                              : a < 6 &&
                                (r.push(n.a.createElement(s.a, { key: t + o })),
                                a++);
                          return r;
                        })(t)
                      ),
                      n.a.createElement(
                        "p",
                        { className: "review__date" },
                        e.reviews[t].date.split("T")[0]
                      )
                    ),
                    n.a.createElement(
                      "div",
                      { className: "review__body" },
                      n.a.createElement(
                        "p",
                        { className: "review__text" },
                        e.reviews[t].text
                      )
                    )
                  );
                })
              ),
              n.a.createElement(
                "div",
                { className: "pagination__list" },
                (function() {
                  for (
                    var t = [],
                      r = function(r) {
                        var a = "/reviews/".concat(r + 1);
                        t.push(
                          n.a.createElement(
                            i.c,
                            {
                              to: a,
                              key: r,
                              onClick: function() {
                                e.changePage(
                                  "?page=".concat(r + 1, "&limit=5")
                                ),
                                  e.changeCurPage(r + 1);
                              },
                              className:
                                e.currentPageNum == r + 1
                                  ? "pagination__item pagination__item_active"
                                  : "pagination__item"
                            },
                            r + 1
                          )
                        );
                      },
                      a = 0;
                    a < e.pagination;
                    a++
                  )
                    r(a);
                  return t;
                })()
              ),
              e.auth
                ? n.a.createElement(
                    "div",
                    { className: "review__add__btn__cover" },
                    n.a.createElement(
                      "button",
                      { className: "review__add__btn" },
                      n.a.createElement(
                        i.b,
                        { to: "/reviews/addReview" },
                        "Add new review"
                      )
                    )
                  )
                : null,
              e.isEditMode
                ? n.a.createElement(_.a, { to: "/reviews/addReview" })
                : null
            );
          };
        u(p, "useState{[modal, setModal](false)}\nuseState{[id, setId](null)}");
        var v,
          f,
          E = p;
        (t.a = E),
          (v =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (v.register(
              p,
              "showReviews",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaReviews\\pizzaBuilderShowReviews.js"
            ),
            v.register(
              E,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaReviews\\pizzaBuilderShowReviews.js"
            )),
          (f =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && f(e);
      }.call(this, r(2)(e)));
    },
    322: function(e, t, r) {
      "use strict";
      (function(e) {
        r.d(t, "a", function() {
          return l;
        });
        var a,
          o = r(0),
          n = r.n(o);
        (a =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && a(e);
        var i, _;
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        function l(e) {
          return n.a.createElement(
            "svg",
            {
              className: "review__star__icon",
              version: "1.1",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            },
            n.a.createElement("path", {
              d:
                "M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"
            })
          );
        }
        (i =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default
            : void 0) &&
          i.register(
            l,
            "Star",
            "E:\\coding\\Works\\React+Express\\src\\js\\icons\\star.js"
          ),
          (_ =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && _(e);
      }.call(this, r(2)(e)));
    },
    323: function(e, t, r) {
      "use strict";
      (function(e) {
        r.d(t, "a", function() {
          return l;
        });
        var a,
          o = r(0),
          n = r.n(o);
        (a =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && a(e);
        var i, _;
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        function l(e) {
          return n.a.createElement(
            "svg",
            {
              className: "review__star__icon review__star__icon__inactive",
              version: "1.1",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg"
            },
            n.a.createElement("path", {
              d:
                "M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"
            })
          );
        }
        (i =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.default
            : void 0) &&
          i.register(
            l,
            "Star",
            "E:\\coding\\Works\\React+Express\\src\\js\\icons\\starEmpty.js"
          ),
          (_ =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && _(e);
      }.call(this, r(2)(e)));
    }
  }
]);
