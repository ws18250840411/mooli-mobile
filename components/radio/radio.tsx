import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { createClassName, addUnit } from '../utils';
import RadioContext from './lib/context';
import RadioGroup from './radio-group';

const componentClassName = createClassName('radio');
export interface RadioProps {
  name?: string;
  value?: string | boolean | number;
  disabled?: boolean;
  icon?: Function;
  iconSize?: string;
  checkedColor?: string;
  labelPosition?: string;
  labelDisabled?: boolean;
  shape?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: Function;
}

export default class Radio extends React.PureComponent<RadioProps> {
  static Group: typeof RadioGroup;
  static displayName: 'Radio';
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
    ]),
    disabled: PropTypes.bool,
    icon: PropTypes.func,
    iconSize: PropTypes.string,
    checkedColor: PropTypes.string,
    labelPosition: PropTypes.string,
    labelDisabled: PropTypes.bool,
    shape: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {
    labelPosition: 'right',
    shape: 'round',
  };
  static contextType = RadioContext;
  protected iconRef: React.RefObject<any>;
  constructor(props: RadioProps) {
    super(props);
    this.iconRef = React.createRef();
  }
  get isDisabled() {
    return this.context.disabled || this.props.disabled;
  }
  get currentValue() {
    return this.context.value || this.props.value;
  }
  get checked() {
    if (this.props.name) {
      return this.currentValue === this.props.name;
    } else {
      return this.currentValue;
    }
  }
  onClick = (event: { target: any }) => {
    const { target } = event;
    const { labelDisabled, onChange, name } = this.props;
    const icon = this.iconRef.current;
    if (icon) {
      const iconClicked = icon === target || icon.contains(target);
      if (!this.isDisabled && (iconClicked || !labelDisabled)) {
        onChange && onChange(name || !this.currentValue);
        this.context.onSwitch &&
          this.context.onSwitch(name || !this.currentValue);
      }
    }
  };
  iconStyle = () => {
    const curCheckedColor =
      this.props.checkedColor || this.context.checkedColor;
    if (curCheckedColor && this.checked && !this.isDisabled) {
      return {
        borderColor: curCheckedColor,
        backgroundColor: curCheckedColor,
      };
    }
  };
  genIcon = () => {
    const { icon, iconSize, shape = 'round' } = this.props;
    const curIconSize = iconSize || this.context.iconSize;
    const iconClassName = createClassName(componentClassName, 'icon');
    const className3Use: string = classnames(iconClassName, {
      [`${iconClassName}--${shape}`]: shape,
      [`${iconClassName}--disabled`]: this.isDisabled,
      [`${iconClassName}--checked`]: this.checked,
    });

    const customRender = icon && icon(this.checked);
    const iconRender = customRender && <>{customRender}</>;

    return (
      <div
        ref={this.iconRef}
        key="radio-icon"
        style={{ fontSize: addUnit(curIconSize) }}
        className={className3Use}
      >
        {iconRender || <Icon name="success" style={this.iconStyle()} />}
      </div>
    );
  };

  genLabel = () => {
    const { labelPosition = 'right', children } = this.props;
    const labelClassName = createClassName(componentClassName, 'label');
    const className3Use: string = classnames(labelClassName, {
      [`${labelClassName}--${labelPosition}`]: labelPosition,
      [`${labelClassName}--disabled`]: this.isDisabled,
    });
    return (
      <span key="radio-label" className={className3Use}>
        {children}
      </span>
    );
  };
  render() {
    const {
      value,
      name,
      icon,
      iconSize,
      disabled,
      checkedColor,
      labelPosition = 'right',
      labelDisabled,
      shape = 'round',
      className,
      style,
      children,
      onChange,
      ...rest
    } = this.props;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${this.context.direction}`]:
        this.context.direction,
      [`${componentClassName}--disabled`]: this.isDisabled,
      [`${componentClassName}--label-disabled`]: labelDisabled,
    });

    const child = [this.genIcon()];
    if (labelPosition === 'left') {
      child.unshift(this.genLabel());
    } else {
      child.push(this.genLabel());
    }

    return (
      <div
        className={className2Use}
        onClick={this.onClick}
        style={style}
        {...rest}
      >
        {child}
      </div>
    );
  }
}
