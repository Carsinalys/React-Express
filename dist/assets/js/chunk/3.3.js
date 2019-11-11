(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    240: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9),
            react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              5
            ),
            _pizzaBuilderModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              273
            ),
            _pizzaBuilder_pizzaBuilderIconsIngredients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              247
            ),
            _AC_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4),
            _hoc_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11),
            _pizzaBuilder_pizzaBuilderSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              15
            ),
            _pizzaBuilderBuildsReviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              274
            ),
            _pizzaBuilderReviewModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
              275
            ),
            _pizzaBuilderReviewsModalShow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
              276
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
          function ownKeys(e, _) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              _ &&
                (a = a.filter(function(_) {
                  return Object.getOwnPropertyDescriptor(e, _).enumerable;
                })),
                t.push.apply(t, a);
            }
            return t;
          }
          function _objectSpread(e) {
            for (var _ = 1; _ < arguments.length; _++) {
              var t = null != arguments[_] ? arguments[_] : {};
              _ % 2
                ? ownKeys(t, !0).forEach(function(_) {
                    _defineProperty(e, _, t[_]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(t)
                  )
                : ownKeys(t).forEach(function(_) {
                    Object.defineProperty(
                      e,
                      _,
                      Object.getOwnPropertyDescriptor(t, _)
                    );
                  });
            }
            return e;
          }
          function _classCallCheck(e, _) {
            if (!(e instanceof _))
              throw new TypeError("Cannot call a class as a function");
          }
          function _defineProperties(e, _) {
            for (var t = 0; t < _.length; t++) {
              var a = _[t];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          function _createClass(e, _, t) {
            return (
              _ && _defineProperties(e.prototype, _),
              t && _defineProperties(e, t),
              e
            );
          }
          function _possibleConstructorReturn(e, _) {
            return !_ || ("object" !== _typeof(_) && "function" != typeof _)
              ? _assertThisInitialized(e)
              : _;
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
          function _inherits(e, _) {
            if ("function" != typeof _ && null !== _)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(_ && _.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 }
            })),
              _ && _setPrototypeOf(e, _);
          }
          function _setPrototypeOf(e, _) {
            return (_setPrototypeOf =
              Object.setPrototypeOf ||
              function(e, _) {
                return (e.__proto__ = _), e;
              })(e, _);
          }
          function _defineProperty(e, _, t) {
            return (
              _ in e
                ? Object.defineProperty(e, _, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (e[_] = t),
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
            Builds = (function(_React$Component) {
              function Builds() {
                var e, _;
                _classCallCheck(this, Builds);
                for (
                  var t = arguments.length, a = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  a[r] = arguments[r];
                return (
                  _defineProperty(
                    _assertThisInitialized(
                      (_ = _possibleConstructorReturn(
                        this,
                        (e = _getPrototypeOf(Builds)).call.apply(
                          e,
                          [this].concat(a)
                        )
                      ))
                    ),
                    "state",
                    {
                      modalIsShow: !1,
                      selectedItem: "",
                      redirect: !1,
                      minusModal: !1,
                      reviewModal: !1,
                      reviewModalEdit: !1,
                      curBuildModalId: "",
                      reviewsModalShow: !1
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(_),
                    "minusHandler",
                    function(e) {
                      _.setState({ minusModal: !0 });
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(_),
                    "toggleModalHandler",
                    function() {
                      _.setState({ modalIsShow: !1 });
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(_),
                    "redirectHandler",
                    function() {
                      _.setState({ redirect: !0 });
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(_),
                    "handleScroll",
                    function(e) {
                      var _ = document.querySelectorAll(".ready__build__cover"),
                        t = document.querySelectorAll(
                          ".ready__build__single__pic"
                        );
                      _.forEach(function(e, _) {
                        document.documentElement.scrollTop >=
                          e.offsetTop - 3 * e.offsetHeight &&
                          t[_].classList.add(
                            "ready__build__single__pic_active"
                          );
                      });
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(_),
                    "toggleReviewModalHandler",
                    function(e) {
                      _.setState(function(e) {
                        return {
                          reviewModal: !e.reviewModal,
                          reviewModalEdit: !1
                        };
                      }),
                        "edit" === e &&
                          _.setState(function(e) {
                            return { reviewModalEdit: !e.reviewModalEdit };
                          });
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(_),
                    "curBuildModalIdHandler",
                    function(e) {
                      _.setState({ curBuildModalId: e });
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(_),
                    "sendReviewHandler",
                    function(e, t) {
                      var a = _objectSpread({}, e);
                      (a.user = _.props.auth.localId),
                        (a.build = _.state.curBuildModalId),
                        t
                          ? _.props.sendEditedReviewFun(a)
                          : _.props.sendReviewFun(a);
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(_),
                    "showReviewsIdModalHandler",
                    function() {
                      _.setState(function(e) {
                        return { reviewsModalShow: !e.reviewsModalShow };
                      });
                    }
                  ),
                  _
                );
              }
              return (
                _inherits(Builds, _React$Component),
                _createClass(Builds, [
                  {
                    key: "componentDidMount",
                    value: function() {
                      this.handleScroll(),
                        document.addEventListener("scroll", this.handleScroll),
                        this.props.getBuildsFun();
                    }
                  },
                  {
                    key: "componentWillUnmount",
                    value: function() {
                      document.removeEventListener("scroll", this.handleScroll);
                    }
                  },
                  {
                    key: "componentDidUpdate",
                    value: function(e, _, t) {
                      e.builds.builds.length !==
                        this.props.builds.builds.length && this.handleScroll();
                    }
                  },
                  {
                    key: "render",
                    value: function() {
                      var e = this;
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "section",
                        { className: "ready__builds__main__cover" },
                        this.state.redirect
                          ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              react_router_dom__WEBPACK_IMPORTED_MODULE_2__.a,
                              { to: "/checkout" }
                            )
                          : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_6__.a,
                          { toggle: this.props.builds.isLoading },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _pizzaBuilder_pizzaBuilderSpinner__WEBPACK_IMPORTED_MODULE_7__.a,
                            null
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_6__.a,
                          { toggle: this.state.reviewsModalShow },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                              className: "modal__background",
                              onClick: this.showReviewsIdModalHandler
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              _pizzaBuilderReviewsModalShow__WEBPACK_IMPORTED_MODULE_10__.a,
                              { reviews: this.props.builds.reviews }
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_6__.a,
                          { toggle: this.state.modalIsShow },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                              className: "modal__background",
                              onClick: this.toggleModalHandler
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              _pizzaBuilderModal__WEBPACK_IMPORTED_MODULE_3__.a,
                              {
                                add: this.props.addFun,
                                redirect: this.redirectHandler,
                                curPizza: this.state.selectedItem,
                                builds: this.props.builds.builds
                              }
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_6__.a,
                          { toggle: this.state.reviewModal },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                              className: "modal__background",
                              onClick: this.toggleReviewModalHandler
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              _pizzaBuilderReviewModal__WEBPACK_IMPORTED_MODULE_9__.a,
                              {
                                modal: this.toggleReviewModalHandler,
                                send: this.sendReviewHandler,
                                edit: this.state.reviewModalEdit
                              }
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_6__.a,
                          { toggle: this.state.minusModal },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                              className: "modal__background",
                              onClick: function() {
                                return e.setState({ minusModal: !1 });
                              }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "div",
                              { className: "info__modal__cover" },
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "info__modal__title" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                  "h1",
                                  { className: "info__modal__title__text" },
                                  "You can`t delete ingredients from ready builds, but you can build your own pizza in pizza builder..."
                                )
                              )
                            )
                          )
                        ),
                        this.props.builds.builds.length > 0
                          ? this.props.builds.builds.map(function(_) {
                              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                {
                                  key: _.name,
                                  className: "ready__build__cover"
                                },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                  "h3",
                                  { className: "builds__pizza__title__text" },
                                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "span",
                                    { className: "builds__pizza__title" },
                                    _.name
                                  )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                  "div",
                                  { className: "ready__build__single__pic" },
                                  e.props.browser.safari
                                    ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "img",
                                        {
                                          src: "assets/img/".concat(
                                            _.name,
                                            ".png"
                                          ),
                                          alt: _.name
                                        }
                                      )
                                    : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                        "img",
                                        {
                                          src: "assets/img/webp/".concat(
                                            _.name,
                                            ".webp"
                                          ),
                                          alt: _.name
                                        }
                                      )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "single__build__ingredients__cover"
                                  },
                                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    _pizzaBuilder_pizzaBuilderIconsIngredients__WEBPACK_IMPORTED_MODULE_4__.a,
                                    {
                                      ingredients: _.ingredients,
                                      minus: e.minusHandler,
                                      showCross: "false",
                                      browser: e.props.browser
                                    }
                                  )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                  "div",
                                  { className: "single__build__params__cover" },
                                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "div",
                                    null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                      "p",
                                      null,
                                      "Weigth is: ",
                                      _.weight,
                                      "g."
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                      "p",
                                      null,
                                      "Cost is: ",
                                      _.cost,
                                      "$"
                                    ),
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                      "p",
                                      null,
                                      "Diameter is: ",
                                      _.diameter,
                                      "cm."
                                    )
                                  ),
                                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    _pizzaBuilderBuildsReviews__WEBPACK_IMPORTED_MODULE_8__.a,
                                    {
                                      auth: e.props.auth,
                                      reviews: _.reviews,
                                      modal: e.toggleReviewModalHandler,
                                      id: _._id,
                                      setId: e.curBuildModalIdHandler,
                                      showReviews:
                                        e.props.setCurReviewsToShowFun,
                                      showReviewsModal:
                                        e.showReviewsIdModalHandler
                                    }
                                  )
                                ),
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                  "div",
                                  { className: "single__build__order__cover" },
                                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                    "button",
                                    {
                                      className: "single__build__order",
                                      onClick: function() {
                                        return e.setState({
                                          modalIsShow: !0,
                                          selectedItem: _
                                        });
                                      }
                                    },
                                    "Order"
                                  )
                                )
                              );
                            })
                          : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "h1",
                              null,
                              "No builds yet"
                            )
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
                Builds
              );
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),
            stateToProps = function(e) {
              return { builds: e.builds, auth: e.auth, browser: e.browser };
            },
            dispatchToProps = function(e) {
              return {
                addFun: function(_) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_5__.S)(_));
                },
                getBuildsFun: function() {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_5__.I)());
                },
                sendReviewFun: function(_) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_5__.Y)(_));
                },
                sendEditedReviewFun: function(_) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_5__.X)(_));
                },
                setCurReviewsToShowFun: function(_) {
                  return e(
                    Object(_AC_index__WEBPACK_IMPORTED_MODULE_5__.bb)(_)
                  );
                }
              };
            },
            _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__.b)(
              stateToProps,
              dispatchToProps
            )(Builds),
            reactHotLoader,
            leaveModule;
          (__webpack_exports__.default = _default),
            (reactHotLoader =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                Builds,
                "Builds",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderBuilds\\pizzaBuilderBuilds.js"
              ),
              reactHotLoader.register(
                stateToProps,
                "stateToProps",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderBuilds\\pizzaBuilderBuilds.js"
              ),
              reactHotLoader.register(
                dispatchToProps,
                "dispatchToProps",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderBuilds\\pizzaBuilderBuilds.js"
              ),
              reactHotLoader.register(
                _default,
                "default",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderBuilds\\pizzaBuilderBuilds.js"
              )),
            (leaveModule =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module);
        }.call(this, __webpack_require__(2)(module));
    },
    247: function(e, _, t) {
      "use strict";
      (function(e) {
        var a,
          r = t(0),
          l = t.n(r);
        (a =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && a(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var i,
          o,
          n = function(e) {
            var _ = Object.keys(e.ingredients).map(function(_) {
              return e.ingredients[_].count > 0
                ? l.a.createElement(
                    "div",
                    { className: "pizza__view__icon", key: _ },
                    l.a.createElement(
                      "div",
                      { className: "pizza__view__icon__count" },
                      l.a.createElement(
                        "strong",
                        null,
                        e.ingredients[_].count,
                        "X"
                      )
                    ),
                    "false" == e.showCross
                      ? null
                      : l.a.createElement("div", {
                          className: "pizza__view__icon__delete",
                          "data-value": _,
                          onClick: function() {
                            return e.minus(event.target.dataset.value);
                          }
                        }),
                    l.a.createElement(
                      "div",
                      { className: "pizza__view__icon__pic" },
                      e.browser.safari
                        ? l.a.createElement("img", {
                            src: "assets/img/".concat(_, ".png"),
                            alt: _,
                            className: "pizza__view__icon__image"
                          })
                        : l.a.createElement("img", {
                            src: "assets/img/webp/".concat(_, ".webp"),
                            alt: _,
                            className: "pizza__view__icon__image"
                          })
                    )
                  )
                : null;
            });
            return l.a.createElement(
              "div",
              { className: "cover__for__indredient__icon" },
              _
            );
          },
          s = n;
        (_.a = s),
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (i.register(
              n,
              "icons",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderIconsIngredients.js"
            ),
            i.register(
              s,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderIconsIngredients.js"
            )),
          (o =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && o(e);
      }.call(this, t(2)(e)));
    },
    273: function(e, _, t) {
      "use strict";
      (function(e) {
        var a,
          r = t(0),
          l = t.n(r);
        (a =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && a(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var i,
          o,
          n = function(e) {
            return l.a.createElement(
              "div",
              { className: "ready__builds__modal__cover" },
              l.a.createElement(
                "div",
                { className: "ready__builds__modal__block" },
                l.a.createElement(
                  "div",
                  { className: "ready__builds__modal__title__cover" },
                  l.a.createElement(
                    "h3",
                    { className: "ready__builds__modal__title" },
                    "Choose option:"
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: "ready__builds__modal__btns__cover" },
                  l.a.createElement(
                    "div",
                    { className: "ready__builds__modal__btn__cover" },
                    l.a.createElement(
                      "button",
                      {
                        className: "ready__builds__modal__btn",
                        onClick: function() {
                          return e.add(e.curPizza);
                        }
                      },
                      "Add to list and contine"
                    )
                  ),
                  l.a.createElement(
                    "div",
                    { className: "ready__builds__modal__btn__cover" },
                    l.a.createElement(
                      "button",
                      {
                        className: "ready__builds__modal__btn",
                        onClick: function() {
                          e.add(e.curPizza), e.redirect();
                        }
                      },
                      "Add and proceed to checkout"
                    )
                  )
                )
              )
            );
          },
          s = n;
        (_.a = s),
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (i.register(
              n,
              "modal",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderBuilds\\pizzaBuilderModal.js"
            ),
            i.register(
              s,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderBuilds\\pizzaBuilderModal.js"
            )),
          (o =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && o(e);
      }.call(this, t(2)(e)));
    },
    274: function(e, _, t) {
      "use strict";
      (function(e) {
        var a,
          r = t(0),
          l = t.n(r);
        (a =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && a(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var i,
          o,
          n = function(e) {
            var _ = e.reviews.map(function(e) {
              return e.user;
            });
            return l.a.createElement(
              "div",
              { className: "builds__reviews__block__cover" },
              l.a.createElement(
                "div",
                {
                  className: "builds__review__preview__cover",
                  onClick: function() {
                    e.showReviews(e.reviews), e.showReviewsModal();
                  }
                },
                l.a.createElement(
                  "div",
                  { className: "builds__review__preview__stars__cover" },
                  (function() {
                    for (
                      var _,
                        t =
                          ((_ = 0),
                          e.reviews.map(function(e) {
                            return (_ += e.rating);
                          }),
                          Math.round(_ / e.reviews.length)),
                        a = [],
                        r = 0;
                      r < 5;
                      r++
                    )
                      r < t
                        ? a.push(
                            l.a.createElement(
                              "div",
                              { className: "add__review__star__cover", key: r },
                              l.a.createElement(
                                "svg",
                                {
                                  className: "build_review__star__icon",
                                  version: "1.1",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                },
                                l.a.createElement("path", {
                                  d:
                                    "M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"
                                })
                              )
                            )
                          )
                        : a.push(
                            l.a.createElement(
                              "div",
                              { className: "add__review__star__cover", key: r },
                              l.a.createElement(
                                "svg",
                                {
                                  className:
                                    "build_review__star__icon build_review__star__icon__inactive",
                                  version: "1.1",
                                  viewBox: "0 0 24 24",
                                  xmlns: "http://www.w3.org/2000/svg"
                                },
                                l.a.createElement("path", {
                                  d:
                                    "M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"
                                })
                              )
                            )
                          );
                    return a;
                  })()
                ),
                " ",
                l.a.createElement(
                  "span",
                  { className: "builds__review__preview__count" },
                  "(",
                  e.reviews.length,
                  ")"
                )
              ),
              e.auth.isAuthindicated && _.includes(e.auth.localId)
                ? l.a.createElement(
                    "span",
                    {
                      className: "builds__add__review__btn",
                      onClick: function() {
                        e.modal("edit"), e.setId(e.id);
                      }
                    },
                    "Edit review"
                  )
                : e.auth.isAuthindicated
                ? l.a.createElement(
                    "span",
                    {
                      className: "builds__add__review__btn",
                      onClick: function() {
                        e.modal(), e.setId(e.id);
                      }
                    },
                    "Write review"
                  )
                : null
            );
          },
          s = n;
        (_.a = s),
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (i.register(
              n,
              "buildsReviews",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderBuilds\\pizzaBuilderBuildsReviews.js"
            ),
            i.register(
              s,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderBuilds\\pizzaBuilderBuildsReviews.js"
            )),
          (o =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && o(e);
      }.call(this, t(2)(e)));
    },
    275: function(e, _, t) {
      "use strict";
      (function(e) {
        var a,
          r = t(0),
          l = t.n(r);
        function i(e, _) {
          return (
            (function(e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function(e, _) {
              if (
                !(
                  Symbol.iterator in Object(e) ||
                  "[object Arguments]" === Object.prototype.toString.call(e)
                )
              )
                return;
              var t = [],
                a = !0,
                r = !1,
                l = void 0;
              try {
                for (
                  var i, o = e[Symbol.iterator]();
                  !(a = (i = o.next()).done) &&
                  (t.push(i.value), !_ || t.length !== _);
                  a = !0
                );
              } catch (e) {
                (r = !0), (l = e);
              } finally {
                try {
                  a || null == o.return || o.return();
                } finally {
                  if (r) throw l;
                }
              }
              return t;
            })(e, _) ||
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
        var o =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default.signature
              : function(e) {
                  return e;
                },
          n = function(e) {
            var _ = i(Object(r.useState)(3), 2),
              t = _[0],
              a = _[1],
              o = i(Object(r.useState)(!1), 2),
              n = o[0],
              s = o[1],
              d = i(Object(r.useState)(!1), 2),
              c = d[0],
              u = d[1],
              m = new RegExp(/^[a-zA-Z][a-zA-Z0-9-_ .]{5,20}$/),
              E = new RegExp(/^[a-zA-Z][a-zA-Z0-9-_ .,)(!?]{5,200}$/);
            return l.a.createElement(
              "div",
              { className: "builds__modal__reviews__cover" },
              l.a.createElement(
                "div",
                {
                  className: "builds__modal__reviews__add__cover",
                  onClick: function(e) {
                    return e.stopPropagation();
                  }
                },
                l.a.createElement(
                  "form",
                  {
                    action: "#",
                    id: "builds__review__form",
                    onSubmit: function(e) {
                      return e.preventDefault();
                    }
                  },
                  l.a.createElement(
                    "div",
                    { className: "builds__modal__reviews__add__name__cover" },
                    l.a.createElement(
                      "label",
                      { htmlFor: "builds__review__name" },
                      "Enter your name:"
                    ),
                    l.a.createElement("input", {
                      onChange: function(e) {
                        return s(m.test(e.target.value));
                      },
                      type: "text",
                      id: "builds__review__name",
                      placeholder: "Name",
                      className: n
                        ? "builds__modal__reviews__add__name__input"
                        : "builds__modal__reviews__add__name__input builds__modal__reviews__add__name__input_error"
                    })
                  ),
                  l.a.createElement(
                    "div",
                    null,
                    l.a.createElement("div", null, "Rating:"),
                    l.a.createElement(
                      "div",
                      { className: "author__rating" },
                      l.a.createElement(
                        "div",
                        {
                          className: "add__review__star__cover",
                          onClick: function() {
                            return a("1");
                          }
                        },
                        l.a.createElement(
                          "svg",
                          {
                            className:
                              t > 0
                                ? "build_review__star__icon"
                                : "build_review__star__icon build_review__star__icon__inactive",
                            version: "1.1",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg"
                          },
                          l.a.createElement("path", {
                            d:
                              "M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"
                          })
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "add__review__star__cover",
                          onClick: function() {
                            return a("2");
                          }
                        },
                        l.a.createElement(
                          "svg",
                          {
                            className:
                              t > 1
                                ? "build_review__star__icon"
                                : "build_review__star__icon build_review__star__icon__inactive",
                            version: "1.1",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg"
                          },
                          l.a.createElement("path", {
                            d:
                              "M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"
                          })
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "add__review__star__cover",
                          onClick: function() {
                            return a("3");
                          }
                        },
                        l.a.createElement(
                          "svg",
                          {
                            className:
                              t > 2
                                ? "build_review__star__icon"
                                : "build_review__star__icon build_review__star__icon__inactive",
                            version: "1.1",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg"
                          },
                          l.a.createElement("path", {
                            d:
                              "M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"
                          })
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "add__review__star__cover",
                          onClick: function() {
                            return a("4");
                          }
                        },
                        l.a.createElement(
                          "svg",
                          {
                            className:
                              t > 3
                                ? "build_review__star__icon"
                                : "build_review__star__icon build_review__star__icon__inactive",
                            version: "1.1",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg"
                          },
                          l.a.createElement("path", {
                            d:
                              "M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"
                          })
                        )
                      ),
                      l.a.createElement(
                        "div",
                        {
                          className: "add__review__star__cover",
                          onClick: function() {
                            return a("5");
                          }
                        },
                        l.a.createElement(
                          "svg",
                          {
                            className:
                              t > 4
                                ? "build_review__star__icon"
                                : "build_review__star__icon build_review__star__icon__inactive",
                            version: "1.1",
                            viewBox: "0 0 24 24",
                            xmlns: "http://www.w3.org/2000/svg"
                          },
                          l.a.createElement("path", {
                            d:
                              "M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"
                          })
                        )
                      )
                    )
                  ),
                  l.a.createElement(
                    "div",
                    {
                      className: "builds__modal__reviews__add__comment__cover"
                    },
                    l.a.createElement(
                      "label",
                      { htmlFor: "builds__review__text" },
                      "Write your comment:"
                    ),
                    l.a.createElement("textarea", {
                      name: "comment",
                      id: "builds__review__text",
                      cols: "30",
                      rows: "10",
                      placeholder: "Comment",
                      className: c
                        ? "builds__modal__reviews__add__text"
                        : "builds__modal__reviews__add__text builds__modal__reviews__add__text_error",
                      onChange: function(e) {
                        return u(E.test(e.target.value));
                      }
                    })
                  ),
                  l.a.createElement(
                    "div",
                    { className: "builds__modal__reviews__add__btns__cover" },
                    l.a.createElement(
                      "div",
                      { className: "builds__modal__reviews__add__btn__cover" },
                      l.a.createElement(
                        "button",
                        {
                          className: "builds__modal__reviews__add__btn",
                          onClick: e.modal
                        },
                        "Cancel"
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "builds__modal__reviews__add__btn__cover" },
                      l.a.createElement(
                        "button",
                        {
                          type: "submit",
                          className: "builds__modal__reviews__add__btn",
                          onClick: function() {
                            if (n && c) {
                              var _ = {
                                name: document.querySelector(
                                  "#builds__review__name"
                                ).value,
                                text: document.querySelector(
                                  "#builds__review__text"
                                ).value,
                                rating: t
                              };
                              e.edit
                                ? (e.send(_, !0), e.modal())
                                : (e.send(_), e.modal());
                            }
                          }
                        },
                        "Confirm"
                      )
                    )
                  )
                )
              )
            );
          };
        o(
          n,
          "useState{[currentRating, setcurrentRating](3)}\nuseState{[nameValue, setnameValue](false)}\nuseState{[textValue, settextValue](false)}"
        );
        var s,
          d,
          c = n;
        (_.a = c),
          (s =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (s.register(
              n,
              "reviewsModal",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderBuilds\\pizzaBuilderReviewModal.js"
            ),
            s.register(
              c,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderBuilds\\pizzaBuilderReviewModal.js"
            )),
          (d =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && d(e);
      }.call(this, t(2)(e)));
    },
    276: function(e, _, t) {
      "use strict";
      (function(e) {
        var a,
          r = t(0),
          l = t.n(r);
        (a =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && a(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var i,
          o,
          n = function(e) {
            return l.a.createElement(
              "div",
              { className: "builds__modal__reviews__cover" },
              l.a.createElement(
                "div",
                {
                  className: "builds__modal__reviews__add__cover",
                  onClick: function(e) {
                    return e.stopPropagation();
                  }
                },
                l.a.createElement(
                  "div",
                  { className: "builds__modal__reviews__show__cover" },
                  e.reviews.length > 0
                    ? e.reviews.map(function(e) {
                        return l.a.createElement(
                          "div",
                          {
                            key: e._id.toString(),
                            className: "review__modal__show__cover"
                          },
                          l.a.createElement(
                            "div",
                            null,
                            l.a.createElement(
                              "p",
                              { className: "review__modal__show__title" },
                              e.name
                            )
                          ),
                          l.a.createElement(
                            "div",
                            { className: "review__modal__show__rating__cover" },
                            (function(e) {
                              for (var _ = [], t = 0; t < 5; t++)
                                t < e
                                  ? _.push(
                                      l.a.createElement(
                                        "div",
                                        {
                                          className: "add__review__star__cover",
                                          key: t
                                        },
                                        l.a.createElement(
                                          "svg",
                                          {
                                            className:
                                              "build_review__star__icon",
                                            version: "1.1",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg"
                                          },
                                          l.a.createElement("path", {
                                            d:
                                              "M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"
                                          })
                                        )
                                      )
                                    )
                                  : _.push(
                                      l.a.createElement(
                                        "div",
                                        {
                                          className: "add__review__star__cover",
                                          key: t
                                        },
                                        l.a.createElement(
                                          "svg",
                                          {
                                            className:
                                              "build_review__star__icon build_review__star__icon__inactive",
                                            version: "1.1",
                                            viewBox: "0 0 24 24",
                                            xmlns: "http://www.w3.org/2000/svg"
                                          },
                                          l.a.createElement("path", {
                                            d:
                                              "M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z"
                                          })
                                        )
                                      )
                                    );
                              return _;
                            })(e.rating)
                          ),
                          l.a.createElement(
                            "div",
                            { className: "review__modal__show__text__cover" },
                            l.a.createElement(
                              "p",
                              { className: "review__modal__show__text" },
                              e.text
                            )
                          ),
                          l.a.createElement(
                            "div",
                            { className: "review__modal__show__date__cover" },
                            l.a.createElement("p", null, e.date.split("T")[0])
                          )
                        );
                      })
                    : l.a.createElement("h1", null, "No rewiews.")
                )
              )
            );
          },
          s = n;
        (_.a = s),
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (i.register(
              n,
              "reviewsModalShow",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderBuilds\\pizzaBuilderReviewsModalShow.js"
            ),
            i.register(
              s,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderBuilds\\pizzaBuilderReviewsModalShow.js"
            )),
          (o =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && o(e);
      }.call(this, t(2)(e)));
    }
  }
]);
