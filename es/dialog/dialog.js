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
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Popup } from '../widgets/popup';
import Button from '../button';
import { createClassName, addUnit } from '../utils';
import { renderToContainer } from '../utils/renderToContainer';
export var BODY_LOCK_CLASS = 'mooli-overflow-hidden';
var Dialog = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Dialog, _React$PureComponent);
  var _super = _createSuper(Dialog);
  function Dialog(props) {
    var _this;
    _classCallCheck(this, Dialog);
    _this = _super.call(this, props);
    _this.handleEnter = function (e) {
      var _this$props = _this.props,
        onOpen = _this$props.onOpen,
        lock = _this$props.lock;
      if (lock) document.body.classList.add(BODY_LOCK_CLASS);
      if (typeof onOpen === 'function') onOpen(e);
    };
    _this.handleEntered = function (e) {
      var onOpened = _this.props.onOpened;
      if (typeof onOpened === 'function') onOpened(e);
    };
    _this.handleExit = function (e) {
      var onClose = _this.props.onClose;
      if (typeof onClose === 'function') onClose(e);
    };
    _this.handleExited = function (e) {
      var _this$props2 = _this.props,
        onClosed = _this$props2.onClosed,
        lock = _this$props2.lock;
      if (lock) document.body.classList.remove(BODY_LOCK_CLASS);
      if (typeof onClosed === 'function') onClosed(e);
    };
    _this.state = {
      loading: {
        confirm: false,
        cancel: false
      }
    };
    return _this;
  }
  _createClass(Dialog, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _a = this.props,
        visible = _a.visible,
        title = _a.title,
        width = _a.width,
        message = _a.message,
        showCancelButton = _a.showCancelButton,
        cancelButtonText = _a.cancelButtonText,
        cancelButtonColor = _a.cancelButtonColor,
        cancelLoading = _a.cancelLoading,
        showConfirmButton = _a.showConfirmButton,
        confirmButtonText = _a.confirmButtonText,
        confirmButtonColor = _a.confirmButtonColor,
        confirmLoading = _a.confirmLoading,
        mask = _a.mask,
        transition = _a.transition,
        maskTransition = _a.maskTransition,
        maskProps = _a.maskProps,
        destroy = _a.destroy,
        children = _a.children,
        onConfirm = _a.onConfirm,
        onCancel = _a.onCancel,
        lock = _a.lock,
        onClosed = _a.onClosed,
        onOpened = _a.onOpened,
        closeOnClickMask = _a.closeOnClickMask,
        getContainer = _a.getContainer,
        className = _a.className,
        style = _a.style,
        vertical = _a.vertical,
        rest = __rest(_a, ["visible", "title", "width", "message", "showCancelButton", "cancelButtonText", "cancelButtonColor", "cancelLoading", "showConfirmButton", "confirmButtonText", "confirmButtonColor", "confirmLoading", "mask", "transition", "maskTransition", "maskProps", "destroy", "children", "onConfirm", "onCancel", "lock", "onClosed", "onOpened", "closeOnClickMask", "getContainer", "className", "style", "vertical"]);
      var componentClassName = createClassName('dialog');
      var classNameUse = classnames(componentClassName, className);
      var renderTitle = function renderTitle() {
        if (title) {
          var headerClassName = createClassName(componentClassName, 'header');
          var className2Use = classnames(headerClassName, _defineProperty({}, "".concat(headerClassName, "--isolated"), !message));
          return /*#__PURE__*/React.createElement("div", {
            className: className2Use
          }, title);
        }
        return null;
      };
      var renderMessage = function renderMessage(hasTitle) {
        var content = message || children;
        var messageClassName = createClassName(componentClassName, 'message');
        var className3Use = classnames(messageClassName, _defineProperty({}, "".concat(messageClassName, "--has-title"), hasTitle));
        if (content) {
          return /*#__PURE__*/React.createElement("div", {
            className: className3Use
          }, typeof content === 'function' ? content() : content);
        }
        return null;
      };
      var renderContent = function renderContent() {
        var hasTitle = !!title;
        var contentClassName = createClassName(componentClassName, 'content');
        return /*#__PURE__*/React.createElement("div", {
          className: contentClassName
        }, renderMessage(hasTitle));
      };
      var renderFooter = function renderFooter() {
        if (!showCancelButton && !showConfirmButton) return null;
        var footerClassName = createClassName(componentClassName, 'footer');
        var cancelClassName = createClassName(componentClassName, 'cancel');
        var confirmClassName = createClassName(componentClassName, 'confirm');
        var className3Use = classnames(footerClassName, _defineProperty({}, "".concat(footerClassName, "--vertical"), vertical));
        var className4Use = classnames(confirmClassName, _defineProperty(_defineProperty({}, "mooli-hairline--left", showCancelButton), "".concat(confirmClassName, "--loading"), confirmLoading));
        var className5Use = classnames(cancelClassName, _defineProperty({}, "mooli-hairline--top", vertical));
        var btns = [];
        if (showCancelButton) {
          btns.push( /*#__PURE__*/React.createElement(Button, {
            key: "cancel",
            size: "large",
            className: className5Use,
            style: {
              color: cancelButtonColor
            },
            loading: cancelLoading,
            onClick: onCancel
          }, cancelButtonText));
        }
        if (showConfirmButton) {
          if (vertical) {
            btns.unshift( /*#__PURE__*/React.createElement(Button, {
              key: "confirm",
              size: "large",
              className: className4Use,
              style: {
                color: confirmButtonColor
              },
              loading: confirmLoading,
              onClick: onConfirm
            }, confirmButtonText));
          } else {
            btns.push( /*#__PURE__*/React.createElement(Button, {
              key: "confirm",
              size: "large",
              className: className4Use,
              style: {
                color: confirmButtonColor
              },
              loading: confirmLoading,
              onClick: onConfirm
            }, confirmButtonText));
          }
        }
        return /*#__PURE__*/React.createElement("div", {
          className: "".concat(className3Use, " mooli-hairline--top")
        }, btns);
      };
      var popupTransition = Object.assign({
        timeout: 500,
        classNames: createClassName(componentClassName, 'scale'),
        onEnter: function onEnter(e) {
          return _this2.handleEnter(e);
        },
        onEntered: function onEntered(e) {
          return _this2.handleEntered(e);
        },
        onExit: function onExit(e) {
          return _this2.handleExit(e);
        },
        onExited: function onExited(e) {
          return _this2.handleExited(e);
        }
      }, transition);
      var masksTransition = Object.assign({
        timeout: 500,
        classNames: 'mooli-fade'
      }, maskTransition);
      var node = /*#__PURE__*/React.createElement(Popup, Object.assign({
        className: classNameUse,
        visible: visible,
        mask: mask,
        destroy: destroy,
        transition: popupTransition,
        maskTransition: masksTransition,
        maskProps: maskProps,
        style: Object.assign({
          width: addUnit(width)
        }, style)
      }, rest), renderTitle(), renderContent(), renderFooter());
      return renderToContainer(getContainer, node);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.visible !== prevState.visible) {
        return {
          visible: nextProps.visible
        };
      }
      return null;
    }
  }]);
  return Dialog;
}(React.PureComponent);
export { Dialog as default };
Dialog.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.node,
  message: PropTypes.node,
  width: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  showCancelButton: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  cancelButtonColor: PropTypes.string,
  cancelLoading: PropTypes.bool,
  showConfirmButton: PropTypes.bool,
  confirmButtonText: PropTypes.string,
  confirmButtonColor: PropTypes.string,
  confirmLoading: PropTypes.bool,
  closeOnClickMask: PropTypes.bool,
  callback: PropTypes.func,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
};
Dialog.defaultProps = {
  visible: true,
  mask: true,
  closeOnClickMask: false,
  showCancelButton: true,
  cancelButtonText: '取消',
  cancelLoading: false,
  showConfirmButton: true,
  confirmButtonText: '确定',
  confirmLoading: false,
  getContainer: typeof document !== 'undefined' ? document.body : null
};