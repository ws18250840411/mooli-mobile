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
import Cell from '../cell/cell';
import Icon from '../icon';
import { createClassName, addUnit, formatNumber, resetScroll, isObject } from '../utils';
import { preventDefault } from '../utils/dom/event';
var Field = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Field, _React$PureComponent);
  var _super = _createSuper(Field);
  function Field(props) {
    var _this;
    _classCallCheck(this, Field);
    _this = _super.call(this, props);
    _this.adjustSize = function () {
      var _this$props = _this.props,
        type = _this$props.type,
        autoSize = _this$props.autoSize;
      var input = _this.inputRef.current;
      if (!(type === 'textarea' && autoSize) || !input) {
        return;
      }
      input.style.height = 'auto';
      var height = input.scrollHeight;
      if (isObject(autoSize)) {
        var maxHeight = autoSize.maxHeight,
          minHeight = autoSize.minHeight;
        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }
      if (height) {
        input.style.height = height + 'px';
      }
    };
    _this.updateValue = function (val) {
      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'onChange';
      var curValue = String(val || '');
      var _this$props2 = _this.props,
        type = _this$props2.type,
        value = _this$props2.value,
        formatter = _this$props2.formatter,
        formatTrigger = _this$props2.formatTrigger,
        maxLength = _this$props2.maxLength,
        onChange = _this$props2.onChange;
      if (maxLength && curValue.length > maxLength) {
        curValue = curValue.slice(0, maxLength);
      }
      if (type === 'number' || type === 'digit') {
        var isNumber = type === 'number';
        curValue = formatNumber(curValue, isNumber, isNumber);
      }
      if (formatter && trigger === formatTrigger) {
        curValue = formatter(curValue);
      }
      var input = _this.inputRef.current;
      if (input && curValue !== input.value) {
        input.value = curValue;
      }
      if (curValue !== value) {
        if (typeof onChange === 'function') onChange(curValue);
      }
      _this.adjustSize();
    };
    _this.onFocus = function () {
      _this.inputRef.current.input && _this.inputRef.current.input.focus();
    };
    _this.onBlur = function () {
      _this.inputRef.current.input && _this.inputRef.current.input.blur();
    };
    _this.onFocusInput = function (e) {
      var _this$props3 = _this.props,
        onFocus = _this$props3.onFocus,
        readOnly = _this$props3.readOnly;
      _this.setState({
        focused: true
      });
      if (typeof onFocus === 'function') onFocus(e);
      if (readOnly) _this.onBlur();
    };
    _this.onClickInput = function (e) {
      var onClickInput = _this.props.onClickInput;
      if (typeof onClickInput === 'function') onClickInput(e);
    };
    _this.onKeyPressInput = function (e) {
      var onKeyPress = _this.props.onKeyPress;
      if (typeof onKeyPress === 'function') onKeyPress(e);
    };
    _this.onInput = function (e) {
      if (e.target.composing) {
        return;
      }
      _this.updateValue(e.target.value);
    };
    _this.onBlurInput = function (e) {
      var _this$props4 = _this.props,
        onBlur = _this$props4.onBlur,
        value = _this$props4.value;
      _this.updateValue(value, 'onBlur');
      _this.setState({
        focused: false
      });
      if (typeof onBlur === 'function') onBlur(e);
      resetScroll();
    };
    _this.onClear = function (e) {
      preventDefault(e);
      var onClear = _this.props.onClear;
      _this.updateValue('');
      _this.onFocus();
      if (typeof onClear === 'function') onClear(e);
    };
    _this.showClear = function () {
      var value = _this.props.value;
      var focused = _this.state.focused;
      var hasValue = value && value !== '';
      return hasValue && focused;
    };
    _this.state = {
      focused: false
    };
    _this.inputRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.adjustSize();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _a = this.props,
        type = _a.type,
        label = _a.label,
        value = _a.value,
        defaultValue = _a.defaultValue,
        colon = _a.colon,
        leftIcon = _a.leftIcon,
        rightIcon = _a.rightIcon,
        size = _a.size,
        center = _a.center,
        border = _a.border,
        required = _a.required,
        clickable = _a.clickable,
        disabled = _a.disabled,
        readOnly = _a.readOnly,
        clearable = _a.clearable,
        clearableIcon = _a.clearableIcon,
        placeholder = _a.placeholder,
        inputAlign = _a.inputAlign,
        labelWidth = _a.labelWidth,
        labelAlign = _a.labelAlign,
        labelClass = _a.labelClass,
        arrowDirection = _a.arrowDirection,
        autoSize = _a.autoSize,
        rows = _a.rows,
        maxLength = _a.maxLength,
        limit = _a.limit,
        formatTrigger = _a.formatTrigger,
        formatter = _a.formatter,
        error = _a.error,
        errorMessage = _a.errorMessage,
        errorMessageAlign = _a.errorMessageAlign,
        className = _a.className,
        prefix = _a.prefix,
        children = _a.children,
        onBlur = _a.onBlur,
        onFocus = _a.onFocus,
        onClear = _a.onClear,
        onKeyPress = _a.onKeyPress,
        onClickInput = _a.onClickInput,
        onChange = _a.onChange,
        onClickLeftIcon = _a.onClickLeftIcon,
        onClickRightIcon = _a.onClickRightIcon,
        rest = __rest(_a, ["type", "label", "value", "defaultValue", "colon", "leftIcon", "rightIcon", "size", "center", "border", "required", "clickable", "disabled", "readOnly", "clearable", "clearableIcon", "placeholder", "inputAlign", "labelWidth", "labelAlign", "labelClass", "arrowDirection", "autoSize", "rows", "maxLength", "limit", "formatTrigger", "formatter", "error", "errorMessage", "errorMessageAlign", "className", "prefix", "children", "onBlur", "onFocus", "onClear", "onKeyPress", "onClickInput", "onChange", "onClickLeftIcon", "onClickRightIcon"]);
      var focused = this.state.focused;
      var componentClassName = createClassName('field');
      var className2Use = classnames(componentClassName, className, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentClassName, "--focused"), focused), "".concat(componentClassName, "--disabled"), disabled), "".concat(componentClassName, "--error"), error), "".concat(componentClassName, "--label--").concat(labelAlign), labelAlign), "".concat(componentClassName, "--min-height"), type === 'textarea' && !autoSize));
      var labelStyle = {};
      if (labelWidth) labelStyle.width = addUnit(labelWidth);
      var valueClassName = createClassName(componentClassName, 'value');
      var labelClassName = createClassName(componentClassName, 'label');
      var className3Use = classnames(labelClassName, labelClass, _defineProperty({}, "".concat(labelClassName, "--").concat(labelAlign), labelAlign));
      var genInput = function genInput() {
        var controlClassName = createClassName(componentClassName, 'control');
        var className4Use = classnames(controlClassName, _defineProperty({}, "".concat(controlClassName, "--").concat(inputAlign), inputAlign));
        var inputProps = {
          ref: _this2.inputRef,
          rows: rows !== undefined ? Number(rows) : undefined,
          className: className4Use,
          value: value,
          defaultValue: defaultValue,
          disabled: disabled,
          readOnly: readOnly,
          placeholder: placeholder,
          onBlur: _this2.onBlurInput,
          onFocus: _this2.onFocusInput,
          onInput: _this2.onInput,
          onClick: _this2.onClickInput,
          onKeyPress: _this2.onKeyPressInput
        };
        if (type === 'textarea') {
          // @ts-ignore
          return /*#__PURE__*/React.createElement("textarea", Object.assign({}, inputProps));
        }
        var inputType = type;
        var inputMode;
        if (type === 'number') {
          inputType = 'text';
          inputMode = 'decimal';
        }
        if (type === 'digit') {
          inputType = 'tel';
          inputMode = 'numeric';
        }
        // @ts-ignore
        return /*#__PURE__*/React.createElement("input", Object.assign({
          type: inputType,
          inputMode: inputMode
        }, inputProps));
      };
      var genClear = function genClear() {
        if (clearable && !readOnly && _this2.showClear()) {
          if (clearableIcon) {
            return /*#__PURE__*/React.createElement("span", {
              className: createClassName(componentClassName, 'clear'),
              onMouseDown: _this2.onClear
            }, clearableIcon);
          }
          return /*#__PURE__*/React.createElement(Icon, {
            name: "clear",
            className: createClassName(componentClassName, 'clear'),
            onMouseDown: _this2.onClear
          });
        }
        return null;
      };
      var genChildren = function genChildren() {
        if (children) {
          return /*#__PURE__*/React.createElement("div", {
            className: createClassName(componentClassName, 'button')
          }, children);
        }
        return null;
      };
      var genWordLimit = function genWordLimit() {
        if (limit && maxLength) {
          var count = (value || '').length;
          return /*#__PURE__*/React.createElement("div", {
            className: createClassName(componentClassName, 'word-limit')
          }, /*#__PURE__*/React.createElement("span", {
            className: createClassName(componentClassName, 'word-num')
          }, count), "/", maxLength);
        }
      };
      var genMessage = function genMessage() {
        var message = errorMessage;
        if (message) {
          var controlClassName = createClassName(componentClassName, 'error-message');
          var className5Use = classnames(controlClassName, _defineProperty({}, "".concat(controlClassName, "--").concat(errorMessageAlign), errorMessageAlign));
          return /*#__PURE__*/React.createElement("div", {
            className: className5Use
          }, message);
        }
      };
      var renderLabel = function renderLabel() {
        var colons = colon ? ':' : '';
        if (label) {
          return /*#__PURE__*/React.createElement("span", null, label, colons);
        }
        return null;
      };
      var genPrefix = function genPrefix() {
        if (prefix && (focused || value)) {
          return /*#__PURE__*/React.createElement("span", {
            className: createClassName(componentClassName, 'prefix')
          }, prefix);
        }
        return null;
      };
      var renderValue = function renderValue() {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          className: createClassName(componentClassName, 'body')
        }, genPrefix(), genInput(), genClear(), genChildren()), genWordLimit(), genMessage());
      };
      return /*#__PURE__*/React.createElement(Cell, Object.assign({
        title: renderLabel(),
        value: renderValue(),
        iconLeft: leftIcon,
        iconRight: rightIcon,
        center: center,
        border: border,
        size: size,
        required: required,
        clickable: clickable,
        titleStyle: labelStyle,
        titleClass: className3Use,
        valueClass: valueClassName,
        arrowDirection: arrowDirection,
        className: className2Use,
        onClickLeftIcon: onClickLeftIcon,
        onClickRightIcon: onClickRightIcon
      }, rest));
    }
  }]);
  return Field;
}(React.PureComponent);
export { Field as default };
Field.propTypes = {
  value: PropTypes.string
};
Field.defaultProps = {
  value: '',
  type: 'text',
  formatTrigger: 'onChange'
};