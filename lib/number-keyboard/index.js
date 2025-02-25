"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _utils = require("../utils");
var _popup = _interopRequireDefault(require("../popup"));
var _key = _interopRequireDefault(require("./key"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var componentClassName = (0, _utils.createClassName)('number-keyboard');
var NumberKeyboard = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(NumberKeyboard, _React$PureComponent);
  var _super = _createSuper(NumberKeyboard);
  function NumberKeyboard() {
    var _this;
    _classCallCheck(this, NumberKeyboard);
    _this = _super.apply(this, arguments);
    _this.genCustomKeys = function () {
      var keys = _this.genBasicKeys();
      var extraKey = _this.props.extraKey;
      var extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];
      if (extraKeys.length === 1) {
        keys.push({
          text: 0,
          wider: true
        }, {
          text: extraKeys[0],
          type: 'extra'
        });
      } else if (extraKeys.length === 2) {
        keys.push({
          text: extraKeys[0],
          type: 'extra'
        }, {
          text: 0
        }, {
          text: extraKeys[1],
          type: 'extra'
        });
      }
      return keys;
    };
    _this.genDefaultKeys = function () {
      var _this$props = _this.props,
        extraKey = _this$props.extraKey,
        showDeleteButtonIcon = _this$props.showDeleteButtonIcon,
        deleteButtonText = _this$props.deleteButtonText;
      return [].concat(_toConsumableArray(_this.genBasicKeys()), [{
        text: extraKey || '',
        type: 'extra'
      }, {
        text: 0
      }, {
        text: deleteButtonText || '',
        type: showDeleteButtonIcon ? 'delete' : ''
      }]);
    };
    _this.genBasicKeys = function () {
      var keys = [];
      for (var i = 1; i <= 9; i++) {
        keys.push({
          text: i
        });
      }
      if (_this.props.randomKeyOrder) {
        if (_this.props.show || !_this.randomKeys) {
          _this.randomKeys = keys.sort(function () {
            return Math.random() > 0.5 ? 1 : -1;
          });
        }
        return _this.randomKeys;
      }
      return keys;
    };
    _this.onClose = function () {
      var _this$props2 = _this.props,
        onClose = _this$props2.onClose,
        blurOnClose = _this$props2.blurOnClose;
      onClose && onClose();
      blurOnClose && _this.onBlur();
    };
    _this.onBlur = function () {
      var _this$props3 = _this.props,
        onBlur = _this$props3.onBlur,
        show = _this$props3.show;
      if (show) {
        onBlur && onBlur();
      }
    };
    _this.onPress = function (_ref) {
      var text = _ref.text,
        type = _ref.type;
      if (type === 'extra' && text === '') {
        _this.onBlur();
        return;
      }
      var _this$props4 = _this.props,
        value = _this$props4.value,
        maxlength = _this$props4.maxlength,
        onInput = _this$props4.onInput,
        onChange = _this$props4.onChange,
        onDelete = _this$props4.onDelete;
      if (type === 'delete') {
        onDelete && onDelete();
        onChange && onChange(value.slice(0, value.length - 1));
      } else if (type === 'close') {
        _this.onClose();
      } else if (value.length < maxlength) {
        onInput && onInput(text);
        onChange && onChange(value + text);
      }
    };
    _this.onAnimationEnd = function () {
      var _this$props5 = _this.props,
        show = _this$props5.show,
        onShow = _this$props5.onShow,
        onHide = _this$props5.onHide;
      if (show) {
        onShow && onShow();
      } else {
        onHide && onHide();
      }
    };
    _this.renderTitle = function () {
      var _this$props6 = _this.props,
        title = _this$props6.title,
        titleLeft = _this$props6.titleLeft,
        theme = _this$props6.theme,
        closeButtonText = _this$props6.closeButtonText,
        onTitleLeftClick = _this$props6.onTitleLeftClick;
      var showClose = closeButtonText && theme === 'default';
      var showTitle = title || showClose || titleLeft;
      if (!showTitle) return;
      var headerClassName = (0, _utils.createClassName)(componentClassName, 'header');
      return /*#__PURE__*/React.createElement("div", {
        className: headerClassName
      }, titleLeft && ( /*#__PURE__*/React.createElement("span", {
        className: (0, _utils.createClassName)(headerClassName, 'title-left'),
        onClick: function onClick() {
          return onTitleLeftClick && onTitleLeftClick();
        }
      }, titleLeft)), title && ( /*#__PURE__*/React.createElement("h2", {
        className: (0, _utils.createClassName)(headerClassName, 'title')
      }, title)), showClose && ( /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: (0, _utils.createClassName)(componentClassName, 'close'),
        onClick: _this.onClose
      }, closeButtonText)));
    };
    _this.renderContent = function () {
      var contentClassName = (0, _utils.createClassName)(componentClassName, 'body');
      return /*#__PURE__*/React.createElement("div", {
        className: contentClassName
      }, _this.renderKeys(), _this.renderSidebar());
    };
    _this.renderKeys = function () {
      var keysClassName = (0, _utils.createClassName)(componentClassName, 'keys');
      return /*#__PURE__*/React.createElement("div", {
        className: keysClassName
      }, _this.keys.map(function (key, i) {
        return /*#__PURE__*/React.createElement(_key.default, {
          key: i,
          text: key.text,
          type: key.type,
          wider: key.wider,
          color: key.color,
          onPress: _this.onPress
        });
      }));
    };
    _this.renderSidebar = function () {
      var _this$props7 = _this.props,
        theme = _this$props7.theme,
        showDeleteButtonIcon = _this$props7.showDeleteButtonIcon,
        deleteButtonText = _this$props7.deleteButtonText,
        closeButtonText = _this$props7.closeButtonText;
      if (theme === 'custom') {
        var contentClassName = (0, _utils.createClassName)(componentClassName, 'sidebar');
        return /*#__PURE__*/React.createElement("div", {
          className: contentClassName
        }, showDeleteButtonIcon && ( /*#__PURE__*/React.createElement(_key.default, {
          large: true,
          text: deleteButtonText,
          type: "delete",
          onPress: _this.onPress
        })), /*#__PURE__*/React.createElement(_key.default, {
          large: true,
          text: closeButtonText,
          type: "close",
          color: "blue",
          onPress: _this.onPress
        }));
      }
      return null;
    };
    return _this;
  }
  _createClass(NumberKeyboard, [{
    key: "keys",
    get: function get() {
      if (this.props.theme === 'custom') {
        return this.genCustomKeys();
      }
      return this.genDefaultKeys();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props8 = this.props,
        show = _this$props8.show,
        title = _this$props8.title,
        className = _this$props8.className,
        theme = _this$props8.theme,
        closeButtonText = _this$props8.closeButtonText,
        titleLeft = _this$props8.titleLeft,
        zIndex = _this$props8.zIndex,
        hideOnClickOutside = _this$props8.hideOnClickOutside;
      var showTitle = title || closeButtonText && theme === 'default' || titleLeft;
      var className2Use = (0, _classnames2.default)(componentClassName, className, _defineProperty({}, "".concat(componentClassName, "--with-title"), showTitle));
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_popup.default, {
        visible: show,
        maskStyle: {
          backgroundColor: 'rgba(0,0,0,0)'
        },
        onClickMask: function onClickMask() {
          if (hideOnClickOutside) {
            _this2.onBlur();
          }
        },
        position: "bottom",
        className: className2Use,
        onTouchStart: function onTouchStart(e) {
          return e.stopPropagation();
        },
        onAnimationEnd: this.onAnimationEnd,
        style: {
          zIndex: zIndex
        }
      }, this.renderTitle(), this.renderContent()));
    }
  }]);
  return NumberKeyboard;
}(React.PureComponent);
NumberKeyboard.defaultProps = {
  value: '',
  theme: 'default',
  maxlength: Number.MAX_VALUE,
  showDeleteButtonIcon: true,
  hideOnClickOutside: true,
  safeAreaInsetBottom: true,
  closeButtonText: '',
  zIndex: 100
};