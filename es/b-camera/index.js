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
import Camera from '../camera';
import { createClassName, getViewportSize } from '../utils';
var componentClassName = createClassName('bcamera');
var BCamera = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(BCamera, _React$PureComponent);
  var _super = _createSuper(BCamera);
  function BCamera(props) {
    var _this;
    _classCallCheck(this, BCamera);
    _this = _super.call(this, props);
    _this.changeStatus = function (isFinish) {
      _this.setState({
        isFinish: isFinish
      });
    };
    _this.switchCamera = function () {
      _this.setState({
        isHold: !_this.state.isHold
      });
    };
    _this.getScreenshot = function () {
      // if (this.cameraRef.current) {
      //   const imgSrc = this.cameraRef.current.getScreenshot({
      //     width: BCamera.defaultRatio.height,
      //     height: BCamera.defaultRatio.width,
      //   });
      //   this.changeStatus(true);
      //   if (this.props.onFinish) this.props.onFinish(imgSrc);
      // }
    };
    _this.renderFooter = function () {
      var footerClassName = createClassName(componentClassName, 'footer');
      var className3Use = classnames(footerClassName, _defineProperty({}, "".concat(componentClassName, "--isFinish"), _this.state.isFinish));
      return /*#__PURE__*/React.createElement("div", {
        className: className3Use
      }, /*#__PURE__*/React.createElement("div", {
        className: createClassName(componentClassName, 'footer-body')
      }, _this.state.isFinish ? ( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: createClassName(componentClassName, 'remake'),
        onClick: _this.getScreenshot
      }, "Remake"), /*#__PURE__*/React.createElement("span", {
        className: createClassName(componentClassName, 'kirim'),
        onClick: _this.getScreenshot
      }, "Kirim"))) : ( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: createClassName(componentClassName, 'remake'),
        onClick: _this.getScreenshot
      }, "Cancel"), /*#__PURE__*/React.createElement("em", {
        onClick: _this.getScreenshot
      }), _this.props.type === 'hold' && /*#__PURE__*/React.createElement("i", {
        onClick: _this.switchCamera
      })))));
    };
    _this.cameraRef = /*#__PURE__*/React.createRef();
    _this.state = {
      isFinish: false,
      isHold: props.type === 'hold'
    };
    return _this;
  }
  _createClass(BCamera, [{
    key: "render",
    value: function render() {
      var _a = this.props,
        type = _a.type,
        className = _a.className,
        style = _a.style,
        children = _a.children,
        onFinish = _a.onFinish,
        rest = __rest(_a, ["type", "className", "style", "children", "onFinish"]);
      var videoConstraints = Object.assign(Object.assign({}, BCamera.defaultRatio), {
        facingMode: this.state.isHold ? 'user' : 'environment'
      });
      var className2Use = classnames(componentClassName, className, _defineProperty({}, "".concat(componentClassName, "--").concat(type), type));
      var _getViewportSize = getViewportSize(),
        width = _getViewportSize.width;
      return /*#__PURE__*/React.createElement("div", {
        className: className2Use,
        style: style
      }, /*#__PURE__*/React.createElement("div", {
        className: createClassName(componentClassName, 'camera')
      }, /*#__PURE__*/React.createElement(Camera, Object.assign({
        ref: this.cameraRef,
        videoConstraints: videoConstraints,
        height: width * 4 / 3
      }, rest)), children), this.renderFooter());
    }
  }]);
  return BCamera;
}(React.PureComponent);
export { BCamera as default };
BCamera.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};
BCamera.defaultProps = {
  type: 'ID' // 'hold'
};
BCamera.defaultRatio = {
  width: 1440,
  height: 1080
}; // 分辨率