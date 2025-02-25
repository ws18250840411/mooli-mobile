import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import { FormProps, FormValue, TriggerType } from './form';
import FormContext from './lib/formContext';
interface Rule {
  require?: boolean;
  optional?: boolean;
  message?: string | Function;
  validator?: Function;
  pattern?: RegExp;
  trigger?: TriggerType | TriggerType[];
  formatter?: Function;
}
export interface FormItemProps {
  name: string;
  disableValidator?: boolean; // 禁用验证
  validateTrigger?: TriggerType; // 触发方式
  required?: boolean;
  initialValue?: any;
  rules?: Rule[] | any;
  labelWidth?: number;
  labelAlign?: string;
  inputAlign?: string;
  error?: boolean;
  hidden?: boolean; // 隐藏表单
  errorMessage?: string;
  errorMessageAlign?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: (value: any, e?: React.SyntheticEvent) => void;
  onFocus?: (e: React.FocusEvent) => void;
  onBlur?: (e: React.FocusEvent) => void;
}

export type ValueChangeCallback = (fromValue: FormValue) => void;

export default class FormItem extends React.PureComponent<FormItemProps> {
  static contextType = FormContext;
  static propTypes = {
    name: PropTypes.string,
  };
  static defaultProps = {
    disableValidator: false,
  };
  public curRef: React.RefObject<HTMLDivElement>;
  constructor(props: FormItemProps, context?: any) {
    super(props, context);
    this.curRef = React.createRef();
  }
  componentDidMount() {
    const form = this.getForm();
    form.addField(this);

    if (this.props.initialValue) {
      this.setValue(this.props.initialValue);
      this.validateValue();
    }
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.initialValue !== this.props.initialValue) {
      this.setValue(this.props.initialValue);
      this.validateValue();
    }
  }

  validateValue() {
    const { rules, name } = this.props;
    if (rules && rules.length > 0) {
      const { required } = rules[0];
      if (required) {
        const form = this.getForm();
        return form.validate(name);
      }
    }
  }

  getValue() {
    const form = this.getForm();
    const { name } = this.props;

    return form.getValue(name);
  }

  setValue(value: any, callback?: ValueChangeCallback) {
    const form = this.getForm();
    const { name } = this.props;

    form.setValue(name, value, callback);
  }

  getForm() {
    return this.context.form;
  }

  getFormItemContext(this: FormItem) {
    return { FormItem: this };
  }

  getFormProp<T extends keyof FormProps>(
    prop: T,
    defaultValue: Required<FormProps>[T],
  ) {
    const form = this.getForm();
    const formProps = form.props as Required<FormProps>;
    return prop in formProps ? formProps[prop] : defaultValue;
  }

  getProp<T extends keyof FormItemProps>(
    prop: T,
    defaultValue?: Required<FormItemProps>[T],
  ) {
    const form = this.getForm();
    const formProps = form.props;
    const props = this.props;
    return prop in props
      ? props[prop]
      : prop in formProps
      ? formProps[prop]
      : defaultValue;
  }

  cleanError() {
    const form = this.getForm();
    const { name } = this.props;
    return form.cleanError(name);
  }

  hasError() {
    const form = this.getForm();
    const { name } = this.props;
    return form.hasError(name);
  }

  getError() {
    const form = this.getForm();
    const { name } = this.props;
    return form.getError(name);
  }

  setError(message: any) {
    const form = this.getForm();
    const { name } = this.props;
    return form.setError(name, message);
  }

  triggerValidate(trigger: TriggerType) {
    const defaultTrigger = this.getProp('validateTrigger') === trigger;
    const { rules } = this.props;
    if (!rules) return;

    const curRules = rules.filter((rule: any) => {
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

  validate(rules?: Rule[] | undefined) {
    const form = this.getForm();
    const { name } = this.props;
    return form.validateField(name, rules);
  }

  otherValidate() {
    const form = this.getForm();
    return form.otherValidateValues();
  }

  handleChange = (value: any, callback?: () => void) => {
    this.setValue(value, () => {
      callback && callback();
      this.triggerValidate('change');
    });
  };

  handleFocus = (callback?: () => void) => {
    callback && callback();
    this.cleanError();
  };

  handleBlur = (callback?: () => void) => {
    callback && callback();
    this.triggerValidate('blur');
  };

  render() {
    const {
      initialValue,
      disableValidator,
      style,
      className,
      children,
      onChange,
      onFocus,
      onBlur,
      ...rest
    } = this.props;
    const componentClassName = createClassName('form-item');
    const className2Use: string = classnames(componentClassName, className);
    const hasError = this.hasError();

    return (
      <div ref={this.curRef} style={style} className={className2Use}>
        {React.cloneElement(React.Children.only(children) as any, {
          value: this.getValue(),
          error: hasError,
          errorMessage: this.getError(),
          onChange: (value: any, e?: React.SyntheticEvent) => {
            this.handleChange(value, () => {
              onChange && onChange(value, e);
            });
          },
          onFocus: (e: React.FocusEvent<Element>) => {
            this.handleFocus(() => {
              onFocus && onFocus(e);
            });
          },
          onBlur: (e: React.FocusEvent<Element>) => {
            this.handleBlur(() => {
              onBlur && onBlur(e);
            });
          },
          ...rest,
        })}
      </div>
    );
  }
}
