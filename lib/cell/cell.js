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
var _icon = _interopRequireDefault(require("../icon"));
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
var componentClassName = (0, _utils.createClassName)('cell');
var Cell = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Cell, _React$PureComponent);
  var _super = _createSuper(Cell);
  function Cell() {
    var _this;
    _classCallCheck(this, Cell);
    _this = _super.apply(this, arguments);
    _this.renderLabel = function () {
      var _this$props = _this.props,
        label = _this$props.label,
        labelClass = _this$props.labelClass;
      var labelClassName = (0, _utils.createClassName)(componentClassName, 'label');
      var className3Use = (0, _classnames2.default)(labelClassName, labelClass);
      if (label) {
        return /*#__PURE__*/React.createElement("div", {
          key: "cell-label",
          className: className3Use
        }, label);
      }
      return null;
    };
    _this.renderIconLeft = function () {
      var _this$props2 = _this.props,
        iconLeft = _this$props2.iconLeft,
        onClickLeftIcon = _this$props2.onClickLeftIcon;
      var iconClassName = (0, _utils.createClassName)(componentClassName, 'left-icon');
      if (iconLeft) {
        if ( /*#__PURE__*/React.isValidElement(iconLeft)) {
          return iconLeft;
        }
        return /*#__PURE__*/React.createElement(_icon.default, {
          name: iconLeft,
          key: "cell-left-icon",
          className: iconClassName,
          onClick: onClickLeftIcon
        });
      }
      return null;
    };
    _this.renderIconRight = function () {
      var _this$props3 = _this.props,
        iconRight = _this$props3.iconRight,
        onClickRightIcon = _this$props3.onClickRightIcon;
      var iconClassName = (0, _utils.createClassName)(componentClassName, 'right-icon');
      if (iconRight) {
        if ( /*#__PURE__*/React.isValidElement(iconRight)) {
          return iconRight;
        }
        return /*#__PURE__*/React.createElement(_icon.default, {
          name: iconRight,
          key: "cell-right-icon",
          className: iconClassName,
          onClick: onClickRightIcon
        });
      }
      return null;
    };
    _this.renderArrow = function () {
      var _this$props4 = _this.props,
        arrow = _this$props4.arrow,
        arrowDirection = _this$props4.arrowDirection,
        onClickRightIcon = _this$props4.onClickRightIcon;
      var iconClassName = (0, _utils.createClassName)(componentClassName, 'right-icon');
      if (arrow) {
        var iconName = arrowDirection ? "arrow-".concat(arrowDirection) : 'arrow';
        return /*#__PURE__*/React.createElement(_icon.default, {
          name: iconName,
          key: "cell-arrow-icon",
          className: iconClassName,
          onClick: onClickRightIcon
        });
      }
      return null;
    };
    _this.renderTitle = function () {
      var _this$props5 = _this.props,
        title = _this$props5.title,
        titleClass = _this$props5.titleClass,
        titleStyle = _this$props5.titleStyle,
        children = _this$props5.children;
      var titleClassName = (0, _utils.createClassName)(componentClassName, 'title');
      var className4Use = (0, _classnames2.default)(titleClassName, titleClass);
      var curTitle = title || children;
      if (curTitle) {
        return /*#__PURE__*/React.createElement("div", {
          key: "cell-title",
          className: className4Use,
          style: titleStyle
        }, typeof curTitle === 'function' ? curTitle() : curTitle, _this.renderLabel());
      }
      return null;
    };
    _this.renderValue = function () {
      var _this$props6 = _this.props,
        value = _this$props6.value,
        valueClass = _this$props6.valueClass;
      var valueClassName = (0, _utils.createClassName)(componentClassName, 'value');
      var className5Use = (0, _classnames2.default)(valueClassName, valueClass);
      if (value) {
        return /*#__PURE__*/React.createElement("div", {
          key: "cell-value",
          className: className5Use
        }, value);
      }
      return null;
    };
    return _this;
  }
  _createClass(Cell, [{
    key: "render",
    value: function render() {
      var _a = this.props,
        title = _a.title,
        label = _a.label,
        value = _a.value,
        size = _a.size,
        iconLeft = _a.iconLeft,
        iconRight = _a.iconRight,
        _a$border = _a.border,
        border = _a$border === void 0 ? false : _a$border,
        required = _a.required,
        center = _a.center,
        arrow = _a.arrow,
        arrowDirection = _a.arrowDirection,
        labelClass = _a.labelClass,
        valueClass = _a.valueClass,
        titleClass = _a.titleClass,
        titleStyle = _a.titleStyle,
        className = _a.className,
        style = _a.style,
        children = _a.children,
        onClick = _a.onClick,
        onClickLeftIcon = _a.onClickLeftIcon,
        onClickRightIcon = _a.onClickRightIcon,
        rest = __rest(_a, ["title", "label", "value", "size", "iconLeft", "iconRight", "border", "required", "center", "arrow", "arrowDirection", "labelClass", "valueClass", "titleClass", "titleStyle", "className", "style", "children", "onClick", "onClickLeftIcon", "onClickRightIcon"]);
      var className2Use = (0, _classnames2.default)(componentClassName, className, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentClassName, "--").concat(size), size), "".concat(componentClassName, "--center"), center), "".concat(componentClassName, "--required"), required), "".concat(componentClassName, "--border"), border));
      return /*#__PURE__*/React.createElement("div", Object.assign({
        className: className2Use,
        style: style,
        onClick: onClick
      }, rest), this.renderIconLeft(), this.renderTitle(), this.renderValue(), this.renderArrow(), this.renderIconRight());
    }
  }]);
  return Cell;
}(React.PureComponent);
Cell.propTypes = {
  label: _propTypes.default.node,
  value: _propTypes.default.node,
  size: _propTypes.default.string,
  iconLeft: _propTypes.default.node,
  iconRight: _propTypes.default.node,
  border: _propTypes.default.bool,
  required: _propTypes.default.bool,
  clickable: _propTypes.default.bool,
  center: _propTypes.default.bool,
  arrow: _propTypes.default.bool,
  arrowDirection: _propTypes.default.string,
  arrowRender: _propTypes.default.node,
  labelClass: _propTypes.default.string,
  valueClass: _propTypes.default.string,
  titleClass: _propTypes.default.string,
  titleStyle: _propTypes.default.object,
  className: _propTypes.default.string,
  style: _propTypes.default.object,
  children: _propTypes.default.node,
  onClick: _propTypes.default.func,
  onClickLeftIcon: _propTypes.default.func,
  onClickRightIcon: _propTypes.default.func
};
Cell.defaultProps = {
  border: false
};