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
import Icon from '../icon';
import { createClassName } from '../utils';
import { Popup as BasePopup } from '../widgets/popup';
var BODY_LOCK_CLASS = 'mooli-overflow-hidden';
var componentClassName = createClassName('popup');
var Popup = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Popup, _React$PureComponent);
  var _super = _createSuper(Popup);
  function Popup() {
    var _this;
    _classCallCheck(this, Popup);
    _this = _super.apply(this, arguments);
    _this.onEnter = function (e) {
      if (_this.props.lock) document.body.classList.add(BODY_LOCK_CLASS);
      if (_this.props.onOpened) _this.props.onOpened(e);
    };
    _this.onExited = function (e) {
      if (_this.props.lock) document.body.classList.remove(BODY_LOCK_CLASS);
      if (_this.props.onClosed) _this.props.onClosed(e);
    };
    // 设置关闭按钮
    _this.renderIcon = function () {
      var _this$props = _this.props,
        closeable = _this$props.closeable,
        position = _this$props.position,
        closeIcon = _this$props.closeIcon,
        closeIconPosition = _this$props.closeIconPosition,
        onClickIcon = _this$props.onClickIcon,
        className = _this$props.className;
      if (closeable && position === 'bottom') {
        var iconClassName = createClassName(componentClassName, 'close-icon');
        var className3Use = classnames(iconClassName, className, _defineProperty({}, "".concat(iconClassName, "--").concat(closeIconPosition), closeIconPosition));
        return /*#__PURE__*/React.createElement(Icon, {
          name: closeIcon,
          className: className3Use,
          onClick: onClickIcon
        });
      }
      return null;
    };
    return _this;
  }
  _createClass(Popup, [{
    key: "render",
    value: function render() {
      var _a = this.props,
        _a$destroy = _a.destroy,
        destroy = _a$destroy === void 0 ? false : _a$destroy,
        _a$lock = _a.lock,
        lock = _a$lock === void 0 ? true : _a$lock,
        _a$position = _a.position,
        position = _a$position === void 0 ? 'center' : _a$position,
        closeable = _a.closeable,
        round = _a.round,
        _a$closeIcon = _a.closeIcon,
        closeIcon = _a$closeIcon === void 0 ? 'cross' : _a$closeIcon,
        _a$closeIconPosition = _a.closeIconPosition,
        closeIconPosition = _a$closeIconPosition === void 0 ? 'top-right' : _a$closeIconPosition,
        _a$closeProps = _a.closeProps,
        closeProps = _a$closeProps === void 0 ? {} : _a$closeProps,
        transition = _a.transition,
        _a$fixed = _a.fixed,
        fixed = _a$fixed === void 0 ? true : _a$fixed,
        _a$mask = _a.mask,
        mask = _a$mask === void 0 ? true : _a$mask,
        maskTransition = _a.maskTransition,
        maskProps = _a.maskProps,
        className = _a.className,
        style = _a.style,
        onClickMask = _a.onClickMask,
        onClickIcon = _a.onClickIcon,
        onClick = _a.onClick,
        onOpened = _a.onOpened,
        onClosed = _a.onClosed,
        rest = __rest(_a, ["destroy", "lock", "position", "closeable", "round", "closeIcon", "closeIconPosition", "closeProps", "transition", "fixed", "mask", "maskTransition", "maskProps", "className", "style", "onClickMask", "onClickIcon", "onClick", "onOpened", "onClosed"]);
      var masksTransition = Object.assign({
        timeout: 500,
        classNames: 'mooli-fade'
      }, maskTransition);
      var name = position === 'center' ? '' : createClassName(componentClassName, "slide-".concat(position));
      var popupTransition = Object.assign({
        timeout: 500,
        classNames: 'mooli-fade'
      }, transition);
      if (name) popupTransition['classNames'] = name;
      var className2Use = classnames(componentClassName, className, _defineProperty(_defineProperty({}, "".concat(componentClassName, "--round"), round), "".concat(componentClassName, "--").concat(position), position));
      return /*#__PURE__*/React.createElement(BasePopup, Object.assign({
        className: className2Use,
        destroy: destroy,
        transition: Object.assign(Object.assign({}, popupTransition), {
          onEnter: this.onEnter,
          onExited: this.onExited
        }),
        fixed: fixed,
        mask: mask,
        maskTransition: masksTransition,
        maskProps: Object.assign({
          onClick: onClickMask
        }, maskProps),
        style: style,
        icon: this.renderIcon
      }, rest));
    }
  }]);
  return Popup;
}(React.PureComponent);
export { Popup as default };
Popup.propTypes = {
  visible: PropTypes.bool,
  lock: PropTypes.bool,
  position: PropTypes.string,
  round: PropTypes.bool,
  closeable: PropTypes.bool,
  closeIcon: PropTypes.string,
  closeIconPosition: PropTypes.string,
  closeProps: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  onClickMask: PropTypes.func,
  onClickIcon: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
};
Popup.defaultProps = {
  destroy: false,
  lock: true,
  position: 'center',
  closeIcon: 'cross',
  closeIconPosition: 'top-right',
  closeProps: {},
  fixed: true,
  mask: true
};
// export const Popup: React.FC<PopupProps> = (props) => {
//   const componentClassName = createClassName('popup');
//   const {
//     destroy = false,
//     lock = true,
//     position = 'center',
//     closeable,
//     round,
//     closeIcon = 'cross',
//     closeIconPosition = 'top-right',
//     closeProps = {},
//     transition,
//     fixed = true,
//     mask = true,
//     maskTransition,
//     maskProps,
//     className,
//     style,
//     onClickMask,
//     onClickIcon,
//     onClick,
//     ...rest
//   } = props;
//   let masksTransition = {
//     timeout: 500,
//     classNames: 'mooli-fade',
//     ...maskTransition,
//   };
//   const name =
//     position === 'center'
//       ? ''
//       : createClassName(componentClassName, `slide-${position}`);
//   let popupTransition: any = { ...transition, timeout: 500 };
//   if (name) popupTransition['classNames'] = name;
//   const className2Use: string = classnames(componentClassName, className, {
//     [`${componentClassName}--round`]: round,
//     [`${componentClassName}--${position}`]: position,
//   });
//   const onEnter = () => {
//     if (lock) document.body.classList.add(BODY_LOCK_CLASS);
//   };
//   const onExited = () => {
//     if (lock) document.body.classList.remove(BODY_LOCK_CLASS);
//   };
//   // 设置关闭按钮
//   const renderIcon = () => {
//     if (closeable && position === 'bottom') {
//       const iconClassName = createClassName(componentClassName, 'close-icon');
//       const className3Use: string = classnames(iconClassName, className, {
//         [`${iconClassName}--${closeIconPosition}`]: closeIconPosition,
//       });
//       return (
//         <Icon
//           name={closeIcon}
//           className={className3Use}
//           onClick={onClickIcon}
//         />
//       );
//     }
//     return null;
//   };
//   return (
//     <BasePopup
//       className={className2Use}
//       destroy={destroy}
//       transition={{
//         ...popupTransition,
//         onEnter,
//         onExited,
//       }}
//       fixed={fixed}
//       mask={mask}
//       maskTransition={masksTransition}
//       maskProps={{ onClick: onClickMask, ...maskProps }}
//       style={style}
//       icon={renderIcon}
//       {...rest}
//     />
//   );
// };
// Popup.propTypes = {
//   position: PropTypes.string,
//   lock: PropTypes.bool,
//   destroy: PropTypes.bool,
//   transition: PropTypes.object,
//   maskTransition: PropTypes.object,
//   className: PropTypes.string,
//   style: PropTypes.object,
// };
// Popup.displayName = 'Button';