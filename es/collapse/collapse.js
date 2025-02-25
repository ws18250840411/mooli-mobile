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
import CollapseContext from './lib/context';
import { createClassName } from '../utils';
var Collapse = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Collapse, _React$PureComponent);
  var _super = _createSuper(Collapse);
  function Collapse(props) {
    var _this;
    _classCallCheck(this, Collapse);
    _this = _super.call(this, props);
    _this.onSwitch = function (name, expanded) {
      var _this$props = _this.props,
        accordion = _this$props.accordion,
        onChange = _this$props.onChange,
        onInput = _this$props.onInput;
      var curValue = _this.state.curValue;
      if (!accordion) {
        name = expanded ? curValue.concat(name) : curValue.filter(function (activeName) {
          return activeName !== name;
        });
      }
      _this.setState({
        curValue: name
      });
      if (onChange) onChange(name);
      if (onInput) onInput(name);
    };
    _this.state = {
      curValue: props.value || []
    };
    return _this;
  }
  _createClass(Collapse, [{
    key: "render",
    value: function render() {
      var _a = this.props,
        _a$value = _a.value,
        value = _a$value === void 0 ? [] : _a$value,
        _a$border = _a.border,
        border = _a$border === void 0 ? true : _a$border,
        accordion = _a.accordion,
        className = _a.className,
        children = _a.children,
        onChange = _a.onChange,
        onInput = _a.onInput,
        rest = __rest(_a, ["value", "border", "accordion", "className", "children", "onChange", "onInput"]);
      var curValue = this.state.curValue;
      var componentClassName = createClassName('collapse');
      var className2Use = classnames(componentClassName, className, _defineProperty({}, "mooli-hairline--top-bottom", border));
      return /*#__PURE__*/React.createElement(CollapseContext.Provider, {
        value: {
          value: curValue,
          border: border,
          accordion: accordion,
          onSwitch: this.onSwitch
        }
      }, /*#__PURE__*/React.createElement("div", Object.assign({
        className: className2Use
      }, rest), React.Children.map(children, function (child, index) {
        if ( /*#__PURE__*/React.isValidElement(child)) {
          var props = child.props;
          return /*#__PURE__*/React.cloneElement(child, Object.assign({
            index: index
          }, props));
        }
        return null;
      })));
    }
  }]);
  return Collapse;
}(React.PureComponent);
export { Collapse as default };
Collapse.propTypes = {
  accordion: PropTypes.bool,
  border: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  onChange: PropTypes.func,
  onInput: PropTypes.func
};
Collapse.defaultProps = {
  value: [],
  border: true
};