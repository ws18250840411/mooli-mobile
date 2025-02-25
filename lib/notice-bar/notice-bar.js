"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames3 = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactTransitionGroup = require("react-transition-group");
var _icon = _interopRequireDefault(require("../icon"));
var _utils = require("../utils");
var _utils2 = require("./lib/utils");
var _keyframe = require("./lib/keyframe");
var _context = _interopRequireDefault(require("./lib/context"));
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
var componentClassName = (0, _utils.createClassName)('notice-bar');
var NoticeBar = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(NoticeBar, _React$PureComponent);
  var _super = _createSuper(NoticeBar);
  function NoticeBar(props) {
    var _this;
    _classCallCheck(this, NoticeBar);
    _this = _super.call(this, props);
    _this.reset = function () {
      _this.setState({
        offset: 0,
        duration: 0
      });
      _this.wrapWidth = 0;
      _this.contentWidth = 0;
    };
    _this.correctPosition = function () {
      _this.setState({
        duration: 0
      });
      if (_this.active <= -1) {
        _this.move({
          pace: _this.counts
        });
      }
      if (_this.active >= _this.counts) {
        _this.move({
          pace: -_this.counts
        });
      }
    };
    _this.getTargetActive = function (pace) {
      if (pace) {
        return (0, _utils.range)(_this.active + pace, -1, _this.counts);
      }
      return _this.active;
    };
    _this.getTargetOffset = function (targetActive) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var currentPosition = targetActive * _this.wrapHeight;
      var targetOffset = offset - currentPosition;
      return targetOffset;
    };
    _this.move = function (_ref) {
      var _ref$pace = _ref.pace,
        pace = _ref$pace === void 0 ? 0 : _ref$pace,
        _ref$offset = _ref.offset,
        offset = _ref$offset === void 0 ? 0 : _ref$offset;
      if (_this.counts <= 1) {
        return;
      }
      var targetActive = _this.getTargetActive(pace);
      var targetOffset = _this.getTargetOffset(targetActive, offset);
      _this.active = targetActive;
      _this.setState({
        offset: targetOffset
      });
    };
    _this.next = function () {
      _this.correctPosition();
      (0, _utils2.doubleRaf)(function () {
        _this.setState({
          duration: 0.5
        });
        _this.move({
          pace: 1
        });
      });
    };
    _this.start = function () {
      var _this$props = _this.props,
        cssTransition = _this$props.cssTransition,
        scrollable = _this$props.scrollable,
        _this$props$speed = _this$props.speed,
        speed = _this$props$speed === void 0 ? 60 : _this$props$speed,
        delay = _this$props.delay,
        vertical = _this$props.vertical;
      var childs = _this.counts;
      var wrapWidth = _this.wrapRef.current.getBoundingClientRect().width;
      var wrapHeight = _this.wrapRef.current.getBoundingClientRect().height;
      var contentWidth = _this.contentRef.current.getBoundingClientRect().width;
      var contentHeight = _this.contentRef.current.getBoundingClientRect().height;
      if (!vertical) _this.reset();
      if (cssTransition) {
        if (scrollable || contentWidth > wrapWidth || contentHeight > wrapHeight) {
          if (vertical) {
            if (childs <= 1) return;
            var curChilds = childs + 1;
            var animationDuration = Math.round(delay * (curChilds - 1) + contentHeight / speed * 1000);
            var delayPercent = Math.round(delay * 100 / animationDuration);
            var residue = (100 - delayPercent) / curChilds; // 动画时间
            var move = (100 - residue * curChilds) / (curChilds - 1); // 停留时间
            var startNs = 0;
            var animationContent = '';
            for (var i = 0; i < curChilds; i++) {
              animationContent += "\n                ".concat(startNs, "%, ").concat(startNs + residue, "% {\n                  transform: translate3d(0, ").concat(-(i * wrapHeight), "px, 0);\n                }\n              ");
              if (i < curChilds - 1) {
                startNs = startNs + residue + move;
              } else {
                startNs = startNs + residue;
              }
            }
            _this.keyframe.add(animationContent);
            _this.setState({
              animationDuration: animationDuration
            });
          } else {
            var _animationDuration = Math.round(delay * 2 + contentWidth / speed * 1000);
            var _delayPercent = Math.round(delay * 100 / _animationDuration);
            var _animationContent = "\n              0%, ".concat(_delayPercent, "% {\n                transform: translate3d(0, 0, 0);\n              }\n              ").concat(100 - _delayPercent, "%, 100% {\n                transform: translate3d(").concat(-(contentWidth - wrapWidth), "px, 0, 0);\n              }\n            ");
            _this.keyframe.add(_animationContent);
            _this.setState({
              animationDuration: _animationDuration
            });
          }
        }
      } else {
        clearTimeout(_this.startTimer);
        _this.startTimer = setTimeout(function () {
          if (scrollable || contentWidth > wrapWidth || contentHeight > wrapHeight) {
            if (vertical) {
              _this.wrapHeight = wrapHeight;
              _this.contentHeight = contentHeight;
              _this.next();
            } else {
              (0, _utils2.doubleRaf)(function () {
                _this.wrapWidth = wrapWidth;
                _this.contentWidth = contentWidth;
                _this.setState({
                  offset: -contentWidth,
                  duration: contentWidth / speed
                });
              });
            }
          }
        }, delay);
      }
    };
    _this.onTransitionEnd = function () {
      var _this$props2 = _this.props,
        cssTransition = _this$props2.cssTransition,
        _this$props2$speed = _this$props2.speed,
        speed = _this$props2$speed === void 0 ? 60 : _this$props2$speed,
        onReplay = _this$props2.onReplay,
        vertical = _this$props2.vertical;
      if (cssTransition) return;
      if (vertical) {
        _this.setState({
          duration: 0.5
        });
        _this.start();
      } else {
        _this.setState({
          offset: _this.wrapWidth,
          duration: 0
        });
        (0, _utils2.raf)(function () {
          (0, _utils2.doubleRaf)(function () {
            _this.setState({
              offset: -_this.contentWidth,
              duration: (_this.contentWidth + _this.wrapWidth) / speed
            });
            if (typeof onReplay === 'function') onReplay();
          });
        });
      }
    };
    _this.onClickIcon = function () {
      var _this$props3 = _this.props,
        mode = _this$props3.mode,
        onClose = _this$props3.onClose;
      if (typeof onClose === 'function') onClose();
      if (mode === 'closeable') {
        _this.setState({
          show: false
        });
      }
    };
    _this.getLeftIconRender = function () {
      var leftIcon = _this.props.leftIcon;
      var leftIconClassName = (0, _utils.createClassName)(componentClassName, 'left-icon');
      if ( /*#__PURE__*/React.isValidElement(leftIcon)) {
        return leftIcon;
      }
      if ((0, _utils.isString)(leftIcon)) {
        return /*#__PURE__*/React.createElement(_icon.default, {
          className: leftIconClassName,
          name: String(leftIcon)
        });
      }
      return null;
    };
    _this.getRightIconRender = function () {
      var _this$props4 = _this.props,
        rightIcon = _this$props4.rightIcon,
        mode = _this$props4.mode;
      var rightIconClassName = (0, _utils.createClassName)(componentClassName, 'right-icon');
      if ( /*#__PURE__*/React.isValidElement(rightIcon)) {
        return rightIcon;
      }
      var iconName;
      if (mode === 'closeable') {
        iconName = 'cross';
      } else if (mode === 'link') {
        iconName = 'arrow';
      } else {
        iconName = rightIcon;
      }
      if ((0, _utils.isString)(iconName)) {
        return /*#__PURE__*/React.createElement(_icon.default, {
          className: rightIconClassName,
          name: iconName,
          onClick: _this.onClickIcon
        });
      }
      return null;
    };
    _this.getContentRender = function () {
      var _this$props5 = _this.props,
        cssTransition = _this$props5.cssTransition,
        text = _this$props5.text,
        scrollable = _this$props5.scrollable,
        wrapable = _this$props5.wrapable,
        vertical = _this$props5.vertical,
        children = _this$props5.children;
      var _this$state = _this.state,
        offset = _this$state.offset,
        duration = _this$state.duration,
        animationDuration = _this$state.animationDuration;
      var contentClassName = (0, _utils.createClassName)(componentClassName, 'content');
      var className3Use = (0, _classnames3.default)(contentClassName, _defineProperty({}, "mooli-ellipsis", scrollable === false && !wrapable));
      var translateDirection = vertical ? 'Y' : 'X';
      var contentStyle = cssTransition ? animationDuration > 0 ? {
        animation: "".concat(_this.keyframeName, " ").concat(animationDuration, "ms linear infinite")
      } : undefined : {
        transform: offset ? "translate".concat(translateDirection, "(").concat(offset, "px)") : '',
        transitionDuration: duration + 's'
      };
      var renderChilds = function renderChilds() {
        var childrenArrs = [];
        var firstChild;
        React.Children.forEach(children, function (child, index) {
          var props = child.props;
          var curChild = /*#__PURE__*/React.cloneElement(child, Object.assign({
            index: index,
            key: index
          }, props));
          childrenArrs.push(curChild);
          if (vertical && cssTransition) {
            if (index === 0) {
              firstChild = /*#__PURE__*/React.cloneElement(child, Object.assign({
                index: _this.counts,
                key: _this.counts
              }, props));
            }
            if (index === _this.counts - 1) {
              childrenArrs.push(firstChild);
            }
          }
        });
        return childrenArrs;
      };
      return /*#__PURE__*/React.createElement("div", {
        ref: _this.wrapRef,
        className: (0, _utils.createClassName)(componentClassName, 'wrap')
      }, /*#__PURE__*/React.createElement("div", {
        ref: _this.contentRef,
        className: className3Use,
        style: contentStyle,
        onTransitionEnd: _this.onTransitionEnd
      }, /*#__PURE__*/React.createElement(_context.default.Provider, {
        value: {
          offset: _this.state.offset,
          isLast: _this.active === _this.counts
        }
      }, children && renderChilds() || text)));
    };
    _this.state = {
      show: true,
      offset: 0,
      duration: 0,
      display: true
    };
    _this.active = 0;
    _this.wrapWidth = 0;
    _this.contentWidth = 0;
    _this.rootRef = /*#__PURE__*/React.createRef();
    _this.wrapRef = /*#__PURE__*/React.createRef();
    _this.contentRef = /*#__PURE__*/React.createRef();
    _this.keyframeName = "".concat(componentClassName, "-").concat((0, _utils.getUniqueId)());
    return _this;
  }
  _createClass(NoticeBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.keyframe = new _keyframe.Keyframes(this.keyframeName);
      this.start();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.keyframe.remove();
    }
  }, {
    key: "counts",
    get: function get() {
      return React.Children.count(this.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        wrapable = _this$props6.wrapable,
        color = _this$props6.color,
        background = _this$props6.background,
        vertical = _this$props6.vertical,
        onClick = _this$props6.onClick,
        style = _this$props6.style,
        className = _this$props6.className;
      var show = this.state.show;
      var className2Use = (0, _classnames3.default)(componentClassName, className, _defineProperty(_defineProperty({}, "".concat(componentClassName, "--wrapable"), wrapable), "".concat(componentClassName, "--vertical"), vertical));
      var barStyle = {
        color: color,
        background: background
      };
      return /*#__PURE__*/React.createElement(_reactTransitionGroup.CSSTransition, {
        appear: true,
        classNames: "mooli-fade",
        in: show,
        timeout: 500,
        unmountOnExit: true,
        nodeRef: this.rootRef
      }, /*#__PURE__*/React.createElement("div", {
        role: "alert",
        ref: this.rootRef,
        className: className2Use,
        style: Object.assign(Object.assign({}, barStyle), style),
        onClick: onClick
      }, this.getLeftIconRender(), this.getContentRender(), this.getRightIconRender()));
    }
  }]);
  return NoticeBar;
}(React.PureComponent);
NoticeBar.propTypes = {
  mode: _propTypes.default.string,
  text: _propTypes.default.string,
  color: _propTypes.default.string,
  wrapable: _propTypes.default.bool,
  background: _propTypes.default.string,
  scrollable: _propTypes.default.bool,
  cssTransition: _propTypes.default.bool,
  delay: _propTypes.default.number,
  speed: _propTypes.default.number,
  vertical: _propTypes.default.bool,
  leftIcon: _propTypes.default.node,
  rightIcon: _propTypes.default.node,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  children: _propTypes.default.node,
  onClose: _propTypes.default.func,
  onReplay: _propTypes.default.func,
  onClick: _propTypes.default.func
};
NoticeBar.defaultProps = {
  scrollable: null,
  delay: 2000,
  speed: 60,
  cssTransition: false,
  vertical: false
};