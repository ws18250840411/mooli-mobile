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
import { Drag } from '../widgets/drag';
import { preventDefault } from '../utils/dom/event';
import { createClassName } from '../utils';
var MIN_SWIPE_DISTANCE = 50;
var TabContent = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(TabContent, _React$PureComponent);
  var _super = _createSuper(TabContent);
  function TabContent(props) {
    var _this;
    _classCallCheck(this, TabContent);
    _this = _super.call(this, props);
    _this.onTouchStart = function () {};
    _this.onTouchMove = function (event, position) {
      if (_this.props.direction === 'horizontal') {
        _this.distance = position.x;
      } else {
        _this.distance = position.y;
      }
      preventDefault(event, true);
    };
    _this.onTouchEnd = function () {
      var _this$props = _this.props,
        count = _this$props.count,
        swipeable = _this$props.swipeable,
        currentIndex = _this$props.currentIndex,
        onChange = _this$props.onChange;
      if (!swipeable) return false;
      var distanceX = Math.abs(_this.distance);
      if (distanceX >= MIN_SWIPE_DISTANCE) {
        if (_this.distance > 0 && currentIndex !== 0) {
          onChange && onChange(currentIndex - 1);
        } else if (_this.distance < 0 && currentIndex !== count - 1) {
          onChange && onChange(currentIndex + 1);
        }
      }
    };
    _this.genChildren = function () {
      if (_this.props.animated) {
        var componentClassName = createClassName('tabs');
        return /*#__PURE__*/React.createElement("div", {
          className: createClassName(componentClassName, 'track'),
          style: _this.styles
        }, _this.props.children);
      }
      return _this.props.children;
    };
    _this.distance = 0;
    return _this;
  }
  _createClass(TabContent, [{
    key: "styles",
    get: function get() {
      if (this.props.animated) {
        // 垂直方向
        if (this.props.direction === 'vertical') {
          return {
            transform: "translate3d(0, ".concat(-1 * this.props.currentIndex * 100, "%, 0)"),
            transitionDuration: "".concat(this.props.duration, "s")
          };
        }
        return {
          transform: "translate3d(".concat(-1 * this.props.currentIndex * 100, "%, 0, 0)"),
          transitionDuration: "".concat(this.props.duration, "s")
        };
      }
      return {};
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        count = _a.count,
        _a$duration = _a.duration,
        duration = _a$duration === void 0 ? 300 : _a$duration,
        direction = _a.direction,
        animated = _a.animated,
        swipeable = _a.swipeable,
        currentIndex = _a.currentIndex,
        style = _a.style,
        className = _a.className,
        children = _a.children,
        onChange = _a.onChange,
        rest = __rest(_a, ["count", "duration", "direction", "animated", "swipeable", "currentIndex", "style", "className", "children", "onChange"]);
      var className2Use = classnames(className, _defineProperty(_defineProperty({}, "".concat(className, "--animated"), animated), "".concat(className, "--").concat(direction), direction));
      if (animated) {
        return /*#__PURE__*/React.createElement(Drag, {
          onTouchStart: this.onTouchStart,
          onTouchMove: this.onTouchMove,
          onTouchEnd: this.onTouchEnd
        }, /*#__PURE__*/React.createElement("div", {
          className: className2Use
        }, " ", this.genChildren()));
      }
      return /*#__PURE__*/React.createElement("div", Object.assign({
        className: className2Use,
        style: style
      }, rest), this.genChildren());
    }
  }]);
  return TabContent;
}(React.PureComponent);
export { TabContent as default };
TabContent.propTypes = {
  animated: PropTypes.bool,
  swipeable: PropTypes.bool
};
TabContent.defaultProps = {};