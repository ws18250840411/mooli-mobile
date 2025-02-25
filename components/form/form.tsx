import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';

import { createClassName } from '../utils';
import FormItem from './form-item';
import FormContext from './lib/formContext';
import { isEmptyValue, isFunction, isPromise } from './lib/utils';

export type FormValue = Record<string, any>;

export type TriggerType = 'change' | 'blur' | 'submit';

export type ValueChangeCallback = (fromValue: FormValue) => void;

export interface FormProps {
  validateFirst?: boolean; // 是否从第一个开始校验
  scrollToError?: boolean; // 滚动到错误位置
  validateTrigger?: TriggerType; // 触发方式
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onSubmit?: (values: any) => void;
  onFailed?: (values: any) => void;
  onValuesChange?: (values: any, pass?: boolean) => void;
}

export interface FormStates {
  formError: Record<string, any>;
  validatingFields: Record<string, boolean>;
  formValue: FormValue;
}

export interface ValidatingValuesType {
  optional?: boolean;
  name: string;
  value: string;
  isValidate: boolean;
}

export default class Form extends React.PureComponent<FormProps, FormStates> {
  static Item: typeof FormItem;
  static propTypes = {
    scrollToError: PropTypes.bool,
  };
  static defaultProps = {
    scrollToError: true,
    validateFirst: false,
    validateTrigger: 'blur',
  };
  public fields: FormItem[] = [];
  public validatingValues: { [key: string]: ValidatingValuesType };
  constructor(props: FormProps, context?: any) {
    super(props, context);
    this.state = {
      formError: {},
      validatingFields: {},
      formValue: {},
    };
    this.validatingValues = {};
  }

  componentDidUpdate(prevProps: Readonly<FormProps>): void {
    const oldNames = this.getNameByChildren(prevProps.children);
    const newNames = this.getNameByChildren(this.props.children);
    if (oldNames.length !== newNames.length && newNames.length < oldNames.length) {
      const curNames = oldNames.filter((item: string) => newNames.indexOf(item) === -1);
      this.removeFields(curNames);
      this.otherValidateValues();
    } else if (oldNames.sort().toString() !== newNames.sort().toString()) {
      this.otherValidateValues();
    }
  }

  getNameByChildren(children: any) {
    return React.Children.map(children, (child) => {
      if (child && child.props) {
        if (child.props.name) {
          return child.props.name;
        } else if (child.props.children) {
          return this.getNameByChildren(child.props.children);
        }
      }
    });
  }

  getFormContext(this: Form) {
    return { form: this };
  }

  getFormValue() {
    return this.state.formValue;
  }

  getValue(name: string) {
    const formValue = this.state.formValue;
    return formValue[name];
  }

  getFieldByName(name: string) {
    const fields = this.fields;
    for (let i = 0; i < fields.length; i++) {
      if (name === fields[i].props.name) {
        return fields[i];
      }
    }
    return null;
  }

  getFieldByNames(names: string) {
    if (names) {
      return this.fields.filter((field) => names.indexOf(field.props.name) !== -1);
    }
    return this.fields;
  }

  getValues() {
    return this.state.formValue;
  }

  setValue(name: string, value: any, cb?: ValueChangeCallback | undefined) {
    this.setValues(
      {
        [name]: value,
      },
      cb
    );
  }

  setValues(obj: FormValue = {}, cb?: ValueChangeCallback) {
    const formValue = this.state.formValue;
    const nextFormValue = formValue;

    Object.keys(obj).forEach((name) => {
      const value = obj[name];
      nextFormValue[name] = value;
      this.setStateByName(name, value, 'formValue');
    });
    if (cb) {
      cb(nextFormValue);
    }
  }

  addField(field: FormItem) {
    this.fields.push(field);
  }

  removeField(field: FormItem) {
    if (field) {
      const index = this.fields.indexOf(field);
      if (index !== -1) {
        const name = field.props.name;
        this.setStateByName(name, false, 'validatingFields');
        this.setStateByName(name, '', 'formError');
        this.remoteStateByName(name, 'formValue');
        this.fields.splice(index, 1);
      }
    }
  }

  removeFieldByName(name: string) {
    const field = this.getFieldByName(name);
    if (field) {
      this.removeField(field);
    }
  }

  removeFields(names: string | string[]) {
    if (Array.isArray(names)) {
      for (const key in names) {
        if (Object.prototype.hasOwnProperty.call(names, key)) {
          const name = names[key];
          this.removeFieldByName(name);
        }
      }
    } else {
      this.removeFieldByName(names);
    }
  }

  setStateByName(key: string, value: any, name = 'formError') {
    // @ts-ignore
    const attr = this.state[name];
    const objs = {};
    // @ts-ignore
    objs[name] = {
      ...attr,
      [key]: value,
    };
    this.setState(objs);
  }

  remoteStateByName(key: string, name = 'formError') {
    const attr = this.state[name];
    delete attr[key];

    const objs = {};
    objs[name] = { ...attr };

    if (this.validatingValues[key]) {
      delete this.validatingValues[key];
    }

    this.setState(objs);
  }

  hasError(name: string) {
    if (this.isDisableValidatorField(name)) {
      return false;
    }
    const { validatingFields } = this.state;
    return validatingFields[name];
  }

  getError(name: string) {
    if (this.isDisableValidatorField(name)) {
      return null;
    }
    const { formError } = this.state;
    return formError[name];
  }

  cleanError(name: string) {
    this.resetValidation(name);
  }

  setError(name: string, message: any) {
    if (this.isDisableValidatorField(name)) {
      return;
    }
    const { formError } = this.state;
    this.setState({
      formError: {
        ...formError,
        [name]: message,
      },
    });
  }

  cleanErrors() {
    this.setState({
      formError: Object.create(null),
    });
  }

  setErrors(errors: Record<string, any>) {
    const { formError } = this.state;
    this.setState({
      formError: {
        ...formError,
        ...errors,
      },
    });
  }

  isDisableValidatorField(name: string) {
    const field = this.getFieldByName(name);
    if (!field) return true;

    return field.getProp('disableValidator', false);
  }

  isFieldValidating(name: string) {
    if (this.isDisableValidatorField(name)) {
      return false;
    }

    const validatingFields = this.state.validatingFields;
    return !!validatingFields[name];
  }

  getFieldsByNames(names?: string | string[]) {
    if (names) {
      return this.fields.filter((field) => names.indexOf(field.props.name) !== -1);
    }
    return this.fields;
  }

  getRuleMessage(value: any, rule: { message: any }) {
    const { message } = rule;
    if (isFunction(message)) {
      return message(value, rule);
    }
    return message;
  }

  getValidatingFields(name: string) {
    const { validatingFields } = this.state;
    return validatingFields[name] || false;
  }

  getValidatingOptional(name: string) {
    return (
      (this.validatingValues &&
        this.validatingValues[name] &&
        this.validatingValues[name].optional) ||
      false
    );
  }

  getMessageFields(name: string) {
    const { formError } = this.state;
    return formError[name] || null;
  }

  resetValidation(name: string) {
    const isValidate = this.getValidatingFields(name);
    if (isValidate) {
      this.setStateByName(name, false, 'validatingFields');
      this.setStateByName(name, '', 'formError');
    }
  }

  scrollToField(name: string, options?: object) {
    this.fields.some((item) => {
      if (item.props.name === name) {
        if (item.curRef.current) {
          item.curRef.current.scrollIntoView(options);
        }
        return true;
      }
      return false;
    });
  }

  runSyncRule(value: any, rule: { required: any; pattern: { test: (arg0: any) => any } }) {
    if (rule.required && isEmptyValue(value)) {
      return false;
    }
    if (rule.pattern && !rule.pattern.test(value)) {
      return false;
    }
    return true;
  }

  runValidator(value: any, rule: { validator: (arg0: any, arg1: any) => any }) {
    return new Promise((resolve) => {
      const returnVal = rule.validator(value, rule);
      if (isPromise(returnVal)) {
        return returnVal.then(resolve);
      }
      resolve(returnVal);
    });
  }

  runRules(rules: any[], name: string) {
    return rules.reduce(
      (promise, rule) =>
        promise.then(() => {
          const isValidate = this.getValidatingFields(name);
          // 验证失败
          if (isValidate) return;

          let value = this.getValue(name);
          if (rule.formatter) {
            value = rule.formatter(value, rule);
          }

          const updateValidateState = () => {
            let message = this.getRuleMessage(value, rule);
            this.setStateByName(name, true, 'validatingFields');
            this.setStateByName(name, message, 'formError');
          };

          if (!this.runSyncRule(value, rule)) {
            updateValidateState();
            return;
          }

          if (rule.validator) {
            return this.runValidator(value, rule).then((result) => {
              if (result === false) {
                updateValidateState();
              }
            });
          }
        }),
      Promise.resolve()
    );
  }

  // 按顺序校验
  validateSeq(names: string | string[]) {
    return new Promise<void>((resolve, reject) => {
      const errors: any = [];
      const fields = this.getFieldsByNames(names);

      fields
        .reduce(
          (promise, field) =>
            promise.then(() => {
              if (!errors.length) {
                return field.validate().then((error: any) => {
                  if (error) {
                    errors.push(error);
                  }
                });
              }
            }),
          Promise.resolve()
        )
        .then(() => {
          if (errors.length) {
            reject(errors);
          } else {
            resolve();
          }
          this.otherValidateValues();
        });
    });
  }

  // 多个检验
  validateFields(names: string | string[]) {
    return new Promise<void>((resolve, reject) => {
      const fields = this.getFieldsByNames(names);
      Promise.all(fields.map((item) => item.validate())).then((errors) => {
        errors = errors.filter((item) => item);
        if (errors.length) {
          reject(errors);
        } else {
          resolve();
        }
        this.otherValidateValues();
      });
    });
  }

  // 单个检验
  validateField(name: string, rules?: undefined) {
    return new Promise<void>((resolve: any) => {
      let curRules: any = rules;

      if (!rules) {
        const field = this.getFieldByName(name);
        if (field) curRules = field.props.rules;
      }

      if (!curRules) resolve();

      this.resetValidation(name);
      this.runRules(curRules, name).then(() => {
        const isValidate = this.getValidatingFields(name);
        const validateMessage = this.getMessageFields(name);
        const optional = this.getValidatingOptional(name);
        if (optional) {
          resolve();
        } else {
          if (isValidate) {
            resolve({
              name: name,
              message: validateMessage,
            });
          } else {
            resolve();
          }
        }
        this.otherValidateValues();
      });
    });
  }

  validate(name?: any) {
    if (name && !Array.isArray(name)) {
      return this.validateField(name);
    }
    return this.props.validateFirst ? this.validateSeq(name) : this.validateFields(name);
  }

  otherValidateField(name: string, rules: any) {
    return new Promise<void>((resolve) => {
      let value = this.getValue(name);
      if (!rules) resolve();
      if (rules.formatter) {
        rules = rules.formatter(value, rules);
      }
      this.validatingValues[name] = {
        name,
        value,
        isValidate: false,
      };
      this.runOtherRules(rules, name);
      resolve();
    });
  }

  otherValidateValues() {
    const { onValuesChange } = this.props;
    if (!onValuesChange) return;

    const fields = this.getFieldsByNames();
    Promise.all(
      fields.map((field) => this.otherValidateField(field.props.name, field.props.rules))
    ).then(() => {
      let curValidateValues: ValidatingValuesType[] = [];
      if (Object.keys(this.validatingValues).length > 0) {
        Object.keys(this.validatingValues).forEach((item) => {
          let isValidate = !this.validatingValues[item].isValidate;
          if (!this.validatingValues[item].value) {
            isValidate = false;
          }
          curValidateValues.push({
            ...this.validatingValues[item],
            isValidate: isValidate,
          });
        });
        const pass = curValidateValues.every((item: any) => {
          if (item.optional) {
            return true;
          }
          return item.isValidate;
        });
        onValuesChange(curValidateValues, pass);
      }
    });
  }

  runOtherRules(rules: any[], name: string) {
    return rules.reduce(
      (promise, rule) =>
        promise.then(() => {
          const isValidate = this.validatingValues[name].isValidate;
          // 验证失败
          if (isValidate) return;

          let value = this.getValue(name);
          if (rule.formatter) {
            value = rule.formatter(value, rule);
          }

          const updateValidateState = () => {
            this.validatingValues[name].isValidate = true;
            if (rule.optional) {
              this.validatingValues[name].optional = true;
            }
          };

          if (!this.runSyncRule(value, rule)) {
            updateValidateState();
            return;
          }

          if (rule.validator) {
            return this.runValidator(value, rule).then((result) => {
              if (result === false) {
                updateValidateState();
              }
            });
          }
        }),
      Promise.resolve()
    );
  }

  submit() {
    const { scrollToError, onSubmit, onFailed } = this.props;
    const values = this.getValues();
    this.validate()
      .then(() => {
        if (typeof onSubmit === 'function') onSubmit(values);
      })
      .catch((errors) => {
        if (typeof onFailed === 'function')
          onFailed({
            values,
            errors,
          });
        if (scrollToError) this.scrollToField(errors[0].name);
      });
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.submit();
  };

  render() {
    const {
      validateFirst,
      validateTrigger,
      scrollToError,
      style,
      className,
      children,
      onSubmit,
      onFailed,
      onValuesChange,
      ...rest
    } = this.props;

    const componentClassName = createClassName('form');
    const className2Use: string = classnames(componentClassName, className);

    return (
      <FormContext.Provider value={this.getFormContext()}>
        <form style={style} className={className2Use} onSubmit={this.handleSubmit} {...rest}>
          {typeof children === 'function' ? children() : children}
        </form>
      </FormContext.Provider>
    );
  }
}
