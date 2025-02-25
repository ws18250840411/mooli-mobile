"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("../utils");
var _utils2 = require("./lib/utils");
var _picker = _interopRequireDefault(require("../picker"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var currentYear = new Date().getFullYear();
var DatetimePicker = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(DatetimePicker, _React$PureComponent);
  var _super = _createSuper(DatetimePicker);
  function DatetimePicker(props) {
    var _this;
    _classCallCheck(this, DatetimePicker);
    _this = _super.call(this, props);
    _this.updateDateTime = function () {
      _this.updateColumnValue();
      _this.updateInnerValue();
    };
    _this.updateColumnValue = function () {
      var _this$props = _this.props,
        type = _this$props.type,
        formatter = _this$props.formatter,
        minDate = _this$props.minDate;
      var values;
      if (type === 'time') {
        var pair = _this.state.innerValue.split(':');
        if (formatter) {
          values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
        }
      } else {
        var value = _this.state.innerValue ? _this.state.innerValue : minDate;
        values = _this.originColumns.map(function (column) {
          switch (column.type) {
            case 'year':
              return formatter && formatter('year', "".concat(value.getFullYear()));
            case 'month':
              return formatter && formatter('month', (0, _utils2.padZero)(value.getMonth() + 1));
            case 'day':
              return formatter && formatter('day', (0, _utils2.padZero)(value.getDate()));
            case 'hour':
              return formatter && formatter('hour', (0, _utils2.padZero)(value.getHours()));
            case 'minute':
              return formatter && formatter('minute', (0, _utils2.padZero)(value.getMinutes()));
            default:
              return null;
          }
        });
      }
      if (_this.pickerRef.current) {
        _this.pickerRef.current.setValues(values);
      }
    };
    _this.updateInnerValue = function () {
      var type = _this.props.type;
      if (type === 'time') {
        var _this$getPicker$getIn = _this.getPicker().getIndexes(),
          _this$getPicker$getIn2 = _slicedToArray(_this$getPicker$getIn, 2),
          hourIndex = _this$getPicker$getIn2[0],
          minuteIndex = _this$getPicker$getIn2[1];
        var _this$originColumns = _slicedToArray(_this.originColumns, 2),
          hourColumn = _this$originColumns[0],
          minuteColumn = _this$originColumns[1];
        var hour = hourColumn.values[hourIndex] || hourColumn.values[0];
        var minute = minuteColumn.values[minuteIndex] || minuteColumn.values[0];
        _this.setState({
          innerValue: _this.formatValue("".concat(hour, ":").concat(minute))
        });
      } else {
        var indexes = _this.getPicker().getIndexes();
        var getValue = function getValue(type) {
          var index = 0;
          _this.originColumns.forEach(function (column, columnIndex) {
            if (type === column.type) {
              index = columnIndex;
            }
          });
          var values = _this.originColumns[index].values;
          return (0, _utils2.getTrueValue)(values[indexes[index]]);
        };
        var year;
        var month;
        var day;
        if (type === 'month-day') {
          year = (_this.state.innerValue ? _this.state.innerValue : _this.props.minDate).getFullYear();
          month = getValue('month');
          day = getValue('day');
        } else {
          year = getValue('year');
          month = getValue('month');
          day = type === 'year-month' ? 1 : getValue('day');
        }
        var maxDay = (0, _utils2.getMonthEndDay)(year, month);
        day = day > maxDay ? maxDay : day;
        var _hour = 0;
        var _minute = 0;
        if (type === 'datehour') {
          _hour = getValue('hour');
        }
        if (type === 'datetime') {
          _hour = getValue('hour');
          _minute = getValue('minute');
        }
        var value = new Date(year, month - 1, day, _hour, _minute);
        _this.setState({
          innerValue: _this.formatValue(value)
        });
      }
    };
    _this.getBoundary = function (type, value) {
      var boundary = _this.props["".concat(type, "Date")];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;
      if (type === 'max') {
        month = 12;
        date = (0, _utils2.getMonthEndDay)(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }
      return _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, "".concat(type, "Year"), year), "".concat(type, "Month"), month), "".concat(type, "Date"), date), "".concat(type, "Hour"), hour), "".concat(type, "Minute"), minute);
    };
    _this.formatValue = function (value) {
      var _this$props2 = _this.props,
        type = _this$props2.type,
        _this$props2$minMinut = _this$props2.minMinute,
        minMinute = _this$props2$minMinut === void 0 ? 0 : _this$props2$minMinut,
        _this$props2$minHour = _this$props2.minHour,
        minHour = _this$props2$minHour === void 0 ? 0 : _this$props2$minHour,
        _this$props2$maxHour = _this$props2.maxHour,
        maxHour = _this$props2$maxHour === void 0 ? 23 : _this$props2$maxHour,
        _this$props2$maxMinut = _this$props2.maxMinute,
        maxMinute = _this$props2$maxMinut === void 0 ? 59 : _this$props2$maxMinut;
      if (type === 'time') {
        if (!value) {
          value = "".concat((0, _utils2.padZero)(minHour), ":").concat((0, _utils2.padZero)(minMinute));
        }
        var _value$split = value.split(':'),
          _value$split2 = _slicedToArray(_value$split, 2),
          hour = _value$split2[0],
          minute = _value$split2[1];
        hour = (0, _utils2.padZero)((0, _utils2.range)(hour, minHour, maxHour));
        minute = (0, _utils2.padZero)((0, _utils2.range)(minute, minMinute, maxMinute));
        return "".concat(hour, ":").concat(minute);
      } else {
        if (!(0, _utils.isDate)(value)) {
          return null;
        }
        // @ts-ignore
        value = Math.max(value, _this.props.minDate.getTime());
        // @ts-ignore
        value = Math.min(value, _this.props.maxDate.getTime());
        return new Date(value);
      }
    };
    _this.onChange = function (picker) {
      var onChange = _this.props.onChange;
      _this.updateInnerValue();
      if (typeof onChange === 'function') {
        onChange(picker);
      }
    };
    _this.onConfirm = function () {
      var onConfirm = _this.props.onConfirm;
      if (typeof onConfirm === 'function') {
        onConfirm(_this.state.innerValue);
      }
    };
    _this.state = {
      innerValue: _this.formatValue(props.value)
    };
    _this.pickerRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(DatetimePicker, [{
    key: "ranges",
    get: function get() {
      if (this.props.type === 'time') {
        return [{
          type: 'hour',
          range: [Number(this.props.minHour), Number(this.props.maxHour)]
        }, {
          type: 'minute',
          range: [Number(this.props.minMinute), Number(this.props.maxMinute)]
        }];
      }
      var _this$getBoundary = this.getBoundary('max', this.state.innerValue ? this.state.innerValue : this.props.minDate),
        maxYear = _this$getBoundary.maxYear,
        maxDate = _this$getBoundary.maxDate,
        maxMonth = _this$getBoundary.maxMonth,
        maxHour = _this$getBoundary.maxHour,
        maxMinute = _this$getBoundary.maxMinute;
      var _this$getBoundary2 = this.getBoundary('min', this.state.innerValue ? this.state.innerValue : this.props.minDate),
        minYear = _this$getBoundary2.minYear,
        minDate = _this$getBoundary2.minDate,
        minMonth = _this$getBoundary2.minMonth,
        minHour = _this$getBoundary2.minHour,
        minMinute = _this$getBoundary2.minMinute;
      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];
      switch (this.props.type) {
        case 'date':
          result = result.slice(0, 3);
          break;
        case 'year-month':
          result = result.slice(0, 2);
          break;
        case 'month-day':
          result = result.slice(1, 3);
          break;
        case 'datehour':
          result = result.slice(0, 4);
          break;
      }
      if (this.props.columnsOrder) {
        var columnsOrder = this.props.columnsOrder.concat(
        // @ts-ignore
        result.map(function (column) {
          return column.type;
        }));
        result.sort(function (a, b) {
          return columnsOrder.indexOf(a.type) - columnsOrder.indexOf(b.type);
        });
      }
      return result;
    }
  }, {
    key: "originColumns",
    get: function get() {
      var _this2 = this;
      return this.ranges.map(function (_ref2) {
        var type = _ref2.type,
          rangeArr = _ref2.range;
        // @ts-ignore
        var values = (0, _utils2.times)(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = (0, _utils2.padZero)(rangeArr[0] + index);
          return value;
        });
        if (_this2.props.filter) {
          values = _this2.props.filter(type, values);
        }
        return {
          type: type,
          values: values
        };
      });
    }
  }, {
    key: "columns",
    get: function get() {
      var _this3 = this;
      return this.originColumns.map(function (column) {
        return {
          values: column.values.map(function (value) {
            return _this3.props.formatter(column.type, value);
          })
        };
      });
    }
  }, {
    key: "getPicker",
    value: function getPicker() {
      return this.pickerRef.current;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;
      setTimeout(function () {
        return _this4.updateDateTime();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this5 = this;
      if (!!this.props.value && prevProps.value !== this.props.value) {
        this.setState({
          innerValue: this.formatValue(this.props.value)
        }, function () {
          _this5.updateColumnValue();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        className = _a.className,
        onChange = _a.onChange,
        onConfirm = _a.onConfirm,
        rest = __rest(_a, ["className", "onChange", "onConfirm"]);
      var componentClassName = (0, _utils.createClassName)('date-picker');
      var className2Use = (0, _classnames.default)(componentClassName, className);
      return /*#__PURE__*/React.createElement(_picker.default, Object.assign({
        ref: this.pickerRef,
        className: className2Use,
        columns: this.columns,
        onChange: this.onChange,
        onConfirm: this.onConfirm
      }, rest));
    }
  }]);
  return DatetimePicker;
}(React.PureComponent);
DatetimePicker.propTypes = {
  className: _propTypes.default.string,
  style: _propTypes.default.object
};
DatetimePicker.defaultProps = {
  type: 'datetime',
  showToolbar: true,
  minDate: new Date(currentYear - 10, 0, 1),
  maxDate: new Date(currentYear + 10, 11, 31),
  minHour: 0,
  maxHour: 23,
  minMinute: 0,
  maxMinute: 59,
  formatter: function formatter(_type, value) {
    return value;
  }
};