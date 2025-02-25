import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Info from '../info';
import { createClassName } from '../utils';

const componentClassName = createClassName('tab');
export interface TabBarProps {
  title: React.ReactNode;
  dot?: boolean;
  type?: string;
  info?: string;
  color?: string;
  isActive?: boolean;
  disabled?: boolean;
  scrollable?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

export default class TabBar extends React.PureComponent<TabBarProps> {
  static displayName: 'TabBar';
  static propTypes = {
    dot: PropTypes.bool,
    type: PropTypes.string,
    info: PropTypes.string,
    color: PropTypes.string,
    isActive: PropTypes.bool,
    disabled: PropTypes.bool,
    scrollable: PropTypes.bool,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {};
  get curStyle() {
    const { type, color, disabled, isActive, activeColor, inactiveColor } =
      this.props;
    const style: React.CSSProperties = {};
    const isCard = type === 'card';
    if (color && isCard) {
      style.borderColor = color;

      if (!disabled) {
        if (isActive) {
          style.backgroundColor = color;
        } else {
          style.color = color;
        }
      }
    }

    const titleColor = isActive ? activeColor : inactiveColor;
    if (titleColor) {
      style.color = titleColor;
    }

    return style;
  }
  genText = () => {
    const { scrollable, title, dot, info } = this.props;
    const textClassName = createClassName(componentClassName, 'text');
    const className3Use: string = classnames(textClassName, {
      [`${textClassName}--ellipsis`]: scrollable,
    });
    const Text = <span className={className3Use}>{title}</span>;

    if (dot || (info && info !== '')) {
      const textWrapperClassName = createClassName(
        componentClassName,
        'text-wrapper',
      );
      return (
        <span className={textWrapperClassName}>
          {Text}
          <Info dot={dot} info={info} />
        </span>
      );
    }
    return Text;
  };
  render() {
    const {
      dot,
      type,
      info,
      color,
      title,
      isActive,
      disabled,
      scrollable,
      activeColor,
      inactiveColor,
      style,
      className,
      children,
      ...rest
    } = this.props;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--active`]: isActive,
      [`${componentClassName}--disabled`]: disabled,
    });

    return (
      <div
        className={className2Use}
        style={{ ...this.curStyle, ...style }}
        {...rest}
      >
        {this.genText()}
      </div>
    );
  }
}
