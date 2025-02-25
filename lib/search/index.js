"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames3 = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _field = _interopRequireDefault(require("../field"));
var _utils = require("../utils");
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
var componentClassName = (0, _utils.createClassName)('search');
var Search = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Search, _React$PureComponent);
  var _super = _createSuper(Search);
  function Search() {
    _classCallCheck(this, Search);
    return _super.apply(this, arguments);
  }
  _createClass(Search, [{
    key: "renderLabel",
    value: function renderLabel() {
      var label = this.props.label;
      if (label) {
        return /*#__PURE__*/React.createElement("div", {
          className: (0, _utils.createClassName)(componentClassName, 'label')
        }, label);
      }
      return null;
    }
  }, {
    key: "renderAction",
    value: function renderAction() {
      var _this$props = this.props,
        showAction = _this$props.showAction,
        _this$props$action = _this$props.action,
        action = _this$props$action === void 0 ? '取消' : _this$props$action,
        onCancel = _this$props.onCancel;
      if (!showAction) {
        return;
      }
      return /*#__PURE__*/React.createElement("div", {
        className: (0, _utils.createClassName)(componentClassName, 'action'),
        role: "button",
        onClick: function onClick() {
          if (!action) {
            return;
          }
          onCancel && onCancel();
        }
      }, action);
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        left = _a.left,
        background = _a.background,
        _a$value = _a.value,
        value = _a$value === void 0 ? '' : _a$value,
        _a$showSearchIcon = _a.showSearchIcon,
        showSearchIcon = _a$showSearchIcon === void 0 ? true : _a$showSearchIcon,
        _a$shape = _a.shape,
        shape = _a$shape === void 0 ? 'sqaure' : _a$shape,
        label = _a.label,
        action = _a.action,
        showAction = _a.showAction,
        _a$leftIcon = _a.leftIcon,
        leftIcon = _a$leftIcon === void 0 ? ( /*#__PURE__*/React.createElement("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React.createElement("circle", {
          cx: "7",
          cy: "7",
          r: "5.25",
          stroke: "#ACACAC",
          strokeWidth: "1.5"
        }), /*#__PURE__*/React.createElement("path", {
          d: "M14.5478 14.6966L10.6568 10.8056",
          stroke: "#ACACAC",
          strokeWidth: "1.5"
        }))) : _a$leftIcon,
        rightIcon = _a.rightIcon,
        className = _a.className,
        children = _a.children,
        _onKeyPress = _a.onKeyPress,
        onSearch = _a.onSearch,
        style = _a.style,
        rest = __rest(_a, ["left", "background", "value", "showSearchIcon", "shape", "label", "action", "showAction", "leftIcon", "rightIcon", "className", "children", "onKeyPress", "onSearch", "style"]);
      var className2Use = (0, _classnames3.default)(componentClassName, className, _defineProperty({}, "".concat(componentClassName, "--show-action"), showAction));
      var filedClassName = (0, _utils.createClassName)(componentClassName, 'content');
      return /*#__PURE__*/React.createElement("div", {
        className: className2Use,
        style: Object.assign(Object.assign({}, style), {
          background: background
        })
      }, left, /*#__PURE__*/React.createElement("div", {
        className: (0, _classnames3.default)(filedClassName, _defineProperty({}, "".concat(filedClassName, "--").concat(shape), shape))
      }, this.renderLabel(), /*#__PURE__*/React.createElement(_field.default, Object.assign({
        type: "search",
        border: false,
        value: value,
        leftIcon: showSearchIcon && ( /*#__PURE__*/React.createElement("span", {
          className: (0, _utils.createClassName)(componentClassName, 'left-icon')
        }, leftIcon)),
        rightIcon: /*#__PURE__*/React.createElement("span", {
          className: (0, _utils.createClassName)(componentClassName, 'right-icon')
        }, rightIcon),
        onKeyPress: function onKeyPress(event) {
          if (event.keyCode === 13 || event.code === 'Enter' || event.which === 13) {
            (0, _event.preventDefault)(event);
            onSearch && onSearch(value);
          }
          _onKeyPress && _onKeyPress(event);
        }
      }, rest))), this.renderAction());
    }
  }]);
  return Search;
}(React.PureComponent);
Search.propTypes = {
  className: _propTypes.default.string,
  style: _propTypes.default.object
};
Search.defaultProps = {};