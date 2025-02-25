function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
import Search from '../search';
import Option from './option';
import JSearch from './lib/Search';
var Select = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Select, _React$PureComponent);
  var _super = _createSuper(Select);
  function Select(props) {
    var _this;
    _classCallCheck(this, Select);
    _this = _super.call(this, props);
    _this.renderOptions = function () {
      var _this$props = _this.props,
        value = _this$props.value,
        _this$props$options = _this$props.options,
        options = _this$props$options === void 0 ? [] : _this$props$options,
        children = _this$props.children;
      var curOptions = [];
      if (children) {
        // eslint-disable-next-line no-inner-declarations
        var returnChildren = function returnChildren(child) {
          if (child.props) {
            return returnChildren(child.props.children);
          }
          return child;
        };
        var chiles = React.Children.toArray(children).map(function (child) {
          if ( /*#__PURE__*/React.isValidElement(child)) {
            if (child.props.children) {
              return {
                label: returnChildren(child.props.children),
                value: child.props.value
              };
            } else {
              return {
                label: child.props.label,
                value: child.props.value
              };
            }
          }
          return child;
        });
        curOptions.push.apply(curOptions, _toConsumableArray(chiles));
      }
      if (options.length > 0) {
        curOptions.push.apply(curOptions, _toConsumableArray(options));
      }
      _this.search.reset(curOptions);
      _this.options = curOptions;
      _this.setState({
        options: curOptions
      });
      for (var index = 0; index < _this.options.length; index++) {
        var item = _this.options[index];
        if (item.value === value) {
          _this.setState({
            curSelected: item
          });
        }
      }
    };
    _this.state = {
      value: '',
      options: [],
      curSelected: {
        value: '',
        label: ''
      }
    };
    _this.search = new JSearch('value', 'label');
    return _this;
  }
  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderOptions();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _a = this.props,
        value = _a.value,
        _a$options = _a.options,
        options = _a$options === void 0 ? [] : _a$options,
        _a$filterable = _a.filterable,
        filterable = _a$filterable === void 0 ? false : _a$filterable,
        className = _a.className,
        children = _a.children,
        onInput = _a.onInput,
        onChange = _a.onChange,
        onSearch = _a.onSearch,
        onCancel = _a.onCancel,
        _onClear = _a.onClear,
        onCompleted = _a.onCompleted,
        rest = __rest(_a, ["value", "options", "filterable", "className", "children", "onInput", "onChange", "onSearch", "onCancel", "onClear", "onCompleted"]);
      var componentClassName = createClassName('select');
      var className2Use = classnames(componentClassName, className);
      return /*#__PURE__*/React.createElement("div", {
        className: className2Use
      }, /*#__PURE__*/React.createElement(Search, Object.assign({
        value: this.state.value,
        clearableIcon: /*#__PURE__*/React.createElement("svg", {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, /*#__PURE__*/React.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.4697 4.46967C10.7626 4.17678 11.2374 4.17678 11.5303 4.46967C11.7966 4.73594 11.8208 5.1526 11.6029 5.44621L11.5303 5.53033L9.06066 8L11.5303 10.4697C11.8232 10.7626 11.8232 11.2374 11.5303 11.5303C11.2641 11.7966 10.8474 11.8208 10.5538 11.6029L10.4697 11.5303L8 9.06066L5.53033 11.5303C5.23744 11.8232 4.76256 11.8232 4.46967 11.5303C4.2034 11.2641 4.1792 10.8474 4.39705 10.5538L4.46967 10.4697L6.93934 8L4.46967 5.53033C4.17678 5.23744 4.17678 4.76256 4.46967 4.46967C4.73594 4.2034 5.1526 4.1792 5.44621 4.39705L5.53033 4.46967L8 6.93934L10.4697 4.46967Z",
          fill: "#999999"
        })),
        onChange: function onChange(value) {
          if (filterable) {
            var _options = value ? _this2.search.search(value) : _this2.options;
            _this2.setState({
              options: _options
            });
          }
          _this2.setState({
            value: value
          });
        },
        onCancel: function onCancel() {
          onCompleted && onCompleted(_this2.state.curSelected);
        },
        onClear: function onClear(e) {
          _this2.setState({
            curSelected: {
              value: '',
              label: ''
            },
            value: ''
          });
          _onClear && _onClear(e);
        }
      }, rest)), /*#__PURE__*/React.createElement("div", {
        className: "mooli-options"
      }, this.state.options.map(function (item, i) {
        return /*#__PURE__*/React.createElement(Option, {
          key: i,
          value: item.value,
          label: item.label,
          selected: item.value === _this2.state.curSelected.value,
          onPress: function onPress(_ref) {
            var value = _ref.value,
              label = _ref.label;
            _this2.setState({
              curSelected: {
                value: value,
                label: label
              }
            });
            onChange && onChange({
              value: value,
              label: label
            });
          }
        }, item.label);
      })));
    }
  }]);
  return Select;
}(React.PureComponent);
export { Select as default };
Select.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  filterable: PropTypes.bool,
  options: PropTypes.array
};
Select.defaultProps = {};