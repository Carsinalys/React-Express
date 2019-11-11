(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    243: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              5
            ),
            react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9),
            _AC_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4),
            _pizzaBuilderPizza__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              313
            ),
            _pizzaByilderControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              314
            ),
            _hoc_cover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(315),
            _pizzaBuilderUlSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              316
            ),
            _pizzaBuilderOrder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              317
            ),
            _hoc_modalBuilder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
              318
            ),
            _pizzaBuilderModalContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
              319
            ),
            _pizzaBuilderMultiShow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
              259
            ),
            _hoc_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11),
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
          function ownKeys(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t &&
                (r = r.filter(function(t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                a.push.apply(a, r);
            }
            return a;
          }
          function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? ownKeys(a, !0).forEach(function(t) {
                    _defineProperty(e, t, a[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(a)
                  )
                : ownKeys(a).forEach(function(t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(a, t)
                    );
                  });
            }
            return e;
          }
          function _classCallCheck(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function _defineProperties(e, t) {
            for (var a = 0; a < t.length; a++) {
              var r = t[a];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          function _createClass(e, t, a) {
            return (
              t && _defineProperties(e.prototype, t),
              a && _defineProperties(e, a),
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
          function _defineProperty(e, t, a) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                  })
                : (e[t] = a),
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
            pizzaBuilderPropsSrc = (function(_React$Component) {
              function pizzaBuilderPropsSrc() {
                var e, t;
                _classCallCheck(this, pizzaBuilderPropsSrc);
                for (
                  var a = arguments.length, r = new Array(a), o = 0;
                  o < a;
                  o++
                )
                  r[o] = arguments[o];
                return (
                  _defineProperty(
                    _assertThisInitialized(
                      (t = _possibleConstructorReturn(
                        this,
                        (e = _getPrototypeOf(pizzaBuilderPropsSrc)).call.apply(
                          e,
                          [this].concat(r)
                        )
                      ))
                    ),
                    "state",
                    {
                      currentIngredient: "base",
                      modalIsShow: !1,
                      smallPizza: !1,
                      redirect: !1
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(t),
                    "changeSelectHandler",
                    function(e) {
                      t.setState(function(t) {
                        return {
                          currentIngredient: (t.currentIngredient =
                            e.target.textContent)
                        };
                      });
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(t),
                    "toggleModalHandler",
                    function() {
                      t.setState(function(e, t) {
                        return { modalIsShow: !e.modalIsShow };
                      });
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(t),
                    "checkoutHandler",
                    function() {
                      Object.keys(t.props.multi.pizzas).length > 0 &&
                        t.addPizzaHandler(),
                        t.props.state.weight > 500 ||
                        Object.keys(t.props.multi.pizzas).length > 0
                          ? t.setState({ redirect: !0 })
                          : t.setState({ smallPizza: !0, modalIsShow: !1 });
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(t),
                    "addPizzaHandler",
                    function() {
                      var e = {};
                      Object.keys(t.props.state.ingredients).map(function(a) {
                        0 !== t.props.state.ingredients[a].count &&
                          (e[a] = _objectSpread(
                            {},
                            t.props.state.ingredients[a]
                          ));
                      });
                      var a = {
                        cost: t.props.state.cost,
                        diameter: t.props.state.diameter,
                        weight: t.props.state.weight,
                        ingredients: e
                      };
                      a.weight >= 500
                        ? (t.setState({ modalIsShow: !1 }),
                          t.props.multipleAddFun(a))
                        : t.setState({ smallPizza: !0, modalIsShow: !1 });
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(t),
                    "minusFunHandler",
                    function(e) {
                      console.log("in", e);
                    }
                  ),
                  t
                );
              }
              return (
                _inherits(pizzaBuilderPropsSrc, _React$Component),
                _createClass(pizzaBuilderPropsSrc, [
                  {
                    key: "render",
                    value: function() {
                      var e = this;
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _hoc_cover__WEBPACK_IMPORTED_MODULE_6__.a,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_12__.a,
                          { toggle: this.state.modalIsShow },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                              className: "modal__background",
                              onClick: this.toggleModalHandler
                            }
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_12__.a,
                          { toggle: this.state.modalIsShow },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _hoc_modalBuilder__WEBPACK_IMPORTED_MODULE_9__.a,
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              _pizzaBuilderModalContent__WEBPACK_IMPORTED_MODULE_10__.a,
                              {
                                cost: this.props.state.cost,
                                diameter: this.props.state.diameter,
                                message: this.props.state.message,
                                weight: this.props.state.weight,
                                ingredients: this.props.state.ingredients,
                                minus: this.props.minusFun,
                                checkout: this.checkoutHandler,
                                add: this.addPizzaHandler,
                                browser: this.props.browser
                              }
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_12__.a,
                          { toggle: this.state.smallPizza },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                              className: "pizza__view__order__small__modal",
                              onClick: function() {
                                return e.setState({ smallPizza: !1 });
                              }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "div",
                              {
                                className:
                                  "pizza__view__order__small__modal__content"
                              },
                              "Too small pizza, need more ingredients..."
                            )
                          )
                        ),
                        this.state.redirect
                          ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              react_router_dom__WEBPACK_IMPORTED_MODULE_1__.a,
                              { to: "/checkout" }
                            )
                          : null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          { className: "pizza__view__cover" },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "pizza__buttons__cover" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              _pizzaBuilderUlSelect__WEBPACK_IMPORTED_MODULE_7__.a,
                              {
                                ingredients: this.props.state.ingredients,
                                change: this.changeSelectHandler,
                                browser: this.props.browser
                              }
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              _pizzaByilderControls__WEBPACK_IMPORTED_MODULE_5__.a,
                              {
                                name: this.state.currentIngredient,
                                weight: this.props.state.ingredients[
                                  this.state.currentIngredient
                                ].weight,
                                count: this.props.state.ingredients[
                                  this.state.currentIngredient
                                ].count,
                                plus: this.props.plusFun,
                                minus: this.props.minusFun,
                                browser: this.props.browser
                              }
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              _pizzaBuilderOrder__WEBPACK_IMPORTED_MODULE_8__.a,
                              {
                                toggleModal: this.toggleModalHandler,
                                resetBuild: this.props.resetFun,
                                resetMultiBuild: this.props.resetMultiFun
                              }
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              _pizzaBuilderMultiShow__WEBPACK_IMPORTED_MODULE_11__.a,
                              {
                                pizzas: this.props.multi.pizzas,
                                cost: this.props.multi.totalCost,
                                minus: this.minusFunHandler,
                                delete: this.props.deleteMulriOrderFun
                              }
                            )
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _pizzaBuilderPizza__WEBPACK_IMPORTED_MODULE_4__.a,
                            {
                              ingredients: this.props.state.ingredients,
                              weight: this.props.state.weight,
                              minus: this.props.minusFun,
                              cost: this.props.state.cost,
                              diameter: this.props.state.diameter,
                              message: this.props.state.message,
                              browser: this.props.browser
                            }
                          )
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
                pizzaBuilderPropsSrc
              );
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),
            stateToProps = function(e) {
              return { state: e.pizza, multi: e.multi, browser: e.browser };
            },
            dispatchToProps = function(e) {
              return {
                plusFun: function(t) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_3__.U)(t));
                },
                minusFun: function(t) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_3__.Q)(t));
                },
                resetFun: function() {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_3__.W)());
                },
                multipleAddFun: function(t) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_3__.S)(t));
                },
                deleteMulriOrderFun: function(t) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_3__.y)(t));
                },
                resetMultiFun: function() {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_3__.V)());
                }
              };
            },
            _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__.b)(
              stateToProps,
              dispatchToProps
            )(pizzaBuilderPropsSrc),
            reactHotLoader,
            leaveModule;
          (__webpack_exports__.default = _default),
            (reactHotLoader =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                pizzaBuilderPropsSrc,
                "pizzaBuilderPropsSrc",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderPropsSrc.js"
              ),
              reactHotLoader.register(
                stateToProps,
                "stateToProps",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderPropsSrc.js"
              ),
              reactHotLoader.register(
                dispatchToProps,
                "dispatchToProps",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderPropsSrc.js"
              ),
              reactHotLoader.register(
                _default,
                "default",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderPropsSrc.js"
              )),
            (leaveModule =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module);
        }.call(this, __webpack_require__(2)(module));
    },
    247: function(e, t, a) {
      "use strict";
      (function(e) {
        var r,
          o = a(0),
          n = a.n(o);
        (r =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && r(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var i,
          l,
          _ = function(e) {
            var t = Object.keys(e.ingredients).map(function(t) {
              return e.ingredients[t].count > 0
                ? n.a.createElement(
                    "div",
                    { className: "pizza__view__icon", key: t },
                    n.a.createElement(
                      "div",
                      { className: "pizza__view__icon__count" },
                      n.a.createElement(
                        "strong",
                        null,
                        e.ingredients[t].count,
                        "X"
                      )
                    ),
                    "false" == e.showCross
                      ? null
                      : n.a.createElement("div", {
                          className: "pizza__view__icon__delete",
                          "data-value": t,
                          onClick: function() {
                            return e.minus(event.target.dataset.value);
                          }
                        }),
                    n.a.createElement(
                      "div",
                      { className: "pizza__view__icon__pic" },
                      e.browser.safari
                        ? n.a.createElement("img", {
                            src: "assets/img/".concat(t, ".png"),
                            alt: t,
                            className: "pizza__view__icon__image"
                          })
                        : n.a.createElement("img", {
                            src: "assets/img/webp/".concat(t, ".webp"),
                            alt: t,
                            className: "pizza__view__icon__image"
                          })
                    )
                  )
                : null;
            });
            return n.a.createElement(
              "div",
              { className: "cover__for__indredient__icon" },
              t
            );
          },
          s = _;
        (t.a = s),
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (i.register(
              _,
              "icons",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderIconsIngredients.js"
            ),
            i.register(
              s,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderIconsIngredients.js"
            )),
          (l =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && l(e);
      }.call(this, a(2)(e)));
    },
    253: function(e, t, a) {
      "use strict";
      (function(e) {
        var r,
          o = a(0),
          n = a.n(o),
          i = a(42);
        (r =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && r(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var l,
          _,
          s = function(e) {
            return n.a.createElement(
              i.a,
              {
                in: e.toggle,
                timeout: 300,
                classNames: "select__global",
                mountOnEnter: !0,
                unmountOnExit: !0
              },
              e.children
            );
          },
          c = s;
        (t.a = c),
          (l =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (l.register(
              s,
              "modal",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\hoc\\modalSlideUpDown.js"
            ),
            l.register(
              c,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\hoc\\modalSlideUpDown.js"
            )),
          (_ =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && _(e);
      }.call(this, a(2)(e)));
    },
    259: function(e, t, a) {
      "use strict";
      (function(e) {
        var r,
          o = a(0),
          n = a.n(o),
          i = a(247);
        (r =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && r(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var l,
          _,
          s = function(e) {
            var t =
              e.pizzas.length > 0
                ? e.pizzas.map(function(t, a) {
                    return n.a.createElement(
                      "li",
                      { key: a, className: "multi__order__item" },
                      n.a.createElement(
                        "div",
                        { className: "pizza__view__order__content__flex" },
                        n.a.createElement(
                          "div",
                          { className: "multi__order__params__cover" },
                          t.name
                            ? n.a.createElement(
                                "p",
                                { className: "multi__pizza__name__obj" },
                                t.name
                              )
                            : null,
                          n.a.createElement(
                            "p",
                            null,
                            "Weight is: ",
                            t.weight,
                            " g."
                          ),
                          n.a.createElement(
                            "p",
                            null,
                            "Diameter is: ",
                            t.diameter,
                            " cm."
                          ),
                          n.a.createElement(
                            "p",
                            null,
                            "Cost is: ",
                            t.cost,
                            " $"
                          )
                        ),
                        n.a.createElement(
                          "div",
                          { className: "multi__order__icons__cover" },
                          n.a.createElement(i.a, {
                            ingredients: t.ingredients,
                            minus: e.minus
                          })
                        )
                      ),
                      n.a.createElement(
                        "button",
                        {
                          className: "delete__multi__order",
                          onClick: function() {
                            return e.delete(a);
                          }
                        },
                        "delete"
                      )
                    );
                  })
                : null;
            return n.a.createElement(
              "div",
              { className: "multi__pizzas__cover" },
              e.pizzas.length > 0
                ? n.a.createElement(
                    "h4",
                    { className: "multi__title" },
                    "You pizzas:"
                  )
                : null,
              e.pizzas.length > 0
                ? n.a.createElement(
                    "h5",
                    { className: "multi__total__price" },
                    "Total price: ",
                    e.cost,
                    "$"
                  )
                : null,
              n.a.createElement("ul", null, t)
            );
          },
          c = s;
        (t.a = c),
          (l =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (l.register(
              s,
              "multiShow",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderMultiShow.js"
            ),
            l.register(
              c,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderMultiShow.js"
            )),
          (_ =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && _(e);
      }.call(this, a(2)(e)));
    },
    313: function(e, t, a) {
      "use strict";
      (function(e) {
        var r,
          o = a(0),
          n = a.n(o),
          i = a(247);
        (r =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && r(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var l,
          _,
          s = function(e) {
            return n.a.createElement(
              "div",
              { className: "pizza__view__block" },
              n.a.createElement(
                "div",
                { className: "pizza__view__layout" },
                e.ingredients.base.count > 0
                  ? n.a.createElement("div", {
                      className: "pizza__view__bottom"
                    })
                  : null,
                e.ingredients["pizza-sause"].count > 0
                  ? n.a.createElement("div", {
                      className: "pizza__view__sauce__bottom"
                    })
                  : null,
                e.ingredients.cheese.count > 0
                  ? n.a.createElement("div", {
                      className: "pizza__view__cheese"
                    })
                  : null,
                e.ingredients.bacon.count > 0 ||
                  e.ingredients.beef.count > 0 ||
                  e.ingredients.chicken.count > 0 ||
                  e.ingredients.ham.count > 0 ||
                  e.ingredients.meat.count > 0 ||
                  e.ingredients.pork.count > 0
                  ? n.a.createElement("div", { className: "pizza__view__meat" })
                  : null,
                e.ingredients.tomato.count > 0 ||
                  e.ingredients.pickels.count > 0 ||
                  e.ingredients.onion.count > 0 ||
                  e.ingredients.mushroom.count > 0 ||
                  e.ingredients["green-onion"].count > 0
                  ? n.a.createElement("div", {
                      className: "pizza__view__other"
                    })
                  : null,
                e.ingredients.chili.count > 0 || e.ingredients.jalapeo.count > 0
                  ? n.a.createElement("div", {
                      className: "pizza__view__chili"
                    })
                  : null
              ),
              n.a.createElement(
                "div",
                { className: "pizza__view__info" },
                e.weight >= 1500
                  ? n.a.createElement(
                      "h1",
                      null,
                      "Pizza is too big, we can`t make it..."
                    )
                  : null,
                n.a.createElement("h2", null, "About your pizza:"),
                n.a.createElement(
                  "div",
                  null,
                  n.a.createElement(
                    "h4",
                    { className: "pizza__view__info__small__title" },
                    "ingredients:"
                  ),
                  n.a.createElement(
                    "div",
                    { className: "pizza__view__info__icons" },
                    n.a.createElement(i.a, {
                      ingredients: e.ingredients,
                      minus: e.minus,
                      browser: e.browser
                    })
                  )
                ),
                n.a.createElement(
                  "p",
                  null,
                  "Pizza weight is: ",
                  e.weight,
                  " g. ",
                  e.message
                ),
                n.a.createElement(
                  "p",
                  null,
                  "Base weight is: ",
                  e.ingredients.base.weight,
                  " g."
                ),
                n.a.createElement("p", null, "Diameter: ", e.diameter, " cm"),
                n.a.createElement("p", null, "Cost is: ", e.cost, " $")
              )
            );
          },
          c = n.a.memo(s);
        (t.a = c),
          (l =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (l.register(
              s,
              "pizzaBuilderPizza",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderPizza.js"
            ),
            l.register(
              c,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderPizza.js"
            )),
          (_ =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && _(e);
      }.call(this, a(2)(e)));
    },
    314: function(e, t, a) {
      "use strict";
      (function(e) {
        var r,
          o = a(0),
          n = a.n(o);
        (r =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && r(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var i,
          l,
          _ = function(e) {
            return n.a.createElement(
              "div",
              { className: "pizza__control" },
              n.a.createElement(
                "div",
                { className: "pizza__control__title" },
                n.a.createElement(
                  "p",
                  { className: "pizza__builder__controls__ingredient__title" },
                  e.name
                ),
                n.a.createElement(
                  "span",
                  { className: "pizza__control__title__weight" },
                  "weight: ",
                  e.weight,
                  " g. her point"
                )
              ),
              n.a.createElement(
                "div",
                null,
                n.a.createElement(
                  "button",
                  {
                    className: "pizza__control__button",
                    onClick: function() {
                      return e.minus(e.name);
                    }
                  },
                  "-"
                ),
                n.a.createElement("span", null, e.count),
                n.a.createElement(
                  "button",
                  {
                    className: "pizza__control__button",
                    onClick: function() {
                      return e.plus(e.name);
                    }
                  },
                  "+"
                )
              ),
              n.a.createElement(
                "div",
                { className: "pizza__controls__image" },
                e.browser.safari
                  ? n.a.createElement("img", {
                      src: "/assets/img/".concat(e.name, ".png"),
                      alt: "Current ingredient"
                    })
                  : n.a.createElement("img", {
                      src: "/assets/img/webp/".concat(e.name, ".webp"),
                      alt: "Current ingredient"
                    })
              )
            );
          },
          s = _;
        (t.a = s),
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (i.register(
              _,
              "pizzaBuilderControls",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaByilderControls.js"
            ),
            i.register(
              s,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaByilderControls.js"
            )),
          (l =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && l(e);
      }.call(this, a(2)(e)));
    },
    315: function(e, t, a) {
      "use strict";
      (function(e) {
        var a;
        (a =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && a(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var r,
          o,
          n = function(e) {
            return e.children;
          },
          i = n;
        (t.a = i),
          (r =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (r.register(
              n,
              "cover",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\hoc\\cover.js"
            ),
            r.register(
              i,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\hoc\\cover.js"
            )),
          (o =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && o(e);
      }.call(this, a(2)(e)));
    },
    316: function(e, t, a) {
      "use strict";
      (function(e) {
        var r,
          o = a(0),
          n = a.n(o),
          i = a(253);
        function l(e, t) {
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
              var a = [],
                r = !0,
                o = !1,
                n = void 0;
              try {
                for (
                  var i, l = e[Symbol.iterator]();
                  !(r = (i = l.next()).done) &&
                  (a.push(i.value), !t || a.length !== t);
                  r = !0
                );
              } catch (e) {
                (o = !0), (n = e);
              } finally {
                try {
                  r || null == l.return || l.return();
                } finally {
                  if (o) throw n;
                }
              }
              return a;
            })(e, t) ||
            (function() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            })()
          );
        }
        (r =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && r(e);
        var _ =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default.signature
              : function(e) {
                  return e;
                },
          s = function(e) {
            var t = l(Object(o.useState)(!1), 2),
              a = t[0],
              r = t[1];
            return n.a.createElement(
              "div",
              { className: "select__cover__ul" },
              n.a.createElement(
                "button",
                {
                  className: "toggle__select",
                  onClick: function() {
                    r(!a);
                  }
                },
                "Choose ingredient..."
              ),
              n.a.createElement(
                i.a,
                { toggle: a },
                n.a.createElement(
                  "ul",
                  {
                    className: "select__list",
                    onChange: function() {
                      return e.change(event);
                    }
                  },
                  Object.keys(e.ingredients).map(function(t) {
                    return n.a.createElement(
                      "li",
                      {
                        value: t,
                        key: t,
                        className: "select__item",
                        onClick: function() {
                          r(!1), e.change(event);
                        }
                      },
                      n.a.createElement(
                        "div",
                        { className: "select__item__title__cover" },
                        n.a.createElement(
                          "p",
                          { className: "ul__select__title__ingredients" },
                          t
                        )
                      ),
                      n.a.createElement(
                        "div",
                        null,
                        e.browser.safari
                          ? n.a.createElement("img", {
                              src: "/assets/img/".concat(t, ".png"),
                              alt: t,
                              className: "select__item__pic"
                            })
                          : n.a.createElement("img", {
                              src: "/assets/img/webp/".concat(t, ".webp"),
                              alt: t,
                              className: "select__item__pic"
                            })
                      )
                    );
                  })
                )
              )
            );
          };
        _(s, "useState{[showList, setShowList](false)}");
        var c,
          d,
          u = s;
        (t.a = u),
          (c =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (c.register(
              s,
              "builderSelect",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderUlSelect.js"
            ),
            c.register(
              u,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderUlSelect.js"
            )),
          (d =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && d(e);
      }.call(this, a(2)(e)));
    },
    317: function(e, t, a) {
      "use strict";
      (function(e) {
        var r,
          o = a(0),
          n = a.n(o);
        (r =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && r(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var i,
          l,
          _ = function(e) {
            return n.a.createElement(
              "div",
              { className: "pizza__view__order__controls" },
              n.a.createElement(
                "button",
                {
                  className: "pizza__view__order__controls__button red_theme",
                  onClick: function() {
                    e.resetBuild(), e.resetMultiBuild();
                  }
                },
                "Reset your build"
              ),
              n.a.createElement(
                "button",
                {
                  className: "pizza__view__order__controls__button",
                  onClick: e.toggleModal
                },
                "Go to checkout"
              )
            );
          },
          s = _;
        (t.a = s),
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (i.register(
              _,
              "OrderControls",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderOrder.js"
            ),
            i.register(
              s,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderOrder.js"
            )),
          (l =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && l(e);
      }.call(this, a(2)(e)));
    },
    318: function(e, t, a) {
      "use strict";
      (function(e) {
        var r,
          o = a(0),
          n = a.n(o);
        (r =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && r(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var i,
          l,
          _ = function(e) {
            return n.a.createElement("div", { className: "modal" }, e.children);
          },
          s = _;
        (t.a = s),
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (i.register(
              _,
              "modal",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\hoc\\modalBuilder.js"
            ),
            i.register(
              s,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\hoc\\modalBuilder.js"
            )),
          (l =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && l(e);
      }.call(this, a(2)(e)));
    },
    319: function(e, t, a) {
      "use strict";
      (function(e) {
        var r,
          o = a(0),
          n = a.n(o),
          i = a(247);
        (r =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && r(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var l,
          _,
          s = function(e) {
            return n.a.createElement(
              "div",
              { className: "pizza__view__order__content__modal" },
              n.a.createElement(
                "div",
                { className: "pizza__view__order__content__flex" },
                n.a.createElement(
                  "div",
                  null,
                  n.a.createElement("h2", null, "Check your pizza:"),
                  n.a.createElement("p", null, "Weight is: ", e.weight, " g."),
                  n.a.createElement(
                    "p",
                    null,
                    "Diameter is: ",
                    e.diameter,
                    " cm."
                  ),
                  n.a.createElement("p", null, "Cost is: ", e.cost, " $")
                ),
                n.a.createElement(
                  "div",
                  { className: "pizza__view__order__modal__icons" },
                  n.a.createElement(i.a, {
                    ingredients: e.ingredients,
                    minus: e.minus,
                    browser: e.browser
                  })
                )
              ),
              n.a.createElement(
                "button",
                {
                  className: "pizza__view__order__controls__button",
                  onClick: e.add
                },
                "Save pizza fro order another one..."
              ),
              n.a.createElement(
                "button",
                {
                  className: "pizza__view__order__controls__button",
                  onClick: e.checkout
                },
                "Go to checkout"
              )
            );
          },
          c = s;
        (t.a = c),
          (l =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (l.register(
              s,
              "modalContent",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderModalContent.js"
            ),
            l.register(
              c,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderModalContent.js"
            )),
          (_ =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && _(e);
      }.call(this, a(2)(e)));
    }
  }
]);
