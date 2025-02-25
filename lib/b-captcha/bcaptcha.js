"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames3 = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _captcha = _interopRequireDefault(require("../captcha"));
var _overlay = _interopRequireDefault(require("../overlay"));
var _popup = _interopRequireDefault(require("../popup"));
var _toast = _interopRequireDefault(require("../toast"));
var _utils = require("../utils");
var _renderToContainer = require("../utils/renderToContainer");
var _fetch = require("./lib/fetch");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var componentClassName = (0, _utils.createClassName)('bcaptcha');
var BACKDROPWIDTH = 248;
var BCaptcha = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(BCaptcha, _React$PureComponent);
  var _super = _createSuper(BCaptcha);
  function BCaptcha(props) {
    var _this;
    _classCallCheck(this, BCaptcha);
    _this = _super.call(this, props);
    _this.checkValid = function (status) {
      var _this$props = _this.props,
        operationId = _this$props.operationId,
        phoneNumber = _this$props.phoneNumber,
        action = _this$props.action,
        callback = _this$props.callback;
      if (!operationId || !phoneNumber || !action.validationFetchUrl) return;
      (0, _fetch.ajax)({
        url: action.validationFetchUrl,
        data: {
          operationId: operationId,
          phoneNumber: phoneNumber,
          securityMethods: ['image'],
          image: 1
        },
        onSuccess: function onSuccess(res) {
          if (res.success && res.data.operationStatus === 100) {
            // 计算耗时
            var startTime = _this.takeTime;
            _this.takeTime = Date.now() - startTime;
            // 更新UI
            _this.updateStatus(status, 1000, function () {
              callback && callback(false, {
                operationId: operationId
              });
              _this.reset();
              _this.setState({
                visible: false
              });
            });
          } else {
            res.errMsg && (0, _toast.default)({
              message: res.errMsg
            });
            _this.reset();
            callback && callback(true, {
              operationId: operationId
            });
          }
        },
        onError: function onError(e) {
          callback && callback(e, {});
        }
      });
    };
    _this.updateStatus = function (status) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.duration;
      var cb = arguments.length > 2 ? arguments[2] : undefined;
      _this.setState({
        status: status,
        showStatus: true
      });
      clearTimeout(_this.timer);
      _this.timer = setTimeout(function () {
        _this.setState({
          showStatus: false
        });
        cb && cb();
      }, duration);
    };
    _this.getStatus = function (state) {
      var status;
      switch (state) {
        case 0:
          status = 'success'; // 成功
          break;
        case 600:
          status = 'timeout'; // 超时
          break;
        case 500:
          status = 'frequency'; // 超次数
          break;
        default:
          status = 'fail'; // 失败
          break;
      }
      return status;
    };
    _this.reset = function () {
      if (_this.captchaRef.current) {
        _this.captchaRef.current.reset();
      }
    };
    _this.close = function () {
      _this.setState({
        visible: false
      });
    };
    _this.handleTouchStart = function () {
      _this.takeTime = Date.now();
    };
    _this.handleRefresh = function () {
      _this.getSliderCaptcha();
    };
    _this.handleFinish = function (value, ratio) {
      var offset = value * ratio;
      if (offset) {
        _this.validatorCaptcha(offset);
      }
    };
    _this.state = {
      mountNode: null,
      visible: true,
      // loading: true,
      loading: false,
      backdropUrl: '',
      slideblockUrl: '',
      // status: '',
      status: '',
      showStatus: true
    };
    _this.captchaRef = /*#__PURE__*/React.createRef();
    _this.backdrop = {};
    _this.slideblock = {};
    _this.ratio = 1;
    _this.takeTime = 0;
    _this.timer = null;
    return _this;
  }
  _createClass(BCaptcha, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.mountNode) this.setState({
        mountNode: document.body
      });
      this.getSliderCaptcha();
    }
  }, {
    key: "getSliderCaptcha",
    value: function getSliderCaptcha() {
      var _this2 = this;
      var _this$props2 = this.props,
        action = _this$props2.action,
        operationId = _this$props2.operationId,
        callback = _this$props2.callback;
      if (!operationId || !action.getCaptchaFetchUrl) return;
      this.setState({
        loading: true
      });
      (0, _fetch.ajax)({
        url: action.getCaptchaFetchUrl,
        data: {
          operationId: operationId
        },
        onSuccess: function onSuccess(res) {
          return __awaiter(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!res.success) {
                    _context.next = 6;
                    break;
                  }
                  _context.next = 3;
                  return this.loadImg(res.data);
                case 3:
                  this.setState({
                    loading: false
                  });
                  _context.next = 8;
                  break;
                case 6:
                  callback && callback(true, {
                    operationId: operationId
                  });
                  res.errMsg && (0, _toast.default)({
                    message: res.errMsg
                  });
                case 8:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        },
        onError: function onError(e) {
          callback && callback(e, {});
        }
      });
    }
  }, {
    key: "loadImg",
    value: function loadImg(data) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var smallImageUrl, bigImageUrl, yLength, requestId, slideWidth, bgWidth, ratio;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              smallImageUrl = data.smallImageUrl, bigImageUrl = data.bigImageUrl, yLength = data.yLength, requestId = data.requestId;
              _context2.next = 3;
              return this.calculateWidthAndHeight(smallImageUrl);
            case 3:
              slideWidth = _context2.sent;
              _context2.next = 6;
              return this.calculateWidthAndHeight(bigImageUrl);
            case 6:
              bgWidth = _context2.sent;
              ratio = BACKDROPWIDTH / bgWidth;
              this.requestId = requestId;
              // 滑块
              this.slideblock = {
                src: smallImageUrl,
                width: slideWidth * ratio,
                height: slideWidth * ratio,
                style: {
                  top: yLength * ratio
                }
              };
              // 背景图
              this.backdrop = {
                src: bigImageUrl
              };
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "calculateWidthAndHeight",
    value: function calculateWidthAndHeight(imgUrl) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resove) {
                var img = new Image();
                img.src = imgUrl;
                if (img.complete) {
                  resove(Number(img.naturalWidth || img.width));
                }
                img.onload = function () {
                  resove(Number(img.naturalWidth || img.width));
                };
              }));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
    }
  }, {
    key: "validatorCaptcha",
    value: function validatorCaptcha(moveLength) {
      var _this3 = this;
      var _this$props3 = this.props,
        operationId = _this$props3.operationId,
        action = _this$props3.action,
        callback = _this$props3.callback;
      if (!moveLength || !this.requestId || !operationId || !action.validatorCaptchaFetchUrl) {
        return;
      }
      console.log("moveLength: ".concat(moveLength));
      (0, _fetch.ajax)({
        url: action.validatorCaptchaFetchUrl,
        data: {
          moveLength: moveLength,
          operationId: operationId,
          requestId: this.requestId
        },
        onSuccess: function onSuccess(res) {
          return __awaiter(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this4 = this;
            var status;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (res.success) {
                    status = this.getStatus(res.data.status);
                    if (status === 'success') {
                      this.checkValid(status);
                    } else {
                      this.updateStatus(status, 2000, function () {
                        if (status === 'timeout') {
                          _this4.handleRefresh();
                        } else {
                          _this4.reset();
                        }
                      });
                    }
                  } else {
                    this.reset();
                    callback && callback(true, {
                      operationId: operationId
                    });
                    res.errMsg && (0, _toast.default)({
                      message: res.errMsg
                    });
                  }
                case 1:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
        },
        onError: function onError(e) {
          callback && callback(e, {});
        }
      });
    }
  }, {
    key: "renderResult",
    value: function renderResult() {
      var _this5 = this;
      var _this$state = this.state,
        status = _this$state.status,
        showStatus = _this$state.showStatus;
      if (status) {
        var resultClassName = (0, _utils.createClassName)(componentClassName, 'result');
        var className3Use = (0, _classnames3.default)(resultClassName, _defineProperty({}, "".concat(resultClassName, "--").concat(status), true));
        var text = function text() {
          if (status === 'success') {
            return /*#__PURE__*/React.createElement(React.Fragment, null, "Keren! Kamu menyelesaikannya dalam", ' ', (_this5.takeTime / 1000).toFixed(2), " detik");
          }
          if (status === 'timeout') {
            return /*#__PURE__*/React.createElement(React.Fragment, null, "Maaf, mohon selesaikan dalam 60 detik.");
          }
          if (status === 'fail') {
            return /*#__PURE__*/React.createElement(React.Fragment, null, "Verifikasi gagal, silakan coba lagi!");
          }
        };
        return /*#__PURE__*/React.createElement(_overlay.default, {
          className: className3Use,
          visible: showStatus
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("em", {
          className: (0, _utils.createClassName)(resultClassName, 'icon')
        }), /*#__PURE__*/React.createElement("p", {
          className: (0, _utils.createClassName)(resultClassName, 'descript')
        }, text())));
      }
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var _this$state2 = this.state,
        mountNode = _this$state2.mountNode,
        visible = _this$state2.visible,
        loading = _this$state2.loading,
        status = _this$state2.status;
      var className2Use = (0, _classnames3.default)(componentClassName, className, _defineProperty({}, "".concat(componentClassName, "--loading"), true));
      var isTooMany = status === 'frequency';
      var node = /*#__PURE__*/React.createElement(_popup.default, {
        className: className2Use,
        visible: visible,
        destroy: true
      }, isTooMany ? ( /*#__PURE__*/React.createElement("div", {
        className: (0, _utils.createClassName)(componentClassName, 'frequency')
      }, /*#__PURE__*/React.createElement("div", {
        className: (0, _utils.createClassName)(componentClassName, 'frequency-icon')
      }), /*#__PURE__*/React.createElement("h2", null, "Oops..kamu telah gagal berulang kali!"), /*#__PURE__*/React.createElement("p", null, "Silakan coba lagi dalam 30 menit"), /*#__PURE__*/React.createElement("div", {
        onClick: this.close,
        className: (0, _utils.createClassName)(componentClassName, 'frequency-btn')
      }, "Batal"))) : ( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: (0, _utils.createClassName)(componentClassName, 'container')
      }, /*#__PURE__*/React.createElement("div", {
        className: (0, _utils.createClassName)(componentClassName, 'header')
      }, /*#__PURE__*/React.createElement("h3", null, "Verify"), /*#__PURE__*/React.createElement("p", null, "For security reason, please slide the slider below to complete verification.")), /*#__PURE__*/React.createElement("div", {
        className: (0, _utils.createClassName)(componentClassName, 'body')
      }, /*#__PURE__*/React.createElement(_captcha.default, {
        ref: this.captchaRef,
        loading: loading,
        backdrop: this.backdrop,
        slideblock: this.slideblock,
        onTouchStart: this.handleTouchStart,
        onRefresh: this.handleRefresh,
        onFinish: this.handleFinish
      }, this.renderResult()))), /*#__PURE__*/React.createElement("span", {
        onClick: this.close,
        className: (0, _utils.createClassName)(componentClassName, 'close')
      }))));
      return (0, _renderToContainer.renderToContainer)(mountNode, node);
    }
  }]);
  return BCaptcha;
}(React.PureComponent);
BCaptcha.propTypes = {
  className: _propTypes.default.string,
  style: _propTypes.default.object
};
BCaptcha.defaultProps = {
  duration: 2000
};