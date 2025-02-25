function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
import { CSSTransition } from 'react-transition-group';
import { createClassName, noop } from '../utils';
import { preventDefault } from '../utils/dom/event';
function preventTouchMove(event) {
  preventDefault(event, true);
}
var Overlay = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Overlay, _React$PureComponent);
  var _super = _createSuper(Overlay);
  function Overlay(props) {
    var _this;
    _classCallCheck(this, Overlay);
    _this = _super.call(this, props);
    _this.state = {
      display: props.visible
    };
    _this.rootRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(Overlay, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _a = this.props,
        _a$visible = _a.visible,
        visible = _a$visible === void 0 ? false : _a$visible,
        _a$destory = _a.destory,
        destory = _a$destory === void 0 ? false : _a$destory,
        _a$lockScroll = _a.lockScroll,
        lockScroll = _a$lockScroll === void 0 ? true : _a$lockScroll,
        zIndex = _a.zIndex,
        duration = _a.duration,
        className = _a.className,
        style = _a.style,
        children = _a.children,
        onClick = _a.onClick,
        rest = __rest(_a, ["visible", "destory", "lockScroll", "zIndex", "duration", "className", "style", "children", "onClick"]);
      var display = this.state.display;
      var componentClassName = createClassName('overlay');
      var className2Use = classnames(componentClassName, className);
      var style2Use = {
        zIndex: zIndex,
        display: display ? '' : 'none'
      };
      if (duration) {
        style2Use.animationDuration = "".concat(duration, "s");
      }
      return /*#__PURE__*/React.createElement(CSSTransition, {
        appear: true,
        classNames: "mooli-fade",
        in: visible,
        timeout: 1000,
        unmountOnExit: destory,
        onEnter: function onEnter() {
          return _this2.setState({
            display: true
          });
        },
        onExited: function onExited() {
          return _this2.setState({
            display: false
          });
        },
        nodeRef: this.rootRef
      }, /*#__PURE__*/React.createElement("div", Object.assign({
        ref: this.rootRef,
        className: className2Use,
        style: Object.assign(Object.assign({}, style2Use), style),
        onTouchMove: lockScroll ? preventTouchMove : noop,
        onClick: onClick
      }, rest), children));
    }
  }]);
  return Overlay;
}(React.PureComponent);
export { Overlay as default };
Overlay.propTypes = {
  visible: PropTypes.bool.isRequired,
  duration: PropTypes.number,
  destory: PropTypes.bool,
  lockScroll: PropTypes.bool,
  zIndex: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
Overlay.defaultProps = {
  visible: false,
  destory: false,
  lockScroll: true
};