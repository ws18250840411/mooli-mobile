"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _loading = _interopRequireDefault(require("../loading"));
var _overlay = _interopRequireDefault(require("../overlay"));
var _drag = require("../widgets/drag");
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
var componentClassName = (0, _utils.createClassName)('captcha');
var Captcha = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Captcha, _React$PureComponent);
  var _super = _createSuper(Captcha);
  function Captcha(props) {
    var _this;
    _classCallCheck(this, Captcha);
    _this = _super.call(this, props);
    _this.updateValue = function (value) {
      if (value >= 0 && value <= _this.sliderDiff() && value <= _this.grayDiff()) {
        _this.setState({
          value: value
        });
      }
      if (_this.props.onChange) _this.props.onChange(_this.state.value);
    };
    _this.onTouchStart = function () {
      if (_this.hasMove()) return;
      if (_this.props.onTouchStart) _this.props.onTouchStart();
      _this.startValue = _this.state.value;
      _this.dragStatus = 'start';
    };
    _this.onTouchMove = function (_event, position) {
      if (_this.hasMove()) return;
      if (_this.props.onTouchMove) _this.props.onTouchMove();
      _this.currentValue = _this.startValue + position.x;
      _this.updateValue(_this.currentValue);
      _this.dragStatus = 'draging';
    };
    _this.onTouchEnd = function () {
      if (_this.hasMove()) return;
      if (_this.props.onTouchEnd) _this.props.onTouchEnd();
      if (_this.props.onFinish) _this.props.onFinish(_this.state.value, _this.ratio);
      _this.dragStatus = 'end';
    };
    _this.handleRefresh = function () {
      var onRefresh = _this.props.onRefresh;
      if (onRefresh) {
        onRefresh();
      }
    };
    _this.handleLoad = function (e) {
      var _ref = e.target || e.srcElement,
        naturalWidth = _ref.naturalWidth,
        width = _ref.width;
      _this.ratio = naturalWidth / width;
    };
    _this.reset = function () {
      _this.setState({
        value: 0
      });
      _this.dragStatus = '';
      _this.startValue = 0;
      _this.currentValue = 0;
    };
    _this.state = {
      value: 0
    };
    _this.dragStatus = '';
    _this.startValue = 0;
    _this.currentValue = 0;
    _this.ratio = 1;
    _this.wrapRef = /*#__PURE__*/React.createRef();
    _this.grayRef = /*#__PURE__*/React.createRef();
    _this.sliderRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(Captcha, [{
    key: "sliderDiff",
    value: function sliderDiff() {
      var wrapRect = this.wrapRef.current.getBoundingClientRect();
      var slideRect = this.sliderRef.current.getBoundingClientRect();
      return wrapRect.width - slideRect.width;
    }
  }, {
    key: "grayDiff",
    value: function grayDiff() {
      var wrapRect = this.wrapRef.current.getBoundingClientRect();
      var grayRect = this.grayRef.current.getBoundingClientRect();
      return wrapRect.width - grayRect.width;
    }
  }, {
    key: "hasMove",
    value: function hasMove() {
      var _this$props = this.props,
        loading = _this$props.loading,
        backdrop = _this$props.backdrop,
        slideblock = _this$props.slideblock;
      if (!loading && (backdrop === null || backdrop === void 0 ? void 0 : backdrop.src) && (slideblock === null || slideblock === void 0 ? void 0 : slideblock.src)) return false;
      return true;
    }
  }, {
    key: "renderPanel",
    value: function renderPanel() {
      var _this$props2 = this.props,
        backdrop = _this$props2.backdrop,
        slideblock = _this$props2.slideblock,
        loading = _this$props2.loading,
        children = _this$props2.children;
      var captchaClassName = (0, _utils.createClassName)(componentClassName, 'panel');
      var curSlideblock = Object.assign({}, slideblock);
      var sliderStyle = Object.assign({
        left: this.state.value
      }, (slideblock === null || slideblock === void 0 ? void 0 : slideblock.style) || {});
      curSlideblock === null || curSlideblock === void 0 ? true : delete curSlideblock.style;
      return /*#__PURE__*/React.createElement("div", {
        className: captchaClassName
      }, /*#__PURE__*/React.createElement("div", {
        className: (0, _utils.createClassName)(captchaClassName, 'placeholder')
      }, !loading && ( /*#__PURE__*/React.createElement("div", {
        className: (0, _utils.createClassName)(captchaClassName, 'bg-slider')
      }, backdrop.src && ( /*#__PURE__*/React.createElement("img", Object.assign({
        className: (0, _utils.createClassName)(captchaClassName, 'bg-img'),
        alt: "\u9A8C\u8BC1\u7801\u80CC\u666F",
        onLoad: this.handleLoad
      }, backdrop))), curSlideblock.src && ( /*#__PURE__*/React.createElement("img", Object.assign({
        ref: this.sliderRef,
        className: (0, _utils.createClassName)(captchaClassName, 'slider-img'),
        style: sliderStyle,
        alt: "\u9A8C\u8BC1\u7801\u6ED1\u5757"
      }, curSlideblock))), /*#__PURE__*/React.createElement("span", {
        onClick: this.handleRefresh,
        className: (0, _utils.createClassName)(captchaClassName, 'refresh')
      }))), /*#__PURE__*/React.createElement(_overlay.default, {
        className: (0, _utils.createClassName)(captchaClassName, 'loading'),
        visible: loading
      }, /*#__PURE__*/React.createElement("div", {
        className: (0, _utils.createClassName)(captchaClassName, 'loading-wrap')
      }, /*#__PURE__*/React.createElement(_loading.default, {
        vertical: true,
        size: "56",
        color: "#FED000"
      }))), children));
    }
  }, {
    key: "renderControl",
    value: function renderControl() {
      var controlClassName = (0, _utils.createClassName)(componentClassName, 'control');
      var grayStyle = {
        width: "calc(100% - ".concat(this.state.value, "px)")
      };
      return /*#__PURE__*/React.createElement("div", {
        className: controlClassName
      }, /*#__PURE__*/React.createElement(_drag.Drag, {
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd
      }, /*#__PURE__*/React.createElement("div", {
        style: grayStyle,
        className: (0, _utils.createClassName)(controlClassName, 'gray')
      }, /*#__PURE__*/React.createElement("em", null), /*#__PURE__*/React.createElement("span", {
        ref: this.grayRef,
        className: (0, _utils.createClassName)(controlClassName, 'button')
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var className2Use = (0, _classnames2.default)(componentClassName, className, _defineProperty({}, "".concat(componentClassName, "--loading"), true));
      return /*#__PURE__*/React.createElement("div", {
        ref: this.wrapRef,
        className: className2Use
      }, this.renderPanel(), this.renderControl());
    }
  }]);
  return Captcha;
}(React.PureComponent);
Captcha.propTypes = {
  className: _propTypes.default.string,
  style: _propTypes.default.object
};
Captcha.defaultProps = {};