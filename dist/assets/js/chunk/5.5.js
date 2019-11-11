(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    242: function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            ),
            react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9),
            react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              7
            ),
            react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              5
            ),
            _hoc_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11),
            _pizzaBuilderCabinetInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              309
            ),
            _pizzaBuilderCabinetSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              310
            ),
            _pizzaCabinetOrders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              311
            ),
            _pizzaBuilder_pizzaBuilderSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              15
            ),
            _AC_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4),
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
            PersonalRoom = (function(_React$Component) {
              function PersonalRoom() {
                var e, t;
                _classCallCheck(this, PersonalRoom);
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
                        (e = _getPrototypeOf(PersonalRoom)).call.apply(
                          e,
                          [this].concat(_)
                        )
                      ))
                    ),
                    "state",
                    { showingContent: 1, trigger: !1 }
                  ),
                  _defineProperty(
                    _assertThisInitialized(t),
                    "sendDataHnadler",
                    function(e) {
                      e.preventDefault();
                      var a = {
                        flat: t.props.cabinetSet.inputs.flat.value,
                        house: t.props.cabinetSet.inputs.house.value,
                        name: t.props.cabinetSet.inputs.name.value,
                        street: t.props.cabinetSet.inputs.street.value,
                        phone: t.props.cabinetSet.inputs.phone.value
                      };
                      t.props.fetchDataFun(a, t.props.cabinetSet.allGood);
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(t),
                    "changeContentHandler",
                    function(e) {
                      t.setState({ trigger: !0 }),
                        setTimeout(function() {
                          t.setState({ showingContent: e, trigger: !1 });
                        }, 280);
                    }
                  ),
                  _defineProperty(
                    _assertThisInitialized(t),
                    "showModalHandler",
                    function(e) {
                      t.props.deleteOrderfun(e, t.props.auth.localId);
                    }
                  ),
                  t
                );
              }
              return (
                _inherits(PersonalRoom, _React$Component),
                _createClass(PersonalRoom, [
                  {
                    key: "componentDidMount",
                    value: function() {
                      this.props.getInfoFun(this.props.auth.localId);
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
                          _hoc_modal__WEBPACK_IMPORTED_MODULE_4__.a,
                          { toggle: this.props.cabinet.modalShow },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            _pizzaBuilder_pizzaBuilderSpinner__WEBPACK_IMPORTED_MODULE_8__.a,
                            null
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          { className: "room__change__mail__cover" },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            react_router_dom__WEBPACK_IMPORTED_MODULE_2__.c,
                            { to: "/personalRoom/changeMail" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "button",
                              { className: "room__change__mail" },
                              "Change mail."
                            )
                          )
                        ),
                        this.props.auth.isAuthindicated
                          ? null
                          : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              react_router_dom__WEBPACK_IMPORTED_MODULE_3__.a,
                              { to: "/" }
                            ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "nav",
                          { className: "room__nav" },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "ul",
                            { className: "room__list" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "li",
                              { className: "room__item" },
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_2__.c,
                                {
                                  to: "/personalRoom",
                                  className: "room__link",
                                  onClick: function() {
                                    return e.changeContentHandler(1);
                                  }
                                },
                                "Info"
                              )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "li",
                              { className: "room__item" },
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_2__.c,
                                {
                                  to: "/personalRoom",
                                  className: "room__link",
                                  onClick: function() {
                                    return e.changeContentHandler(2);
                                  }
                                },
                                "Set my contacts"
                              )
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "li",
                              { className: "room__item" },
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                react_router_dom__WEBPACK_IMPORTED_MODULE_2__.c,
                                {
                                  to: "/personalRoom/1",
                                  className: "room__link",
                                  onClick: function() {
                                    return e.changeContentHandler(3);
                                  }
                                },
                                "My orders"
                              )
                            )
                          )
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          "div",
                          {
                            className: this.state.trigger
                              ? "room__output_cabinet hide"
                              : "room__output_cabinet show"
                          },
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "cabinet__user__cover" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              "div",
                              { className: "log__out__cover" },
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "log__out__name__block" },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                  "p",
                                  { className: "cabinet__user__name" },
                                  "undefined" !== this.props.auth.name
                                    ? this.props.auth.name
                                    : "user"
                                )
                              ),
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "log__out__image__block" },
                                this.props.auth.photo.startsWith("data")
                                  ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                      "div",
                                      {
                                        className: "log__out__image__div",
                                        style: {
                                          backgroundImage:
                                            "url(" + this.props.auth.photo + ")"
                                        }
                                      }
                                    )
                                  : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                      "div",
                                      {
                                        className: "log__out__image__div",
                                        style: {
                                          backgroundImage:
                                            "url(/assets/users/" +
                                            this.props.auth.photo +
                                            ")"
                                        }
                                      }
                                    )
                              )
                            )
                          ),
                          1 === this.state.showingContent
                            ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _pizzaBuilderCabinetInfo__WEBPACK_IMPORTED_MODULE_5__.a,
                                { info: this.props.cabinet }
                              )
                            : null,
                          2 === this.state.showingContent
                            ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _pizzaBuilderCabinetSet__WEBPACK_IMPORTED_MODULE_6__.a,
                                {
                                  inputs: this.props.cabinetSet.inputs,
                                  modal: this.props.cabinetSet.modalShow,
                                  onInput: this.props.onInputFun,
                                  check: this.sendDataHnadler,
                                  auth: this.props.auth
                                }
                              )
                            : null,
                          3 === this.state.showingContent
                            ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                _pizzaCabinetOrders__WEBPACK_IMPORTED_MODULE_7__.a,
                                {
                                  viewOrders: this.props.viewOrdersFun,
                                  orders: this.props.cabinetGet,
                                  token: this.props.auth.token,
                                  id: this.props.auth.localId,
                                  delete: this.showModalHandler,
                                  browser: this.props.browser
                                }
                              )
                            : null
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
                PersonalRoom
              );
            })(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),
            stateToProps = function(e) {
              return {
                auth: e.auth,
                cabinet: e.cabinet,
                cabinetSet: e.cabinetSet,
                cabinetGet: e.cabinetGetOrders,
                browser: e.browser
              };
            },
            dispatchToProps = function(e) {
              return {
                getInfoFun: function(t) {
                  return e(Object(_AC_index__WEBPACK_IMPORTED_MODULE_9__.K)(t));
                },
                onInputFun: function(t) {
                  return e(
                    Object(_AC_index__WEBPACK_IMPORTED_MODULE_9__.ab)(t)
                  );
                },
                fetchDataFun: function(t, a) {
                  return e(
                    Object(_AC_index__WEBPACK_IMPORTED_MODULE_9__.Z)(t, a)
                  );
                },
                viewOrdersFun: function(t) {
                  return e(
                    Object(_AC_index__WEBPACK_IMPORTED_MODULE_9__.eb)(t)
                  );
                },
                deleteOrderfun: function(t, a) {
                  return e(
                    Object(_AC_index__WEBPACK_IMPORTED_MODULE_9__.z)(t, a)
                  );
                }
              };
            },
            _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__.b)(
              stateToProps,
              dispatchToProps
            )(PersonalRoom),
            reactHotLoader,
            leaveModule;
          (__webpack_exports__.default = _default),
            (reactHotLoader =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.default
                : void 0),
            reactHotLoader &&
              (reactHotLoader.register(
                PersonalRoom,
                "PersonalRoom",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuildreCabinet\\pizzaBuilderCabinet.js"
              ),
              reactHotLoader.register(
                stateToProps,
                "stateToProps",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuildreCabinet\\pizzaBuilderCabinet.js"
              ),
              reactHotLoader.register(
                dispatchToProps,
                "dispatchToProps",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuildreCabinet\\pizzaBuilderCabinet.js"
              ),
              reactHotLoader.register(
                _default,
                "default",
                "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuildreCabinet\\pizzaBuilderCabinet.js"
              )),
            (leaveModule =
              "undefined" != typeof reactHotLoaderGlobal
                ? reactHotLoaderGlobal.leaveModule
                : void 0),
            leaveModule && leaveModule(module);
        }.call(this, __webpack_require__(2)(module));
    },
    309: function(e, t, a) {
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
            return o.a.createElement(
              "div",
              { className: "cabinet__info__cover" },
              o.a.createElement(
                "ul",
                { className: "cabinet__info__list" },
                Object.keys(e.info.info).map(function(t) {
                  if (void 0 !== e.info.info[t])
                    return o.a.createElement(
                      "li",
                      { key: t, className: "cabinet__info__item" },
                      o.a.createElement(
                        "span",
                        { className: "cabinet__info__item_bold" },
                        t
                      ),
                      ":",
                      " ",
                      e.info.info[t]
                    );
                })
              )
            );
          },
          c = o.a.memo(l);
        (t.a = c),
          (n =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (n.register(
              l,
              "cabinetInfo",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuildreCabinet\\pizzaBuilderCabinetInfo.js"
            ),
            n.register(
              c,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuildreCabinet\\pizzaBuilderCabinetInfo.js"
            )),
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && i(e);
      }.call(this, a(2)(e)));
    },
    310: function(e, t, a) {
      "use strict";
      (function(e) {
        var _,
          r = a(0),
          o = a.n(r),
          n = a(29),
          i = a(15),
          l = a(11),
          c = a(3);
        (_ =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && _(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var s,
          d,
          u = function(e) {
            return o.a.createElement(
              "div",
              null,
              o.a.createElement(
                l.a,
                { toggle: e.modal },
                o.a.createElement(i.a, null)
              ),
              o.a.createElement(
                "form",
                { action: "#", className: "set_cabinet__form" },
                o.a.createElement(
                  "h3",
                  { className: "set_cabinet__form__title" },
                  "Set your delivery info:"
                ),
                o.a.createElement(n.a, {
                  inputs: e.inputs,
                  changeHandler: e.onInput
                }),
                o.a.createElement(
                  "div",
                  { className: "set_cabinet__form__submit__cover" },
                  o.a.createElement(
                    "button",
                    {
                      type: "submit",
                      className: "set_cabinet__form__submit",
                      onClick: function(t) {
                        e.check(t),
                          localStorage.setItem("id", e.auth.localId),
                          localStorage.setItem("nameChanged", "true");
                      }
                    },
                    "Send"
                  )
                )
              ),
              o.a.createElement(
                "div",
                null,
                o.a.createElement(
                  "h3",
                  { className: "add__photo__title" },
                  "Set photo profile"
                ),
                o.a.createElement(
                  "form",
                  {
                    action: "".concat(c.a, "/api/v1.0/user/setPhoto"),
                    id: "avatar",
                    method: "POST",
                    encType: "multipart/form-data",
                    className: "add__photo__form",
                    onSubmit: function(t) {
                      return (
                        localStorage.setItem("id", e.auth.localId),
                        void localStorage.setItem("photoChanged", !0)
                      );
                    }
                  },
                  o.a.createElement(
                    "div",
                    { className: "add__photo__input__cover" },
                    o.a.createElement("input", {
                      type: "file",
                      id: "",
                      name: "avatar",
                      form: "avatar",
                      accept: "image/*",
                      onChange: function(e) {
                        return (function(e) {
                          var t = document.getElementById("preview1");
                          (t.style.backgroundImage =
                            "url(" +
                            URL.createObjectURL(e.target.files[0]) +
                            ")"),
                            (t.style.borderRadius = "50%");
                        })(e);
                      },
                      style: {
                        width: "20rem",
                        height: "20rem",
                        opacity: 0,
                        margin: 0,
                        zIndex: 10,
                        top: 0,
                        left: 0,
                        position: "absolute",
                        cursor: "pointer"
                      }
                    }),
                    o.a.createElement("div", {
                      className: "add__photo__preview",
                      id: "preview1"
                    })
                  ),
                  o.a.createElement(
                    "div",
                    { className: "add__photo__submit__cover" },
                    o.a.createElement(
                      "button",
                      {
                        type: "submit",
                        id: "avatar__submit",
                        name: "submit",
                        form: "avatar",
                        className: "add__photo__submit"
                      },
                      "Send"
                    )
                  )
                )
              )
            );
          },
          p = o.a.memo(u);
        (t.a = p),
          (s =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (s.register(
              u,
              "cabinetSet",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuildreCabinet\\pizzaBuilderCabinetSet.js"
            ),
            s.register(
              p,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuildreCabinet\\pizzaBuilderCabinetSet.js"
            )),
          (d =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && d(e);
      }.call(this, a(2)(e)));
    },
    311: function(e, t, a) {
      "use strict";
      (function(e) {
        var _,
          r = a(0),
          o = a.n(r),
          n = a(11),
          i = a(15),
          l = a(312);
        function c(e, t) {
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
                _ = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var n, i = e[Symbol.iterator]();
                  !(_ = (n = i.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  _ = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  _ || null == i.return || i.return();
                } finally {
                  if (r) throw o;
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
        (_ =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && _(e);
        var s =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default.signature
              : function(e) {
                  return e;
                },
          d = function(e) {
            var t = 1;
            e.orders.orders &&
              e.orders.orders.length > 0 &&
              (t = Math.ceil(e.orders.count / 4)),
              Object(r.useEffect)(function() {
                return e.viewOrders("?page=1&limit=4&id=".concat(e.id));
              }, []);
            var _,
              s = c(Object(r.useState)(!1), 2),
              d = s[0],
              u = s[1],
              p = c(Object(r.useState)(null), 2),
              m = p[0],
              E = p[1],
              f = c(Object(r.useState)(1), 2),
              b = f[0],
              v = f[1];
            return (
              (_ = e.orders.orders
                ? !e.orders.orders.error && e.orders.orders.length > 0
                  ? e.orders.orders.map(function(t, _) {
                      return !t.pizzas.length > 0
                        ? o.a.createElement(
                            "div",
                            {
                              key: t._id.toString(),
                              className: "prev__order__cover"
                            },
                            o.a.createElement("div", {
                              className: "delete__order",
                              onClick: function() {
                                u(!0), E(t._id.toString());
                              }
                            }),
                            o.a.createElement(
                              "div",
                              { className: "prev__order__info__cover" },
                              o.a.createElement(
                                "p",
                                null,
                                o.a.createElement(
                                  "span",
                                  { className: "prev__order__name" },
                                  t.name
                                ),
                                " ordered",
                                " ",
                                t.pizzaName,
                                " worth ",
                                t.cost,
                                "$, weight ",
                                t.weight,
                                "g. and diameter ",
                                t.diameter,
                                "cm"
                              ),
                              o.a.createElement(
                                "p",
                                null,
                                t.street,
                                t.house,
                                "-",
                                t.flat
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "prev__order__icon__cover" },
                              Object.keys(t.ingredients).map(function(_) {
                                return t.ingredients[_].count > 0
                                  ? o.a.createElement(
                                      "div",
                                      {
                                        className:
                                          "pizza__view__icon pizza__view__icon_small",
                                        key: _
                                      },
                                      o.a.createElement(
                                        "div",
                                        {
                                          className:
                                            "pizza__view__icon__count pizza__view__icon__count_small"
                                        },
                                        o.a.createElement(
                                          "strong",
                                          null,
                                          t.ingredients[_].count,
                                          "X"
                                        )
                                      ),
                                      o.a.createElement(
                                        "div",
                                        { className: "pizza__view__icon__pic" },
                                        e.browser.safari
                                          ? o.a.createElement("img", {
                                              src: a(44)(
                                                "./".concat(_, ".png")
                                              ),
                                              alt: _,
                                              className:
                                                "pizza__view__icon__image"
                                            })
                                          : o.a.createElement("img", {
                                              src: a(45)(
                                                "./".concat(_, ".webp")
                                              ),
                                              alt: _,
                                              className:
                                                "pizza__view__icon__image"
                                            })
                                      )
                                    )
                                  : null;
                              })
                            )
                          )
                        : o.a.createElement(
                            "div",
                            {
                              key: t._id.toString(),
                              className: "prev__order__cover"
                            },
                            o.a.createElement("div", {
                              className: "delete__order",
                              onClick: function() {
                                u(!0), E(t);
                              }
                            }),
                            o.a.createElement(
                              "div",
                              { className: "prev__order__info__cover" },
                              o.a.createElement(
                                "p",
                                null,
                                o.a.createElement(
                                  "span",
                                  { className: "prev__order__name" },
                                  t.name,
                                  " "
                                ),
                                "ordered",
                                " ",
                                o.a.createElement(
                                  "span",
                                  { className: "prev__order__name" },
                                  t.pizzaName
                                )
                              ),
                              o.a.createElement(
                                "p",
                                null,
                                t.street,
                                t.house,
                                "-",
                                t.flat,
                                " total:",
                                " ",
                                o.a.createElement(
                                  "span",
                                  { className: "prev__order__name" },
                                  t.totalCost,
                                  "$"
                                )
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "prev__order__icon__cover" },
                              t.pizzas.map(function(r, n) {
                                return o.a.createElement(
                                  "div",
                                  {
                                    key: n,
                                    className: "multi__pizza__single__cover"
                                  },
                                  r.name
                                    ? o.a.createElement(
                                        "p",
                                        {
                                          className: "multi__pizza__name__obj"
                                        },
                                        r.name
                                      )
                                    : null,
                                  o.a.createElement(
                                    "p",
                                    { key: _ + t + n },
                                    "worth ",
                                    r.cost,
                                    "$, weight ",
                                    r.weight,
                                    "g. and diameter ",
                                    r.diameter,
                                    " cm"
                                  ),
                                  o.a.createElement(
                                    "div",
                                    { className: "prev__order__icon__cover" },
                                    Object.keys(r.ingredients).map(function(t) {
                                      return r.ingredients[t].count > 0
                                        ? o.a.createElement(
                                            "div",
                                            {
                                              className:
                                                "pizza__view__icon pizza__view__icon_small",
                                              key: t
                                            },
                                            o.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "pizza__view__icon__count pizza__view__icon__count_small"
                                              },
                                              o.a.createElement(
                                                "strong",
                                                null,
                                                r.ingredients[t].count,
                                                "X"
                                              )
                                            ),
                                            o.a.createElement(
                                              "div",
                                              {
                                                className:
                                                  "pizza__view__icon__pic"
                                              },
                                              e.browser.safari
                                                ? o.a.createElement("img", {
                                                    src: a(44)(
                                                      "./".concat(t, ".png")
                                                    ),
                                                    alt: t,
                                                    className:
                                                      "pizza__view__icon__image"
                                                  })
                                                : o.a.createElement("img", {
                                                    src: a(45)(
                                                      "./".concat(t, ".webp")
                                                    ),
                                                    alt: t,
                                                    className:
                                                      "pizza__view__icon__image"
                                                  })
                                            )
                                          )
                                        : null;
                                    })
                                  )
                                );
                              })
                            )
                          );
                    })
                  : null
                : o.a.createElement("h1", null, "No orders get yet")),
              o.a.createElement(
                "div",
                null,
                o.a.createElement(
                  n.a,
                  { toggle: e.orders.modal },
                  o.a.createElement("div", null, o.a.createElement(i.a, null))
                ),
                o.a.createElement(
                  n.a,
                  { toggle: d },
                  o.a.createElement(
                    "div",
                    { className: "modal__delete" },
                    o.a.createElement(
                      "div",
                      { className: "modal__delete__cover" },
                      o.a.createElement(
                        "div",
                        null,
                        o.a.createElement("h3", null, "Are you shure?")
                      ),
                      o.a.createElement(
                        "div",
                        { className: "modal__delete__buttons__cover" },
                        o.a.createElement(
                          "button",
                          {
                            className: "modal__delete__button",
                            onClick: function() {
                              e.delete(m), u(!1);
                            }
                          },
                          "Yes"
                        ),
                        o.a.createElement(
                          "button",
                          {
                            className: "modal__delete__button",
                            onClick: function() {
                              return u(!1);
                            }
                          },
                          "Cancel"
                        )
                      )
                    )
                  )
                ),
                o.a.createElement(
                  "button",
                  {
                    onClick: function() {
                      e.viewOrders("?page=1&limit=4&id=".concat(e.id)), v(1);
                    },
                    className: "refresh__orders__btn"
                  },
                  "Refresh"
                ),
                _,
                o.a.createElement(l.a, {
                  num: t,
                  page: b,
                  changePage: v,
                  viewOrders: e.viewOrders,
                  id: e.id
                })
              )
            );
          };
        s(
          d,
          "useEffect{}\nuseState{[modal, setModal](false)}\nuseState{[id, setId](null)}\nuseState{[page, setPage](1)}"
        );
        var u,
          p,
          m = o.a.memo(d);
        (t.a = m),
          (u =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (u.register(
              d,
              "myOrdersCabinet",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuildreCabinet\\pizzaCabinetOrders.js"
            ),
            u.register(
              m,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuildreCabinet\\pizzaCabinetOrders.js"
            )),
          (p =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && p(e);
      }.call(this, a(2)(e)));
    },
    312: function(e, t, a) {
      "use strict";
      (function(e) {
        var _,
          r = a(0),
          o = a.n(r),
          n = a(5);
        (_ =
          "undefined" != typeof reactHotLoaderGlobal
            ? reactHotLoaderGlobal.enterModule
            : void 0) && _(e);
        "undefined" != typeof reactHotLoaderGlobal &&
          reactHotLoaderGlobal.default.signature;
        var i,
          l,
          c = function(e) {
            for (var t = [], a = 0; a < e.num; a++) t.push(a + 1);
            return o.a.createElement(
              "div",
              { className: "pizza__cabinet__pagination__list__cover" },
              o.a.createElement(
                "ul",
                { className: "pizza__cabinet__pagination__list" },
                t.map(function(t, a) {
                  return o.a.createElement(
                    "li",
                    {
                      key: t,
                      className:
                        e.page == t
                          ? "pizza__cabinet__pagination__item pizza__cabinet__pagination__item_active"
                          : "pizza__cabinet__pagination__item",
                      onClick: function() {
                        e.changePage(t),
                          e.viewOrders(
                            "?page=".concat(a + 1, "&limit=4&id=").concat(e.id)
                          ),
                          e.history.push("/personalRoom/".concat(a + 1));
                      }
                    },
                    t
                  );
                })
              )
            );
          },
          s = Object(n.g)(c);
        (t.a = s),
          (i =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.default
              : void 0) &&
            (i.register(
              c,
              "pagination",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuildreCabinet\\pizzaCabinetPagination.js"
            ),
            i.register(
              s,
              "default",
              "E:\\coding\\Works\\React+Express\\src\\js\\conponents\\pizzaBuildreCabinet\\pizzaCabinetPagination.js"
            )),
          (l =
            "undefined" != typeof reactHotLoaderGlobal
              ? reactHotLoaderGlobal.leaveModule
              : void 0) && l(e);
      }.call(this, a(2)(e)));
    }
  }
]);
