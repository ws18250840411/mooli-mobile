import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import Button, { ButtonProps } from '../button';

export interface BButtonProps extends Omit<ButtonProps, 'type'> {
  size?: 'large' | 'normal' | 'small';
  type?: 'yellow' | 'green' | 'orange' | 'white' | 'black';
  className?: string; // 自定义类名
}

export default class BButton extends React.PureComponent<BButtonProps> {
  static displayName: 'BButton';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {};
  render() {
    const {
      className,
      square,
      disabled,
      plain,
      block,
      color,
      loadingSize,
      type = 'yellow',
      size = 'large',
      ...rest
    } = this.props;
    const componentClassName = createClassName('bbutton');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${type}`]: type,
      [`${componentClassName}--${size}`]: size,
      [`${componentClassName}--square`]: square,
      [`${componentClassName}--block`]: block,
      [`${componentClassName}--disabled`]: disabled,
    });
    const curLoadingSize = loadingSize || size === 'large' ? '20' : '16';
    const style2Use: React.CSSProperties = {};
    if (color && !disabled) {
      style2Use.color = plain ? color : 'white';
      if (!plain) {
        style2Use.background = color;
      }
      if (color.indexOf('gradient') !== -1) {
        style2Use.border = 0;
      } else {
        style2Use.borderColor = color;
      }
    }
    return (
      <Button
        className={className2Use}
        style={style2Use}
        loadingSize={curLoadingSize}
        {...rest}
      />
    );
  }
}
