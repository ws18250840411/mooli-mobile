import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Badge from './badge';
import { addUnit, createClassName } from '../utils';
export interface IconProps {
  name?: string;
  dot?: boolean;
  badge?: string | number;
  color?: string;
  size?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onMouseDown?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false;
}

export default class Icon extends React.PureComponent<IconProps> {
  static displayName: 'Icon';
  static propTypes = {
    name: PropTypes.string,
    dot: PropTypes.bool,
    badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string, // 自定义类名
    style: PropTypes.object, // 自定义样式
    onClick: PropTypes.func,
    onMouseDown: PropTypes.func,
  };
  static defaultProps = {};
  render() {
    const {
      name,
      dot,
      badge,
      color,
      size,
      className,
      style,
      onClick,
      ...rest
    } = this.props;

    const imageIcon = isImage(name);
    const componentClassName = createClassName('icon');

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${name}`]: !imageIcon,
    });

    const imageIconClassName = createClassName(componentClassName, 'image');

    const curStyle: React.CSSProperties = { color };
    if (size) {
      const iconSize = addUnit(size) as string;
      curStyle.fontSize = iconSize;
    }

    return (
      <i
        className={className2Use}
        style={{ ...curStyle, ...style }}
        onClick={onClick}
        {...rest}
      >
        {imageIcon && <img className={imageIconClassName} src={name} />}
        <Badge dot={dot} badge={badge} />
      </i>
    );
  }
}
