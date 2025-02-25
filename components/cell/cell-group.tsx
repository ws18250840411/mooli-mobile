import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';

export interface CellGroupProps {
  title?: string;
  border?: boolean;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

export default class CellGroup extends React.PureComponent<CellGroupProps> {
  static displayName: 'CellGroup';
  static propTypes = {
    title: PropTypes.string,
    border: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {};
  render() {
    const {
      title,
      border = true,
      className,
      style,
      children,
      ...rest
    } = this.props;
    const componentClassName = createClassName('cell-group');
    const className2Use: string = classnames(componentClassName, className, {
      [`mooli-hairline--top-bottom`]: border,
    });
    const titleClassName = createClassName(componentClassName, 'title');
    return (
      <div className={className2Use} style={style} {...rest}>
        {title && <div className={titleClassName}>{title}</div>}
        {children}
      </div>
    );
  }
}
