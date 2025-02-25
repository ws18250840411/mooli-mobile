import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import GridContext from './lib/context';

export interface GridItemProps {
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

export default class GridItem extends React.PureComponent<GridItemProps> {
  static displayName: 'GridItem';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {};
  static contextType = GridContext;
  render() {
    const { gutter, column, border, square, direction } = this.context;
    const { className, style, children, ...rest } = this.props;
    const componentClassName = createClassName('grid-item');
    const contentClassName = createClassName(componentClassName, 'content');
    const className2Use: string = classnames(contentClassName, className, {
      [`${componentClassName}--${direction}`]: direction,
      [`${componentClassName}--square`]: square,
      [`${componentClassName}--surround`]: border && gutter,
      [`mooli-hairline`]: border,
    });

    const mergedStyle: React.CSSProperties = {};

    if (column) {
      mergedStyle.flexBasis = `${100 / column}%`;
    }

    if (square && column) {
      mergedStyle.height = 0;
      mergedStyle.paddingBottom = `${100 / column}%`;
    }

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
        className={componentClassName}
        style={{ ...mergedStyle, ...style }}
        {...rest}
      >
        <div className={className2Use}>{children}</div>
      </div>
    );
  }
}
