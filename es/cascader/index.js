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
import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import Loading from '../loading';
import Tabs from '../tabs/tabs';
import TabPane from '../tabs/tab-pane';
import { createClassName } from '../utils';
var componentClassName = createClassName('cascader');
var Cascader = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Cascader, _React$PureComponent);
  var _super = _createSuper(Cascader);
  function Cascader(props) {
    var _this;
    _classCallCheck(this, Cascader);
    _this = _super.call(this, props);
    _this.updateTabs = function () {
      var _this$props = _this.props,
        _this$props$options = _this$props.options,
        options = _this$props$options === void 0 ? [] : _this$props$options,
        value = _this$props.value,
        defaultValue = _this$props.defaultValue;
      var curV = value || defaultValue;
      if (curV || curV === 0) {
        var selectedOptions = _this.getSelectedOptionsByValue(options, curV);
        if (selectedOptions) {
          var optionsCursor = _toConsumableArray(options);
          var curTabs = selectedOptions.map(function (option) {
            var tab = {
              options: optionsCursor,
              selectedOption: option
            };
            var next = optionsCursor.filter(function (item) {
              return item[_this.valueKey] === option[_this.valueKey];
            });
            if (next.length) {
              optionsCursor = next[0][_this.childrenKey];
            }
            return tab;
          });
          if (optionsCursor) {
            curTabs.push({
              options: optionsCursor,
              selectedOption: null
            });
          }
          _this.setState({
            tabs: curTabs
          }, function () {
            _this.setState({
              activeTab: _this.state.tabs.length - 1
            });
          });
          return;
        }
      }
      _this.setState({
        tabs: [{
          options: options,
          selectedOption: null
        }]
      });
    };
    _this.onClose = function () {
      var onClose = _this.props.onClose;
      if (typeof onClose === 'function') onClose();
    };
    _this.onSelect = function (option, tabIndex) {
      var _this$props2 = _this.props,
        onInput = _this$props2.onInput,
        onChange = _this$props2.onChange,
        onFinish = _this$props2.onFinish;
      var cutTabs = _toConsumableArray(_this.state.tabs);
      cutTabs[tabIndex].selectedOption = option;
      if (cutTabs.length > tabIndex + 1) {
        cutTabs = cutTabs.slice(0, tabIndex + 1);
        _this.setState({
          tabs: cutTabs
        });
      }
      if (option[_this.childrenKey]) {
        var nextTab = {
          options: option[_this.childrenKey] || [],
          selectedOption: null
        };
        if (cutTabs[tabIndex + 1]) {
          cutTabs[tabIndex + 1] = nextTab;
        } else {
          cutTabs.push(nextTab);
        }
        _this.setState({
          tabs: cutTabs,
          activeTab: tabIndex + 1
        }, function () {
          _this.setState({
            // eslint-disable-next-line react/no-direct-mutation-state
            activeTab: _this.state.activeTab++
          });
        });
      }
      var selectedOptions = cutTabs.map(function (tab) {
        return tab.selectedOption;
      }).filter(function (item) {
        return !!item;
      });
      var eventParams = {
        value: option[_this.valueKey],
        tabIndex: tabIndex,
        selectedOptions: selectedOptions
      };
      if (typeof onInput === 'function') onInput(option[_this.valueKey]);
      if (typeof onChange === 'function') onChange(eventParams);
      if (typeof onFinish === 'function' && !option[_this.childrenKey]) onFinish(eventParams);
    };
    _this.renderHeader = function () {
      var _this$props3 = _this.props,
        title = _this$props3.title,
        closeable = _this$props3.closeable;
      return /*#__PURE__*/React.createElement("div", {
        className: createClassName(componentClassName, 'header')
      }, /*#__PURE__*/React.createElement("h2", {
        className: createClassName(componentClassName, 'title')
      }, title), closeable ? ( /*#__PURE__*/React.createElement(Icon, {
        name: "cross",
        className: createClassName(componentClassName, 'close-icon'),
        onClick: _this.onClose
      })) : null);
    };
    _this.renderOptions = function (options, selectedOption, tabIndex) {
      var renderOption = function renderOption(option) {
        var isSelected = selectedOption && option[_this.valueKey] === selectedOption[_this.valueKey];
        var optionClassName = createClassName(componentClassName, 'option');
        var className3Use = classnames(optionClassName, {
          selected: isSelected
        });
        var curColor = _this.props.activeColor && isSelected ? _this.props.activeColor : null;
        return /*#__PURE__*/React.createElement("li", {
          key: option[_this.valueKey],
          className: className3Use,
          style: {
            color: curColor
          },
          onClick: function onClick() {
            _this.onSelect(option, tabIndex);
          }
        }, /*#__PURE__*/React.createElement("span", null, option[_this.textKey]), isSelected ? ( /*#__PURE__*/React.createElement(Icon, {
          name: "success",
          className: createClassName(componentClassName, 'selected-icon')
        })) : null);
      };
      return /*#__PURE__*/React.createElement("ul", {
        className: createClassName(componentClassName, 'options')
      }, options.length > 0 ? options.map(renderOption) : ( /*#__PURE__*/React.createElement("div", {
        className: createClassName(componentClassName, 'loading')
      }, /*#__PURE__*/React.createElement(Loading, {
        color: "#FED000"
      }))));
    };
    _this.renderTab = function (item, tabIndex) {
      var options = item.options,
        selectedOption = item.selectedOption;
      var title = selectedOption ? selectedOption[_this.textKey] : _this.props.placeholder;
      var tabClassName = createClassName(componentClassName, 'tab');
      var className3Use = classnames(tabClassName, {
        unselected: !selectedOption
      });
      return /*#__PURE__*/React.createElement(TabPane, {
        key: "tabpane",
        title: title,
        className: className3Use
      }, _this.renderOptions(options, selectedOption, tabIndex));
    };
    _this.renderTabs = function () {
      var tabsClassName = createClassName(componentClassName, 'tabs');
      return /*#__PURE__*/React.createElement(Tabs, {
        className: tabsClassName,
        value: _this.state.activeTab,
        animated: true,
        swipeable: true,
        swipeThreshold: 0,
        color: _this.props.activeColor,
        onChange: function onChange(index) {
          return _this.setState({
            activeTab: index
          });
        }
      }, _this.state.tabs.map(_this.renderTab));
    };
    _this.state = {
      tabs: [],
      activeTab: 0
    };
    return _this;
  }
  _createClass(Cascader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateTabs();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.options !== this.props.options || prevProps.defaultValue !== this.props.defaultValue) {
        this.updateTabs();
      }
    }
  }, {
    key: "textKey",
    get: function get() {
      var _a;
      return ((_a = this.props.fieldNames) === null || _a === void 0 ? void 0 : _a.text) || 'text';
    }
  }, {
    key: "valueKey",
    get: function get() {
      var _a;
      return ((_a = this.props.fieldNames) === null || _a === void 0 ? void 0 : _a.value) || 'value';
    }
  }, {
    key: "childrenKey",
    get: function get() {
      var _a;
      return ((_a = this.props.fieldNames) === null || _a === void 0 ? void 0 : _a.children) || 'children';
    }
  }, {
    key: "getSelectedOptionsByValue",
    value: function getSelectedOptionsByValue(options, value) {
      for (var i = 0; i < options.length; i++) {
        var option = options[i];
        if (option[this.valueKey] === value) {
          return [option];
        }
        if (option[this.childrenKey]) {
          var selectedOptions = this.getSelectedOptionsByValue(option[this.childrenKey], value);
          if (selectedOptions) {
            return [option].concat(_toConsumableArray(selectedOptions));
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var className2Use = classnames(componentClassName, className);
      return /*#__PURE__*/React.createElement("div", {
        className: className2Use
      }, this.renderHeader(), this.renderTabs());
    }
  }]);
  return Cascader;
}(React.PureComponent);
export { Cascader as default };
Cascader.propTypes = {
  title: PropTypes.string,
  fieldNames: PropTypes.object,
  placeholder: PropTypes.string,
  activeColor: PropTypes.string,
  lineColor: PropTypes.string,
  options: PropTypes.array,
  closeable: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};
Cascader.defaultProps = {
  options: [],
  closeable: true,
  placeholder: '请选择'
};