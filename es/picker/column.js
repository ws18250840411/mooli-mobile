function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
import { Drag } from '../widgets/drag';
import { getElementTranslateY } from './lib/utils';
import { createClassName, range, isObject } from '../utils';
var DEFAULT_DURATION = 200;
var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 10;
var componentClassName = createClassName('picker-column');
export var PickerColumn = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(PickerColumn, _React$PureComponent);
  var _super = _createSuper(PickerColumn);
  function PickerColumn(props) {
    var _this;
    _classCallCheck(this, PickerColumn);
    _this = _super.call(this, props);
    _this.update = function () {
      _this.setOptions(_this.props.initialOptions);
    };
    _this.getValue = function () {
      return _this.state.options[_this.currentIndex];
    };
    _this.setValue = function (value) {
      var options = _this.state.options;
      for (var i = 0; i < options.length; i++) {
        if (_this.getOptionText(options[i]) === value) {
          return _this.setIndex(i);
        }
      }
    };
    _this.setOptions = function (options) {
      if (JSON.stringify(options) !== JSON.stringify(_this.state.options)) {
        _this.setState({
          options: _toConsumableArray(options)
        }, function () {
          _this.setIndex(_this.props.defaultIndex);
        });
      }
    };
    _this.isOptionDisabled = function (option) {
      return isObject(option) && option.disabled;
    };
    _this.setIndex = function (index, emitChange) {
      index = _this.adjustIndex(index) || 0;
      var offset = -index * _this.props.itemHeight;
      var trigger = function trigger() {
        if (index !== _this.currentIndex) {
          _this.currentIndex = index;
          if (emitChange && _this.props.onChange) {
            _this.props.onChange(index);
          }
        }
      };
      if (_this.moving && offset !== _this.state.offset) {
        _this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }
      _this.setState({
        offset: offset
      });
    };
    _this.momentum = function (distance, duration) {
      var speed = Math.abs(distance / duration);
      distance = _this.state.offset + speed / 0.003 * (distance < 0 ? -1 : 1);
      var index = _this.getIndexByOffset(distance);
      _this.duration = Number(_this.props.swipeDuration);
      _this.setIndex(index, true);
    };
    _this.stopMomentum = function () {
      _this.moving = false;
      _this.duration = 0;
      if (_this.transitionEndTrigger) {
        _this.transitionEndTrigger();
        _this.transitionEndTrigger = null;
      }
    };
    _this.getOptionText = function (option) {
      if (isObject(option) && _this.props.valueKey in option) {
        // @ts-ignore
        return option[_this.props.valueKey];
      }
      return option;
    };
    _this.genOptions = function () {
      var _this$state = _this.state,
        options = _this$state.options,
        offset = _this$state.offset;
      var itemHeight = _this.props.itemHeight;
      var optionStyle = {
        height: "".concat(itemHeight, "px")
      };
      return options.map(function (option, index) {
        var text = _this.getOptionText(option);
        var disabled = _this.isOptionDisabled(option);
        var currentIndex = Math.abs(offset / itemHeight);
        var itemClassName = createClassName(componentClassName, 'item');
        var className2Use = classnames(itemClassName, _defineProperty(_defineProperty({}, "".concat(itemClassName, "--selected"), index === currentIndex), "".concat(itemClassName, "--disabled"), disabled));
        return /*#__PURE__*/React.createElement("li", {
          key: index,
          className: className2Use,
          style: optionStyle,
          onClick: function onClick() {
            return _this.onClickItem(index);
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "mooli-ellipsis"
        }, text));
      });
    };
    _this.getIndexByOffset = function (offset) {
      return range(Math.round(-offset / _this.props.itemHeight), 0, _this.count - 1);
    };
    _this.onTouchStart = function () {
      var readonly = _this.props.readonly;
      if (readonly) return;
      if (_this.moving) {
        var translateY = getElementTranslateY(_this.wrapper.current);
        _this.setState({
          offset: Math.min(0, translateY - _this.baseOffset)
        });
        _this.startOffset = _this.state.offset;
      } else {
        _this.startOffset = _this.state.offset;
      }
      _this.duration = 0;
      _this.transitionEndTrigger = null;
      _this.touchStartTime = Date.now();
      _this.momentumOffset = _this.startOffset;
    };
    _this.onTouchMove = function (_event, position) {
      var _this$props = _this.props,
        readonly = _this$props.readonly,
        itemHeight = _this$props.itemHeight;
      if (readonly) return;
      _this.moving = true;
      _this.setState({
        offset: range(_this.startOffset + position.y, -(_this.count * itemHeight), itemHeight)
      });
      var now = Date.now();
      if (now - _this.touchStartTime > MOMENTUM_LIMIT_TIME) {
        _this.touchStartTime = now;
        _this.momentumOffset = _this.state.offset;
      }
    };
    _this.onTouchEnd = function () {
      var readonly = _this.props.readonly;
      if (readonly) return;
      var distance = _this.state.offset - _this.momentumOffset;
      var duration = Date.now() - _this.touchStartTime;
      var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;
      if (allowMomentum) {
        _this.momentum(distance, duration);
        return;
      }
      var index = _this.getIndexByOffset(_this.state.offset);
      _this.duration = DEFAULT_DURATION;
      _this.setIndex(index, true);
      setTimeout(function () {
        _this.moving = false;
      }, 0);
    };
    _this.onTransitionEnd = function () {
      _this.stopMomentum();
    };
    _this.onClickItem = function (index) {
      if (_this.moving || _this.props.readonly) {
        return;
      }
      _this.transitionEndTrigger = null;
      _this.duration = DEFAULT_DURATION;
      _this.setIndex(index, true);
    };
    _this.state = {
      offset: 0,
      options: []
    };
    _this.moving = false;
    _this.duration = 0;
    _this.startOffset = 0;
    _this.touchStartTime = 0;
    _this.momentumOffset = 0;
    _this.currentIndex = 0;
    _this.transitionEndTrigger = null;
    _this.wrapper = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(PickerColumn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onCollect) {
        this.props.onCollect(this);
      }
      this.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (JSON.stringify(prevProps) !== JSON.stringify(this.props) && JSON.stringify(this.props.initialOptions) !== JSON.stringify(this.state.options)) {
        this.update();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.onCollect) {
        this.props.onCollect(this, true);
      }
    }
  }, {
    key: "baseOffset",
    get: function get() {
      return this.props.itemHeight * (this.props.visibleItemCount - 1) / 2;
    }
  }, {
    key: "count",
    get: function get() {
      return this.state.options.length;
    }
  }, {
    key: "adjustIndex",
    value: function adjustIndex(index) {
      index = range(index, 0, this.count);
      for (var i = index; i < this.count; i++) {
        if (!this.isOptionDisabled(this.state.options[i])) return i;
      }
      for (var _i = index - 1; _i >= 0; _i--) {
        if (!this.isOptionDisabled(this.state.options[_i])) return _i;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        className = _this$props2.className,
        style = _this$props2.style;
      var offset = this.state.offset;
      var wrapperStyle = {
        transform: "translate3d(0, ".concat(offset + this.baseOffset, "px, 0)"),
        transitionDuration: "".concat(this.duration, "ms"),
        transitionProperty: this.duration ? 'all' : 'none'
      };
      var className2Use = classnames(componentClassName, className);
      return /*#__PURE__*/React.createElement(Drag, {
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd
      }, /*#__PURE__*/React.createElement("div", {
        className: className2Use
      }, /*#__PURE__*/React.createElement("ul", {
        ref: this.wrapper,
        style: Object.assign(Object.assign({}, style), wrapperStyle),
        className: createClassName(componentClassName, 'wrapper'),
        onTransitionEnd: this.onTransitionEnd
      }, this.genOptions())));
    }
  }]);
  return PickerColumn;
}(React.PureComponent);
PickerColumn.propTypes = {
  initialOptions: PropTypes.array,
  defaultIndex: PropTypes.number
};
PickerColumn.defaultProps = {
  initialOptions: [],
  defaultIndex: 0
};