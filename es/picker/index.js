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
import Loading from '../loading';
import { PickerColumn } from './column';
import { createClassName, isObject, unitToPx } from '../utils';
var DEFAULT_ITEM_HEIGHT = 44;
var componentClassName = createClassName('picker');
var Picker = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Picker, _React$PureComponent);
  var _super = _createSuper(Picker);
  function Picker(props) {
    var _this;
    _classCallCheck(this, Picker);
    _this = _super.call(this, props);
    _this.setCollect = function (instance, destroy) {
      if (destroy) {
        _this.collect.splice(_this.collect.indexOf(instance), 1);
      } else {
        _this.collect.push(instance);
      }
    };
    _this.format = function () {
      var columns = _this.props.columns;
      var curColumns;
      if (_this.dataType === 'text') {
        curColumns = [{
          values: columns
        }];
      } else if (_this.dataType === 'cascade') {
        curColumns = _this.formatCascade();
      } else {
        curColumns = columns;
      }
      return curColumns;
    };
    _this.formatCascade = function () {
      var _a;
      var formatted = [];
      var cursor = {
        children: _this.props.columns
      };
      while (cursor && cursor.children) {
        var _cursor = cursor,
          children = _cursor.children;
        var defaultIndex = (_a = cursor.defaultIndex) !== null && _a !== void 0 ? _a : Number(_this.props.defaultIndex);
        while (children[defaultIndex] && children[defaultIndex].disabled) {
          if (defaultIndex < children.length - 1) {
            defaultIndex++;
          } else {
            defaultIndex = 0;
            break;
          }
        }
        formatted.push({
          values: cursor.children,
          className: cursor.className,
          defaultIndex: defaultIndex
        });
        cursor = children[defaultIndex];
      }
      return formatted;
    };
    _this.getColumnValue = function (index) {
      var column = _this.getColumn(index);
      return column && column.getValue();
    };
    _this.getColumnValues = function (index) {
      return (_this.collect[index] || {}).options;
    };
    _this.getColumnIndex = function (columnIndex) {
      return (_this.getColumn(columnIndex) || {}).currentIndex;
    };
    _this.getValues = function () {
      return _this.collect.map(function (child) {
        return child.getValue();
      });
    };
    _this.getIndexes = function () {
      return _this.collect.map(function (child) {
        return child.currentIndex;
      });
    };
    _this.setValues = function (values) {
      values.forEach(function (value, index) {
        _this.setColumnValue(index, value);
      });
    };
    _this.setIndexes = function (indexes) {
      indexes.forEach(function (optionIndex, columnIndex) {
        _this.setColumnIndex(columnIndex, optionIndex);
      });
    };
    _this.setColumnValue = function (index, value) {
      var column = _this.getColumn(index);
      if (column) {
        column.setValue(value);
        if (_this.dataType === 'cascade') {
          _this.onCascadeChange(index);
        }
      }
    };
    _this.setColumnIndex = function (columnIndex, optionIndex) {
      var column = _this.getColumn(columnIndex);
      if (column) {
        column.setIndex(optionIndex);
        if (_this.dataType === 'cascade') {
          _this.onCascadeChange(columnIndex);
        }
      }
    };
    _this.onCascadeChange = function (columnIndex) {
      var cursor = {
        children: _this.props.columns
      };
      var indexes = _this.getIndexes();
      for (var i = 0; i <= columnIndex; i++) {
        cursor = cursor.children[indexes[i]];
      }
      while (cursor && cursor.children) {
        columnIndex++;
        _this.setColumnValues(columnIndex, cursor.children);
        cursor = cursor.children[cursor.defaultIndex || 0];
      }
    };
    _this.change = function (columnIndex) {
      var _this$props = _this.props,
        _this$props$valueKey = _this$props.valueKey,
        valueKey = _this$props$valueKey === void 0 ? 'text' : _this$props$valueKey,
        onChange = _this$props.onChange;
      // 联动
      if (_this.dataType === 'cascade') {
        _this.onCascadeChange(columnIndex);
      }
      var values = _this.getValues();
      var colIndex = columnIndex;
      if (_this.dataType === 'cascade') {
        values = values.map(function (item) {
          return item[valueKey];
        });
      } else if (_this.dataType === 'text') {
        values = _this.getColumnValue(0);
        if (isObject(values)) {
          values = JSON.stringify(values);
        }
        colIndex = _this.getColumnIndex(0);
      }
      onChange && onChange(_assertThisInitialized(_this), values, colIndex);
    };
    _this.confirm = function () {
      _this.collect.forEach(function (child) {
        return child.stopMomentum();
      });
      _this.emit('onConfirm');
    };
    _this.cancel = function () {
      _this.emit('onCancel');
    };
    _this.emit = function (event) {
      var _this$props$valueKey2 = _this.props.valueKey,
        valueKey = _this$props$valueKey2 === void 0 ? 'text' : _this$props$valueKey2;
      var values = _this.getValues();
      var colIndex = _this.getIndexes();
      if (_this.dataType === 'text') {
        values = _this.getColumnValue(0);
        if (isObject(values)) {
          values = JSON.stringify(values);
        }
        colIndex = _this.getColumnIndex(0);
      } else if (_this.dataType === 'cascade') {
        values = values.map(function (item) {
          return item[valueKey];
        });
      }
      // @ts-ignore
      _this.props[event] && _this.props[event](values, colIndex);
    };
    _this.genLoading = function () {
      if (_this.props.loading) {
        return /*#__PURE__*/React.createElement(Loading, {
          className: createClassName(componentClassName, 'loading')
        });
      }
      return null;
    };
    _this.genTitle = function () {
      var title = _this.props.title;
      if (title) {
        if ( /*#__PURE__*/React.isValidElement(title)) return title;
        var titleClassName = createClassName(componentClassName, 'title');
        var className3Use = classnames(titleClassName, 'mooli-ellipsis');
        return /*#__PURE__*/React.createElement("div", {
          key: "picker-title",
          className: className3Use
        }, title);
      }
      return null;
    };
    _this.genCancel = function () {
      var _this$props2 = _this.props,
        cancel = _this$props2.cancel,
        cancelButtonText = _this$props2.cancelButtonText;
      if (cancel || cancelButtonText) {
        return /*#__PURE__*/React.createElement("button", {
          key: "picker-cancel",
          type: "button",
          className: createClassName(componentClassName, 'cancel'),
          onClick: _this.cancel
        }, cancel || cancelButtonText);
      }
      return null;
    };
    _this.genConfirm = function () {
      var _this$props3 = _this.props,
        confirm = _this$props3.confirm,
        confirmButtonText = _this$props3.confirmButtonText;
      if (confirm || confirmButtonText) {
        return /*#__PURE__*/React.createElement("button", {
          key: "picker-confirm",
          type: "button",
          className: createClassName(componentClassName, 'confirm'),
          onClick: _this.confirm
        }, confirm || confirmButtonText);
      }
      return null;
    };
    _this.genToolbar = function () {
      var _this$props4 = _this.props,
        showToolbar = _this$props4.showToolbar,
        children = _this$props4.children;
      if (showToolbar) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          className: createClassName(componentClassName, 'toolbar')
        }, children || [_this.genCancel(), _this.genTitle(), _this.genConfirm()]), _this.genDescription());
      }
      return null;
    };
    _this.genDescription = function () {
      var description = _this.props.description;
      if (description) {
        return /*#__PURE__*/React.createElement("div", {
          className: createClassName(componentClassName, 'description')
        }, description);
      }
      return null;
    };
    _this.genColumns = function () {
      var _this$props$visibleIt = _this.props.visibleItemCount,
        visibleItemCount = _this$props$visibleIt === void 0 ? 6 : _this$props$visibleIt;
      var wrapHeight = _this.itemPxHeight * visibleItemCount;
      var frameStyle = {
        height: "".concat(_this.itemPxHeight, "px")
      };
      var columnsStyle = {
        height: "".concat(wrapHeight, "px")
      };
      var maskStyle = {
        backgroundSize: "100% ".concat((wrapHeight - _this.itemPxHeight) / 2, "px")
      };
      return /*#__PURE__*/React.createElement("div", {
        className: createClassName(componentClassName, 'columns'),
        style: columnsStyle
      }, _this.genColumnItems(), /*#__PURE__*/React.createElement("div", {
        className: createClassName(componentClassName, 'mask'),
        style: maskStyle
      }), /*#__PURE__*/React.createElement("div", {
        className: classnames(createClassName(componentClassName, 'frame'), 'mooli-hairline-unset--top-bottom'),
        style: frameStyle
      }));
    };
    _this.genColumnItems = function () {
      var _this$props5 = _this.props,
        readonly = _this$props5.readonly,
        _this$props5$valueKey = _this$props5.valueKey,
        valueKey = _this$props5$valueKey === void 0 ? 'text' : _this$props5$valueKey,
        allowHtml = _this$props5.allowHtml,
        defaultIndex = _this$props5.defaultIndex,
        _this$props5$swipeDur = _this$props5.swipeDuration,
        swipeDuration = _this$props5$swipeDur === void 0 ? 1000 : _this$props5$swipeDur,
        _this$props5$visibleI = _this$props5.visibleItemCount,
        visibleItemCount = _this$props5$visibleI === void 0 ? 6 : _this$props5$visibleI;
      var formattedColumns = _this.format();
      return formattedColumns.map(function (item, columnIndex) {
        var _a;
        return /*#__PURE__*/React.createElement(PickerColumn, {
          key: columnIndex,
          readonly: readonly,
          valueKey: valueKey,
          allowHtml: allowHtml,
          swipeDuration: swipeDuration,
          visibleItemCount: visibleItemCount,
          initialOptions: item.values,
          defaultIndex: (_a = item.defaultIndex) !== null && _a !== void 0 ? _a : Number(defaultIndex),
          itemHeight: _this.itemPxHeight,
          onCollect: function onCollect(ins, des) {
            return _this.setCollect(ins, des);
          },
          onChange: function onChange() {
            _this.change(columnIndex);
          }
        });
      });
    };
    _this.collect = [];
    return _this;
  }
  _createClass(Picker, [{
    key: "itemPxHeight",
    get: function get() {
      var itemHeight = this.props.itemHeight;
      return itemHeight ? unitToPx(itemHeight) : DEFAULT_ITEM_HEIGHT;
    }
  }, {
    key: "dataType",
    get: function get() {
      var _this$props$columns = this.props.columns,
        columns = _this$props$columns === void 0 ? [] : _this$props$columns;
      var firstColumn = columns[0] || {};
      if (firstColumn.children) {
        return 'cascade';
      }
      if (firstColumn.values) {
        return 'object';
      }
      return 'text';
    }
  }, {
    key: "getColumn",
    value: function getColumn(index) {
      return this.collect[index];
    }
  }, {
    key: "setColumnValues",
    value: function setColumnValues(index, options) {
      var column = this.collect[index];
      if (column) {
        column.setOptions(options);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        toolbarPosition = _this$props6.toolbarPosition,
        columnsTop = _this$props6.columnsTop,
        columnsBottom = _this$props6.columnsBottom,
        className = _this$props6.className;
      var componentClassName = createClassName('picker');
      var className2Use = classnames(componentClassName, className);
      return /*#__PURE__*/React.createElement("div", {
        className: className2Use
      }, toolbarPosition === 'top' && this.genToolbar(), this.genLoading(), typeof columnsTop === 'function' ? columnsTop() : columnsTop, this.genColumns(), typeof columnsBottom === 'function' ? columnsBottom() : columnsBottom, toolbarPosition === 'bottom' && this.genToolbar());
    }
  }]);
  return Picker;
}(React.PureComponent);
export { Picker as default };
Picker.propTypes = {
  readonly: PropTypes.bool,
  defaultIndex: PropTypes.number,
  columns: PropTypes.array,
  toolbarPosition: PropTypes.string,
  valueKey: PropTypes.string
};
Picker.defaultProps = {
  defaultIndex: 0,
  columns: [],
  allowHtml: true,
  visibleItemCount: 6,
  swipeDuration: 1000,
  toolbarPosition: 'top',
  valueKey: 'text',
  cancelButtonText: '取消',
  confirmButtonText: '确认'
};