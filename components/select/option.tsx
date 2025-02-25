import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';

export interface OptionProps {
  value: string;
  label?: string;
  disabled?: boolean;
  selected?: boolean;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onPress?: (key: {
    label: OptionProps['label'];
    value: OptionProps['value'];
  }) => void;
}

export default class Option extends React.PureComponent<OptionProps> {
  static displayName: 'Option';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {};
  render() {
    const { label, value, selected, className, children, onPress, ...rest } =
      this.props;
    const componentClassName = createClassName('option');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--selected`]: selected,
    });
    return (
      <div
        className={className2Use}
        onClick={() => onPress && onPress({ value, label })}
        {...rest}
      >
        {children || label}
      </div>
    );
  }
}
