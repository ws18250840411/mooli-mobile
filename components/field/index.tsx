import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Cell, { CellProps } from '../cell/cell';
import Icon from '../icon';
import {
  createClassName,
  addUnit,
  formatNumber,
  resetScroll,
  isObject,
} from '../utils';
import { preventDefault } from '../utils/dom/event';

export interface FieldProps extends CellProps {
  label?: string | React.ReactNode;
  value?: string;
  defaultValue?: string;
  type?: string;
  error?: boolean;
  colon?: boolean;
  formatTrigger?: string;
  name?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoSize?: boolean | object;
  rows?: number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  clearable?: boolean;
  clearableIcon?: React.ReactNode;
  formatter?: Function;
  maxLength?: number;
  limit?: boolean;
  labelWidth?: number;
  labelClass?: string;
  labelAlign?: string;
  inputAlign?: string;
  placeholder?: string;
  errorMessage?: string;
  errorMessageAlign?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  prefix?: React.ReactNode;
  children?: React.ReactNode;
  onFocus?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onBlur?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onKeyPress?: (event: KeyboardEvent) => void;
  onClickInput?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onClear?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onChange?: (value: any) => void;
}

export default class Field extends React.PureComponent<FieldProps> {
  static propTypes = {
    value: PropTypes.string,
  };
  static defaultProps = {
    value: '',
    type: 'text',
    formatTrigger: 'onChange',
  };
  inputRef: React.RefObject<any>;
  constructor(props: FieldProps) {
    super(props);
    this.state = {
      focused: false,
    };
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.adjustSize();
  }

  adjustSize = () => {
    const { type, autoSize } = this.props;
    const input = this.inputRef.current;
    if (!(type === 'textarea' && autoSize) || !input) {
      return;
    }

    input.style.height = 'auto';

    let height = input.scrollHeight;
    if (isObject(autoSize)) {
      const { maxHeight, minHeight } = autoSize as any;
      if (maxHeight) {
        height = Math.min(height, maxHeight);
      }
      if (minHeight) {
        height = Math.max(height, minHeight);
      }
    }

    if (height) {
      input.style.height = height + 'px';
    }
  };

  updateValue = (val: string | undefined, trigger = 'onChange') => {
    let curValue = String(val || '');
    const { type, value, formatter, formatTrigger, maxLength, onChange } =
      this.props;
    if (maxLength && curValue.length > maxLength) {
      curValue = curValue.slice(0, maxLength);
    }
    if (type === 'number' || type === 'digit') {
      const isNumber = type === 'number';
      curValue = formatNumber(curValue, isNumber, isNumber);
    }
    if (formatter && trigger === formatTrigger) {
      curValue = formatter(curValue);
    }
    const input = this.inputRef.current;
    if (input && curValue !== input.value) {
      input.value = curValue;
    }
    if (curValue !== value) {
      if (typeof onChange === 'function') onChange(curValue);
    }
    this.adjustSize();
  };

  onFocus = () => {
    this.inputRef.current.input && this.inputRef.current.input.focus();
  };

  onBlur = () => {
    this.inputRef.current.input && this.inputRef.current.input.blur();
  };

  onFocusInput = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { onFocus, readOnly } = this.props;
    this.setState({
      focused: true,
    });
    if (typeof onFocus === 'function') onFocus(e);
    if (readOnly) this.onBlur();
  };
  onClickInput = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { onClickInput } = this.props;
    if (typeof onClickInput === 'function') onClickInput(e);
  };
  onKeyPressInput = (e: KeyboardEvent) => {
    const { onKeyPress } = this.props;
    if (typeof onKeyPress === 'function') onKeyPress(e);
  };
  onInput = (e: { target: { composing: any; value: string | undefined } }) => {
    if (e.target.composing) {
      return;
    }
    this.updateValue(e.target.value);
  };
  onBlurInput = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { onBlur, value } = this.props;
    this.updateValue(value, 'onBlur');
    this.setState({ focused: false });
    if (typeof onBlur === 'function') onBlur(e);
    resetScroll();
  };

  onClear = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    preventDefault(e);
    const { onClear } = this.props;
    this.updateValue('');
    this.onFocus();
    if (typeof onClear === 'function') onClear(e);
  };

  showClear = () => {
    const { value } = this.props;
    const { focused } = this.state as any;
    const hasValue = value && value !== '';
    return hasValue && focused;
  };

  render() {
    const {
      type,
      label,
      value,
      defaultValue,
      colon,
      leftIcon,
      rightIcon,
      size,
      center,
      border,
      required,
      clickable,
      disabled,
      readOnly,
      clearable,
      clearableIcon,
      placeholder,
      inputAlign,
      labelWidth,
      labelAlign,
      labelClass,
      arrowDirection,
      autoSize,
      rows,
      maxLength,
      limit,
      formatTrigger,
      formatter,
      error,
      errorMessage,
      errorMessageAlign,
      className,
      prefix,
      children,
      onBlur,
      onFocus,
      onClear,
      onKeyPress,
      onClickInput,
      onChange,
      onClickLeftIcon,
      onClickRightIcon,
      ...rest
    } = this.props;

    const { focused } = this.state as any;

    const componentClassName = createClassName('field');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--focused`]: focused,
      [`${componentClassName}--disabled`]: disabled,
      [`${componentClassName}--error`]: error,
      [`${componentClassName}--label--${labelAlign}`]: labelAlign,
      [`${componentClassName}--min-height`]: type === 'textarea' && !autoSize,
    });

    const labelStyle: React.CSSProperties = {};
    if (labelWidth) labelStyle.width = addUnit(labelWidth);

    const valueClassName = createClassName(componentClassName, 'value');
    const labelClassName = createClassName(componentClassName, 'label');
    const className3Use: string = classnames(labelClassName, labelClass, {
      [`${labelClassName}--${labelAlign}`]: labelAlign,
    });

    const genInput = () => {
      const controlClassName = createClassName(componentClassName, 'control');
      const className4Use: string = classnames(controlClassName, {
        [`${controlClassName}--${inputAlign}`]: inputAlign,
      });
      const inputProps = {
        ref: this.inputRef,
        rows: rows !== undefined ? Number(rows) : undefined,
        className: className4Use,
        value: value,
        defaultValue: defaultValue,
        disabled: disabled,
        readOnly: readOnly,
        placeholder: placeholder,
        onBlur: this.onBlurInput,
        onFocus: this.onFocusInput,
        onInput: this.onInput,
        onClick: this.onClickInput,
        onKeyPress: this.onKeyPressInput,
      };
      if (type === 'textarea') {
        // @ts-ignore
        return <textarea {...inputProps} />;
      }
      let inputType = type;
      let inputMode;
      if (type === 'number') {
        inputType = 'text';
        inputMode = 'decimal';
      }

      if (type === 'digit') {
        inputType = 'tel';
        inputMode = 'numeric';
      }
      // @ts-ignore
      return <input type={inputType} inputMode={inputMode} {...inputProps} />;
    };

    const genClear = () => {
      if (clearable && !readOnly && this.showClear()) {
        if (clearableIcon) {
          return (
            <span
              className={createClassName(componentClassName, 'clear')}
              onMouseDown={this.onClear}
            >
              {clearableIcon}
            </span>
          );
        }
        return (
          <Icon
            name="clear"
            className={createClassName(componentClassName, 'clear')}
            onMouseDown={this.onClear}
          />
        );
      }
      return null;
    };

    const genChildren = () => {
      if (children) {
        return (
          <div className={createClassName(componentClassName, 'button')}>
            {children}
          </div>
        );
      }
      return null;
    };

    const genWordLimit = () => {
      if (limit && maxLength) {
        const count = (value || '').length;
        return (
          <div className={createClassName(componentClassName, 'word-limit')}>
            <span className={createClassName(componentClassName, 'word-num')}>
              {count}
            </span>
            /{maxLength}
          </div>
        );
      }
    };

    const genMessage = () => {
      const message = errorMessage;
      if (message) {
        const controlClassName = createClassName(
          componentClassName,
          'error-message',
        );
        const className5Use: string = classnames(controlClassName, {
          [`${controlClassName}--${errorMessageAlign}`]: errorMessageAlign,
        });
        return <div className={className5Use}>{message}</div>;
      }
    };

    const renderLabel = () => {
      const colons = colon ? ':' : '';
      if (label) {
        return (
          <span>
            {label}
            {colons}
          </span>
        );
      }
      return null;
    };

    const genPrefix = () => {
      if (prefix && (focused || value)) {
        return (
          <span className={createClassName(componentClassName, 'prefix')}>
            {prefix}
          </span>
        );
      }
      return null;
    };

    const renderValue = () => {
      return (
        <>
          <div className={createClassName(componentClassName, 'body')}>
            {genPrefix()}
            {genInput()}
            {genClear()}
            {genChildren()}
          </div>
          {genWordLimit()}
          {genMessage()}
        </>
      );
    };

    return (
      <Cell
        title={renderLabel()}
        value={renderValue()}
        iconLeft={leftIcon}
        iconRight={rightIcon}
        center={center}
        border={border}
        size={size}
        required={required}
        clickable={clickable}
        titleStyle={labelStyle}
        titleClass={className3Use}
        valueClass={valueClassName}
        arrowDirection={arrowDirection}
        className={className2Use}
        onClickLeftIcon={onClickLeftIcon}
        onClickRightIcon={onClickRightIcon}
        {...rest}
      />
    );
  }
}
