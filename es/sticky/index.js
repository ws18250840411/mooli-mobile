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
import { createClassName, eventStore, isHidden, getScrollTop, getElementTop, unitToPx } from '../utils';
var Sticky = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Sticky, _React$PureComponent);
  var _super = _createSuper(Sticky);
  function Sticky(props) {
    var _this;
    _classCallCheck(this, Sticky);
    _this = _super.call(this, props);
    _this.emitScroll = function (scrollTop, isFixed) {
      if (_this.props.onScroll) _this.props.onScroll(scrollTop, isFixed);
    };
    _this.onscroll = function () {
      if (!_this.rootRef.current || isHidden(_this.rootRef.current)) return;
      var scrollTop = getScrollTop(window);
      var topToPageTop = getElementTop(_this.rootRef.current);
      if (_this.container) {
        var bottomToPageTop = topToPageTop + _this.container.offsetHeight;
        if (scrollTop + _this.offsetTopPx + _this.height > bottomToPageTop) {
          var distanceToBottom = _this.height + scrollTop - bottomToPageTop;
          if (distanceToBottom < _this.height) {
            _this.emitScroll(scrollTop, true);
            _this.setState({
              fixed: true,
              transform: -(distanceToBottom + _this.offsetTopPx)
            });
            _this.flog = true;
          } else {
            _this.emitScroll(scrollTop, false);
            if (!_this.flog) return;
            _this.setState({
              fixed: false
            });
            _this.flog = false;
          }
          return;
        }
      }
      if (scrollTop + _this.offsetTopPx > topToPageTop) {
        _this.emitScroll(scrollTop, true);
        if (_this.flog) return;
        _this.setState({
          fixed: true,
          transform: 0
        });
        _this.flog = true;
      } else {
        _this.emitScroll(scrollTop, false);
        if (!_this.flog) return;
        _this.setState({
          fixed: false
        });
        _this.flog = false;
      }
    };
    _this.state = {
      fixed: false,
      transform: 0
    };
    _this.rootRef = /*#__PURE__*/React.createRef();
    _this.events = eventStore();
    _this.flog = false;
    return _this;
  }
  _createClass(Sticky, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.rootRef.current) {
        this.events.add(this.rootRef.current, 'scroll', this.onscroll).add(window, 'scroll', this.onscroll);
        this.height = this.rootRef.current.offsetHeight;
        this.container = this.props.container && document.getElementById(this.props.container);
        this.offsetTopPx = unitToPx(this.props.offsetTop);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.events.removeAll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, prevState) {
      if (this.props.onChange) this.props.onChange(prevState.fixed);
    }
  }, {
    key: "curStyle",
    get: function get() {
      var _this$state = this.state,
        fixed = _this$state.fixed,
        transform = _this$state.transform;
      if (!fixed) return null;
      var zIndex = this.props.zIndex;
      var style = {};
      if (zIndex) {
        style.zIndex = zIndex;
      }
      if (this.offsetTopPx && fixed) {
        style.top = "".concat(this.offsetTopPx, "px");
      }
      if (transform) {
        style.transform = "translate3d(0, ".concat(transform, "px, 0)");
      }
      return style;
    }
  }, {
    key: "render",
    value: function render() {
      var fixed = this.state.fixed;
      var _a = this.props,
        zIndex = _a.zIndex,
        offsetTop = _a.offsetTop,
        container = _a.container,
        className = _a.className,
        children = _a.children,
        onChange = _a.onChange,
        onScroll = _a.onScroll,
        rest = __rest(_a, ["zIndex", "offsetTop", "container", "className", "children", "onChange", "onScroll"]);
      var componentClassName = createClassName('sticky');
      var className2Use = classnames(componentClassName, className, _defineProperty({}, "".concat(componentClassName, "--fixed"), fixed));
      var rootStyle = {
        height: fixed ? "".concat(this.height, "px") : null
      };
      return /*#__PURE__*/React.createElement("div", Object.assign({
        ref: this.rootRef,
        style: rootStyle
      }, rest), /*#__PURE__*/React.createElement("div", {
        style: this.curStyle,
        className: className2Use
      }, children));
    }
  }]);
  return Sticky;
}(React.PureComponent);
export { Sticky as default };
Sticky.propTypes = {
  zIndex: PropTypes.number
};
Sticky.defaultProps = {
  offsetTop: 0
};