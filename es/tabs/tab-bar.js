function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var __rest = this && this.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Info from '../info';
import { createClassName } from '../utils';
var componentClassName = createClassName('tab');
var TabBar = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(TabBar, _React$PureComponent);
  var _super = _createSuper(TabBar);
  function TabBar() {
    var _this;
    _classCallCheck(this, TabBar);
    _this = _super.apply(this, arguments);
    _this.genText = function () {
      var _this$props = _this.props,
        scrollable = _this$props.scrollable,
        title = _this$props.title,
        dot = _this$props.dot,
        info = _this$props.info;
      var textClassName = createClassName(componentClassName, 'text');
      var className3Use = classnames(textClassName, _defineProperty({}, "".concat(textClassName, "--ellipsis"), scrollable));
      var Text = /*#__PURE__*/React.createElement("span", {
        className: className3Use
      }, title);
      if (dot || info && info !== '') {
        var textWrapperClassName = createClassName(componentClassName, 'text-wrapper');
        return /*#__PURE__*/React.createElement("span", {
          className: textWrapperClassName
        }, Text, /*#__PURE__*/React.createElement(Info, {
          dot: dot,
          info: info
        }));
      }
      return Text;
    };
    return _this;
  }
  _createClass(TabBar, [{
    key: "curStyle",
    get: function get() {
      var _this$props2 = this.props,
        type = _this$props2.type,
        color = _this$props2.color,
        disabled = _this$props2.disabled,
        isActive = _this$props2.isActive,
        activeColor = _this$props2.activeColor,
        inactiveColor = _this$props2.inactiveColor;
      var style = {};
      var isCard = type === 'card';
      if (color && isCard) {
        style.borderColor = color;
        if (!disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }
      var titleColor = isActive ? activeColor : inactiveColor;
      if (titleColor) {
        style.color = titleColor;
      }
      return style;
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        dot = _a.dot,
        type = _a.type,
        info = _a.info,
        color = _a.color,
        title = _a.title,
        isActive = _a.isActive,
        disabled = _a.disabled,
        scrollable = _a.scrollable,
        activeColor = _a.activeColor,
        inactiveColor = _a.inactiveColor,
        style = _a.style,
        className = _a.className,
        children = _a.children,
        rest = __rest(_a, ["dot", "type", "info", "color", "title", "isActive", "disabled", "scrollable", "activeColor", "inactiveColor", "style", "className", "children"]);
      var className2Use = classnames(componentClassName, className, _defineProperty(_defineProperty({}, "".concat(componentClassName, "--active"), isActive), "".concat(componentClassName, "--disabled"), disabled));
      return /*#__PURE__*/React.createElement("div", Object.assign({
        className: className2Use,
        style: Object.assign(Object.assign({}, this.curStyle), style)
      }, rest), this.genText());
    }
  }]);
  return TabBar;
}(React.PureComponent);
export { TabBar as default };
TabBar.propTypes = {
  dot: PropTypes.bool,
  type: PropTypes.string,
  info: PropTypes.string,
  color: PropTypes.string,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  scrollable: PropTypes.bool,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
TabBar.defaultProps = {};