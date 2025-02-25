import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Loading from '../loading';
import { createClassName, addUnit } from '../utils';

const componentClassName = createClassName('switch');
export interface SwitchProps {
  size?: string;
  value?: any;
  loading?: boolean;
  disabled?: boolean;
  activeValue?: any;
  inactiveValue?: any;
  activeColor?: string;
  inactiveColor?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: (checked: boolean) => void;
}

export default class Switch extends React.PureComponent<SwitchProps> {
  static displayName: 'Switch';
  static propTypes = {
    size: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    className: PropTypes.string, // 自定义类名
    style: PropTypes.object, // 自定义样式
    children: PropTypes.node,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    activeValue: true,
    inactiveValue: false,
  };
  get checked() {
    return String(this.props.value) === String(this.props.activeValue);
  }
  onClick = () => {
    const { disabled, loading, inactiveValue, activeValue, onChange } =
      this.props;
    if (!disabled && !loading) {
      const newValue = this.checked ? inactiveValue : activeValue;
      onChange && onChange(newValue);
    }
  };
  render() {
    const {
      size,
      value,
      loading,
      disabled,
      activeValue = true,
      inactiveValue = false,
      activeColor,
      inactiveColor,
      className,
      children,
      onChange,
      ...rest
    } = this.props;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--checked`]: this.checked,
      [`${componentClassName}--loading`]: loading,
      [`${componentClassName}--disabled`]: disabled,
    });

    const styles: React.CSSProperties = {
      fontSize: addUnit(size),
      backgroundColor: this.checked ? activeColor : inactiveColor,
    };

    return (
      <div
        className={className2Use}
        style={styles}
        onClick={this.onClick}
        {...rest}
      >
        <div className={createClassName(componentClassName, 'node')}>
          {loading && (
            <Loading
              color={this.checked ? activeColor : inactiveColor}
              className={createClassName(componentClassName, 'load')}
            />
          )}
          {children}
        </div>
      </div>
    );
  }
}
