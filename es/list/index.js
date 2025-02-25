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
import Loading from '../loading';
import { createClassName, eventStore } from '../utils';
var componentClassName = createClassName('list');
var List = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(List, _React$PureComponent);
  var _super = _createSuper(List);
  function List(props) {
    var _this;
    _classCallCheck(this, List);
    _this = _super.call(this, props);
    _this.clickErrorText = function () {
      var onLoad = _this.props.onLoad;
      if (onLoad) onLoad();
    };
    _this.check = function (e) {
      var innerLoading = _this.state.innerLoading;
      var _this$props = _this.props,
        finished = _this$props.finished,
        error = _this$props.error,
        direction = _this$props.direction,
        offset = _this$props.offset,
        onLoad = _this$props.onLoad;
      if (innerLoading || finished || error) {
        return;
      }
      var scrollerRect;
      var scroller = e.currentTarget || e.target || e.srcElement;
      if (scroller.getBoundingClientRect) {
        scrollerRect = scroller.getBoundingClientRect();
      } else {
        scrollerRect = {
          top: 0,
          bottom: scroller.innerHeight
        };
      }
      var scrollerHeight = scrollerRect.bottom - scrollerRect.top;
      if (!scrollerHeight) {
        return false;
      }
      var isReachEdge = false;
      var placeholderRect = _this.placeholderRef.current.getBoundingClientRect();
      if (direction === 'up') {
        isReachEdge = scrollerRect.top - placeholderRect.top <= offset;
      } else {
        isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
      }
      // 是否到达边缘
      if (isReachEdge) {
        _this.setState({
          innerLoading: true
        });
        if (onLoad) onLoad();
      }
    };
    _this.loadingRender = function () {
      var innerLoading = _this.state.innerLoading;
      var _this$props2 = _this.props,
        finished = _this$props2.finished,
        loading = _this$props2.loading,
        loadingText = _this$props2.loadingText,
        loadingStyle = _this$props2.loadingStyle;
      if (innerLoading && !finished) {
        var loadingClassName = createClassName(componentClassName, 'loading');
        return /*#__PURE__*/React.createElement("div", {
          className: loadingClassName
        }, /*#__PURE__*/React.isValidElement(loading) && loading || ( /*#__PURE__*/React.createElement(Loading, Object.assign({
          size: "16"
        }, loadingStyle), loadingText)));
      }
      return null;
    };
    _this.finishedTextRender = function () {
      var _this$props3 = _this.props,
        finished = _this$props3.finished,
        finishedText = _this$props3.finishedText;
      if (finished) {
        var finishedTextClassName = createClassName(componentClassName, 'finished-text');
        return /*#__PURE__*/React.createElement("div", {
          className: finishedTextClassName
        }, /*#__PURE__*/React.isValidElement(finished) && finished || finishedText);
      }
      return null;
    };
    _this.errorTextRender = function () {
      var innerLoading = _this.state.innerLoading;
      var _this$props4 = _this.props,
        error = _this$props4.error,
        finished = _this$props4.finished,
        errorText = _this$props4.errorText;
      if (error && !finished && !innerLoading) {
        var errorTextClassName = createClassName(componentClassName, 'error-text');
        return /*#__PURE__*/React.createElement("div", {
          className: errorTextClassName,
          onClick: _this.clickErrorText
        }, /*#__PURE__*/React.isValidElement(error) && error || errorText);
      }
      return null;
    };
    _this.placeholderRender = function () {
      return /*#__PURE__*/React.createElement("div", {
        ref: _this.placeholderRef,
        key: "placeholder",
        className: createClassName(componentClassName, 'placeholder')
      });
    };
    _this.state = {
      innerLoading: Boolean(props.loading) || false
    };
    _this.rootRef = /*#__PURE__*/React.createRef();
    _this.placeholderRef = /*#__PURE__*/React.createRef();
    _this.events = eventStore();
    return _this;
  }
  _createClass(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.events.add(this.rootRef.current, 'scroll', this.check).add(window, 'scroll', this.check);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.events.removeAll();
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        error = _a.error,
        finished = _a.finished,
        errorText = _a.errorText,
        loading = _a.loading,
        loadingText = _a.loadingText,
        loadingStyle = _a.loadingStyle,
        finishedText = _a.finishedText,
        immediateCheck = _a.immediateCheck,
        offset = _a.offset,
        direction = _a.direction,
        className = _a.className,
        children = _a.children,
        onLoad = _a.onLoad,
        rest = __rest(_a, ["error", "finished", "errorText", "loading", "loadingText", "loadingStyle", "finishedText", "immediateCheck", "offset", "direction", "className", "children", "onLoad"]);
      var className2Use = classnames(componentClassName, className);
      return /*#__PURE__*/React.createElement("div", Object.assign({
        ref: this.rootRef,
        className: className2Use
      }, rest), direction === 'down' ? children : this.placeholderRender(), this.loadingRender(), this.finishedTextRender(), this.errorTextRender(), direction === 'up' ? children : this.placeholderRender());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(prevProps, prevState) {
      if (prevProps.loading !== prevState.innerLoading) {
        return {
          innerLoading: prevProps.loading
        };
      }
      return null;
    }
  }]);
  return List;
}(React.PureComponent);
export { List as default };
List.propTypes = {
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
  immediateCheck: PropTypes.bool,
  offset: PropTypes.number,
  direction: PropTypes.string
};
List.defaultProps = {
  loadingText: '加载中...',
  errorText: '请求失败，点击重新加载',
  immediateCheck: true,
  offset: 300,
  direction: 'down'
};