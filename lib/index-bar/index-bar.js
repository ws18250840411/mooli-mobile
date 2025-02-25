"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../utils");
var _context = _interopRequireDefault(require("./context"));
var _event = require("../utils/dom/event");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function genAlphabet() {
  var indexList = [];
  var charCodeOfA = 'A'.charCodeAt(0);
  for (var i = 0; i < 26; i++) {
    // @ts-ignore
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }
  return indexList;
}
var componentClassName = (0, _utils.createClassName)('index-bar');
var IndexBar = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(IndexBar, _React$PureComponent);
  var _super = _createSuper(IndexBar);
  function IndexBar(props, context) {
    var _this;
    _classCallCheck(this, IndexBar);
    _this = _super.call(this, props, context);
    _this.childrens = [];
    _this.onScroll = function () {
      if (_this.rootRef.current && (0, _utils.isHidden)(_this.rootRef.current)) {
        return;
      }
      if (_this.scroller) {
        var _this$props = _this.props,
          indexList = _this$props.indexList,
          _this$props$sticky = _this$props.sticky,
          sticky = _this$props$sticky === void 0 ? true : _this$props$sticky,
          _this$props$stickyOff = _this$props.stickyOffsetTop,
          stickyOffsetTop = _this$props$stickyOff === void 0 ? 0 : _this$props$stickyOff,
          onChange = _this$props.onChange;
        var scrollTop = (0, _utils.getScrollTop)(_this.scroller);
        var scrollerRect = _this.getScrollerRect();
        var rects = _this.childrens.map(function (item) {
          return item.getRect(_this.scroller, scrollerRect);
        });
        var active = _this.getActiveAnchorIndex(scrollTop, rects);
        if (indexList[active]) {
          _this.setState({
            activeAnchorIndex: indexList[active]
          });
        }
        if (onChange && typeof onChange === 'function') {
          indexList[active] && onChange(indexList[active]);
        }
        if (sticky) {
          _this.childrens.forEach(function (item, index) {
            if (index === active || index === active - 1) {
              if (item.curRef.current) {
                var rect = item.curRef.current.getBoundingClientRect();
                item.setStates({
                  left: rect.left,
                  width: rect.width
                });
              }
            } else {
              item.setStates({
                left: null,
                width: null
              });
            }
            if (index === active) {
              if (rects && rects[index] && rects[index].top) {
                var top = Math.max(stickyOffsetTop, rects[index].top - scrollTop) + scrollerRect.top;
                item.setStates({
                  active: true,
                  top: top
                });
              }
            } else if (index === active - 1) {
              if (rects && rects[active] && rects[active].top && rects[index] && rects[index].height) {
                var activeItemTop = rects[active].top - scrollTop;
                item.setStates({
                  active: activeItemTop > 0,
                  top: activeItemTop + scrollerRect.top - rects[index].height
                });
              }
            } else {
              item.setStates({
                active: false
              });
            }
          });
        }
      }
    };
    _this.onTouchStart = function () {
      _this.setState({
        interacting: true
      });
    };
    _this.onTouchEnd = function () {
      _this.setState({
        interacting: false
      });
    };
    _this.onTouchMove = function (event) {
      if (!_this.state.interacting) return;
      (0, _event.preventDefault)(event);
      var _ref = event.touches && event.touches[0] || event,
        clientX = _ref.clientX,
        clientY = _ref.clientY;
      var target = document.elementFromPoint(clientX, clientY);
      if (target) {
        var index = target.dataset.index;
        if (_this.touchActiveIndex !== index) {
          _this.touchActiveIndex = index;
          _this.scrollToElement(index);
        }
      }
    };
    _this.rootRef = /*#__PURE__*/React.createRef();
    _this.events = (0, _utils.eventStore)();
    _this.state = {
      activeAnchorIndex: props.indexList && props.indexList[0] || null,
      interacting: false
    };
    return _this;
  }
  _createClass(IndexBar, [{
    key: "sidebarStyle",
    get: function get() {
      if ((0, _utils.isDef)(this.props.zIndex)) {
        return {
          zIndex: this.props.zIndex + 1
        };
      }
      return {};
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.rootRef.current) {
        this.scroller = (0, _utils.getScroller)(this.rootRef.current);
      }
      this.events.add(this.scroller, 'scroll', this.onScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.events.removeAll();
    }
  }, {
    key: "getContext",
    value: function getContext() {
      var _this$props2 = this.props,
        _this$props2$sticky = _this$props2.sticky,
        sticky = _this$props2$sticky === void 0 ? true : _this$props2$sticky,
        highlightColor = _this$props2.highlightColor,
        zIndex = _this$props2.zIndex;
      return {
        indexBar: this,
        sticky: sticky,
        highlightColor: highlightColor,
        zIndex: zIndex
      };
    }
  }, {
    key: "getScrollerRect",
    value: function getScrollerRect() {
      if (this.scroller) {
        if (this.scroller.getBoundingClientRect) {
          return this.scroller.getBoundingClientRect();
        }
      }
      return {
        top: 0,
        left: 0
      };
    }
  }, {
    key: "getActiveAnchorIndex",
    value: function getActiveAnchorIndex(scrollTop, rects) {
      var _this$props3 = this.props,
        _this$props3$sticky = _this$props3.sticky,
        sticky = _this$props3$sticky === void 0 ? true : _this$props3$sticky,
        _this$props3$stickyOf = _this$props3.stickyOffsetTop,
        stickyOffsetTop = _this$props3$stickyOf === void 0 ? 0 : _this$props3$stickyOf;
      for (var i = this.childrens.length - 1; i >= 0; i--) {
        var prevHeight = i > 0 ? rects[i - 1].height : 0;
        var reachTop = sticky ? prevHeight + stickyOffsetTop : 0;
        if (scrollTop + reachTop >= rects[i].top) {
          return i;
        }
      }
      return -1;
    }
  }, {
    key: "addChildren",
    value: function addChildren(child) {
      this.childrens.push(child);
    }
  }, {
    key: "setActiveAnchorIndex",
    value: function setActiveAnchorIndex(index) {
      this.setState({
        activeAnchorIndex: index
      });
    }
  }, {
    key: "scrollToElement",
    value: function scrollToElement(index) {
      this.scrollTo(index);
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(index) {
      if (this.childrens) {
        var match = this.childrens.filter(function (item) {
          return String(item.props.index) === index;
        });
        if (match[0]) {
          match[0].scrollIntoView();
          if (index) {
            this.setState({
              activeAnchorIndex: index
            });
          }
          if (this.props.onSelect && typeof this.props.onSelect === 'function') {
            index && this.props.onSelect(index);
          }
        }
      }
    }
  }, {
    key: "renderIndex",
    value: function renderIndex() {
      var _this2 = this;
      var _this$props4 = this.props,
        indexList = _this$props4.indexList,
        highlightColor = _this$props4.highlightColor,
        formatIndexBar = _this$props4.formatIndexBar;
      var indexArr = [];
      var indexClassName = (0, _utils.createClassName)(componentClassName, 'index');
      var tipsClassName = (0, _utils.createClassName)(componentClassName, 'tips');
      indexList.forEach(function (index) {
        var active = index === _this2.state.activeAnchorIndex;
        var className2Use = (0, _classnames2.default)(indexClassName, _defineProperty({}, "".concat(indexClassName, "--active"), active));
        var indexStyle = active && highlightColor ? {
          color: highlightColor
        } : {};
        indexArr.push(
        /*#__PURE__*/
        // @ts-ignore
        React.createElement("span", {
          key: index,
          "data-index": index,
          style: indexStyle,
          className: className2Use,
          onMouseDown: function onMouseDown() {
            _this2.scrollToElement(index);
          },
          onTouchStart: function onTouchStart() {
            _this2.scrollToElement(index);
          },
          onMouseEnter: function onMouseEnter() {
            if (_this2.state.interacting) {
              _this2.scrollToElement(index);
            }
          }
        }, formatIndexBar ? formatIndexBar(index) : index, _this2.state.interacting && active && /*#__PURE__*/React.createElement("em", {
          className: tipsClassName
        }, formatIndexBar ? formatIndexBar(index) : index)));
      });
      return indexArr;
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        indexList = _a.indexList,
        zIndex = _a.zIndex,
        highlightColor = _a.highlightColor,
        formatIndexBar = _a.formatIndexBar,
        className = _a.className,
        sticky = _a.sticky,
        stickyOffsetTop = _a.stickyOffsetTop,
        children = _a.children,
        onSelect = _a.onSelect,
        onChange = _a.onChange,
        rest = __rest(_a, ["indexList", "zIndex", "highlightColor", "formatIndexBar", "className", "sticky", "stickyOffsetTop", "children", "onSelect", "onChange"]);
      var className2Use = (0, _classnames2.default)(componentClassName, className);
      var sidebarClassName = (0, _utils.createClassName)(componentClassName, 'sidebar');
      var sidebarInnerClassName = (0, _utils.createClassName)(componentClassName, 'sidebar-inner');
      return /*#__PURE__*/React.createElement(_context.default.Provider, {
        value: this.getContext()
      }, /*#__PURE__*/React.createElement("div", Object.assign({
        ref: this.rootRef,
        className: className2Use
      }, rest), /*#__PURE__*/React.createElement("div", {
        className: sidebarClassName,
        style: this.sidebarStyle,
        onTouchStart: this.onTouchStart,
        onMouseDown: this.onTouchStart,
        onTouchEnd: this.onTouchEnd,
        onMouseUp: this.onTouchEnd,
        onTouchMove: this.onTouchMove
      }, /*#__PURE__*/React.createElement("div", {
        className: sidebarInnerClassName
      }, this.renderIndex())), children));
    }
  }]);
  return IndexBar;
}(React.PureComponent);
IndexBar.propTypes = {
  indexList: _propTypes.default.array,
  zIndex: _propTypes.default.number,
  highlightColor: _propTypes.default.string,
  sticky: _propTypes.default.bool,
  stickyOffsetTop: _propTypes.default.number,
  formatIndexBar: _propTypes.default.func,
  className: _propTypes.default.string,
  style: _propTypes.default.object
};
IndexBar.defaultProps = {
  indexList: genAlphabet(),
  sticky: true,
  stickyOffsetTop: 0
};