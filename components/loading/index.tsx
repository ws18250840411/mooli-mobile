import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { addUnit, createClassName } from '../utils';

export const types = [
  'circular',
  'spinner',
  'beat',
  'clockwise',
  'line',
] as const;
export type Types = typeof types[number];
export const PType = PropTypes.oneOf([...types]);

export interface LoadingProps {
  type?: Types; // 加载类型
  color?: string; // 自定义颜色
  size?: string | number; // 自定义大小
  vertical?: boolean; // 垂直排列
  rotate?: boolean; // 是否旋转
  textSize?: string | number; // 自定义文案大小
  textColor?: string; // 自定义文案颜色
  indicator?: React.ReactNode; // 自定义指示符
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

const componentClassName = createClassName('loading');

export default class Loading extends React.PureComponent<LoadingProps> {
  static displayName: 'Loading';
  static propTypes = {
    type: PType,
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    vertical: PropTypes.bool,
    textSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    textColor: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {
    type: 'circular',
    rotate: true,
  };

  LoadingIcon = () => {
    const { indicator, type = 'circular' } = this.props;
    if (React.isValidElement(indicator)) {
      return indicator;
    }

    if (['spinner', 'beat', 'clockwise', 'line'].includes(type)) {
      const Spin: any = [];
      let lens = 12;
      if (type === 'beat') lens = 3;
      if (type === 'clockwise') lens = 8;
      if (type === 'line') lens = 5;

      for (let i = 0; i < lens; i++) {
        Spin.push(<i key={i} />);
      }
      return Spin;
    }

    const svgClassName = createClassName(componentClassName, 'svg');

    return (
      <svg
        className={createClassName(svgClassName, 'circular')}
        viewBox="25 25 50 50"
      >
        <circle cx="50" cy="50" r="20" fill="none" />
      </svg>
    );
  };

  LoadingText = () => {
    const { textColor, color, textSize, children } = this.props;

    const style: React.CSSProperties = {
      color: textColor ?? color,
    };
    if (textSize) {
      style.fontSize = addUnit(textSize);
    }
    if (children) {
      return (
        <span
          className={createClassName(componentClassName, 'text')}
          style={style}
        >
          {children}
        </span>
      );
    }
    return null;
  };
  render() {
    const {
      type = 'circular',
      color,
      size,
      vertical,
      rotate = true,
      textSize,
      textColor,
      indicator,
      className,
      style,
      children,
      ...rest
    } = this.props;

    const curStyle: React.CSSProperties = { color };
    if (size) {
      const iconSize = addUnit(size) as string;
      curStyle.width = iconSize;
      curStyle.height = iconSize;
    }

    const disRotate = ['clockwise', 'line', 'beat'].includes(type);

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${type}`]: types.some((t) => t === type),
      [`${componentClassName}--vertical`]: vertical,
      [`${componentClassName}--rotate`]: rotate && !disRotate,
    });

    const spinnerClassName = createClassName(
      componentClassName,
      'innerspinner',
    );
    const classNameSpinner: string = classnames(spinnerClassName, {
      [`${spinnerClassName}--${type}`]: types.some((t) => t === type),
    });

    return (
      <div className={className2Use} {...rest}>
        <span className={classNameSpinner} style={{ ...curStyle, ...style }}>
          {this.LoadingIcon()}
        </span>
        {this.LoadingText()}
      </div>
    );
  }
}
