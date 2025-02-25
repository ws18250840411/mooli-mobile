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
import Context from './context';
import { getRootScrollTop, getScrollTop } from '../utils/dom/scroll';
var IndexAnchor = /*#__PURE__*/function (_React$PureComponent) {
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
          top = elRect.top + getRootScrollTop();
        } else {
          top = elRect.top + getScrollTop(scroller) - scrollerRect.top;
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
      var componentClassName = createClassName('index-anchor');
      var className2Use = classnames(componentClassName, className, _defineProperty(_defineProperty({}, "".concat(componentClassName, "--sticky"), this.sticky), 'mooli-hairline--bottom', this.sticky));
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
export { IndexAnchor as default };
IndexAnchor.contextType = Context;
IndexAnchor.propTypes = {
  index: PropTypes.string,
  formatIndexAnchor: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};
IndexAnchor.defaultProps = {};