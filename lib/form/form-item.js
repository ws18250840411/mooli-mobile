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
var _formContext = _interopRequireDefault(require("./lib/formContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
var FormItem = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(FormItem, _React$PureComponent);
  var _super = _createSuper(FormItem);
  function FormItem(props, context) {
    var _this;
    _classCallCheck(this, FormItem);
    _this = _super.call(this, props, context);
    _this.handleChange = function (value, callback) {
      _this.setValue(value, function () {
        callback && callback();
        _this.triggerValidate('change');
      });
    };
    _this.handleFocus = function (callback) {
      callback && callback();
      _this.cleanError();
    };
    _this.handleBlur = function (callback) {
      callback && callback();
      _this.triggerValidate('blur');
    };
    _this.curRef = /*#__PURE__*/React.createRef();
    return _this;
  }
  _createClass(FormItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var form = this.getForm();
      form.addField(this);
      if (this.props.initialValue) {
        this.setValue(this.props.initialValue);
        this.validateValue();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.initialValue !== this.props.initialValue) {
        this.setValue(this.props.initialValue);
        this.validateValue();
      }
    }
  }, {
    key: "validateValue",
    value: function validateValue() {
      var _this$props = this.props,
        rules = _this$props.rules,
        name = _this$props.name;
      if (rules && rules.length > 0) {
        var required = rules[0].required;
        if (required) {
          var form = this.getForm();
          return form.validate(name);
        }
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var form = this.getForm();
      var name = this.props.name;
      return form.getValue(name);
    }
  }, {
    key: "setValue",
    value: function setValue(value, callback) {
      var form = this.getForm();
      var name = this.props.name;
      form.setValue(name, value, callback);
    }
  }, {
    key: "getForm",
    value: function getForm() {
      return this.context.form;
    }
  }, {
    key: "getFormItemContext",
    value: function getFormItemContext() {
      return {
        FormItem: this
      };
    }
  }, {
    key: "getFormProp",
    value: function getFormProp(prop, defaultValue) {
      var form = this.getForm();
      var formProps = form.props;
      return prop in formProps ? formProps[prop] : defaultValue;
    }
  }, {
    key: "getProp",
    value: function getProp(prop, defaultValue) {
      var form = this.getForm();
      var formProps = form.props;
      var props = this.props;
      return prop in props ? props[prop] : prop in formProps ? formProps[prop] : defaultValue;
    }
  }, {
    key: "cleanError",
    value: function cleanError() {
      var form = this.getForm();
      var name = this.props.name;
      return form.cleanError(name);
    }
  }, {
    key: "hasError",
    value: function hasError() {
      var form = this.getForm();
      var name = this.props.name;
      return form.hasError(name);
    }
  }, {
    key: "getError",
    value: function getError() {
      var form = this.getForm();
      var name = this.props.name;
      return form.getError(name);
    }
  }, {
    key: "setError",
    value: function setError(message) {
      var form = this.getForm();
      var name = this.props.name;
      return form.setError(name, message);
    }
  }, {
    key: "triggerValidate",
    value: function triggerValidate(trigger) {
      var defaultTrigger = this.getProp('validateTrigger') === trigger;
      var rules = this.props.rules;
      if (!rules) return;
      var curRules = rules.filter(function (rule) {
        if (rule.trigger) {
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1;
          } else {
            return rule.trigger === trigger;
          }
        }
        return defaultTrigger;
      });
      if (curRules.length) {
        this.validate(curRules);
      }
    }
  }, {
    key: "validate",
    value: function validate(rules) {
      var form = this.getForm();
      var name = this.props.name;
      return form.validateField(name, rules);
    }
  }, {
    key: "otherValidate",
    value: function otherValidate() {
      var form = this.getForm();
      return form.otherValidateValues();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _a = this.props,
        initialValue = _a.initialValue,
        disableValidator = _a.disableValidator,
        style = _a.style,
        className = _a.className,
        children = _a.children,
        _onChange = _a.onChange,
        _onFocus = _a.onFocus,
        _onBlur = _a.onBlur,
        rest = __rest(_a, ["initialValue", "disableValidator", "style", "className", "children", "onChange", "onFocus", "onBlur"]);
      var componentClassName = (0, _utils.createClassName)('form-item');
      var className2Use = (0, _classnames.default)(componentClassName, className);
      var hasError = this.hasError();
      return /*#__PURE__*/React.createElement("div", {
        ref: this.curRef,
        style: style,
        className: className2Use
      }, /*#__PURE__*/React.cloneElement(React.Children.only(children), Object.assign({
        value: this.getValue(),
        error: hasError,
        errorMessage: this.getError(),
        onChange: function onChange(value, e) {
          _this2.handleChange(value, function () {
            _onChange && _onChange(value, e);
          });
        },
        onFocus: function onFocus(e) {
          _this2.handleFocus(function () {
            _onFocus && _onFocus(e);
          });
        },
        onBlur: function onBlur(e) {
          _this2.handleBlur(function () {
            _onBlur && _onBlur(e);
          });
        }
      }, rest)));
    }
  }]);
  return FormItem;
}(React.PureComponent);
FormItem.contextType = _formContext.default;
FormItem.propTypes = {
  name: _propTypes.default.string
};
FormItem.defaultProps = {
  disableValidator: false
};