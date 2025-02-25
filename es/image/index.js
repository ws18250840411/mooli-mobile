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
import { createClassName, addUnit } from '../utils';
var componentClassName = createClassName('image');
var Image = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Image, _React$PureComponent);
  var _super = _createSuper(Image);
  function Image(props) {
    var _this;
    _classCallCheck(this, Image);
    _this = _super.call(this, props);
    _this.renderLoadingIcon = function () {
      var _this$props = _this.props,
        iconPrefix = _this$props.iconPrefix,
        loadingIndicator = _this$props.loadingIndicator,
        iconSize = _this$props.iconSize,
        loadingIcon = _this$props.loadingIcon;
      var iconClassName = createClassName(componentClassName, 'loading-icon');
      var className3Use = classnames(iconClassName, iconPrefix);
      if ( /*#__PURE__*/React.isValidElement(loadingIndicator)) {
        return loadingIndicator;
      }
      return /*#__PURE__*/React.createElement(Icon, {
        className: className3Use,
        size: iconSize,
        name: loadingIcon
      });
    };
    _this.renderErrorIcon = function () {
      var _this$props2 = _this.props,
        iconPrefix = _this$props2.iconPrefix,
        errorIndicator = _this$props2.errorIndicator,
        iconSize = _this$props2.iconSize,
        errorIcon = _this$props2.errorIcon;
      var errorClassName = createClassName(componentClassName, 'error-icon');
      var className4Use = classnames(errorClassName, iconPrefix);
      if ( /*#__PURE__*/React.isValidElement(errorIndicator)) {
        return errorIndicator;
      }
      return /*#__PURE__*/React.createElement(Icon, {
        className: className4Use,
        size: iconSize,
        name: errorIcon
      });
    };
    _this.renderPlaceholder = function () {
      var _this$props3 = _this.props,
        showLoading = _this$props3.showLoading,
        showError = _this$props3.showError;
      var _this$state = _this.state,
        loading = _this$state.loading,
        error = _this$state.error;
      if (loading && showLoading) {
        return /*#__PURE__*/React.createElement("div", {
          className: createClassName(componentClassName, 'loading')
        }, _this.renderLoadingIcon());
      }
      if (error && showError) {
        return /*#__PURE__*/React.createElement("div", {
          className: createClassName(componentClassName, 'error')
        }, _this.renderErrorIcon());
      }
      return null;
    };
    _this.renderImage = function () {
      var _this$props4 = _this.props,
        src = _this$props4.src,
        fit = _this$props4.fit,
        alt = _this$props4.alt,
        onLoad = _this$props4.onLoad,
        onError = _this$props4.onError,
        onClick = _this$props4.onClick;
      var error = _this.state.error;
      if (error && !src) return null;
      var style = {};
      if (fit) style.objectFit = fit;
      var imgClassName = createClassName(componentClassName, 'img');
      var handleLoad = function handleLoad(e) {
        _this.setState({
          loading: false
        });
        if (typeof onLoad === 'function') onLoad(e);
      };
      var handleError = function handleError(e) {
        _this.setState({
          error: true,
          loading: false
        });
        if (typeof onError === 'function') onError(e);
      };
      return /*#__PURE__*/React.createElement("img", {
        src: src,
        alt: alt,
        className: imgClassName,
        style: style,
        onClick: onClick,
        onLoad: handleLoad,
        onError: handleError
      });
    };
    _this.state = {
      error: false,
      loading: true
    };
    return _this;
  }
  _createClass(Image, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.src !== this.props.src) {
        this.setState({
          error: false,
          loading: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        src = _a.src,
        alt = _a.alt,
        fit = _a.fit,
        round = _a.round,
        width = _a.width,
        height = _a.height,
        radius = _a.radius,
        _a$showLoading = _a.showLoading,
        showLoading = _a$showLoading === void 0 ? true : _a$showLoading,
        _a$showError = _a.showError,
        showError = _a$showError === void 0 ? true : _a$showError,
        loadingIndicator = _a.loadingIndicator,
        _a$loadingIcon = _a.loadingIcon,
        loadingIcon = _a$loadingIcon === void 0 ? 'photo' : _a$loadingIcon,
        iconSize = _a.iconSize,
        iconPrefix = _a.iconPrefix,
        errorIndicator = _a.errorIndicator,
        _a$errorIcon = _a.errorIcon,
        errorIcon = _a$errorIcon === void 0 ? 'photo-fail' : _a$errorIcon,
        className = _a.className,
        style = _a.style,
        children = _a.children,
        onClick = _a.onClick,
        onLoad = _a.onLoad,
        onError = _a.onError,
        rest = __rest(_a, ["src", "alt", "fit", "round", "width", "height", "radius", "showLoading", "showError", "loadingIndicator", "loadingIcon", "iconSize", "iconPrefix", "errorIndicator", "errorIcon", "className", "style", "children", "onClick", "onLoad", "onError"]);
      var componentClassName = createClassName('image');
      var className2Use = classnames(componentClassName, className, _defineProperty({}, "".concat(componentClassName, "--round"), round));
      var style2Use = {};
      if (width) style2Use.width = addUnit(width);
      if (height) style2Use.height = addUnit(height);
      if (radius) {
        style2Use.overflow = 'hidden';
        style2Use.borderRadius = addUnit(radius);
      }
      return /*#__PURE__*/React.createElement("div", Object.assign({
        className: className2Use,
        style: Object.assign(Object.assign({}, style2Use), style)
      }, rest), this.renderImage(), this.renderPlaceholder(), children);
    }
  }]);
  return Image;
}(React.PureComponent);
export { Image as default };
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  round: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  iconSize: PropTypes.string,
  showError: PropTypes.bool,
  iconPrefix: PropTypes.string,
  showLoading: PropTypes.bool,
  errorIcon: PropTypes.string,
  errorIndicator: PropTypes.node,
  loadingIcon: PropTypes.string,
  loadingIndicator: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  onClick: PropTypes.func,
  onLoad: PropTypes.func,
  onError: PropTypes.func
};
Image.defaultProps = {
  showLoading: true,
  showError: true,
  loadingIcon: 'photo',
  errorIcon: 'photo-fail'
};