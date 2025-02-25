import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import RowContext from './lib/context';

export interface RowProps {
  align?: string;
  justify?: string;
  gutter?: string | number;
  wrap?: boolean;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

export default class Row extends React.PureComponent<RowProps> {
  static displayName: 'Row';
  static propTypes = {
    align: PropTypes.string,
    justify: PropTypes.string,
    gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    wrap: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {
    gutter: 0,
    wrap: true,
  };
  render() {
    const {
      align,
      justify,
      gutter = 0,
      wrap = true,
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
    const componentClassName = createClassName('row');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--align`]: align,
      [`${componentClassName}--flex ${componentClassName}--justify-${justify}`]:
        justify,
      [`${componentClassName}--no-wrap`]: !wrap,
    });

    const style2Use: React.CSSProperties = {};
    const horizontalGutter = gutters[0] > 0 ? gutters[0] / -2 : undefined;
    const verticalGutter = gutters[1] > 0 ? gutters[1] / -2 : undefined;
    style2Use.marginLeft = horizontalGutter;
    style2Use.marginRight = horizontalGutter;
    style2Use.marginTop = verticalGutter;
    style2Use.marginBottom = verticalGutter;

    return (
      <RowContext.Provider value={{ gutter: gutters }}>
        <div
          className={className2Use}
          style={{ ...style2Use, ...style }}
          {...rest}
        >
          {children}
        </div>
      </RowContext.Provider>
    );
  }
}
