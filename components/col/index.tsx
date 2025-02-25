import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import RowContext from '../row/lib/context';

export interface ColProps {
  span?: number | string;
  offset?: number | string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

export default class Col extends React.PureComponent<ColProps> {
  static displayName: 'Col';
  static propTypes = {
    span: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {
    span: 0,
    offset: 0,
  };
  static contextType = RowContext;
  render() {
    const { gutter } = this.context;
    const {
      span = 0,
      offset = 0,
      className,
      style,
      children,
      ...rest
    } = this.props;
    const componentClassName = createClassName('col');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${span}`]: span,
      [`${componentClassName}--offset-${offset}`]: offset,
    });

    const mergedStyle: React.CSSProperties = {};
    if (gutter && gutter[0] > 0) {
      const horizontalGutter = gutter[0] / 2;
      mergedStyle.paddingLeft = horizontalGutter;
      mergedStyle.paddingRight = horizontalGutter;
    }
    if (gutter && gutter[1] > 0) {
      const verticalGutter = gutter[1] / 2;
      mergedStyle.paddingTop = verticalGutter;
      mergedStyle.paddingBottom = verticalGutter;
    }

    return (
      <div
        className={className2Use}
        style={{ ...mergedStyle, ...style }}
        {...rest}
      >
        {children}
      </div>
    );
  }
}
