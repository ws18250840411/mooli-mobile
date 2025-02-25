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
import Loading from '../loading';
import { createClassName, addUnit } from '../utils';
var componentClassName = createClassName('switch');
var Switch = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Switch, _React$PureComponent);
  var _super = _createSuper(Switch);
  function Switch() {
    var _this;
    _classCallCheck(this, Switch);
    _this = _super.apply(this, arguments);
    _this.onClick = function () {
      var _this$props = _this.props,
        disabled = _this$props.disabled,
        loading = _this$props.loading,
        inactiveValue = _this$props.inactiveValue,
        activeValue = _this$props.activeValue,
        onChange = _this$props.onChange;
      if (!disabled && !loading) {
        var newValue = _this.checked ? inactiveValue : activeValue;
        onChange && onChange(newValue);
      }
    };
    return _this;
  }
  _createClass(Switch, [{
    key: "checked",
    get: function get() {
      return String(this.props.value) === String(this.props.activeValue);
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        size = _a.size,
        value = _a.value,
        loading = _a.loading,
        disabled = _a.disabled,
        _a$activeValue = _a.activeValue,
        activeValue = _a$activeValue === void 0 ? true : _a$activeValue,
        _a$inactiveValue = _a.inactiveValue,
        inactiveValue = _a$inactiveValue === void 0 ? false : _a$inactiveValue,
        activeColor = _a.activeColor,
        inactiveColor = _a.inactiveColor,
        className = _a.className,
        children = _a.children,
        onChange = _a.onChange,
        rest = __rest(_a, ["size", "value", "loading", "disabled", "activeValue", "inactiveValue", "activeColor", "inactiveColor", "className", "children", "onChange"]);
      var className2Use = classnames(componentClassName, className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentClassName, "--checked"), this.checked), "".concat(componentClassName, "--loading"), loading), "".concat(componentClassName, "--disabled"), disabled));
      var styles = {
        fontSize: addUnit(size),
        backgroundColor: this.checked ? activeColor : inactiveColor
      };
      return /*#__PURE__*/React.createElement("div", Object.assign({
        className: className2Use,
        style: styles,
        onClick: this.onClick
      }, rest), /*#__PURE__*/React.createElement("div", {
        className: createClassName(componentClassName, 'node')
      }, loading && ( /*#__PURE__*/React.createElement(Loading, {
        color: this.checked ? activeColor : inactiveColor,
        className: createClassName(componentClassName, 'load')
      })), children));
    }
  }]);
  return Switch;
}(React.PureComponent);
export { Switch as default };
Switch.propTypes = {
  size: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  onChange: PropTypes.func
};
Switch.defaultProps = {
  activeValue: true,
  inactiveValue: false
};