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
import TabContext from './lib/tabContext';
import TabPaneContext from './lib/tabPaneContext';
import TabBar from './tab-bar';
import TabContent from './tab-content';
import Sticky from '../sticky';
import { scrollLeftTo } from './lib/utils';
import { createClassName, addUnit } from '../utils';
var componentClassName = createClassName('tabs');
var Tabs = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Tabs, _React$PureComponent);
  var _super = _createSuper(Tabs);
  function Tabs(props) {
    var _this;
    _classCallCheck(this, Tabs);
    _this = _super.call(this, props);
    _this.setCurrentIndex = function (index) {
      if (_this.state.currentIndex !== index) {
        _this.setState({
          currentIndex: index
        }, function () {
          _this.scrollIntoView();
          _this.setLine();
        });
      }
    };
    _this.scrollIntoView = function (immediate) {
      if (!_this.scrollable || !_this.tabBarRef.current) return;
      var currentIndex = _this.state.currentIndex;
      var _this$props = _this.props,
        duration = _this$props.duration,
        direction = _this$props.direction;
      var tabBar = _this.tabBarRef.current;
      var tabEle = tabBar.children[currentIndex];
      var to;
      var type;
      if (direction === 'horizontal') {
        to = tabEle.offsetLeft - (tabBar.offsetWidth - tabEle.offsetWidth) / 2;
        type = 'scrollLeft';
      } else {
        to = tabEle.offsetTop - (tabBar.offsetHeight - tabEle.offsetHeight) / 2;
        type = 'scrollTop';
      }
      scrollLeftTo(tabBar, to, immediate ? 0 : Number(duration), type);
    };
    _this.setLine = function () {
      var _a;
      var currentIndex = _this.state.currentIndex;
      var _this$props2 = _this.props,
        lineWidth = _this$props2.lineWidth,
        lineHeight = _this$props2.lineHeight,
        color = _this$props2.color,
        duration = _this$props2.duration,
        direction = _this$props2.direction;
      var tabEle = (_a = _this.tabBarRef.current) === null || _a === void 0 ? void 0 : _a.children[currentIndex];
      if (tabEle) {
        var lineStyle = {};
        if (direction === 'horizontal') {
          var left = tabEle.offsetLeft + tabEle.offsetWidth / 2;
          lineStyle = {
            width: addUnit(lineWidth),
            backgroundColor: color,
            transform: "translateX(".concat(left, "px) translateX(-50%)")
          };
        } else {
          var top = tabEle.offsetTop + tabEle.offsetHeight / 2;
          lineStyle = {
            width: addUnit(lineWidth),
            backgroundColor: color,
            transform: "translateY(".concat(top, "px) translateY(-50%)")
          };
        }
        if (_this.shouldAnimate) {
          lineStyle.transitionDuration = "".concat(duration, "s");
        }
        if (lineHeight) {
          var height = addUnit(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }
        _this.setState({
          lineStyle: lineStyle
        });
      }
      return;
    };
    _this.renderLine = function () {
      if (_this.props.type === 'line') {
        var underlineClassName = createClassName(componentClassName, 'underline');
        return /*#__PURE__*/React.createElement("div", {
          className: underlineClassName,
          style: _this.state.lineStyle
        });
      }
      return null;
    };
    _this.renderNavs = function () {
      var _this$props3 = _this.props,
        type = _this$props3.type,
        titleActiveColor = _this$props3.titleActiveColor,
        titleInactiveColor = _this$props3.titleInactiveColor;
      var navClassName = createClassName(componentClassName, 'nav');
      var className4Use = classnames(navClassName, _defineProperty(_defineProperty({}, "".concat(navClassName, "--").concat(type), type), "".concat(navClassName, "--complete"), _this.scrollable));
      var navs = React.Children.toArray(_this.props.children);
      return /*#__PURE__*/React.createElement("div", {
        className: className4Use,
        ref: _this.tabBarRef
      }, navs.length > 0 && ( /*#__PURE__*/React.createElement(React.Fragment, null, navs.map(function (nav, index) {
        return /*#__PURE__*/React.createElement(TabBar, Object.assign({
          key: index,
          type: type,
          scrollable: _this.scrollable,
          isActive: Number(_this.state.currentIndex) === Number(index),
          activeColor: titleActiveColor,
          inactiveColor: titleInactiveColor,
          onClick: function onClick() {
            return _this.handleNavClick(nav, index);
          }
        }, nav.props));
      }), _this.renderLine())));
    };
    _this.renderWrap = function () {
      var _this$props4 = _this.props,
        type = _this$props4.type,
        border = _this$props4.border,
        sticky = _this$props4.sticky,
        offsetTop = _this$props4.offsetTop,
        direction = _this$props4.direction,
        onSticktScroll = _this$props4.onSticktScroll;
      var wrapClassName = createClassName(componentClassName, 'wrap');
      var isVertical = direction === 'vertical';
      var className5Use = classnames(wrapClassName, _defineProperty(_defineProperty(_defineProperty({}, "mooli-hairline--top-bottom", type === 'line' && border && !isVertical), "mooli-hairline--right", isVertical && border), "".concat(wrapClassName, "--scrollable"), _this.scrollable));
      var wrap = /*#__PURE__*/React.createElement("div", {
        className: className5Use
      }, _this.renderNavs());
      if (sticky) {
        return /*#__PURE__*/React.createElement(Sticky, {
          container: "tabsConatiner",
          offsetTop: offsetTop,
          onScroll: onSticktScroll
        }, wrap);
      }
      return wrap;
    };
    _this.renderPanes = function () {
      var _this$props5 = _this.props,
        animated = _this$props5.animated,
        duration = _this$props5.duration,
        swipeable = _this$props5.swipeable,
        direction = _this$props5.direction;
      var contentClassName = createClassName(componentClassName, 'content');
      var panes = React.Children.toArray(_this.props.children);
      return /*#__PURE__*/React.createElement(TabContent, {
        count: panes.length,
        animated: animated,
        duration: duration,
        direction: direction,
        swipeable: swipeable,
        currentIndex: Number(_this.state.currentIndex),
        className: contentClassName,
        onChange: _this.setCurrentIndex
      }, panes.map(function (pane, tabKey) {
        return /*#__PURE__*/React.createElement(TabPaneContext.Provider, {
          key: tabKey,
          value: {
            tabKey: tabKey
          }
        }, pane);
      }));
    };
    _this.state = {
      currentIndex: props.value || props.defaultValue,
      lineStyle: {
        backgroundColor: _this.props.color
      }
    };
    _this.shouldAnimate = false;
    _this.tabBarRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(Tabs, [{
    key: "scrollable",
    get: function get() {
      var _this$props6 = this.props,
        children = _this$props6.children,
        swipeThreshold = _this$props6.swipeThreshold,
        ellipsis = _this$props6.ellipsis;
      return React.Children.count(children) > swipeThreshold || !ellipsis;
    }
  }, {
    key: "navStyle",
    get: function get() {
      return {
        borderColor: this.props.color,
        background: this.props.background
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var children = this.props.children;
      if (React.Children.count(children)) {
        this.setLine();
        this.scrollIntoView(true);
        this.shouldAnimate = true;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value) {
        this.setCurrentIndex(Number(this.props.value));
      }
      if (React.Children.count(prevProps.children) !== React.Children.count(this.props.children)) {
        this.setLine();
        this.scrollIntoView(true);
        this.shouldAnimate = true;
      }
    }
  }, {
    key: "onTabChange",
    value: function onTabChange(index) {
      this.setCurrentIndex(index);
      var _this$props7 = this.props,
        onClick = _this$props7.onClick,
        onChange = _this$props7.onChange;
      typeof onClick === 'function' && onClick(index);
      this.state.currentIndex !== index && typeof onChange === 'function' && onChange(index);
    }
  }, {
    key: "handleNavClick",
    value: function handleNavClick(item, index) {
      if (item.props.disabled) {
        var onDisabled = this.props.onDisabled;
        typeof onDisabled === 'function' && onDisabled(index);
        return;
      }
      this.onTabChange(index);
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        type = _a.type,
        active = _a.active,
        ellipsis = _a.ellipsis,
        duration = _a.duration,
        direction = _a.direction,
        offsetTop = _a.offsetTop,
        lazyRender = _a.lazyRender,
        swipeThreshold = _a.swipeThreshold,
        color = _a.color,
        border = _a.border,
        sticky = _a.sticky,
        animated = _a.animated,
        swipeable = _a.swipeable,
        scrollspy = _a.scrollspy,
        background = _a.background,
        lineWidth = _a.lineWidth,
        lineHeight = _a.lineHeight,
        titleActiveColor = _a.titleActiveColor,
        titleInactiveColor = _a.titleInactiveColor,
        className = _a.className,
        children = _a.children,
        onDisabled = _a.onDisabled,
        onChange = _a.onChange,
        onClick = _a.onClick,
        onSticktScroll = _a.onSticktScroll,
        rest = __rest(_a, ["type", "active", "ellipsis", "duration", "direction", "offsetTop", "lazyRender", "swipeThreshold", "color", "border", "sticky", "animated", "swipeable", "scrollspy", "background", "lineWidth", "lineHeight", "titleActiveColor", "titleInactiveColor", "className", "children", "onDisabled", "onChange", "onClick", "onSticktScroll"]);
      var currentIndex = this.state.currentIndex;
      var className2Use = classnames(componentClassName, className, _defineProperty(_defineProperty({}, "".concat(componentClassName, "--").concat(type), type), "".concat(componentClassName, "--").concat(direction), direction));
      return /*#__PURE__*/React.createElement(TabContext.Provider, {
        value: {
          activeKey: currentIndex,
          animated: animated
        }
      }, /*#__PURE__*/React.createElement("div", Object.assign({
        id: "tabsConatiner",
        className: className2Use
      }, rest), this.renderWrap(), this.renderPanes()));
    }
  }]);
  return Tabs;
}(React.PureComponent);
export { Tabs as default };
Tabs.propTypes = {
  type: PropTypes.string
};
Tabs.defaultProps = {
  disabled: false,
  swipeable: false,
  direction: 'horizontal',
  defaultValue: 0,
  type: 'line',
  active: 0,
  ellipsis: true,
  duration: 0.3,
  offsetTop: 0,
  lazyRender: true,
  swipeThreshold: 5
};