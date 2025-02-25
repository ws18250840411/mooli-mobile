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
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Popup from '../popup';
import { createClassName } from '../utils';
import Icon from '../icon';
import Button from '../button';
import Loading from '../loading';
var componentClassName = createClassName('action-sheet');
var ActionSheet = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ActionSheet, _React$PureComponent);
  var _super = _createSuper(ActionSheet);
  function ActionSheet() {
    var _this;
    _classCallCheck(this, ActionSheet);
    _this = _super.apply(this, arguments);
    _this.renderHeader = function () {
      var _this$props = _this.props,
        title = _this$props.title,
        closeable = _this$props.closeable,
        closeIcon = _this$props.closeIcon,
        onCancel = _this$props.onCancel;
      if (title) {
        return /*#__PURE__*/React.createElement("div", {
          className: createClassName(componentClassName, 'header')
        }, title, closeable && ( /*#__PURE__*/React.createElement(Icon, {
          name: closeIcon,
          className: createClassName(componentClassName, 'close'),
          onClick: onCancel
        })));
      }
      return null;
    };
    _this.renderCancel = function () {
      var _this$props2 = _this.props,
        cancelText = _this$props2.cancelText,
        onCancel = _this$props2.onCancel;
      if (cancelText) {
        return /*#__PURE__*/React.createElement("div", {
          className: createClassName(componentClassName, 'gap')
        }, /*#__PURE__*/React.createElement(Button, {
          bordered: false,
          className: createClassName(componentClassName, 'cancel'),
          onClick: onCancel
        }, cancelText));
      }
      return null;
    };
    _this.renderDescription = function () {
      var description = _this.props.description;
      if (description) {
        return /*#__PURE__*/React.createElement("div", {
          className: createClassName(componentClassName, 'description')
        }, typeof description === 'function' ? description() : description);
      }
      return null;
    };
    _this.renderOption = function (item, index) {
      var onSelect = _this.props.onSelect;
      var name = item.name,
        color = item.color,
        subname = item.subname,
        loading = item.loading,
        callback = item.callback,
        disabled = item.disabled,
        className = item.className;
      var Content = loading ? ( /*#__PURE__*/React.createElement(Loading, {
        className: createClassName(componentClassName, 'loading-icon')
      })) : ( /*#__PURE__*/React.createElement(React.Fragment, null, name && ( /*#__PURE__*/React.createElement("span", {
        className: createClassName(componentClassName, 'name')
      }, name)), subname && ( /*#__PURE__*/React.createElement("div", {
        className: createClassName(componentClassName, 'subname')
      }, subname))));
      var buttonClassName = createClassName(componentClassName, 'item');
      var className4Use = classnames(buttonClassName, className, _defineProperty(_defineProperty({}, "".concat(buttonClassName, "--loading"), loading), "".concat(buttonClassName, "--disabled"), disabled));
      var handleClick = function handleClick() {
        if (disabled || loading) {
          return;
        }
        if (callback) {
          callback(item);
        }
        if (typeof onSelect === 'function') onSelect({
          item: item,
          index: index
        });
      };
      return /*#__PURE__*/React.createElement(Button, {
        disabled: !!disabled,
        key: index,
        bordered: false,
        className: className4Use,
        style: {
          color: color
        },
        onClick: handleClick
      }, Content);
    };
    _this.renderOptions = function () {
      var actions = _this.props.actions;
      if (actions) {
        return actions.map(_this.renderOption);
      }
      return null;
    };
    _this.renderContent = function () {
      var children = _this.props.children;
      return /*#__PURE__*/React.createElement("div", {
        className: createClassName(componentClassName, 'content')
      }, _this.renderOptions(), typeof children === 'function' ? children() : children);
    };
    return _this;
  }
  _createClass(ActionSheet, [{
    key: "render",
    value: function render() {
      var _a = this.props,
        visible = _a.visible,
        title = _a.title,
        _a$round = _a.round,
        round = _a$round === void 0 ? true : _a$round,
        closeable = _a.closeable,
        _a$closeIcon = _a.closeIcon,
        closeIcon = _a$closeIcon === void 0 ? 'cross' : _a$closeIcon,
        cancelText = _a.cancelText,
        description = _a.description,
        actions = _a.actions,
        children = _a.children,
        onSelect = _a.onSelect,
        onCancel = _a.onCancel,
        rest = __rest(_a, ["visible", "title", "round", "closeable", "closeIcon", "cancelText", "description", "actions", "children", "onSelect", "onCancel"]);
      return /*#__PURE__*/React.createElement(Popup, Object.assign({
        visible: visible,
        round: round,
        position: "bottom"
      }, rest), this.renderHeader(), this.renderDescription(), this.renderContent(), this.renderCancel());
    }
  }]);
  return ActionSheet;
}(React.PureComponent);
export { ActionSheet as default };
ActionSheet.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  round: PropTypes.bool,
  closeable: PropTypes.bool,
  cancelText: PropTypes.node,
  description: PropTypes.node,
  closeIcon: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onSelect: PropTypes.func,
  onCancel: PropTypes.func,
  onClickMask: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
};
ActionSheet.defaultProps = {
  round: true,
  closeIcon: 'cross'
};