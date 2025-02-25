function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
import cloneDeep from 'lodash/cloneDeep';
import { Drag } from '../widgets/drag';
import { createClassName, addUnit } from '../utils';
import { preventDefault } from '../utils/dom/event';
var componentClassName = createClassName('slider');
var Slider = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Slider, _React$PureComponent);
  var _super = _createSuper(Slider);
  function Slider(props) {
    var _this;
    _classCallCheck(this, Slider);
    _this = _super.call(this, props);
    _this.updateValue = function (value) {
      var _this$props = _this.props,
        range = _this$props.range,
        onChange = _this$props.onChange;
      if (range) {
        value = _this.handleOverlap(value).map(_this.format);
      } else {
        value = _this.format(value);
      }
      if (!_this.isSameValue(value, _this.startValue)) {
        console.log("value: ".concat(value));
        onChange && onChange(value);
      }
    };
    _this.isSameValue = function (newValue, oldValue) {
      return JSON.stringify(newValue) === JSON.stringify(oldValue);
    };
    _this.format = function (value) {
      return Math.round(Math.max(_this.props.min, Math.min(value, _this.props.max)) / _this.props.step) * _this.props.step;
    };
    _this.handleOverlap = function (value) {
      if (value[0] > value[1]) {
        value = cloneDeep(value);
        return value.reverse();
      }
      return value;
    };
    _this.onTouchStart = function () {
      if (_this.props.disabled) {
        return;
      }
      _this.currentValue = _this.props.value;
      if (_this.props.range) {
        _this.startValue = _this.props.value.map(_this.format);
      } else {
        _this.startValue = _this.format(_this.props.value);
      }
      _this.dragStatus = 'start';
    };
    _this.onTouchMove = function (event, position) {
      if (_this.props.disabled) {
        return;
      }
      if (_this.props.onDragStart) _this.props.onDragStart();
      preventDefault(event, true);
      _this.dragStatus = 'draging';
      var rect = _this.wrapperRef.current.getBoundingClientRect();
      var delta = _this.props.vertical ? position.y : position.x;
      var total = _this.props.vertical ? rect.height : rect.width;
      var diff = delta / total * _this.scope;
      if (_this.props.range) {
        _this.currentValue[_this.index] = _this.startValue[_this.index] + diff;
      } else {
        _this.currentValue = _this.startValue + diff;
      }
      _this.updateValue(_this.currentValue);
    };
    _this.onTouchEnd = function () {
      if (_this.props.disabled) {
        return;
      }
      if (_this.dragStatus === 'draging') {
        _this.updateValue(_this.currentValue);
        if (_this.props.onDragEnd) _this.props.onDragEnd();
      }
      _this.dragStatus = '';
    };
    _this.onClick = function (event) {
      event.stopPropagation();
      if (_this.props.disabled) {
        return;
      }
      var _this$props2 = _this.props,
        vertical = _this$props2.vertical,
        min = _this$props2.min,
        range = _this$props2.range;
      var rect = _this.wrapperRef.current.getBoundingClientRect();
      var delta = vertical ? event.clientY - rect.top : event.clientX - rect.left;
      var total = vertical ? rect.height : rect.width;
      var value = Number(min) + delta / total * _this.scope;
      if (range) {
        var _this$props$value = _slicedToArray(_this.props.value, 2),
          left = _this$props$value[0],
          right = _this$props$value[1];
        var middle = (left + right) / 2;
        if (value <= middle) {
          left = value;
        } else {
          right = value;
        }
        value = [left, right];
      }
      _this.startValue = _this.props.value;
      _this.updateValue(value);
    };
    _this.renderButton = function () {
      var _this$props3 = _this.props,
        disabled = _this$props3.disabled,
        button = _this$props3.button;
      return /*#__PURE__*/React.createElement(Drag, {
        onTouchStart: function onTouchStart() {
          _this.index = 1;
          _this.onTouchStart();
        },
        onTouchMove: _this.onTouchMove,
        onTouchEnd: _this.onTouchEnd
      }, /*#__PURE__*/React.createElement("div", {
        tabIndex: disabled ? -1 : 0,
        className: createClassName(componentClassName, 'button-wrapper-right'),
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, button || ( /*#__PURE__*/React.createElement("div", {
        className: createClassName(componentClassName, 'button'),
        style: _this.buttonStyle
      }))));
    };
    _this.renderButtonGroup = function () {
      var _this$props4 = _this.props,
        disabled = _this$props4.disabled,
        button = _this$props4.button;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Drag, {
        onTouchStart: function onTouchStart() {
          _this.index = 0;
          _this.onTouchStart();
        },
        onTouchMove: _this.onTouchMove,
        onTouchEnd: _this.onTouchEnd
      }, /*#__PURE__*/React.createElement("div", {
        tabIndex: disabled ? -1 : 0,
        className: createClassName(componentClassName, 'button-wrapper-left'),
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, button || ( /*#__PURE__*/React.createElement("div", {
        className: createClassName(componentClassName, 'button'),
        style: _this.buttonStyle
      })))), _this.renderButton());
    };
    _this.wrapperRef = /*#__PURE__*/React.createRef();
    _this.dragStatus = '';
    _this.index = 0;
    _this.startValue = 0;
    _this.currentValue = 0;
    return _this;
  }
  _createClass(Slider, [{
    key: "scope",
    get: function get() {
      return this.props.max - this.props.min;
    }
  }, {
    key: "buttonStyle",
    get: function get() {
      var buttonSize = this.props.buttonSize;
      if (!buttonSize) return {};
      var size = addUnit(buttonSize);
      return {
        width: size,
        height: size
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateValue(this.props.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _a = this.props,
        _a$value = _a.value,
        value = _a$value === void 0 ? 0 : _a$value,
        _a$step = _a.step,
        step = _a$step === void 0 ? 1 : _a$step,
        _a$min = _a.min,
        min = _a$min === void 0 ? 0 : _a$min,
        _a$max = _a.max,
        max = _a$max === void 0 ? 100 : _a$max,
        disabled = _a.disabled,
        vertical = _a.vertical,
        range = _a.range,
        barHeight = _a.barHeight,
        button = _a.button,
        buttonSize = _a.buttonSize,
        activeColor = _a.activeColor,
        inactiveColor = _a.inactiveColor,
        className = _a.className,
        children = _a.children,
        onChange = _a.onChange,
        onDragEnd = _a.onDragEnd,
        onDragStart = _a.onDragStart,
        rest = __rest(_a, ["value", "step", "min", "max", "disabled", "vertical", "range", "barHeight", "button", "buttonSize", "activeColor", "inactiveColor", "className", "children", "onChange", "onDragEnd", "onDragStart"]);
      var mainAxis = vertical ? 'height' : 'width';
      var crossAxis = vertical ? 'width' : 'height';
      var wrapperStyle = {
        background: inactiveColor
      };
      wrapperStyle[crossAxis] = addUnit(barHeight);
      // 长度百分比
      var calcMainAxis = function calcMainAxis() {
        if (range) {
          return "".concat((value[1] - value[0]) * 100 / _this2.scope, "%");
        }
        return "".concat((value - min) * 100 / _this2.scope, "%");
      };
      // 偏移量
      var calcOffset = function calcOffset() {
        if (range) {
          return "".concat((value[0] - min) * 100 / _this2.scope, "%");
        }
        return null;
      };
      var barStyle = {
        left: vertical ? null : calcOffset(),
        top: vertical ? calcOffset() : null,
        background: activeColor
      };
      barStyle[mainAxis] = calcMainAxis();
      if (this.dragStatus) {
        barStyle.transition = 'none';
      }
      var className2Use = classnames(componentClassName, className, _defineProperty(_defineProperty({}, "".concat(componentClassName, "--disabled"), disabled), "".concat(componentClassName, "--vertical"), vertical));
      return /*#__PURE__*/React.createElement("div", Object.assign({
        ref: this.wrapperRef,
        className: className2Use,
        style: wrapperStyle,
        onClick: this.onClick
      }, rest), /*#__PURE__*/React.createElement("div", {
        className: createClassName(componentClassName, 'bar'),
        style: barStyle
      }, range ? this.renderButtonGroup() : this.renderButton()));
    }
  }]);
  return Slider;
}(React.PureComponent);
export { Slider as default };
Slider.propTypes = {
  step: PropTypes.number
};
Slider.defaultProps = {
  value: 0,
  step: 1,
  min: 0,
  max: 100
};