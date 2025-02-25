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
import { createClassName, getScrollTop } from '../utils';
import { preventDefault } from '../utils/dom/event';
import { Drag } from '../widgets/drag';
import Loading from '../loading';
var componentClassName = createClassName('pull-refresh');
var PullRefresh = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PullRefresh, _React$PureComponent);
  var _super = _createSuper(PullRefresh);
  function PullRefresh(props) {
    var _this;
    _classCallCheck(this, PullRefresh);
    _this = _super.call(this, props);
    _this.update = function () {
      var _this$props = _this.props,
        finished = _this$props.finished,
        success = _this$props.success,
        successText = _this$props.successText,
        successDuration = _this$props.successDuration;
      if (finished && (success || successText)) {
        _this.setState({
          status: 'success'
        });
        setTimeout(function () {
          _this.updateStatus(0);
          _this.setState({
            status: 'normal'
          });
        }, successDuration);
      } else {
        _this.updateStatus(0, false);
      }
    };
    _this.checkPullStart = function () {
      if (!_this.rootRef || !_this.rootRef.current) return;
      var ceiling = getScrollTop(_this.rootRef.current) === 0;
      _this.setState({
        ceiling: ceiling
      });
      if (ceiling) _this.setState({
        duration: 0
      });
    };
    _this.updateStatus = function (distance, finish) {
      var _this$props2 = _this.props,
        pullDistance = _this$props2.pullDistance,
        headHeight = _this$props2.headHeight;
      var curStatus;
      if (finish) {
        curStatus = 'loading';
      } else if (distance === 0) {
        curStatus = 'normal';
      } else {
        curStatus = distance < (pullDistance || headHeight || 0) ? 'pulling' : 'loosing';
      }
      _this.setState({
        distance: distance
      });
      if (curStatus !== _this.state.status) _this.setState({
        status: curStatus
      });
    };
    _this.ease = function (distance) {
      var _this$props3 = _this.props,
        pullDistance = _this$props3.pullDistance,
        headHeight = _this$props3.headHeight;
      var curPullDistance = Number(pullDistance || headHeight);
      if (distance > curPullDistance) {
        if (distance < curPullDistance * 2) {
          distance = curPullDistance + (distance - curPullDistance) / 2;
        } else {
          distance = curPullDistance * 1.5 + (distance - curPullDistance * 2) / 4;
        }
      }
      return Math.round(distance);
    };
    _this.onTouchStart = function () {
      if (_this.touchable) _this.checkPullStart();
    };
    _this.onTouchMove = function (event, position) {
      if (!_this.touchable) return;
      if (!_this.state.ceiling) _this.checkPullStart();
      preventDefault(event, true);
      if (_this.state.ceiling && position.y >= 0) {
        var distance = _this.ease(position.y);
        _this.updateStatus(distance);
      }
    };
    _this.onTouchEnd = function () {
      var _this$props4 = _this.props,
        animationDuration = _this$props4.animationDuration,
        headHeight = _this$props4.headHeight,
        onRefresh = _this$props4.onRefresh;
      if (_this.touchable && _this.state.ceiling) {
        _this.setState({
          duration: animationDuration
        });
        if (_this.state.status === 'loosing') {
          _this.updateStatus(Number(headHeight), true);
          if (onRefresh) onRefresh();
        } else {
          _this.updateStatus(0);
        }
      }
    };
    _this.pullDownRender = function () {
      var _this$props5 = _this.props,
        disabled = _this$props5.disabled,
        pulling = _this$props5.pulling,
        pullingText = _this$props5.pullingText,
        loosing = _this$props5.loosing,
        loosingText = _this$props5.loosingText,
        success = _this$props5.success,
        successText = _this$props5.successText,
        loadingText = _this$props5.loadingText;
      var status = _this.state.status;
      if (disabled) return null;
      var pullDownClassName = createClassName(componentClassName, 'head');
      var textClassName = createClassName(pullDownClassName, 'text');
      var textNodes = [];
      if (status === 'pulling') {
        textNodes.push( /*#__PURE__*/React.createElement("div", {
          key: "pulling",
          className: textClassName
        }, pulling || pullingText));
      }
      if (status === 'loosing') {
        textNodes.push( /*#__PURE__*/React.createElement("div", {
          key: "loosing",
          className: textClassName
        }, loosing || loosingText));
      }
      if (status === 'success') {
        textNodes.push( /*#__PURE__*/React.createElement("div", {
          key: "success",
          className: textClassName
        }, success || successText));
      }
      if (status === 'loading') {
        textNodes.push( /*#__PURE__*/React.createElement(Loading, {
          key: "loading",
          size: "16"
        }, loadingText));
      }
      return /*#__PURE__*/React.createElement("div", {
        className: pullDownClassName,
        style: _this.headStyle
      }, textNodes);
    };
    _this.trackRender = function () {
      var children = _this.props.children;
      var trackClassName = createClassName(componentClassName, 'track');
      return /*#__PURE__*/React.createElement("div", {
        className: trackClassName
      }, _this.pullDownRender(), children);
    };
    _this.state = {
      status: 'normal',
      ceiling: false,
      distance: 0,
      duration: 0
    };
    _this.rootRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(PullRefresh, [{
    key: "touchable",
    get: function get() {
      return this.state.status !== 'loading' && this.state.status !== 'success' && !this.props.disabled;
    }
  }, {
    key: "headStyle",
    get: function get() {
      if (this.props.headHeight !== 50) {
        return {
          height: "".concat(this.props.headHeight, "px")
        };
      }
      return {};
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.finished !== this.props.finished || prevProps.children !== this.props.children) {
        this.update();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        pullDistance = _a.pullDistance,
        _a$headHeight = _a.headHeight,
        headHeight = _a$headHeight === void 0 ? 50 : _a$headHeight,
        _a$finished = _a.finished,
        finished = _a$finished === void 0 ? false : _a$finished,
        _a$animationDuration = _a.animationDuration,
        animationDuration = _a$animationDuration === void 0 ? 300 : _a$animationDuration,
        _a$successDuration = _a.successDuration,
        successDuration = _a$successDuration === void 0 ? 500 : _a$successDuration,
        pulling = _a.pulling,
        loosing = _a.loosing,
        loading = _a.loading,
        success = _a.success,
        _a$pullingText = _a.pullingText,
        pullingText = _a$pullingText === void 0 ? '下拉即可刷新...' : _a$pullingText,
        _a$loosingText = _a.loosingText,
        loosingText = _a$loosingText === void 0 ? '释放即可刷新...' : _a$loosingText,
        _a$loadingText = _a.loadingText,
        loadingText = _a$loadingText === void 0 ? '加载中...' : _a$loadingText,
        successText = _a.successText,
        _a$disabled = _a.disabled,
        disabled = _a$disabled === void 0 ? false : _a$disabled,
        className = _a.className,
        children = _a.children,
        onRefresh = _a.onRefresh,
        rest = __rest(_a, ["pullDistance", "headHeight", "finished", "animationDuration", "successDuration", "pulling", "loosing", "loading", "success", "pullingText", "loosingText", "loadingText", "successText", "disabled", "className", "children", "onRefresh"]);
      var _this$state = this.state,
        duration = _this$state.duration,
        distance = _this$state.distance;
      var className2Use = classnames(componentClassName, className);
      var trackStyle = {
        transitionDuration: "".concat(duration, "ms"),
        transform: distance ? "translate3d(0,".concat(distance, "px, 0)") : ''
      };
      var touchableClassName = createClassName(componentClassName, 'touchable');
      return /*#__PURE__*/React.createElement("div", Object.assign({
        ref: this.rootRef,
        className: className2Use
      }, rest), /*#__PURE__*/React.createElement(Drag, {
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd
      }, /*#__PURE__*/React.createElement("div", {
        className: touchableClassName,
        style: trackStyle
      }, this.trackRender())));
    }
  }]);
  return PullRefresh;
}(React.PureComponent);
export { PullRefresh as default };
PullRefresh.propTypes = {
  pullDistance: PropTypes.number,
  headHeight: PropTypes.number,
  finished: PropTypes.bool,
  disabled: PropTypes.bool,
  pulling: PropTypes.node,
  loading: PropTypes.string,
  success: PropTypes.string,
  pullingText: PropTypes.string,
  loosingText: PropTypes.string,
  loadingText: PropTypes.string,
  successText: PropTypes.string,
  successDuration: PropTypes.number,
  animationDuration: PropTypes.number,
  onRefresh: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
PullRefresh.defaultProps = {
  headHeight: 50,
  finished: false,
  animationDuration: 300,
  successDuration: 500,
  pullingText: '下拉即可刷新...',
  loosingText: '释放即可刷新...',
  loadingText: '加载中...',
  disabled: false
};