import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
export interface SwiperItemProps {
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

export default class SwiperItem extends React.PureComponent<SwiperItemProps> {
  static displayName: 'SwiperItem';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {};
  render() {
    const { className, style, children, ...rest } = this.props;

    const componentClassName = createClassName('swiper-item');
    const className2Use: string = classnames(componentClassName, className);
    const mergedStyle: React.CSSProperties = {};

    return (
      <div
        className={className2Use}
        style={{ ...mergedStyle, ...style }}
        {...rest}
      >
        {typeof children === 'function' ? children() : children}
      </div>
    );
  }
}
