"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _trigger = _interopRequireDefault(require("../widgets/trigger"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var componentClassName = (0, _utils.createClassName)('popover');
var Popover = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Popover, _React$PureComponent);
  var _super = _createSuper(Popover);
  function Popover() {
    var _this;
    _classCallCheck(this, Popover);
    _this = _super.apply(this, arguments);
    _this.renderPopup = function () {
      var _this$props = _this.props,
        color = _this$props.color,
        visibleArrow = _this$props.visibleArrow,
        content = _this$props.content;
      var style2Use = {};
      var style3Use = {
        color: color
      };
      if (color) {
        style2Use.backgroundColor = color;
      }
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, visibleArrow ? ( /*#__PURE__*/_react.default.createElement("div", {
        style: style3Use,
        className: "".concat(componentClassName, "-arrow")
      })) : null, /*#__PURE__*/_react.default.createElement("div", {
        style: style2Use,
        className: "".concat(componentClassName, "-content")
      }, typeof content === 'function' ? content() : content));
    };
    return _this;
  }
  _createClass(Popover, [{
    key: "render",
    value: function render() {
      var _a = this.props,
        visible = _a.visible,
        content = _a.content,
        color = _a.color,
        _a$theme = _a.theme,
        theme = _a$theme === void 0 ? 'light' : _a$theme,
        transition = _a.transition,
        trigger = _a.trigger,
        _a$visibleArrow = _a.visibleArrow,
        visibleArrow = _a$visibleArrow === void 0 ? true : _a$visibleArrow,
        _a$destroy = _a.destroy,
        destroy = _a$destroy === void 0 ? false : _a$destroy,
        _a$arrowSize = _a.arrowSize,
        arrowSize = _a$arrowSize === void 0 ? 6 : _a$arrowSize,
        _a$offset = _a.offset,
        offset = _a$offset === void 0 ? 0 : _a$offset,
        _a$delay = _a.delay,
        delay = _a$delay === void 0 ? 100 : _a$delay,
        className = _a.className,
        style = _a.style,
        onVisibleChange = _a.onVisibleChange,
        rest = __rest(_a, ["visible", "content", "color", "theme", "transition", "trigger", "visibleArrow", "destroy", "arrowSize", "offset", "delay", "className", "style", "onVisibleChange"]);
      var popupTransition = Object.assign(Object.assign({}, transition), {
        timeout: 500,
        classNames: 'mooli-fade'
      });
      var className2Use = (0, _classnames2.default)(componentClassName, className, _defineProperty({}, "".concat(componentClassName, "--").concat(theme), theme));
      return /*#__PURE__*/_react.default.createElement(_trigger.default, Object.assign({
        prefixCls: componentClassName,
        popupClassName: className2Use,
        popupStyle: style,
        popupTransition: popupTransition,
        action: trigger,
        offset: visibleArrow ? offset + arrowSize : offset,
        destroyPopupOnHide: destroy,
        popupVisible: visible,
        popup: this.renderPopup(),
        onPopupVisibleChange: onVisibleChange
      }, rest));
    }
  }]);
  return Popover;
}(_react.default.PureComponent);
Popover.propTypes = {
  content: _propTypes.default.node,
  destroy: _propTypes.default.bool,
  visibleArrow: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  offset: _propTypes.default.number,
  arrowSize: _propTypes.default.number,
  transition: _propTypes.default.object,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  onVisibleChange: _propTypes.default.func
};
Popover.defaultProps = {
  theme: 'light',
  visibleArrow: true,
  destroy: false,
  arrowSize: 6,
  offset: 0,
  delay: 100
};