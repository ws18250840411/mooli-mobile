"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconpositions = exports.default = exports.btype = exports.bsize = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _loading = _interopRequireDefault(require("../loading"));
var _icon = _interopRequireDefault(require("../icon"));
var _utils = require("../utils");
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
var btype = exports.btype = ['default', 'primary', 'info', 'warning', 'danger'];
var bsize = exports.bsize = ['large', 'normal', 'small', 'mini'];
var iconpositions = exports.iconpositions = ['top', 'left', 'right', 'bottom'];
var htmlTypes = ['button', 'reset', 'submit'];
var componentClassName = (0, _utils.createClassName)('button');
var contentClassName = (0, _utils.createClassName)(componentClassName, 'content');
var Button = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);
  var _super = _createSuper(Button);
  function Button() {
    _classCallCheck(this, Button);
    return _super.apply(this, arguments);
  }
  _createClass(Button, [{
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props = this.props,
        loading = _this$props.loading,
        loadingSize = _this$props.loadingSize,
        loadingType = _this$props.loadingType,
        loadingIndicator = _this$props.loadingIndicator,
        loadingText = _this$props.loadingText,
        children = _this$props.children,
        icon = _this$props.icon,
        iconSize = _this$props.iconSize;
      if (loading) {
        var loadingClassName = (0, _utils.createClassName)(contentClassName, 'loading');
        var text = loadingText || children;
        return /*#__PURE__*/React.createElement(_loading.default, {
          key: "loading",
          color: "currentColor",
          className: loadingClassName,
          size: loadingSize,
          type: loadingType,
          indicator: loadingIndicator
        }, text);
      }
      if (icon) {
        var iconClassName = (0, _utils.createClassName)(contentClassName, 'icon');
        if ((0, _utils.isString)(icon)) {
          return /*#__PURE__*/React.createElement(_icon.default, {
            key: "icon",
            color: "currentColor",
            className: iconClassName,
            name: String(icon),
            size: iconSize
          });
        } else {
          return /*#__PURE__*/React.createElement("span", {
            key: "icon",
            className: iconClassName
          }, icon);
        }
      }
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this$props2 = this.props,
        loading = _this$props2.loading,
        iconPosition = _this$props2.iconPosition,
        loadingText = _this$props2.loadingText,
        children = _this$props2.children;
      var content = [];
      var iconElement = this.renderIcon();
      var textClassName = (0, _utils.createClassName)(contentClassName, 'text');
      if (iconPosition === 'left') {
        content.push(iconElement);
      }
      if (!loading) {
        var text = loadingText || children;
        content.push( /*#__PURE__*/React.createElement("span", {
          key: "btn-text",
          className: textClassName
        }, text));
      }
      if (iconPosition === 'right') {
        content.push(iconElement);
      }
      return content;
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        _a$type = _a.type,
        type = _a$type === void 0 ? 'default' : _a$type,
        _a$size = _a.size,
        size = _a$size === void 0 ? 'normal' : _a$size,
        color = _a.color,
        plain = _a.plain,
        hairline = _a.hairline,
        disabled = _a.disabled,
        round = _a.round,
        square = _a.square,
        _a$bordered = _a.bordered,
        bordered = _a$bordered === void 0 ? true : _a$bordered,
        loading = _a.loading,
        _a$loadingSize = _a.loadingSize,
        loadingSize = _a$loadingSize === void 0 ? '20' : _a$loadingSize,
        loadingType = _a.loadingType,
        loadingText = _a.loadingText,
        loadingIndicator = _a.loadingIndicator,
        icon = _a.icon,
        _a$iconSize = _a.iconSize,
        iconSize = _a$iconSize === void 0 ? '16' : _a$iconSize,
        _a$iconPosition = _a.iconPosition,
        iconPosition = _a$iconPosition === void 0 ? 'left' : _a$iconPosition,
        _a$htmlType = _a.htmlType,
        htmlType = _a$htmlType === void 0 ? 'button' : _a$htmlType,
        block = _a.block,
        style = _a.style,
        className = _a.className,
        children = _a.children,
        onClick = _a.onClick,
        rest = __rest(_a, ["type", "size", "color", "plain", "hairline", "disabled", "round", "square", "bordered", "loading", "loadingSize", "loadingType", "loadingText", "loadingIndicator", "icon", "iconSize", "iconPosition", "htmlType", "block", "style", "className", "children", "onClick"]);
      var className2Use = (0, _classnames2.default)(componentClassName, className, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentClassName, "--").concat(type), btype.some(function (t) {
        return t === type;
      })), "".concat(componentClassName, "--").concat(size), bsize.some(function (t) {
        return t === size;
      })), "".concat(componentClassName, "--block"), block), "".concat(componentClassName, "--plain"), plain), "".concat(componentClassName, "--disabled"), disabled), "".concat(componentClassName, "--round"), round), "".concat(componentClassName, "--square"), square), "".concat(componentClassName, "--loading"), loading), "".concat(componentClassName, "--bordered"), !bordered), "".concat(componentClassName, "--hairline mooli-hairline--surround"), hairline));
      var style2Use = {};
      if (color) {
        style2Use.color = plain ? color : 'white';
        if (!plain) {
          style2Use.background = color;
        }
        if (color.indexOf('gradient') !== -1) {
          style2Use.border = 0;
        } else {
          style2Use.borderColor = color;
        }
      }
      return /*#__PURE__*/React.createElement("button", Object.assign({
        type: htmlType,
        className: className2Use,
        style: Object.assign(Object.assign({}, style2Use), style),
        onClick: onClick
      }, rest), /*#__PURE__*/React.createElement("div", {
        className: contentClassName
      }, this.renderContent()));
    }
  }]);
  return Button;
}(React.PureComponent);
Button.propTypes = {
  type: _propTypes.default.oneOf([].concat(btype)),
  size: _propTypes.default.oneOf([].concat(bsize)),
  className: _propTypes.default.string,
  style: _propTypes.default.object
};
Button.defaultProps = {
  type: 'default',
  size: 'normal',
  bordered: true,
  loadingSize: '20',
  iconSize: '16',
  iconPosition: 'left',
  htmlType: 'button'
};