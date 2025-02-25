function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createClassName } from '../utils';
import { Popup } from '../widgets/popup';
import Loading, { types as loadTypes } from '../loading';
import Icon from '../icon';
import { renderToContainer } from '../utils/renderToContainer';
export var positions = ['center', 'top', 'bottom']; // 位置
export var types = ['html', 'loading', 'success', 'fail']; // 类型
var DEFAULT_TYPE = types[0];
export { DEFAULT_TYPE };
var DEFAULT_POSITION = positions[0];
export { DEFAULT_POSITION };
export var DEFAULT_DURATION = 2000;
export var prefixCls = createClassName('toast');
var BODY_FORBID_CLASS = 'mooli-forbid-hidden';
var Toast = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Toast, _React$PureComponent);
  var _super = _createSuper(Toast);
  function Toast(props) {
    var _this;
    _classCallCheck(this, Toast);
    _this = _super.call(this, props);
    _this.timer = null; // 定时器
    _this.setTimer = function (duration) {
      if (duration > 0) _this.timer = window.setTimeout(function () {
        return _this.setState({
          visible: false
        });
      }, duration);
    };
    _this.clearTimer = function () {
      if (_this.timer) {
        clearTimeout(_this.timer);
        _this.timer = null;
      }
    };
    _this.handleEnter = function () {
      var _this$props = _this.props,
        forbidClick = _this$props.forbidClick,
        onEnter = _this$props.onEnter;
      if (forbidClick) document.body.classList.add(BODY_FORBID_CLASS);
      if (typeof onEnter === 'function') onEnter();
    };
    _this.handleExit = function () {
      var _this$props2 = _this.props,
        forbidClick = _this$props2.forbidClick,
        onClose = _this$props2.onClose,
        onExited = _this$props2.onExited;
      if (forbidClick) document.body.classList.remove(BODY_FORBID_CLASS);
      if (typeof onExited === 'function') onExited();
      if (typeof onClose === 'function') onClose();
    };
    _this.handleClose = function () {
      _this.setState({
        visible: false
      });
      _this.clearTimer();
    };
    _this.handleClick = function (e) {
      var _this$props3 = _this.props,
        closeOnClick = _this$props3.closeOnClick,
        onClick = _this$props3.onClick;
      if (closeOnClick) _this.handleClose();
      if (typeof onClick === 'function') onClick(e);
    };
    _this.handleSingle = function () {
      _this.setState({
        hide: true
      });
    };
    _this.state = {
      visible: true,
      mountNode: null,
      hide: false
    };
    return _this;
  }
  _createClass(Toast, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
        duration = _this$props4.duration,
        position = _this$props4.position;
      var mountNode = document.querySelector(".".concat(prefixCls, "--").concat(position));
      if (mountNode) this.setState({
        mountNode: mountNode
      });
      if (duration && duration > 0) this.setTimer(duration);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        type = _this$props5.type,
        message = _this$props5.message,
        icon = _this$props5.icon,
        iconSize = _this$props5.iconSize,
        loadingType = _this$props5.loadingType,
        transition = _this$props5.transition,
        className = _this$props5.className,
        style = _this$props5.style;
      var _this$state = this.state,
        visible = _this$state.visible,
        mountNode = _this$state.mountNode,
        hide = _this$state.hide;
      if (!mountNode) return null;
      var renderIcon = function renderIcon() {
        var hasIcon = icon || type === 'success' || type === 'fail';
        if (hasIcon) {
          if ( /*#__PURE__*/React.isValidElement(icon)) {
            return icon;
          } else {
            return /*#__PURE__*/React.createElement(Icon, {
              name: icon || type,
              size: iconSize,
              className: createClassName(prefixCls, 'icon')
            });
          }
        }
        if (type === 'loading') {
          return /*#__PURE__*/React.createElement(Loading, {
            className: createClassName(prefixCls, 'loading'),
            size: iconSize,
            type: loadingType
          });
        }
        return null;
      };
      var renderMessage = function renderMessage() {
        var messageClassName = createClassName(prefixCls, 'text');
        if (message) {
          return /*#__PURE__*/React.createElement("div", {
            className: messageClassName
          }, message);
        }
        return null;
      };
      var toastClassName = createClassName(prefixCls, 'content');
      var className2Use = classnames(toastClassName, className, _defineProperty({}, "".concat(toastClassName, "--icon"), icon || types.slice(1).some(function (t) {
        return t === type;
      })));
      var node = /*#__PURE__*/React.createElement(Popup, {
        visible: visible,
        fixed: false,
        transition: Object.assign({
          timeout: 500,
          classNames: 'mooli-fade',
          onEnter: this.handleEnter,
          onExited: this.handleExit
        }, transition),
        style: {
          display: hide ? 'none' : 'block'
        }
      }, /*#__PURE__*/React.createElement("div", {
        role: "toast",
        className: className2Use,
        style: style,
        onClick: this.handleClick
      }, renderIcon(), renderMessage()));
      return renderToContainer(mountNode, node);
    }
  }]);
  return Toast;
}(React.PureComponent);
export { Toast as default };
Toast.propTypes = {
  type: PropTypes.oneOf([].concat(types)),
  message: PropTypes.node,
  duration: PropTypes.number,
  position: PropTypes.oneOf([].concat(positions)),
  iconSize: PropTypes.string,
  loadingType: PropTypes.oneOf(_toConsumableArray(loadTypes)),
  closeOnClick: PropTypes.bool,
  forbidClick: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  onClose: PropTypes.func
};
Toast.defaultProps = {
  type: DEFAULT_TYPE,
  position: DEFAULT_POSITION,
  duration: DEFAULT_DURATION,
  forbidClick: false,
  closeOnClick: false
};