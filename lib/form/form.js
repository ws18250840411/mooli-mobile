"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var React = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
var _formContext = _interopRequireDefault(require("./lib/formContext"));
var _utils2 = require("./lib/utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
var Form = exports.default = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Form, _React$PureComponent);
  var _super = _createSuper(Form);
  function Form(props, context) {
    var _this;
    _classCallCheck(this, Form);
    _this = _super.call(this, props, context);
    _this.fields = [];
    _this.handleSubmit = function (e) {
      e.preventDefault();
      _this.submit();
    };
    _this.state = {
      formError: {},
      validatingFields: {},
      formValue: {}
    };
    _this.validatingValues = {};
    return _this;
  }
  _createClass(Form, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var oldNames = this.getNameByChildren(prevProps.children);
      var newNames = this.getNameByChildren(this.props.children);
      if (oldNames.length !== newNames.length && newNames.length < oldNames.length) {
        var curNames = oldNames.filter(function (item) {
          return newNames.indexOf(item) === -1;
        });
        this.removeFields(curNames);
        this.otherValidateValues();
      } else if (oldNames.sort().toString() !== newNames.sort().toString()) {
        this.otherValidateValues();
      }
    }
  }, {
    key: "getNameByChildren",
    value: function getNameByChildren(children) {
      var _this2 = this;
      return React.Children.map(children, function (child) {
        if (child && child.props) {
          if (child.props.name) {
            return child.props.name;
          } else if (child.props.children) {
            return _this2.getNameByChildren(child.props.children);
          }
        }
      });
    }
  }, {
    key: "getFormContext",
    value: function getFormContext() {
      return {
        form: this
      };
    }
  }, {
    key: "getFormValue",
    value: function getFormValue() {
      return this.state.formValue;
    }
  }, {
    key: "getValue",
    value: function getValue(name) {
      var formValue = this.state.formValue;
      return formValue[name];
    }
  }, {
    key: "getFieldByName",
    value: function getFieldByName(name) {
      var fields = this.fields;
      for (var i = 0; i < fields.length; i++) {
        if (name === fields[i].props.name) {
          return fields[i];
        }
      }
      return null;
    }
  }, {
    key: "getFieldByNames",
    value: function getFieldByNames(names) {
      if (names) {
        return this.fields.filter(function (field) {
          return names.indexOf(field.props.name) !== -1;
        });
      }
      return this.fields;
    }
  }, {
    key: "getValues",
    value: function getValues() {
      return this.state.formValue;
    }
  }, {
    key: "setValue",
    value: function setValue(name, value, cb) {
      this.setValues(_defineProperty({}, name, value), cb);
    }
  }, {
    key: "setValues",
    value: function setValues() {
      var _this3 = this;
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var cb = arguments.length > 1 ? arguments[1] : undefined;
      var formValue = this.state.formValue;
      var nextFormValue = formValue;
      Object.keys(obj).forEach(function (name) {
        var value = obj[name];
        nextFormValue[name] = value;
        _this3.setStateByName(name, value, 'formValue');
      });
      if (cb) {
        cb(nextFormValue);
      }
    }
  }, {
    key: "addField",
    value: function addField(field) {
      this.fields.push(field);
    }
  }, {
    key: "removeField",
    value: function removeField(field) {
      if (field) {
        var index = this.fields.indexOf(field);
        if (index !== -1) {
          var name = field.props.name;
          this.setStateByName(name, false, 'validatingFields');
          this.setStateByName(name, '', 'formError');
          this.remoteStateByName(name, 'formValue');
          this.fields.splice(index, 1);
        }
      }
    }
  }, {
    key: "removeFieldByName",
    value: function removeFieldByName(name) {
      var field = this.getFieldByName(name);
      if (field) {
        this.removeField(field);
      }
    }
  }, {
    key: "removeFields",
    value: function removeFields(names) {
      if (Array.isArray(names)) {
        for (var key in names) {
          if (Object.prototype.hasOwnProperty.call(names, key)) {
            var name = names[key];
            this.removeFieldByName(name);
          }
        }
      } else {
        this.removeFieldByName(names);
      }
    }
  }, {
    key: "setStateByName",
    value: function setStateByName(key, value) {
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'formError';
      // @ts-ignore
      var attr = this.state[name];
      var objs = {};
      // @ts-ignore
      objs[name] = Object.assign(Object.assign({}, attr), _defineProperty({}, key, value));
      this.setState(objs);
    }
  }, {
    key: "remoteStateByName",
    value: function remoteStateByName(key) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'formError';
      var attr = this.state[name];
      delete attr[key];
      var objs = {};
      objs[name] = Object.assign({}, attr);
      if (this.validatingValues[key]) {
        delete this.validatingValues[key];
      }
      this.setState(objs);
    }
  }, {
    key: "hasError",
    value: function hasError(name) {
      if (this.isDisableValidatorField(name)) {
        return false;
      }
      var validatingFields = this.state.validatingFields;
      return validatingFields[name];
    }
  }, {
    key: "getError",
    value: function getError(name) {
      if (this.isDisableValidatorField(name)) {
        return null;
      }
      var formError = this.state.formError;
      return formError[name];
    }
  }, {
    key: "cleanError",
    value: function cleanError(name) {
      this.resetValidation(name);
    }
  }, {
    key: "setError",
    value: function setError(name, message) {
      if (this.isDisableValidatorField(name)) {
        return;
      }
      var formError = this.state.formError;
      this.setState({
        formError: Object.assign(Object.assign({}, formError), _defineProperty({}, name, message))
      });
    }
  }, {
    key: "cleanErrors",
    value: function cleanErrors() {
      this.setState({
        formError: Object.create(null)
      });
    }
  }, {
    key: "setErrors",
    value: function setErrors(errors) {
      var formError = this.state.formError;
      this.setState({
        formError: Object.assign(Object.assign({}, formError), errors)
      });
    }
  }, {
    key: "isDisableValidatorField",
    value: function isDisableValidatorField(name) {
      var field = this.getFieldByName(name);
      if (!field) return true;
      return field.getProp('disableValidator', false);
    }
  }, {
    key: "isFieldValidating",
    value: function isFieldValidating(name) {
      if (this.isDisableValidatorField(name)) {
        return false;
      }
      var validatingFields = this.state.validatingFields;
      return !!validatingFields[name];
    }
  }, {
    key: "getFieldsByNames",
    value: function getFieldsByNames(names) {
      if (names) {
        return this.fields.filter(function (field) {
          return names.indexOf(field.props.name) !== -1;
        });
      }
      return this.fields;
    }
  }, {
    key: "getRuleMessage",
    value: function getRuleMessage(value, rule) {
      var message = rule.message;
      if ((0, _utils2.isFunction)(message)) {
        return message(value, rule);
      }
      return message;
    }
  }, {
    key: "getValidatingFields",
    value: function getValidatingFields(name) {
      var validatingFields = this.state.validatingFields;
      return validatingFields[name] || false;
    }
  }, {
    key: "getValidatingOptional",
    value: function getValidatingOptional(name) {
      return this.validatingValues && this.validatingValues[name] && this.validatingValues[name].optional || false;
    }
  }, {
    key: "getMessageFields",
    value: function getMessageFields(name) {
      var formError = this.state.formError;
      return formError[name] || null;
    }
  }, {
    key: "resetValidation",
    value: function resetValidation(name) {
      var isValidate = this.getValidatingFields(name);
      if (isValidate) {
        this.setStateByName(name, false, 'validatingFields');
        this.setStateByName(name, '', 'formError');
      }
    }
  }, {
    key: "scrollToField",
    value: function scrollToField(name, options) {
      this.fields.some(function (item) {
        if (item.props.name === name) {
          if (item.curRef.current) {
            item.curRef.current.scrollIntoView(options);
          }
          return true;
        }
        return false;
      });
    }
  }, {
    key: "runSyncRule",
    value: function runSyncRule(value, rule) {
      if (rule.required && (0, _utils2.isEmptyValue)(value)) {
        return false;
      }
      if (rule.pattern && !rule.pattern.test(value)) {
        return false;
      }
      return true;
    }
  }, {
    key: "runValidator",
    value: function runValidator(value, rule) {
      return new Promise(function (resolve) {
        var returnVal = rule.validator(value, rule);
        if ((0, _utils2.isPromise)(returnVal)) {
          return returnVal.then(resolve);
        }
        resolve(returnVal);
      });
    }
  }, {
    key: "runRules",
    value: function runRules(rules, name) {
      var _this4 = this;
      return rules.reduce(function (promise, rule) {
        return promise.then(function () {
          var isValidate = _this4.getValidatingFields(name);
          // 验证失败
          if (isValidate) return;
          var value = _this4.getValue(name);
          if (rule.formatter) {
            value = rule.formatter(value, rule);
          }
          var updateValidateState = function updateValidateState() {
            var message = _this4.getRuleMessage(value, rule);
            _this4.setStateByName(name, true, 'validatingFields');
            _this4.setStateByName(name, message, 'formError');
          };
          if (!_this4.runSyncRule(value, rule)) {
            updateValidateState();
            return;
          }
          if (rule.validator) {
            return _this4.runValidator(value, rule).then(function (result) {
              if (result === false) {
                updateValidateState();
              }
            });
          }
        });
      }, Promise.resolve());
    }
    // 按顺序校验
  }, {
    key: "validateSeq",
    value: function validateSeq(names) {
      var _this5 = this;
      return new Promise(function (resolve, reject) {
        var errors = [];
        var fields = _this5.getFieldsByNames(names);
        fields.reduce(function (promise, field) {
          return promise.then(function () {
            if (!errors.length) {
              return field.validate().then(function (error) {
                if (error) {
                  errors.push(error);
                }
              });
            }
          });
        }, Promise.resolve()).then(function () {
          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
          _this5.otherValidateValues();
        });
      });
    }
    // 多个检验
  }, {
    key: "validateFields",
    value: function validateFields(names) {
      var _this6 = this;
      return new Promise(function (resolve, reject) {
        var fields = _this6.getFieldsByNames(names);
        Promise.all(fields.map(function (item) {
          return item.validate();
        })).then(function (errors) {
          errors = errors.filter(function (item) {
            return item;
          });
          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
          _this6.otherValidateValues();
        });
      });
    }
    // 单个检验
  }, {
    key: "validateField",
    value: function validateField(name, rules) {
      var _this7 = this;
      return new Promise(function (resolve) {
        var curRules = rules;
        if (!rules) {
          var field = _this7.getFieldByName(name);
          if (field) curRules = field.props.rules;
        }
        if (!curRules) resolve();
        _this7.resetValidation(name);
        _this7.runRules(curRules, name).then(function () {
          var isValidate = _this7.getValidatingFields(name);
          var validateMessage = _this7.getMessageFields(name);
          var optional = _this7.getValidatingOptional(name);
          if (optional) {
            resolve();
          } else {
            if (isValidate) {
              resolve({
                name: name,
                message: validateMessage
              });
            } else {
              resolve();
            }
          }
          _this7.otherValidateValues();
        });
      });
    }
  }, {
    key: "validate",
    value: function validate(name) {
      if (name && !Array.isArray(name)) {
        return this.validateField(name);
      }
      return this.props.validateFirst ? this.validateSeq(name) : this.validateFields(name);
    }
  }, {
    key: "otherValidateField",
    value: function otherValidateField(name, rules) {
      var _this8 = this;
      return new Promise(function (resolve) {
        var value = _this8.getValue(name);
        if (!rules) resolve();
        if (rules.formatter) {
          rules = rules.formatter(value, rules);
        }
        _this8.validatingValues[name] = {
          name: name,
          value: value,
          isValidate: false
        };
        _this8.runOtherRules(rules, name);
        resolve();
      });
    }
  }, {
    key: "otherValidateValues",
    value: function otherValidateValues() {
      var _this9 = this;
      var onValuesChange = this.props.onValuesChange;
      if (!onValuesChange) return;
      var fields = this.getFieldsByNames();
      Promise.all(fields.map(function (field) {
        return _this9.otherValidateField(field.props.name, field.props.rules);
      })).then(function () {
        var curValidateValues = [];
        if (Object.keys(_this9.validatingValues).length > 0) {
          Object.keys(_this9.validatingValues).forEach(function (item) {
            var isValidate = !_this9.validatingValues[item].isValidate;
            if (!_this9.validatingValues[item].value) {
              isValidate = false;
            }
            curValidateValues.push(Object.assign(Object.assign({}, _this9.validatingValues[item]), {
              isValidate: isValidate
            }));
          });
          var pass = curValidateValues.every(function (item) {
            if (item.optional) {
              return true;
            }
            return item.isValidate;
          });
          onValuesChange(curValidateValues, pass);
        }
      });
    }
  }, {
    key: "runOtherRules",
    value: function runOtherRules(rules, name) {
      var _this10 = this;
      return rules.reduce(function (promise, rule) {
        return promise.then(function () {
          var isValidate = _this10.validatingValues[name].isValidate;
          // 验证失败
          if (isValidate) return;
          var value = _this10.getValue(name);
          if (rule.formatter) {
            value = rule.formatter(value, rule);
          }
          var updateValidateState = function updateValidateState() {
            _this10.validatingValues[name].isValidate = true;
            if (rule.optional) {
              _this10.validatingValues[name].optional = true;
            }
          };
          if (!_this10.runSyncRule(value, rule)) {
            updateValidateState();
            return;
          }
          if (rule.validator) {
            return _this10.runValidator(value, rule).then(function (result) {
              if (result === false) {
                updateValidateState();
              }
            });
          }
        });
      }, Promise.resolve());
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this11 = this;
      var _this$props = this.props,
        scrollToError = _this$props.scrollToError,
        onSubmit = _this$props.onSubmit,
        onFailed = _this$props.onFailed;
      var values = this.getValues();
      this.validate().then(function () {
        if (typeof onSubmit === 'function') onSubmit(values);
      }).catch(function (errors) {
        if (typeof onFailed === 'function') onFailed({
          values: values,
          errors: errors
        });
        if (scrollToError) _this11.scrollToField(errors[0].name);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
        validateFirst = _a.validateFirst,
        validateTrigger = _a.validateTrigger,
        scrollToError = _a.scrollToError,
        style = _a.style,
        className = _a.className,
        children = _a.children,
        onSubmit = _a.onSubmit,
        onFailed = _a.onFailed,
        onValuesChange = _a.onValuesChange,
        rest = __rest(_a, ["validateFirst", "validateTrigger", "scrollToError", "style", "className", "children", "onSubmit", "onFailed", "onValuesChange"]);
      var componentClassName = (0, _utils.createClassName)('form');
      var className2Use = (0, _classnames.default)(componentClassName, className);
      return /*#__PURE__*/React.createElement(_formContext.default.Provider, {
        value: this.getFormContext()
      }, /*#__PURE__*/React.createElement("form", Object.assign({
        style: style,
        className: className2Use,
        onSubmit: this.handleSubmit
      }, rest), typeof children === 'function' ? children() : children));
    }
  }]);
  return Form;
}(React.PureComponent);
Form.propTypes = {
  scrollToError: _propTypes.default.bool
};
Form.defaultProps = {
  scrollToError: true,
  validateFirst: false,
  validateTrigger: 'blur'
};