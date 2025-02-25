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
import { createClassName } from '../utils';
import GridContext from './lib/context';
var GridItem = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(GridItem, _React$PureComponent);
  var _super = _createSuper(GridItem);
  function GridItem() {
    _classCallCheck(this, GridItem);
    return _super.apply(this, arguments);
  }
  _createClass(GridItem, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
        gutter = _this$context.gutter,
        column = _this$context.column,
        border = _this$context.border,
        square = _this$context.square,
        direction = _this$context.direction;
      var _a = this.props,
        className = _a.className,
        style = _a.style,
        children = _a.children,
        rest = __rest(_a, ["className", "style", "children"]);
      var componentClassName = createClassName('grid-item');
      var contentClassName = createClassName(componentClassName, 'content');
      var className2Use = classnames(contentClassName, className, _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(componentClassName, "--").concat(direction), direction), "".concat(componentClassName, "--square"), square), "".concat(componentClassName, "--surround"), border && gutter), "mooli-hairline", border));
      var mergedStyle = {};
      if (column) {
        mergedStyle.flexBasis = "".concat(100 / column, "%");
      }
      if (square && column) {
        mergedStyle.height = 0;
        mergedStyle.paddingBottom = "".concat(100 / column, "%");
      }
      if (gutter && gutter[0] > 0) {
        var horizontalGutter = gutter[0] / 2;
        mergedStyle.paddingLeft = horizontalGutter;
        mergedStyle.paddingRight = horizontalGutter;
      }
      if (gutter && gutter[1] > 0) {
        var verticalGutter = gutter[1] / 2;
        mergedStyle.paddingTop = verticalGutter;
        mergedStyle.paddingBottom = verticalGutter;
      }
      return /*#__PURE__*/React.createElement("div", Object.assign({
        className: componentClassName,
        style: Object.assign(Object.assign({}, mergedStyle), style)
      }, rest), /*#__PURE__*/React.createElement("div", {
        className: className2Use
      }, children));
    }
  }]);
  return GridItem;
}(React.PureComponent);
export { GridItem as default };
GridItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
GridItem.defaultProps = {};
GridItem.contextType = GridContext;