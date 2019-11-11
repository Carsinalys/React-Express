(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    244: function(module, __webpack_exports__, __webpack_require__) {
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
            _hoc_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11),
            _AC_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4),
            _pizzaBuilder_pizzaBuilderSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              15
            ),
            _pizzaBuilderCheckoutContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              320
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
            for (var a = 0; a < t.length; a++) {
              var _ = t[a];
              (_.enumerable = _.enumerable || !1),
                (_.configurable = !0),
                "value" in _ && (_.writable = !0),
                Object.defineProperty(e, _.key, _);
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
            PizzaBuilderCheckout = (function(_React$Component) {
              function PizzaBuilderCheckout() {
                var e, t;
                _classCallCheck(this, PizzaBuilderCheckout);
                for (
                  var a = arguments.length, _ = new Array(a), r = 0;
                  r < a;
                  r++
                )
                  _[r] = arguments[r];
                return (
                  _defineProperty(
                    _assertThisInitialized(
                      (t = _possibleConstructorReturn(
                        this,
                        (e = _getPrototypeOf(PizzaBuilderCheckout)).call.apply(
                          e,
                          [this].concat(_)
                        )
                      ))
                    ),
                    "state",
                    {
                      smallPizza: !1,
                      badName: !1,
                      badPhone: !1,
                      badPizzaName: !1,
                      badHouse: !1,
                      badFlat: !1,
                      badStreet: !1
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(t),
                    "confirmHandler",
                    function(e) {
                      e.preventDefault();
                      var a = {};
                      return (
                        (a =
                          t.props.multi.pizzas.length > 0
                            ? {
                                name: t.props.inputs.inputs.name.value,
                                phone: t.props.inputs.inputs.phone.value,
                                pizzaName: t.props.inputs.inputs.pizza.value,
                                street: t.props.inputs.inputs.street.value,
                                house: t.props.inputs.inputs.house.value,
                                flat: t.props.inputs.inputs.flat.value,
                                pizzas: t.props.multi.pizzas,
                                totalCost: t.props.multi.totalCost,
                                id: t.props.auth.localId
                              }
                            : {
                                name: t.props.inputs.inputs.name.value,
                                phone: t.props.inputs.inputs.phone.value,
                                pizzaName: t.props.inputs.inputs.pizza.value,
                                street: t.props.inputs.inputs.street.value,
                                house: t.props.inputs.inputs.house.value,
                                flat: t.props.inputs.inputs.flat.value,
                                cost: t.props.state.cost,
                                weight: t.props.state.weight,
                                diameter: t.props.state.diameter,
                                ingredients: t.props.state.ingredients,
                                id: t.props.auth.localId
                              }),
                        /^[a-zA-Z][a-zA-Z0-9-_ .]{1,20}$/.test(
                          t.props.inputs.inputs.name.value
                        )
                          ? /^(375|80)(29|25|44|33)([0-9]{3})([0-9]{2})([0-9]{2})$/.test(
                              t.props.inputs.inputs.phone.value
                            )
                            ? /^[a-zA-Z0-9-_. ]{1,20}$/.test(
                                t.props.inputs.inputs.pizza.value
                              )
                              ? /^[0-9]{1,4}$/.test(
                                  t.props.inputs.inputs.house.value
                                )
                                ? /^[0-9]{1,4}$/.test(
                                    t.props.inputs.inputs.flat.value
                                  )
                                  ? /^[0-9a-zA-Z -_.]{1,20}$/.test(
                                      t.props.inputs.inputs.street.value
                                    )
                                    ? void (("" !==
                                        t.props.inputs.inputs.name.value &&
                                        "" !==
                                          t.props.inputs.inputs.phone.value &&
                                        "" !==
                                          t.props.inputs.inputs.pizza.value &&
                                        "" !==
                                          t.props.inputs.inputs.street.value &&
                                        "" !==
                                          t.props.inputs.inputs.house.value &&
                                        "" !==
                                          t.props.inputs.inputs.flat.value &&
                                        t.props.state.weight > 500) ||
                                      t.props.multi.pizzas.length > 0
                                        ? t.props.callApiAddOrderrFun(a)
                                        : t.setState({ smallPizza: !0 }))
                                    : (t.setState({ badStreet: !0 }), !1)
                                  : (t.setState({ badFlat: !0 }), !1)
                                : (t.setState({ badHouse: !0 }), !1)
                              : (t.setState({ badPizzaName: !0 }), !1)
                            : (t.setState({ badPhone: !0 }), !1)
                          : (t.setState({ badName: !0 }), !1)
                      );
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(t),
                    "minusDeleteHandler",
                    function() {
                      console.log("minus delete handler");
                    }
                  ),
                  t
                );
              }
              return (
                _inherits(PizzaBuilderCheckout, _React$Component),
                _createClass(PizzaBuilderCheckout, [
                  {
                    key: "componentDidMount",
                    value: function() {
                      this.props.getAddresFun(this.props.auth.localId);
                    }
                  },
                  {
                    key: "render",
                    value: function() {
                      var e = this;
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "section",
                        { className: "container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_3__.a,
                          { toggle: this.props.inputs.modalShow },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              _pizzaBuilder_pizzaBuilderSpinner__WEBPACK_IMPORTED_MODULE_5__.a,
                              null
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_3__.a,
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
                              "You need to fill all fields to complete or choose pizza correctly..."
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_3__.a,
                          { toggle: this.state.badName },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                              className: "pizza__view__order__small__modal",
                              onClick: function() {
                                return e.setState({ badName: !1 });
                              }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "div",
                              {
                                className:
                                  "pizza__view__order__small__modal__content"
                              },
                              "Name must be 2-20 symbols length and first symbol must be letter..."
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_3__.a,
                          { toggle: this.state.badPhone },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                              className: "pizza__view__order__small__modal",
                              onClick: function() {
                                return e.setState({ badPhone: !1 });
                              }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "div",
                              {
                                className:
                                  "pizza__view__order__small__modal__content"
                              },
                              "Phone must look like 80 29 760 18 83 or 375 33 765 98 22, must be without spaces"
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_3__.a,
                          { toggle: this.state.badPizzaName },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                              className: "pizza__view__order__small__modal",
                              onClick: function() {
                                return e.setState({ badPizzaName: !1 });
                              }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "div",
                              {
                                className:
                                  "pizza__view__order__small__modal__content"
                              },
                              "Pizza name must be 2-20 symbols length"
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_3__.a,
                          { toggle: this.state.badHouse },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                              className: "pizza__view__order__small__modal",
                              onClick: function() {
                                return e.setState({ badHouse: !1 });
                              }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "div",
                              {
                                className:
                                  "pizza__view__order__small__modal__content"
                              },
                              "House name must be 2-4 numbers length"
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_3__.a,
                          { toggle: this.state.badFlat },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                              className: "pizza__view__order__small__modal",
                              onClick: function() {
                                return e.setState({ badFlat: !1 });
                              }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "div",
                              {
                                className:
                                  "pizza__view__order__small__modal__content"
                              },
                              "Flat must be 2-4 numbers length"
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_3__.a,
                          { toggle: this.state.badStreet },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            {
                              className: "pizza__view__order__small__modal",
                              onClick: function() {
                                return e.setState({ badStreet: !1 });
                              }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "div",
                              {
                                className:
                                  "pizza__view__order__small__modal__content"
                              },
                              "Street must be 2-20 symbols length"
                            )
                          )
                        ),
                        this.props.auth.isAuthindicated
                          ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              _pizzaBuilderCheckoutContent__WEBPACK_IMPORTED_MODULE_6__.a,
                              {
                                data: this.props.state,
                                minus: this.props.minusFun,
                                confirm: this.confirmHandler,
                                inputs: this.props.inputs.inputs,
                                changeHandler: this.props.onInputFun,
                                multi: this.props.multi,
                                delete: this.props.deleteMultiOrderFun,
                                minusDlete: this.minusDeleteHandler,
                                browser: this.props.browser
                              }
                            )
                          : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              react_router_dom__WEBPACK_IMPORTED_MODULE_2__.a,
                              { to: "/authentication" }
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
                PizzaBuilderCheckout
              );
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),
            stateToProps = function(e) {
              return {
                state: e.pizza,
                inputs: e.order,
                auth: e.auth,
                multi: e.multi,
                browser: e.browser
              };
            },
            dispatchToProps = function(e) {
              return {
                minusFun: function(t) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_4__.Q)(t));
                },
                resetFun: function() {
                  return e(reset_build());
                },
                onInputFun: function(t) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_4__.T)(t));
                },
                getAddresFun: function(t, a) {
                  return e(
                    Object(_AC_index__WEBPACK_IMPORTED_MODULE_4__.L)(t, a)
                  );
                },
                deleteMultiOrderFun: function(t) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_4__.y)(t));
                },
                callApiAddOrderrFun: function(t) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_4__.f)(t));
                }
              };
            },
            _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__.b)(
              stateToProps,
              dispatchToProps
            )(PizzaBuilderCheckout),
            reactHotLoader,
            leaveModule;
          (__webpack_exports__.default = _default),
            (reactHotLoader =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                PizzaBuilderCheckout,
                "PizzaBuilderCheckout",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderCheckout\\pizzaBuilderCheckout.js"
              ),
              reactHotLoader.register(
                stateToProps,
                "stateToProps",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderCheckout\\pizzaBuilderCheckout.js"
              ),
              reactHotLoader.register(
                dispatchToProps,
                "dispatchToProps",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderCheckout\\pizzaBuilderCheckout.js"
              ),
              reactHotLoader.register(
                _default,
                "default",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderCheckout\\pizzaBuilderCheckout.js"
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
        var _,
          r = a(0),
          o = a.n(r);
        (_ =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && _(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var n,
          i,
          l = function(e) {
            var t = Object.keys(e.ingredients).map(function(t) {
              return e.ingredients[t].count > 0
                ? o.a.createElement(
                    "div",
                    { className: "pizza__view__icon", key: t },
                    o.a.createElement(
                      "div",
                      { className: "pizza__view__icon__count" },
                      o.a.createElement(
                        "strong",
                        null,
                        e.ingredients[t].count,
                        "X"
                      )
                    ),
                    "false" == e.showCross
                      ? null
                      : o.a.createElement("div", {
                          className: "pizza__view__icon__delete",
                          "data-value": t,
                          onClick: function() {
                            return e.minus(event.target.dataset.value);
                          }
                        }),
                    o.a.createElement(
                      "div",
                      { className: "pizza__view__icon__pic" },
                      e.browser.safari
                        ? o.a.createElement("img", {
                            src: "assets/img/".concat(t, ".png"),
                            alt: t,
                            className: "pizza__view__icon__image"
                          })
                        : o.a.createElement("img", {
                            src: "assets/img/webp/".concat(t, ".webp"),
                            alt: t,
                            className: "pizza__view__icon__image"
                          })
                    )
                  )
                : null;
            });
            return o.a.createElement(
              "div",
              { className: "cover__for__indredient__icon" },
              t
            );
          },
          s = l;
        (t.a = s),
          (n =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (n.register(
              l,
              "icons",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderIconsIngredients.js"
            ),
            n.register(
              s,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderIconsIngredients.js"
            )),
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && i(e);
      }.call(this, a(2)(e)));
    },
    259: function(e, t, a) {
      "use strict";
      (function(e) {
        var _,
          r = a(0),
          o = a.n(r),
          n = a(247);
        (_ =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && _(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var i,
          l,
          s = function(e) {
            var t =
              e.pizzas.length > 0
                ? e.pizzas.map(function(t, a) {
                    return o.a.createElement(
                      "li",
                      { key: a, className: "multi__order__item" },
                      o.a.createElement(
                        "div",
                        { className: "pizza__view__order__content__flex" },
                        o.a.createElement(
                          "div",
                          { className: "multi__order__params__cover" },
                          t.name
                            ? o.a.createElement(
                                "p",
                                { className: "multi__pizza__name__obj" },
                                t.name
                              )
                            : null,
                          o.a.createElement(
                            "p",
                            null,
                            "Weight is: ",
                            t.weight,
                            " g."
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Diameter is: ",
                            t.diameter,
                            " cm."
                          ),
                          o.a.createElement(
                            "p",
                            null,
                            "Cost is: ",
                            t.cost,
                            " $"
                          )
                        ),
                        o.a.createElement(
                          "div",
                          { className: "multi__order__icons__cover" },
                          o.a.createElement(n.a, {
                            ingredients: t.ingredients,
                            minus: e.minus
                          })
                        )
                      ),
                      o.a.createElement(
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
            return o.a.createElement(
              "div",
              { className: "multi__pizzas__cover" },
              e.pizzas.length > 0
                ? o.a.createElement(
                    "h4",
                    { className: "multi__title" },
                    "You pizzas:"
                  )
                : null,
              e.pizzas.length > 0
                ? o.a.createElement(
                    "h5",
                    { className: "multi__total__price" },
                    "Total price: ",
                    e.cost,
                    "$"
                  )
                : null,
              o.a.createElement("ul", null, t)
            );
          },
          u = s;
        (t.a = u),
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (i.register(
              s,
              "multiShow",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderMultiShow.js"
            ),
            i.register(
              u,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilder\\pizzaBuilderMultiShow.js"
            )),
          (l =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && l(e);
      }.call(this, a(2)(e)));
    },
    320: function(e, t, a) {
      "use strict";
      (function(e) {
        var _,
          r = a(0),
          o = a.n(r),
          n = a(247),
          i = a(29),
          l = a(259);
        (_ =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && _(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var s,
          u,
          c = function(e) {
            return o.a.createElement(
              "div",
              { className: "checkout__content__cover" },
              o.a.createElement(
                "h3",
                { className: "checkout__content__title" },
                "Checkout form:"
              ),
              o.a.createElement(
                "form",
                {
                  action: "#",
                  id: "checkout__form",
                  onSubmit: function(t) {
                    return e.confirm(t);
                  }
                },
                o.a.createElement(
                  "div",
                  { className: "checkout__content__top__cover" },
                  o.a.createElement(i.a, {
                    inputs: e.inputs,
                    changeHandler: e.changeHandler
                  })
                ),
                Object.keys(e.multi.pizzas).length > 0
                  ? o.a.createElement(l.a, {
                      pizzas: e.multi.pizzas,
                      minus: e.minusDlete,
                      delete: e.delete,
                      cost: e.multi.totalCost
                    })
                  : o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(
                        "div",
                        { className: "checkout__content__ingredients__cover" },
                        o.a.createElement("p", null, "Your pizza ingredients:"),
                        o.a.createElement(n.a, {
                          ingredients: e.data.ingredients,
                          minus: e.minus,
                          browser: e.browser
                        })
                      ),
                      o.a.createElement(
                        "div",
                        { className: "checkout__content__params__cover" },
                        o.a.createElement(
                          "p",
                          null,
                          "Weight is: ",
                          o.a.createElement("strong", null, e.data.weight),
                          " g."
                        ),
                        o.a.createElement(
                          "p",
                          null,
                          "Cost is: ",
                          o.a.createElement("strong", null, e.data.cost),
                          " $"
                        ),
                        o.a.createElement(
                          "p",
                          null,
                          "Diameter is: ",
                          o.a.createElement("strong", null, e.data.diameter),
                          " cm."
                        )
                      )
                    ),
                o.a.createElement(
                  "div",
                  { className: "checkout__content__submit__cover" },
                  o.a.createElement("input", {
                    type: "submit",
                    value: "Confirm",
                    id: "checkout__submit",
                    form: "checkout__form",
                    onClick: function(t) {
                      return e.confirm(t);
                    }
                  })
                )
              )
            );
          },
          d = c;
        (t.a = d),
          (s =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (s.register(
              c,
              "checkoutContet",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderCheckout\\pizzaBuilderCheckoutContent.js"
            ),
            s.register(
              d,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuilderCheckout\\pizzaBuilderCheckoutContent.js"
            )),
          (u =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && u(e);
      }.call(this, a(2)(e)));
    }
  }
]);
