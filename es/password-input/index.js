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
import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName, addUnit } from '../utils';
var componentClassName = createClassName('password-input');
var PasswordInput = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PasswordInput, _React$PureComponent);
  var _super = _createSuper(PasswordInput);
  function PasswordInput() {
    var _this;
    _classCallCheck(this, PasswordInput);
    _this = _super.apply(this, arguments);
    _this.renderPoints = function () {
      var _this$props = _this.props,
        value = _this$props.value,
        mask = _this$props.mask,
        length = _this$props.length,
        gutter = _this$props.gutter,
        focused = _this$props.focused,
        cursorColor = _this$props.cursorColor,
        cursorStyle = _this$props.cursorStyle;
      var pointArrs = [];
      for (var i = 0; i < length; i++) {
        var char = value[i];
        var showBorder = i !== 0 && !gutter;
        var showCursor = focused && i === value.length;
        var itemClassName = createClassName(componentClassName, 'item');
        var style = {};
        if (i !== 0 && gutter) {
          style = {
            marginLeft: addUnit(gutter)
          };
        }
        pointArrs.push( /*#__PURE__*/React.createElement("li", {
          key: i,
          className: classnames(itemClassName, _defineProperty(_defineProperty({}, "mooli-hairline--left", showBorder), "".concat(itemClassName, "--focus"), showCursor)),
          style: style
        }, mask ? ( /*#__PURE__*/React.createElement("i", {
          style: Object.assign({
            visibility: char ? 'visible' : 'hidden',
            backgroundColor: cursorColor
          }, cursorStyle)
        })) : char, showCursor && ( /*#__PURE__*/React.createElement("div", {
          className: createClassName(componentClassName, 'cursor')
        }))));
      }
      return pointArrs;
    };
    return _this;
  }
  _createClass(PasswordInput, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        gutter = _this$props2.gutter,
        info = _this$props2.info,
        errorInfo = _this$props2.errorInfo,
        className = _this$props2.className,
        onFocus = _this$props2.onFocus;
      var className2Use = classnames(componentClassName, className);
      var cInfo = errorInfo || info;
      return /*#__PURE__*/React.createElement("div", {
        className: className2Use
      }, /*#__PURE__*/React.createElement("ul", {
        className: classnames(createClassName(componentClassName, 'security'), _defineProperty({}, "mooli-hairline--surround", !gutter)),
        onClick: function onClick(e) {
          e.stopPropagation();
          onFocus && onFocus();
        }
      }, this.renderPoints()), cInfo && ( /*#__PURE__*/React.createElement("div", {
        className: classnames(_defineProperty(_defineProperty({}, "".concat(className2Use, "--info"), !errorInfo), "".concat(className2Use, "--error-info"), errorInfo))
      }, cInfo)));
    }
  }]);
  return PasswordInput;
}(React.PureComponent);
export { PasswordInput as default };
PasswordInput.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
PasswordInput.defaultProps = {
  value: '',
  mask: true,
  length: 6
};