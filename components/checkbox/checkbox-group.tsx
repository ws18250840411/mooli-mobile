import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import RadioContext from './lib/context';

export const directions = ['vertical', 'horizontal'];
export type DirectionType = typeof directions[number];

export interface CheckboxGroupProps {
  value?: string;
  disabled?: boolean;
  direction?: DirectionType;
  iconSize?: string;
  checkedColor?: string;
  max?: number;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: (value: any) => void;
}

export default class CheckboxGroup extends React.PureComponent<CheckboxGroupProps> {
  static displayName: 'CheckboxGroup';
  static propTypes = {
    disabled: PropTypes.bool,
    iconSize: PropTypes.string,
    checkedColor: PropTypes.string,
    max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {
    direction: 'vertical',
  };
  render() {
    const {
      value,
      max,
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

    const componentClassName = createClassName('checkbox-group');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${direction}`]: direction,
    });

    return (
      <RadioContext.Provider
        value={{
          value,
          max,
          disabled,
          iconSize,
          checkedColor,
          direction,
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
