function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
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
import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Loading from '../loading';
import Tabs from '../tabs/tabs';
import TabPane from '../tabs/tab-pane';
import { fetch } from '../widgets/fetch';
import { customeFieldNames, getActiveTab } from './lib/utils';
import { createClassName } from '../utils';
var componentClassName = createClassName('baddress');
var AddressLevel;
(function (AddressLevel) {
  AddressLevel[AddressLevel["province"] = 2] = "province";
  AddressLevel[AddressLevel["city"] = 3] = "city";
  AddressLevel[AddressLevel["district"] = 4] = "district";
  AddressLevel[AddressLevel["village"] = 5] = "village";
})(AddressLevel || (AddressLevel = {}));
var BAddress = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(BAddress, _React$PureComponent);
  var _super = _createSuper(BAddress);
  function BAddress(props) {
    var _this;
    _classCallCheck(this, BAddress);
    _this = _super.call(this, props);
    _this.state = {
      loading: false,
      activeTab: 0,
      provinceId: props.value && props.value.provinceId || 0,
      provinceName: props.value && props.value.provinceName || '',
      provinceData: [],
      cityId: props.value && props.value.cityId || 0,
      cityName: props.value && props.value.cityName || '',
      cityData: [],
      districtId: props.value && props.value.districtId || 0,
      districtName: props.value && props.value.districtName || '',
      districtData: [],
      villageId: props.value && props.value.villageId || 0,
      villageName: props.value && props.value.villageName || '',
      villageData: []
    };
    _this.addressMap = new Map();
    return _this;
  }
  _createClass(BAddress, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getAddressData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps.value) !== JSON.stringify(this.props.value)) {
        this.getAddressData();
      }
    }
  }, {
    key: "remoteFetch",
    value: function remoteFetch(action, data, call) {
      var _this2 = this;
      if (!action) return;
      var _this$props = this.props,
        method = _this$props.method,
        headers = _this$props.headers,
        withCredentials = _this$props.withCredentials;
      this.setLoading(true);
      // fetch 请求
      fetch({
        action: action,
        headers: Object.assign({
          'Content-Type': 'application/json'
        }, headers),
        method: method,
        data: data,
        withCredentials: withCredentials,
        onSuccess: function onSuccess(res) {
          _this2.setLoading(false);
          call(res);
        },
        onError: function onError() {
          _this2.setLoading(false);
        }
      });
    }
  }, {
    key: "setLoading",
    value: function setLoading(loading) {
      this.setState({
        loading: loading
      });
    }
  }, {
    key: "handleChangeAndFinish",
    value: function handleChangeAndFinish(isLast) {
      var _this$props2 = this.props,
        onFinish = _this$props2.onFinish,
        onChange = _this$props2.onChange;
      var options = this.getSelectOptions();
      if (isLast) {
        onFinish && onFinish(options);
      }
      onChange && onChange(options);
    }
  }, {
    key: "updateActiveTab",
    value: function updateActiveTab(activeTab) {
      this.setState({
        activeTab: activeTab
      });
    }
  }, {
    key: "getAddressMap",
    value: function getAddressMap(id) {
      return this.addressMap.get(id) || [];
    }
  }, {
    key: "setAddressMap",
    value: function setAddressMap(id, data) {
      return this.addressMap.set(id, data);
    }
  }, {
    key: "hasLast",
    value: function hasLast(type) {
      return Number(getActiveTab(this.props.value)) === Number(AddressLevel[type]);
    }
  }, {
    key: "getAddressData",
    value: function getAddressData() {
      this.getProvince({});
      if (this.props.value) {
        var _this$props$value = this.props.value,
          provinceId = _this$props$value.provinceId,
          provinceName = _this$props$value.provinceName,
          cityId = _this$props$value.cityId,
          cityName = _this$props$value.cityName,
          districtId = _this$props$value.districtId,
          districtName = _this$props$value.districtName,
          villageName = _this$props$value.villageName,
          villageId = _this$props$value.villageId;
        this.getCity({
          provinceId: provinceId,
          provinceName: provinceName,
          isLast: this.hasLast('province')
        });
        this.getDistrict({
          cityId: cityId,
          cityName: cityName,
          isLast: this.hasLast('city')
        });
        this.getVillage({
          districtId: districtId,
          districtName: districtName,
          isLast: this.hasLast('district')
        });
        this.setVillage({
          villageName: villageName,
          villageId: villageId,
          isLast: this.hasLast('village')
        });
      }
    }
  }, {
    key: "getProvince",
    value: function getProvince(_ref) {
      var activeTab = _ref.activeTab;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this3 = this;
        var mapData, provinceFetchUrl;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              mapData = this.getAddressMap(0);
              if (mapData.length === 0) {
                provinceFetchUrl = this.props.action.provinceFetchUrl;
                if (provinceFetchUrl) {
                  this.remoteFetch(provinceFetchUrl, {}, function (res) {
                    var _res$data = res.data,
                      data = _res$data === void 0 ? [] : _res$data;
                    _this3.setAddressMap(0, data);
                    _this3.setState({
                      provinceData: data,
                      activeTab: activeTab
                    });
                  });
                }
              }
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getCity",
    value: function getCity(_ref2) {
      var provinceId = _ref2.provinceId,
        provinceName = _ref2.provinceName,
        _ref2$activeTab = _ref2.activeTab,
        activeTab = _ref2$activeTab === void 0 ? 1 : _ref2$activeTab,
        isLast = _ref2.isLast;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this4 = this;
        var mapData, cityFetchUrl;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (provinceId) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              this.setState({
                provinceId: provinceId,
                provinceName: provinceName
              }, function () {
                return _this4.handleChangeAndFinish(isLast);
              });
              if (!isLast) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              mapData = this.getAddressMap(provinceId);
              if (mapData.length === 0) {
                cityFetchUrl = this.props.action.cityFetchUrl;
                if (cityFetchUrl) {
                  this.remoteFetch(cityFetchUrl, {
                    provinceId: provinceId
                  }, function (res) {
                    var _res$data2 = res.data,
                      data = _res$data2 === void 0 ? [] : _res$data2;
                    _this4.setAddressMap(provinceId, data);
                    _this4.setState({
                      villageData: [],
                      districtData: [],
                      cityData: data,
                      activeTab: activeTab
                    });
                  });
                }
              } else {
                this.setState({
                  villageData: [],
                  districtData: [],
                  cityData: mapData,
                  activeTab: activeTab
                });
              }
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "getDistrict",
    value: function getDistrict(_ref3) {
      var cityId = _ref3.cityId,
        cityName = _ref3.cityName,
        _ref3$activeTab = _ref3.activeTab,
        activeTab = _ref3$activeTab === void 0 ? 2 : _ref3$activeTab,
        isLast = _ref3.isLast;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this5 = this;
        var mapData, districtFetchUrl;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (cityId) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              this.setState({
                cityId: cityId,
                cityName: cityName
              }, function () {
                return _this5.handleChangeAndFinish(isLast);
              });
              if (!isLast) {
                _context3.next = 5;
                break;
              }
              return _context3.abrupt("return");
            case 5:
              mapData = this.getAddressMap(cityId);
              if (mapData.length === 0) {
                districtFetchUrl = this.props.action.districtFetchUrl;
                if (districtFetchUrl) {
                  this.remoteFetch(districtFetchUrl, {
                    cityId: cityId
                  }, function (res) {
                    var _res$data3 = res.data,
                      data = _res$data3 === void 0 ? [] : _res$data3;
                    _this5.setAddressMap(cityId, data);
                    _this5.setState({
                      villageData: [],
                      districtData: data,
                      activeTab: activeTab
                    });
                  });
                }
              } else {
                this.setState({
                  villageData: [],
                  districtData: mapData,
                  activeTab: activeTab
                });
              }
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "getVillage",
    value: function getVillage(_ref4) {
      var districtId = _ref4.districtId,
        districtName = _ref4.districtName,
        _ref4$activeTab = _ref4.activeTab,
        activeTab = _ref4$activeTab === void 0 ? 3 : _ref4$activeTab,
        isLast = _ref4.isLast;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this6 = this;
        var mapData, villageFetchUrl;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (districtId) {
                _context4.next = 2;
                break;
              }
              return _context4.abrupt("return");
            case 2:
              this.setState({
                districtId: districtId,
                districtName: districtName
              }, function () {
                return _this6.handleChangeAndFinish(isLast);
              });
              if (!isLast) {
                _context4.next = 5;
                break;
              }
              return _context4.abrupt("return");
            case 5:
              mapData = this.getAddressMap(districtId);
              if (mapData.length === 0) {
                villageFetchUrl = this.props.action.villageFetchUrl;
                if (villageFetchUrl) {
                  this.remoteFetch(villageFetchUrl, {
                    districtId: districtId
                  }, function (res) {
                    var _res$data4 = res.data,
                      data = _res$data4 === void 0 ? [] : _res$data4;
                    _this6.setAddressMap(districtId, data);
                    _this6.setState({
                      villageData: data,
                      activeTab: activeTab
                    });
                  });
                }
              } else {
                this.setState({
                  villageData: mapData,
                  activeTab: activeTab
                });
              }
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "setVillage",
    value: function setVillage(_ref5) {
      var villageName = _ref5.villageName,
        villageId = _ref5.villageId,
        isLast = _ref5.isLast;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this7 = this;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (villageId) {
                _context5.next = 2;
                break;
              }
              return _context5.abrupt("return");
            case 2:
              this.setState({
                villageName: villageName,
                villageId: villageId
              }, function () {
                return _this7.handleChangeAndFinish(isLast);
              });
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "getSelectOptions",
    value: function getSelectOptions() {
      var _this$state = this.state,
        provinceId = _this$state.provinceId,
        provinceName = _this$state.provinceName,
        cityId = _this$state.cityId,
        cityName = _this$state.cityName,
        districtId = _this$state.districtId,
        districtName = _this$state.districtName,
        villageId = _this$state.villageId,
        villageName = _this$state.villageName;
      return {
        provinceId: provinceId,
        provinceName: provinceName,
        cityId: cityId,
        cityName: cityName,
        districtId: districtId,
        districtName: districtName,
        villageId: villageId,
        villageName: villageName
      };
    }
  }, {
    key: "handleItemClick",
    value: function handleItemClick(item, type) {
      if (item) {
        var _this$props$level = this.props.level,
          level = _this$props$level === void 0 ? 5 : _this$props$level;
        var isLast = Number(level) === Number(AddressLevel[type]);
        if (type === 'province') {
          this.getCity({
            provinceId: item.value,
            provinceName: item.text,
            isLast: isLast
          });
        }
        if (type === 'city') {
          this.getDistrict({
            cityId: item.value,
            cityName: item.text,
            isLast: isLast
          });
        }
        if (type === 'district') {
          this.getVillage({
            districtId: item.value,
            districtName: item.text,
            isLast: isLast
          });
        }
        if (type === 'village') {
          this.setVillage({
            villageId: item.value,
            villageName: item.text,
            isLast: isLast
          });
        }
      }
    }
  }, {
    key: "getCustomKey",
    value: function getCustomKey(customConfig, type) {
      var fieldNames = this.props.fieldNames;
      if (fieldNames && fieldNames[type]) {
        return fieldNames[type];
      } else if (customConfig && customConfig.fieldNames && customConfig.fieldNames[type]) {
        return customConfig.fieldNames[type];
      }
      return type;
    }
  }, {
    key: "renderLoad",
    value: function renderLoad() {
      var loading = this.state.loading;
      if (loading) {
        return /*#__PURE__*/React.createElement("div", {
          className: createClassName(componentClassName, 'loading')
        }, /*#__PURE__*/React.createElement(Loading, {
          vertical: true,
          size: "56",
          color: "#FED000"
        }));
      }
      return null;
    }
  }, {
    key: "renderTabPanItem",
    value: function renderTabPanItem(options, selectValue, type) {
      var _this8 = this;
      if (options.length > 0) {
        var tabItemClassName = createClassName(componentClassName, 'tabpan-item');
        return /*#__PURE__*/React.createElement("ul", {
          className: tabItemClassName
        }, options.map(function (item) {
          var className3Use = classnames({
            // eslint-disable-next-line eqeqeq
            actived: selectValue == item.value
          });
          return /*#__PURE__*/React.createElement("li", {
            key: item.value,
            onClick: function onClick() {
              return _this8.handleItemClick(item, type);
            }
          }, /*#__PURE__*/React.createElement("span", null, item.text), /*#__PURE__*/React.createElement("em", {
            className: className3Use
          }));
        }));
      }
      return null;
    }
  }, {
    key: "renderTabPan",
    value: function renderTabPan() {
      var _this$state2 = this.state,
        provinceId = _this$state2.provinceId,
        provinceData = _this$state2.provinceData,
        cityId = _this$state2.cityId,
        cityData = _this$state2.cityData,
        districtId = _this$state2.districtId,
        districtData = _this$state2.districtData,
        villageId = _this$state2.villageId,
        villageData = _this$state2.villageData;
      var _this$props3 = this.props,
        pCustomConfig = _this$props3.pCustomConfig,
        cCustomConfig = _this$props3.cCustomConfig,
        dCustomConfig = _this$props3.dCustomConfig,
        vCustomConfig = _this$props3.vCustomConfig;
      var tabpans = [];
      // province
      if (provinceData.length > 0) {
        var defaultCustomConfig = Object.assign({
          title: 'Province',
          fieldNames: {
            text: 'provinceName',
            value: 'provinceId'
          }
        }, pCustomConfig);
        var text = this.getCustomKey(defaultCustomConfig, 'text');
        var value = this.getCustomKey(defaultCustomConfig, 'value');
        var pData = customeFieldNames(provinceData, {
          text: text,
          value: value
        });
        tabpans.push( /*#__PURE__*/React.createElement(TabPane, {
          title: defaultCustomConfig.title,
          key: "province"
        }, this.renderTabPanItem(pData, provinceId, 'province')));
      }
      // city
      if (cityData.length > 0) {
        var _defaultCustomConfig = Object.assign({
          title: 'City',
          fieldNames: {
            text: 'cityName',
            value: 'cityId'
          }
        }, cCustomConfig);
        var _text = this.getCustomKey(_defaultCustomConfig, 'text');
        var _value = this.getCustomKey(_defaultCustomConfig, 'value');
        var cData = customeFieldNames(cityData, {
          text: _text,
          value: _value
        });
        tabpans.push( /*#__PURE__*/React.createElement(TabPane, {
          title: _defaultCustomConfig.title,
          key: "city"
        }, this.renderTabPanItem(cData, cityId, 'city')));
      }
      // district
      if (districtData.length > 0) {
        var _defaultCustomConfig2 = Object.assign({
          title: 'District',
          fieldNames: {
            text: 'districtName',
            value: 'districtId'
          }
        }, dCustomConfig);
        var _text2 = this.getCustomKey(_defaultCustomConfig2, 'text');
        var _value2 = this.getCustomKey(_defaultCustomConfig2, 'value');
        var dData = customeFieldNames(districtData, {
          text: _text2,
          value: _value2
        });
        tabpans.push( /*#__PURE__*/React.createElement(TabPane, {
          title: _defaultCustomConfig2.title,
          key: "district"
        }, this.renderTabPanItem(dData, districtId, 'district')));
      }
      // village
      if (villageData.length > 0) {
        var _defaultCustomConfig3 = Object.assign({
          title: 'Village',
          fieldNames: {
            text: 'villageName',
            value: 'villageId'
          }
        }, vCustomConfig);
        var _text3 = this.getCustomKey(_defaultCustomConfig3, 'text');
        var _value3 = this.getCustomKey(_defaultCustomConfig3, 'value');
        var vData = customeFieldNames(villageData, {
          text: _text3,
          value: _value3
        });
        tabpans.push( /*#__PURE__*/React.createElement(TabPane, {
          title: _defaultCustomConfig3.title,
          key: "village"
        }, this.renderTabPanItem(vData, villageId, 'village')));
      }
      return tabpans;
    }
  }, {
    key: "renderTabs",
    value: function renderTabs() {
      var _this9 = this;
      var tabsClassName = createClassName(componentClassName, 'tabs');
      return /*#__PURE__*/React.createElement(Tabs, {
        className: tabsClassName,
        value: this.state.activeTab,
        animated: true,
        swipeable: true,
        swipeThreshold: 0,
        color: this.props.activeColor,
        onChange: function onChange(index) {
          return _this9.setState({
            activeTab: index
          });
        }
      }, this.renderTabPan());
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var className2Use = classnames(componentClassName, className);
      return /*#__PURE__*/React.createElement("div", {
        className: className2Use
      }, this.renderLoad(), this.renderTabs());
    }
  }]);
  return BAddress;
}(React.PureComponent);
export { BAddress as default };
BAddress.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
BAddress.defaultProps = {
  level: 5,
  action: '',
  method: 'post',
  data: {},
  headers: {},
  withCredentials: false
};