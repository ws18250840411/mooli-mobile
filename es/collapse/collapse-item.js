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
import CollapseContext from './lib/context';
import Cell from '../cell/cell';
import { createClassName } from '../utils';
import { raf, doubleRaf } from './lib/utils';
var componentClassName = createClassName('collapse-item');
var CollapseItem = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(CollapseItem, _React$PureComponent);
  var _super = _createSuper(CollapseItem);
  function CollapseItem(props) {
    var _this;
    _classCallCheck(this, CollapseItem);
    _this = _super.call(this, props);
    _this.update = function () {
      raf(function () {
        if (!_this.contentRef.current || !_this.wrapperRef.current) {
          return;
        }
        var offsetHeight = _this.contentRef.current.offsetHeight;
        if (offsetHeight) {
          doubleRaf(function () {
            _this.wrapperRef.current.style.height = _this.expanded ? "".concat(offsetHeight, "px") : '0';
          });
        }
      });
    };
    _this.toggle = function () {
      var disabled = _this.props.disabled;
      var _this$context = _this.context,
        accordion = _this$context.accordion,
        value = _this$context.value,
        onSwitch = _this$context.onSwitch;
      if (disabled) return;
      var close = accordion && _this.currentName === value;
      var name = close ? '' : _this.currentName;
      onSwitch && onSwitch(name, !_this.expanded);
    };
    _this.genTitle = function () {
      var _a = _this.props,
        index = _a.index,
        name = _a.name,
        title = _a.title,
        _a$arrow = _a.arrow,
        arrow = _a$arrow === void 0 ? true : _a$arrow,
        disabled = _a.disabled,
        children = _a.children,
        rest = __rest(_a, ["index", "name", "title", "arrow", "disabled", "children"]);
      var titleClassName = createClassName(componentClassName, 'title');
      var className3Use = classnames(titleClassName, _defineProperty(_defineProperty(_defineProperty({}, "".concat(titleClassName, "--disabled"), disabled), "".concat(titleClassName, "--expanded"), _this.expanded), "".concat(titleClassName, "--borderless"), !_this.context.border));
      return /*#__PURE__*/React.createElement(Cell, Object.assign({
        className: className3Use,
        title: title,
        arrow: arrow,
        onClick: _this.toggle
      }, rest));
    };
    _this.genContent = function () {
      var wrapperClassName = createClassName(componentClassName, 'wrapper');
      var contentClassName = createClassName(componentClassName, 'content');
      return /*#__PURE__*/React.createElement("div", {
        ref: _this.wrapperRef,
        className: wrapperClassName
      }, /*#__PURE__*/React.createElement("div", {
        ref: _this.contentRef,
        className: contentClassName
      }, _this.props.children));
    };
    _this.wrapperRef = /*#__PURE__*/React.createRef();
    _this.contentRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(CollapseItem, [{
    key: "currentName",
    get: function get() {
      var _a;
      return (_a = this.props.name) !== null && _a !== void 0 ? _a : this.props.index;
    }
  }, {
    key: "expanded",
    get: function get() {
      var _this2 = this;
      var _this$context2 = this.context,
        value = _this$context2.value,
        accordion = _this$context2.accordion;
      if (!value) return null;
      return accordion ? value === this.currentName : value.some(function (name) {
        return name === _this2.currentName;
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        index = _this$props.index,
        className = _this$props.className;
      var border = this.context.border;
      var className2Use = classnames(componentClassName, className, _defineProperty({}, "".concat(componentClassName, "--border"), index && border));
      return /*#__PURE__*/React.createElement("div", {
        className: className2Use
      }, this.genTitle(), this.genContent());
    }
  }]);
  return CollapseItem;
}(React.PureComponent);
export { CollapseItem as default };
CollapseItem.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
CollapseItem.defaultProps = {
  arrow: true
};
CollapseItem.contextType = CollapseContext;