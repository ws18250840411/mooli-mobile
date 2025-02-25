function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
import { createClassName, inBrowser, raf, cancelRaf } from '../utils';
import { isSameSecond, parseTimeData, parseFormat } from './lib/utils';
var CountDown = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(CountDown, _React$PureComponent);
  var _super = _createSuper(CountDown);
  function CountDown(props) {
    var _this;
    _classCallCheck(this, CountDown);
    _this = _super.call(this, props);
    _this.start = function () {
      if (_this.counting) {
        return;
      }
      _this.counting = true;
      _this.endTime = Date.now() + _this.state.remain;
      _this.tick();
    };
    _this.pause = function () {
      _this.counting = false;
      cancelRaf(_this.rafId);
    };
    _this.reset = function () {
      var _this$props = _this.props,
        time = _this$props.time,
        autoStart = _this$props.autoStart;
      _this.pause();
      _this.setState({
        remain: time
      }, function () {
        if (autoStart) {
          _this.start();
        }
      });
    };
    _this.tick = function () {
      if (!inBrowser) return;
      if (_this.props.millisecond) {
        _this.microTick();
      } else {
        _this.macroTick();
      }
    };
    _this.microTick = function () {
      _this.rafId = raf(function () {
        if (!_this.counting) {
          return;
        }
        var remain = _this.getRemain();
        _this.setRemain(remain);
        if (remain > 0) {
          _this.microTick();
        }
      });
    };
    _this.macroTick = function () {
      _this.rafId = raf(function () {
        if (!_this.counting) {
          return;
        }
        var remain = _this.getRemain();
        if (!isSameSecond(remain, _this.state.remain) || remain === 0) {
          _this.setRemain(remain);
        }
        if (remain > 0) {
          _this.macroTick();
        }
      });
    };
    _this.state = {
      remain: 0
    };
    return _this;
  }
  _createClass(CountDown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.reset();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.pause();
    }
  }, {
    key: "timeData",
    get: function get() {
      return parseTimeData(this.state.remain);
    }
  }, {
    key: "getRemain",
    value: function getRemain() {
      return Math.max(this.endTime - Date.now(), 0);
    }
  }, {
    key: "setRemain",
    value: function setRemain(remain) {
      var _this2 = this;
      var _this$props2 = this.props,
        onChange = _this$props2.onChange,
        onFinish = _this$props2.onFinish;
      this.setState({
        remain: remain
      }, function () {
        if (typeof onChange === 'function') onChange(_this2.timeData);
        if (remain === 0) {
          _this2.pause();
          if (typeof onFinish === 'function') onFinish();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
        format = _this$props3.format,
        className = _this$props3.className,
        children = _this$props3.children;
      var componentClassName = createClassName('count-down');
      var className2Use = classnames(componentClassName, className);
      var formattedTime = parseFormat(format, this.timeData);
      return /*#__PURE__*/React.createElement("div", {
        className: className2Use
      }, typeof children === 'function' ? children(this.timeData) : formattedTime);
    }
  }]);
  return CountDown;
}(React.PureComponent);
export { CountDown as default };
CountDown.propTypes = {
  millisecond: PropTypes.bool,
  time: PropTypes.number,
  format: PropTypes.string
};
CountDown.defaultProps = {
  time: 0,
  format: 'HH:mm:ss',
  autoStart: true
};