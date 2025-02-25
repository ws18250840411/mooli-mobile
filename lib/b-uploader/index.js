"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.State = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _toast = _interopRequireDefault(require("../toast"));
var _uploader = _interopRequireDefault(require("../uploader"));
var _fetch = require("../widgets/fetch");
var _compress = require("./lib/compress");
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var State;
(function (State) {
  State["READY"] = "ready";
  State["SUCCESS"] = "done";
  State["FAIL"] = "failed";
  State["UPLOADING"] = "uploading";
})(State || (exports.State = State = {}));
var TOTAL_PERCENT = 100;
var BUploader = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(BUploader, _React$PureComponent);
  var _super = _createSuper(BUploader);
  function BUploader(props) {
    var _this;
    _classCallCheck(this, BUploader);
    _this = _super.call(this, props);
    _this.changeFileState = function (file, params) {
      Object.keys(params).forEach(function (key) {
        file[key] = params[key];
      });
      file.name = file.file.name;
      file.uid = (0, _utils.getUniqueId)();
      return file;
    };
    _this.setFileState = function (file) {
      var curFile = _toConsumableArray(_this.state.fileList);
      var isAdd = curFile.every(function (f) {
        return f.uid !== file.uid;
      });
      if (isAdd) curFile.push(file);
      return _this.setState({
        fileList: curFile
      });
    };
    // 上传之前
    _this.handleBeforeRead = function (file) {
      return new Promise(function (resolve, reject) {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var files, compressFiles, i, f, maxSize, compressedFile;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                files = Array.isArray(file) ? file : [file];
                compressFiles = [];
                i = 0;
              case 3:
                if (!(i < files.length)) {
                  _context.next = 24;
                  break;
                }
                f = files[i];
                if (!(this.props.accept && f.type !== this.props.accept)) {
                  _context.next = 9;
                  break;
                }
                (0, _toast.default)("\u8BF7\u4E0A\u4F20 ".concat(this.props.accept, " \u683C\u5F0F\u56FE\u7247"));
                reject();
                return _context.abrupt("break", 24);
              case 9:
                if (!this.props.compress) {
                  _context.next = 21;
                  break;
                }
                maxSize = this.props.compress.maxSize;
                compressedFile = void 0;
                if (!(maxSize && maxSize >= f.size)) {
                  _context.next = 17;
                  break;
                }
                console.log("\u538B\u7F29\u503C maxSize \u4E0D\u80FD\u5927\u4E8E\u539F\u56FE\u7247");
                compressedFile = f;
                _context.next = 20;
                break;
              case 17:
                _context.next = 19;
                return (0, _compress.compress)(f, this.props.compress);
              case 19:
                compressedFile = _context.sent;
              case 20:
                compressFiles.push(compressedFile);
              case 21:
                i++;
                _context.next = 3;
                break;
              case 24:
                resolve(compressFiles.length ? compressFiles : files);
              case 25:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
      });
    };
    _this.triggerChange = function (_ref) {
      var file = _ref.file,
        response = _ref.response,
        error = _ref.error,
        eventType = _ref.eventType;
      var onChange = _this.props.onChange;
      if (typeof onChange === 'function') {
        onChange({
          response: response,
          error: error,
          eventType: eventType,
          file: file,
          fileList: _this.state.fileList
        });
      }
    };
    _this.post = function (file) {
      var _this$props = _this.props,
        name = _this$props.name,
        action = _this$props.action,
        method = _this$props.method,
        data = _this$props.data,
        headers = _this$props.headers,
        withCredentials = _this$props.withCredentials,
        customRequest = _this$props.customRequest,
        uploadStartMessage = _this$props.uploadStartMessage,
        uploadingMessage = _this$props.uploadingMessage,
        uploadFailMessage = _this$props.uploadFailMessage,
        uploadSuccessMessage = _this$props.uploadSuccessMessage;
      var defaultOptions = {
        action: action,
        headers: headers,
        method: method,
        withCredentials: withCredentials,
        data: data,
        file: file.file,
        filename: name
      };
      var options = Object.assign(Object.assign({}, defaultOptions), {
        onLoadStart: function onLoadStart() {
          _this.changeFileState(file, {
            status: State.UPLOADING,
            message: uploadStartMessage
          });
          _this.setFileState(file);
        },
        onProgress: function onProgress(event) {
          if (event.total > 0) {
            file.percent = event.loaded / event.total * TOTAL_PERCENT;
          }
          _this.changeFileState(file, {
            status: State.UPLOADING,
            message: uploadingMessage
          });
          _this.setFileState(file);
          _this.triggerChange({
            file: file,
            eventType: 'onProgress'
          });
        },
        onSuccess: function onSuccess(response) {
          _this.changeFileState(file, {
            status: State.SUCCESS,
            message: uploadSuccessMessage,
            response: response
          });
          _this.setFileState(file);
          _this.triggerChange({
            file: file,
            response: response,
            eventType: 'onSuccess'
          });
        },
        onError: function onError(error) {
          _this.changeFileState(file, {
            status: State.FAIL,
            message: uploadFailMessage,
            error: error
          });
          _this.setFileState(file);
          _this.triggerChange({
            file: file,
            error: error,
            eventType: 'onError'
          });
        }
      });
      // fetch 请求
      var useCustomAjax = customRequest instanceof Function;
      if (!useCustomAjax) return (0, _fetch.fetch)(options);
      if (customRequest) {
        customRequest(defaultOptions).then(options.onSuccess).catch(options.onError);
      }
    };
    // 上传之后
    _this.handleAfterRead = function (file) {
      file.forEach(_this.post);
    };
    _this.handleOversize = function () {
      var maxSize = _this.props.maxSize;
      (0, _toast.default)("\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ".concat(maxSize, "kb"));
    };
    _this.handleDelete = function (_file, _ref2) {
      var index = _ref2.index;
      var fileList = _this.state.fileList;
      var curfileList = fileList.slice(0);
      curfileList.splice(index, 1);
      _this.setState({
        fileList: curfileList
      });
    };
    _this.handleClosePreview = function () {};
    _this.state = {
      fileList: props.fileList || [],
      uploading: false
    };
    return _this;
  }
  _createClass(BUploader, [{
    key: "render",
    value: function render() {
      var _a = this.props,
        action = _a.action,
        method = _a.method,
        data = _a.data,
        headers = _a.headers,
        withCredentials = _a.withCredentials,
        autoUpload = _a.autoUpload,
        fileList = _a.fileList,
        customRequest = _a.customRequest,
        uploadStartMessage = _a.uploadStartMessage,
        uploadingMessage = _a.uploadingMessage,
        uploadFailMessage = _a.uploadFailMessage,
        uploadSuccessMessage = _a.uploadSuccessMessage,
        onChange = _a.onChange,
        onRemove = _a.onRemove,
        onAfterRead = _a.onAfterRead,
        onBeforeRead = _a.onBeforeRead,
        onBeforeDelete = _a.onBeforeDelete,
        onOversize = _a.onOversize,
        onClosePreview = _a.onClosePreview,
        className = _a.className,
        rest = __rest(_a, ["action", "method", "data", "headers", "withCredentials", "autoUpload", "fileList", "customRequest", "uploadStartMessage", "uploadingMessage", "uploadFailMessage", "uploadSuccessMessage", "onChange", "onRemove", "onAfterRead", "onBeforeRead", "onBeforeDelete", "onOversize", "onClosePreview", "className"]);
      var wrapperClassName = (0, _utils.createClassName)('buploader');
      var className2Use = (0, _classnames.default)(wrapperClassName, className);
      return /*#__PURE__*/React.createElement(_uploader.default, Object.assign({
        className: className2Use,
        fileList: this.state.fileList,
        onAfterRead: this.handleAfterRead,
        onBeforeRead: this.handleBeforeRead,
        onOversize: this.handleOversize,
        onBeforeDelete: this.props.onRemove,
        onDelete: this.handleDelete,
        onClosePreview: this.handleClosePreview
      }, rest));
    }
  }]);
  return BUploader;
}(React.PureComponent);
BUploader.propTypes = {
  action: _propTypes.default.string,
  name: _propTypes.default.string,
  method: _propTypes.default.string,
  withCredentials: _propTypes.default.bool,
  data: _propTypes.default.object,
  headers: _propTypes.default.object,
  autoUpload: _propTypes.default.bool,
  uploadStartMessage: _propTypes.default.string,
  uploadingMessage: _propTypes.default.string,
  uploadFailMessage: _propTypes.default.string,
  uploadSuccessMessage: _propTypes.default.string,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  children: _propTypes.default.node,
  onChange: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  customRequest: _propTypes.default.func
};
BUploader.defaultProps = {
  name: 'file',
  action: '',
  method: 'post',
  data: {},
  headers: {},
  withCredentials: false,
  autoUpload: true,
  uploadStartMessage: '上传中...',
  uploadingMessage: '上传中...',
  uploadFailMessage: '上传失败',
  uploadSuccessMessage: '上传成功'
};