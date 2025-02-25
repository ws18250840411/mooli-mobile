import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import RadioContext from './lib/context';

export const directions = ['vertical', 'horizontal'];
export type DirectionType = typeof directions[number];

export interface RadioGroupProps {
  value?: number | string;
  direction?: DirectionType;
  disabled?: boolean;
  checkedColor?: string;
  iconSize?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: (value: any) => void;
}

export default class RadioGroup extends React.PureComponent<RadioGroupProps> {
  static displayName: 'RadioGroup';
  static propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    checkedColor: PropTypes.string,
    iconSize: PropTypes.string,
    className: PropTypes.string, // 自定义类名
    style: PropTypes.object, // 自定义样式
    children: PropTypes.node,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    direction: 'vertical',
  };
  render() {
    const {
      value,
      disabled,
      iconSize,
      checkedColor,
      direction = 'vertical',
      className,
      style,
      children,
      onChange,
      ...rest
    } = this.props;

    const onSwitch = (value: any) => {
      if (onChange) onChange(value);
    };

    const componentClassName = createClassName('radio-group');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${direction}`]: direction,
    });

    return (
      <RadioContext.Provider
        value={{
          value,
          disabled,
          iconSize,
          direction,
          checkedColor,
          onSwitch,
        }}
      >
        <div className={className2Use} {...rest}>
          {children}
        </div>
      </RadioContext.Provider>
    );
  }
}
