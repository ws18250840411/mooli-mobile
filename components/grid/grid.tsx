import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import GridContext from './lib/context';
import GridItem from './grid-item';

export const directions = ['vertical', 'horizontal'];
export type DirectionType = typeof directions[number];

export interface GridProps {
  gutter?: number | string;
  direction?: DirectionType;
  column?: number;
  border?: boolean;
  square?: boolean;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

export default class Grid extends React.PureComponent<GridProps> {
  static Item: typeof GridItem;
  static displayName: 'Grid';
  static propTypes = {
    gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    column: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    border: PropTypes.bool,
    square: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {
    gutter: 0,
    square: false,
    border: true,
    direction: 'vertical',
  };
  render() {
    const {
      gutter = 0,
      column,
      square = false,
      border = true,
      direction = 'vertical',
      className,
      style,
      children,
      ...rest
    } = this.props;
    const getGutter = (): [number, number] => {
      const results: [number, number] = [0, 0];
      const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
      normalizedGutter.forEach((g, index) => {
        results[index] = g || 0;
      });
      return results;
    };
    const gutters = getGutter();

    const style2Use: React.CSSProperties = {};
    const horizontalGutter = gutters[0] > 0 ? gutters[0] / -2 : undefined;
    const verticalGutter = gutters[1] > 0 ? gutters[1] / -2 : undefined;
    style2Use.marginLeft = horizontalGutter;
    style2Use.marginRight = horizontalGutter;
    style2Use.marginTop = verticalGutter;
    style2Use.marginBottom = verticalGutter;

    const componentClassName = createClassName('grid');
    const className2Use: string = classnames(componentClassName, className, {
      [`mooli-hairline--top mooli-hairline--left`]: border && !gutter,
    });
    const columnNum = column || React.Children.count(children);

    return (
      <GridContext.Provider
        value={{
          gutter: gutters,
          column: columnNum,
          border,
          square,
          direction,
        }}
      >
        <div
          className={className2Use}
          style={{ ...style2Use, ...style }}
          {...rest}
        >
          {children}
        </div>
      </GridContext.Provider>
    );
  }
}
