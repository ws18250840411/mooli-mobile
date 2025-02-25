"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames6 = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _icon = _interopRequireDefault(require("../icon"));
var _mooliCarousel = _interopRequireDefault(require("mooli-carousel"));
var _utils = require("./lib/utils");
var _utils2 = require("../utils");
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
function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
}
var componentClassName = (0, _utils2.createClassName)('swiper');
var AUTOPLAY_INTERVAL = 4000;
var Swiper = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Swiper, _React$PureComponent);
  var _super = _createSuper(Swiper);
  function Swiper(props) {
    var _this;
    _classCallCheck(this, Swiper);
    _this = _super.call(this, props);
    _this.initViewport = function () {
      var _this$props = _this.props,
        _this$props$mode = _this$props.mode,
        mode = _this$props$mode === void 0 ? 'slide' : _this$props$mode,
        _this$props$loop = _this$props.loop,
        loop = _this$props$loop === void 0 ? false : _this$props$loop,
        _this$props$thumb = _this$props.thumb,
        thumb = _this$props$thumb === void 0 ? false : _this$props$thumb,
        _this$props$vertical = _this$props.vertical,
        vertical = _this$props$vertical === void 0 ? false : _this$props$vertical,
        _this$props$progress = _this$props.progress,
        progress = _this$props$progress === void 0 ? false : _this$props$progress,
        _this$props$scale = _this$props.scale,
        scale = _this$props$scale === void 0 ? false : _this$props$scale,
        _this$props$touchable = _this$props.touchable,
        touchable = _this$props$touchable === void 0 ? true : _this$props$touchable,
        _this$props$initial = _this$props.initial,
        initial = _this$props$initial === void 0 ? 0 : _this$props$initial,
        _this$props$slideNums = _this$props.slideNums,
        slideNums = _this$props$slideNums === void 0 ? 1 : _this$props$slideNums,
        _this$props$direction = _this$props.direction,
        direction = _this$props$direction === void 0 ? 'ltr' : _this$props$direction,
        _this$props$align = _this$props.align,
        align = _this$props$align === void 0 ? 'start' : _this$props$align,
        onRef = _this$props.onRef;
      var dragFree = false;
      if (progress) dragFree = true;
      if (thumb) dragFree = false;
      if (mode === 'scroll') dragFree = true;
      var viewportOptions = {
        containScroll: 'keepSnaps',
        skipSnaps: false,
        slidesToScroll: slideNums,
        axis: vertical ? 'y' : 'x',
        align: scale ? 'center' : align,
        startIndex: initial,
        draggable: touchable,
        loop: loop,
        dragFree: dragFree,
        direction: direction
      };
      _this.embla = (0, _mooliCarousel.default)(_this.viewportRef.current, viewportOptions);
      _this.embla.on('select', _this.onSelect);
      _this.embla.on('scroll', _this.onScroll);
      _this.embla.on('pointerDown', _this.stop);
      _this.embla.on('pointerUp', function () {
        if (!_this.isAutoplay) return;
        if (_this.timer) clearTimeout(_this.timer);
        _this.play();
      });
      if (_this.props.indicator) {
        _this.setState({
          scrollSnaps: _this.embla.scrollSnapList()
        });
      }
      if (onRef) {
        onRef(_this.embla);
      }
      _this.onSelect();
      _this.onScroll();
    };
    _this.initThumbViewport = function () {
      if (!_this.props.thumb) return;
      var thumbViewportOptions = {
        containScroll: 'keepSnaps',
        selectedClass: 'is-selected',
        dragFree: true
      };
      _this.emblaThumbs = (0, _mooliCarousel.default)(_this.thumbViewportRef.current, thumbViewportOptions);
    };
    _this.onThumbClick = function (index) {
      if (!_this.embla || !_this.emblaThumbs) return;
      if (_this.emblaThumbs.clickAllowed()) _this.embla.scrollTo(index);
    };
    _this.autoplay = function () {
      if (!_this.embla) return;
      if (_this.embla.canScrollNext()) {
        _this.embla.scrollNext();
      } else {
        _this.embla.scrollTo(0);
      }
      _this.play();
    };
    _this.play = function () {
      if (!_this.isAutoplay) return;
      _this.rafId = (0, _utils2.raf)(function () {
        _this.timer = setTimeout(_this.autoplay, _this.isAutoplay);
      });
    };
    _this.stop = function () {
      (0, _utils2.cancelRaf)(_this.rafId);
    };
    _this.scrollNext = function () {
      if (!_this.embla) return;
      _this.embla.scrollNext();
      _this.stop();
    };
    _this.scrollPrev = function () {
      if (!_this.embla) return;
      _this.embla.scrollPrev();
      _this.stop();
    };
    _this.onSelect = function () {
      if (!_this.embla) return;
      var _this$props2 = _this.props,
        thumb = _this$props2.thumb,
        arrow = _this$props2.arrow;
      if (thumb && _this.emblaThumbs) {
        _this.emblaThumbs.scrollTo(_this.embla.selectedScrollSnap());
      }
      if (arrow) {
        _this.setState({
          prevBtnEnabled: _this.embla.canScrollPrev(),
          nextBtnEnabled: _this.embla.canScrollNext()
        });
      }
      _this.setState({
        selectedIndex: _this.embla.selectedScrollSnap()
      });
    };
    _this.onScroll = function () {
      if (!_this.embla) return;
      if (_this.props.progress || _this.props.onScroll) {
        var p = Math.max(0, Math.min(1, _this.embla.scrollProgress()));
        if (_this.props.progress) {
          _this.setState({
            scrollProgress: p * 100
          });
        }
        if (_this.props.onScroll) {
          _this.props.onScroll(_this.state.selectedIndex, p);
        }
      }
    };
    _this.state = {
      prevBtnEnabled: false,
      nextBtnEnabled: false,
      selectedIndex: 0,
      scrollProgress: 0,
      scrollSnaps: []
    };
    _this.viewportRef = /*#__PURE__*/React.createRef();
    _this.thumbViewportRef = /*#__PURE__*/React.createRef();
    _this.isAutoplay = props.autoPlay;
    if ((0, _utils2.isBoolean)(props.autoPlay) && props.autoPlay) {
      _this.isAutoplay = AUTOPLAY_INTERVAL;
    }
    return _this;
  }
  _createClass(Swiper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ((0, _utils.canUseDOM)()) {
        this.initViewport();
        this.initThumbViewport();
      }
      if (this.isAutoplay) {
        this.play();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_prevProps, prevState) {
      if (this.props.onChange && prevState.selectedIndex !== this.state.selectedIndex) {
        this.props.onChange(this.state.selectedIndex);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.embla = null;
      this.emblaThumbs = null;
      this.timer = null;
      (0, _utils2.cancelRaf)(this.rafId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _a = this.props,
        _a$mode = _a.mode,
        mode = _a$mode === void 0 ? 'slide' : _a$mode,
        _a$loop = _a.loop,
        loop = _a$loop === void 0 ? false : _a$loop,
        _a$autoPlay = _a.autoPlay,
        autoPlay = _a$autoPlay === void 0 ? false : _a$autoPlay,
        _a$arrow = _a.arrow,
        arrow = _a$arrow === void 0 ? false : _a$arrow,
        _a$indicator = _a.indicator,
        indicator = _a$indicator === void 0 ? false : _a$indicator,
        _a$thumb = _a.thumb,
        thumb = _a$thumb === void 0 ? false : _a$thumb,
        _a$vertical = _a.vertical,
        vertical = _a$vertical === void 0 ? false : _a$vertical,
        thumbNode = _a.thumbNode,
        _a$progress = _a.progress,
        progress = _a$progress === void 0 ? false : _a$progress,
        _a$scale = _a.scale,
        scale = _a$scale === void 0 ? false : _a$scale,
        _a$touchable = _a.touchable,
        touchable = _a$touchable === void 0 ? true : _a$touchable,
        _a$initial = _a.initial,
        initial = _a$initial === void 0 ? 0 : _a$initial,
        _a$slideNums = _a.slideNums,
        slideNums = _a$slideNums === void 0 ? 1 : _a$slideNums,
        _a$direction = _a.direction,
        direction = _a$direction === void 0 ? 'ltr' : _a$direction,
        _a$align = _a.align,
        align = _a$align === void 0 ? 'start' : _a$align,
        _a$arrowIcon = _a.arrowIcon,
        arrowIcon = _a$arrowIcon === void 0 ? 'arrow-left' : _a$arrowIcon,
        className = _a.className,
        children = _a.children,
        onChange = _a.onChange,
        onScroll = _a.onScroll,
        onRef = _a.onRef,
        rest = __rest(_a, ["mode", "loop", "autoPlay", "arrow", "indicator", "thumb", "vertical", "thumbNode", "progress", "scale", "touchable", "initial", "slideNums", "direction", "align", "arrowIcon", "className", "children", "onChange", "onScroll", "onRef"]);
      var _this$state = this.state,
        prevBtnEnabled = _this$state.prevBtnEnabled,
        nextBtnEnabled = _this$state.nextBtnEnabled,
        scrollSnaps = _this$state.scrollSnaps,
        selectedIndex = _this$state.selectedIndex,
        scrollProgress = _this$state.scrollProgress;
      var className2Use = (0, _classnames6.default)(componentClassName, className, _defineProperty(_defineProperty(_defineProperty({}, "".concat(componentClassName, "--arrow"), arrow), "".concat(componentClassName, "--vertical"), vertical), "".concat(componentClassName, "--scale"), scale));
      var renderArrow = function renderArrow() {
        if (arrow) {
          var icon;
          if ( /*#__PURE__*/React.isValidElement(arrowIcon)) {
            icon = arrowIcon;
          } else if (isImage(arrowIcon)) {
            icon = /*#__PURE__*/React.createElement("img", {
              src: arrowIcon
            });
          } else {
            icon = /*#__PURE__*/React.createElement(_icon.default, {
              name: arrowIcon
            });
          }
          var componentLeftBtnClassName = (0, _utils2.createClassName)(componentClassName, 'btn-prev');
          var componentRightBtnClassName = (0, _utils2.createClassName)(componentClassName, 'btn-next');
          var classNameLeftBtn = (0, _classnames6.default)(componentLeftBtnClassName, _defineProperty({}, "".concat(componentLeftBtnClassName, "--disable"), !prevBtnEnabled));
          var classNameRightBtn = (0, _classnames6.default)(componentRightBtnClassName, _defineProperty({}, "".concat(componentRightBtnClassName, "--disable"), !nextBtnEnabled));
          return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
            onClick: _this2.scrollPrev,
            className: classNameLeftBtn
          }, icon), /*#__PURE__*/React.createElement("span", {
            onClick: _this2.scrollNext,
            className: classNameRightBtn
          }, icon));
        }
        return null;
      };
      var renderIndicator = function renderIndicator() {
        if (indicator) {
          var componentIndicatorClassName = (0, _utils2.createClassName)(componentClassName, 'indicators');
          return /*#__PURE__*/React.createElement("div", {
            className: componentIndicatorClassName
          }, scrollSnaps.map(function (_, index) {
            var componentDotsClassName = (0, _utils2.createClassName)(componentClassName, 'dots');
            var className3Use = (0, _classnames6.default)(componentDotsClassName, _defineProperty({}, "".concat(componentDotsClassName, "--is-selected"), index === selectedIndex));
            return /*#__PURE__*/React.createElement("span", {
              key: index,
              className: className3Use
            });
          }));
        }
        return null;
      };
      var renderProgress = function renderProgress() {
        if (progress) {
          var componentProgressClassName = (0, _utils2.createClassName)(componentClassName, 'progress');
          return /*#__PURE__*/React.createElement("div", {
            className: componentProgressClassName
          }, /*#__PURE__*/React.createElement("div", {
            className: (0, _utils2.createClassName)(componentProgressClassName, 'bar'),
            style: {
              transform: "translateX(".concat(scrollProgress, "%)")
            }
          }));
        }
        return null;
      };
      var renderSwiper = function renderSwiper() {
        var componentContainerClassName = (0, _utils2.createClassName)(componentClassName, 'container');
        return /*#__PURE__*/React.createElement("div", Object.assign({
          ref: _this2.viewportRef,
          className: className2Use,
          dir: direction
        }, rest), /*#__PURE__*/React.createElement("div", {
          className: componentContainerClassName
        }, React.Children.map(children, function (child, index) {
          if ( /*#__PURE__*/React.isValidElement(child)) {
            var props = child.props;
            return /*#__PURE__*/React.cloneElement(child, Object.assign({
              className: index === selectedIndex ? 'is-actived' : ''
            }, props));
          }
          return null;
        })), renderArrow(), renderIndicator());
      };
      var renderThumb = function renderThumb() {
        if (thumb) {
          var componentThumbsClassName = (0, _utils2.createClassName)('thumbs');
          var childs = thumbNode || children;
          var thumbArr = [];
          if (childs) {
            var curChildren = childs;
            if ( /*#__PURE__*/React.isValidElement(childs)) {
              var _children = childs.props.children;
              curChildren = _children;
            }
            React.Children.map(curChildren, function (child, index) {
              var componentThumbClassName = (0, _utils2.createClassName)(componentThumbsClassName, 'thumb');
              var className4Use = (0, _classnames6.default)(componentThumbClassName, _defineProperty({}, "".concat(componentThumbClassName, "--actived"), index === selectedIndex));
              thumbArr.push( /*#__PURE__*/React.createElement("div", {
                key: index,
                className: className4Use,
                onClick: function onClick() {
                  return _this2.onThumbClick(index);
                }
              }, child));
            });
          }
          return /*#__PURE__*/React.createElement("div", {
            ref: _this2.thumbViewportRef,
            className: "".concat(className2Use, " ").concat(componentThumbsClassName)
          }, /*#__PURE__*/React.createElement("div", {
            className: (0, _utils2.createClassName)(componentClassName, 'container')
          }, thumbArr));
        }
        return null;
      };
      return /*#__PURE__*/React.createElement(React.Fragment, null, renderSwiper(), renderThumb(), renderProgress());
    }
  }]);
  return Swiper;
}(React.PureComponent);
Swiper.propTypes = {
  mode: _propTypes.default.string,
  initial: _propTypes.default.number,
  loop: _propTypes.default.bool,
  autoPlay: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number]),
  indicator: _propTypes.default.bool,
  touchable: _propTypes.default.bool,
  thumb: _propTypes.default.bool,
  thumbNode: _propTypes.default.node,
  progress: _propTypes.default.bool,
  vertical: _propTypes.default.bool,
  slideNums: _propTypes.default.number,
  scale: _propTypes.default.bool,
  arrow: _propTypes.default.bool,
  arrowIcon: _propTypes.default.string,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  children: _propTypes.default.node,
  onChange: _propTypes.default.func,
  onScroll: _propTypes.default.func,
  onRef: _propTypes.default.func
};
Swiper.defaultProps = {
  mode: 'slide',
  loop: false,
  autoPlay: false,
  arrow: false,
  indicator: false,
  thumb: false,
  vertical: false,
  progress: false,
  scale: false,
  touchable: true,
  initial: 0,
  slideNums: 1,
  direction: 'ltr',
  align: 'start',
  arrowIcon: 'arrow-left'
};