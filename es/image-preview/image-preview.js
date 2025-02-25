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
import Image from '../image';
import Popup from '../popup';
import Swiper from '../swiper/swiper';
import Icon from '../icon';
import { createClassName } from '../utils';
import { renderToContainer } from '../utils/renderToContainer';
var ImagePreview = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ImagePreview, _React$PureComponent);
  var _super = _createSuper(ImagePreview);
  function ImagePreview(props) {
    var _this;
    _classCallCheck(this, ImagePreview);
    _this = _super.call(this, props);
    _this.onTouchStart = function () {
      if (!_this.props.maskClosable) return;
      _this.setState({
        ismove: false,
        touchStartTime: new Date()
      });
    };
    _this.onTouchMove = function () {
      if (!_this.props.maskClosable) return;
      _this.setState({
        ismove: true
      });
    };
    _this.onTouchEnd = function () {
      if (!_this.props.maskClosable) return;
      var _this$state = _this.state,
        ismove = _this$state.ismove,
        touchStartTime = _this$state.touchStartTime;
      var onClose = _this.props.onClose;
      var deltaTime = Number(new Date()) - Number(touchStartTime);
      if (onClose && !ismove && deltaTime < 250) onClose();
      _this.setState({
        ismove: false
      });
    };
    _this.state = {
      index: 0,
      ismove: false,
      touchStartTime: new Date()
    };
    return _this;
  }
  _createClass(ImagePreview, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _a = this.props,
        visible = _a.visible,
        images = _a.images,
        closeable = _a.closeable,
        _a$closeIcon = _a.closeIcon,
        closeIcon = _a$closeIcon === void 0 ? 'clear' : _a$closeIcon,
        _a$closeIconPosition = _a.closeIconPosition,
        closeIconPosition = _a$closeIconPosition === void 0 ? 'top-right' : _a$closeIconPosition,
        _a$maskClosable = _a.maskClosable,
        maskClosable = _a$maskClosable === void 0 ? true : _a$maskClosable,
        _a$showIndex = _a.showIndex,
        showIndex = _a$showIndex === void 0 ? true : _a$showIndex,
        showIndicators = _a.showIndicators,
        _a$initial = _a.initial,
        initial = _a$initial === void 0 ? 0 : _a$initial,
        _a$loop = _a.loop,
        loop = _a$loop === void 0 ? true : _a$loop,
        lock = _a.lock,
        destroy = _a.destroy,
        getContainer = _a.getContainer,
        className = _a.className,
        onClose = _a.onClose,
        _onChange = _a.onChange,
        rest = __rest(_a, ["visible", "images", "closeable", "closeIcon", "closeIconPosition", "maskClosable", "showIndex", "showIndicators", "initial", "loop", "lock", "destroy", "getContainer", "className", "onClose", "onChange"]);
      var componentClassName = createClassName('image-preview');
      var className2Use = classnames(componentClassName, className, _defineProperty({}, "".concat(componentClassName, "--loading"), true));
      var popupTransition = {
        timeout: 500,
        classNames: 'mooli-fade'
      };
      var renderIndex = function renderIndex() {
        if (showIndex && (images === null || images === void 0 ? void 0 : images.length)) {
          var _this2$state$index = _this2.state.index,
            index = _this2$state$index === void 0 ? 0 : _this2$state$index;
          var indexClassName = createClassName(componentClassName, 'index');
          return /*#__PURE__*/React.createElement("div", {
            className: indexClassName
          }, "".concat(Number(index) + 1, " / ").concat(images.length));
        }
        return null;
      };
      var renderClose = function renderClose() {
        if (closeable) {
          var iconClassName = createClassName(componentClassName, 'close-icon');
          var className3Use = classnames(iconClassName, _defineProperty({}, "".concat(iconClassName, "--").concat(closeIconPosition), closeIconPosition));
          return /*#__PURE__*/React.createElement(Icon, {
            name: closeIcon,
            className: className3Use,
            onClick: function onClick() {
              return onClose && onClose();
            }
          });
        }
        return null;
      };
      var renderSwiper = function renderSwiper() {
        if (images && images.length > 0) {
          return /*#__PURE__*/React.createElement(Swiper, Object.assign({
            loop: true,
            indicator: showIndicators,
            initial: initial,
            onChange: function onChange(index) {
              _this2.setState({
                index: index
              });
              if (_onChange) _onChange(index);
            }
          }, rest), images === null || images === void 0 ? void 0 : images.map(function (item, index) {
            return /*#__PURE__*/React.createElement(Image, {
              onMouseUp: _this2.onTouchEnd,
              onMouseMove: _this2.onTouchMove,
              onMouseDown: _this2.onTouchStart,
              key: index,
              fit: "contain",
              src: item
            });
          }));
        }
        return null;
      };
      var node = /*#__PURE__*/React.createElement(Popup, {
        className: className2Use,
        transition: popupTransition,
        visible: visible,
        destroy: destroy,
        lock: lock
      }, renderClose(), renderIndex(), renderSwiper());
      return renderToContainer(getContainer, node);
    }
  }]);
  return ImagePreview;
}(React.PureComponent);
export { ImagePreview as default };
ImagePreview.propTypes = {
  visible: PropTypes.bool,
  images: PropTypes.array,
  initial: PropTypes.number,
  showIndex: PropTypes.bool,
  showIndicators: PropTypes.bool,
  closeable: PropTypes.bool,
  closeIcon: PropTypes.string,
  closeIconPosition: PropTypes.string,
  maskClosable: PropTypes.bool,
  loop: PropTypes.bool,
  lock: PropTypes.bool,
  destroy: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
  onChange: PropTypes.func
};
ImagePreview.defaultProps = {
  closeIcon: 'clear',
  closeIconPosition: 'top-right',
  maskClosable: true,
  showIndex: true,
  loop: true,
  getContainer: typeof document !== 'undefined' ? document.body : null
};