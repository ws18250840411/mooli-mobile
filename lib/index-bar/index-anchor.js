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
var _scroll = require("../utils/dom/scroll");
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
var IndexAnchor = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(IndexAnchor, _React$PureComponent);
  var _super = _createSuper(IndexAnchor);
  function IndexAnchor(props, context) {
    var _this;
    _classCallCheck(this, IndexAnchor);
    _this = _super.call(this, props, context);
    _this.curRef = /*#__PURE__*/React.createRef();
    _this.state = {
      top: 0,
      left: null,
      rect: {
        top: 0,
        height: 0
      },
      width: null,
      active: false
    };
    return _this;
  }
  _createClass(IndexAnchor, [{
    key: "sticky",
    get: function get() {
      return this.state.active && this.context.sticky;
    }
  }, {
    key: "anchorStyle",
    get: function get() {
      if (this.sticky) {
        return {
          zIndex: "".concat(this.context.zIndex),
          left: this.state.left ? "".concat(this.state.left, "px") : null,
          width: this.state.width ? "".concat(this.state.width, "px") : null,
          transform: "translate3d(0, ".concat(this.state.top, "px, 0)"),
          color: this.context.highlightColor
        };
      }
      return {};
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var indexBar = this.getIndexBar();
      indexBar.addChildren(this);
      if (this.curRef.current) {
        var rect = this.curRef.current.getBoundingClientRect();
        this.setState({
          rect: {
            height: rect.height
          }
        });
      }
    }
  }, {
    key: "scrollIntoView",
    value: function scrollIntoView() {
      if (this.curRef.current) {
        this.curRef.current.scrollIntoView();
      }
    }
  }, {
    key: "getIndexBar",
    value: function getIndexBar() {
      return this.context.indexBar;
    }
  }, {
    key: "getRect",
    value: function getRect(scroller, scrollerRect) {
      if (this.curRef.current) {
        var elRect = this.curRef.current.getBoundingClientRect();
        var top;
        if (scroller === window || scroller === document.body) {
          top = elRect.top + (0, _scroll.getRootScrollTop)();
        } else {
          top = elRect.top + (0, _scroll.getScrollTop)(scroller) - scrollerRect.top;
        }
        this.setState({
          rect: {
            top: top,
            left: elRect.left,
            right: elRect.right,
            height: elRect.height
          }
        });
        return {
          top: top,
          left: elRect.left,
          right: elRect.right,
          height: elRect.height
        };
      }
    }
  }, {
    key: "setStates",
    value: function setStates(params) {
      this.setState(params);
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        index = _a.index,
        className = _a.className,
        children = _a.children,
        formatIndexAnchor = _a.formatIndexAnchor,
        rest = __rest(_a, ["index", "className", "children", "formatIndexAnchor"]);
      var componentClassName = (0, _utils.createClassName)('index-anchor');
      var className2Use = (0, _classnames2.default)(componentClassName, className, _defineProperty(_defineProperty({}, "".concat(componentClassName, "--sticky"), this.sticky), 'mooli-hairline--bottom', this.sticky));
      var rootStyle = this.sticky ? {
        height: "".concat(this.state.rect.height, "px")
      } : {};
      return /*#__PURE__*/React.createElement("div", {
        ref: this.curRef,
        style: rootStyle
      }, /*#__PURE__*/React.createElement("div", Object.assign({
        style: this.anchorStyle,
        className: className2Use
      }, rest), children || index && (formatIndexAnchor ? formatIndexAnchor(index) : index)));
    }
  }]);
  return IndexAnchor;
}(React.PureComponent);
IndexAnchor.contextType = _context.default;
IndexAnchor.propTypes = {
  index: _propTypes.default.string,
  formatIndexAnchor: _propTypes.default.func,
  className: _propTypes.default.string,
  style: _propTypes.default.object
};
IndexAnchor.defaultProps = {};