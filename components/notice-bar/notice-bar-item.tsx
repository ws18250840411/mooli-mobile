import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import NoticeBarContext from './lib/context';
import { createClassName } from '../utils';

export interface NoticeBarItemProps {
  index?: number; // 自定义类名
  key?: number; // 自定义类名
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

export default class NoticeBarItem extends React.PureComponent<NoticeBarItemProps> {
  static displayName: 'NoticeBarItem';
  static propTypes = {
    index: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {};
  static contextType = NoticeBarContext;

  render() {
    const { index, key, className, style, children, ...rest } = this.props;
    const { offset = 0, isLast } = this.context;
    const componentClassName = createClassName('notice-bar-item');
    const className2Use: string = classnames(componentClassName, className);

    const mergedStyle: React.CSSProperties =
      isLast && index === 0
        ? {
            transform: `translateY(${Math.abs(offset)}px)`,
          }
        : {};
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
