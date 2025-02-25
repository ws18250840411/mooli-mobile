import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import Icon from '../icon';

const componentClassName = createClassName('cell');
export interface CellProps {
  title?: React.ReactNode;
  label?: React.ReactNode;
  value?: React.ReactNode;
  size?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  border?: boolean;
  required?: boolean;
  clickable?: boolean;
  center?: boolean;
  arrow?: boolean;
  arrowDirection?: string;
  arrowRender?: React.ReactNode;
  labelClass?: string;
  valueClass?: string;
  titleClass?: string;
  titleStyle?: object;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onClickLeftIcon?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onClickRightIcon?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

export default class Cell extends React.PureComponent<CellProps> {
  static displayName: 'Cell';
  static Group: any;
  static propTypes = {
    label: PropTypes.node,
    value: PropTypes.node,
    size: PropTypes.string,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    border: PropTypes.bool,
    required: PropTypes.bool,
    clickable: PropTypes.bool,
    center: PropTypes.bool,
    arrow: PropTypes.bool,
    arrowDirection: PropTypes.string,
    arrowRender: PropTypes.node,
    labelClass: PropTypes.string,
    valueClass: PropTypes.string,
    titleClass: PropTypes.string,
    titleStyle: PropTypes.object,
    className: PropTypes.string, // 自定义类名
    style: PropTypes.object, // 自定义样式
    children: PropTypes.node,
    onClick: PropTypes.func,
    onClickLeftIcon: PropTypes.func,
    onClickRightIcon: PropTypes.func,
  };
  static defaultProps = {
    border: false,
  };
  renderLabel = () => {
    const { label, labelClass } = this.props;
    const labelClassName = createClassName(componentClassName, 'label');
    const className3Use: string = classnames(labelClassName, labelClass);
    if (label) {
      return (
        <div key="cell-label" className={className3Use}>
          {label}
        </div>
      );
    }
    return null;
  };
  renderIconLeft = () => {
    const { iconLeft, onClickLeftIcon } = this.props;
    const iconClassName = createClassName(componentClassName, 'left-icon');
    if (iconLeft) {
      if (React.isValidElement(iconLeft)) {
        return iconLeft;
      }
      return (
        <Icon
          name={iconLeft as string}
          key="cell-left-icon"
          className={iconClassName}
          onClick={onClickLeftIcon}
        />
      );
    }
    return null;
  };
  renderIconRight = () => {
    const { iconRight, onClickRightIcon } = this.props;
    const iconClassName = createClassName(componentClassName, 'right-icon');
    if (iconRight) {
      if (React.isValidElement(iconRight)) {
        return iconRight;
      }
      return (
        <Icon
          name={iconRight as string}
          key="cell-right-icon"
          className={iconClassName}
          onClick={onClickRightIcon}
        />
      );
    }
    return null;
  };
  renderArrow = () => {
    const { arrow, arrowDirection, onClickRightIcon } = this.props;
    const iconClassName = createClassName(componentClassName, 'right-icon');
    if (arrow) {
      let iconName = arrowDirection ? `arrow-${arrowDirection}` : 'arrow';
      return (
        <Icon
          name={iconName}
          key="cell-arrow-icon"
          className={iconClassName}
          onClick={onClickRightIcon}
        />
      );
    }
    return null;
  };
  renderTitle = () => {
    const { title, titleClass, titleStyle, children } = this.props;
    const titleClassName = createClassName(componentClassName, 'title');
    const className4Use: string = classnames(titleClassName, titleClass);
    const curTitle = title || children;
    if (curTitle) {
      return (
        <div key="cell-title" className={className4Use} style={titleStyle}>
          {typeof curTitle === 'function' ? curTitle() : curTitle}
          {this.renderLabel()}
        </div>
      );
    }
    return null;
  };
  renderValue = () => {
    const { value, valueClass } = this.props;
    const valueClassName = createClassName(componentClassName, 'value');
    const className5Use: string = classnames(valueClassName, valueClass);
    if (value) {
      return (
        <div key="cell-value" className={className5Use}>
          {value}
        </div>
      );
    }
    return null;
  };
  render() {
    const {
      title,
      label,
      value,
      size,
      iconLeft,
      iconRight,
      border = false,
      required,
      center,
      arrow,
      arrowDirection,
      labelClass,
      valueClass,
      titleClass,
      titleStyle,
      className,
      style,
      children,
      onClick,
      onClickLeftIcon,
      onClickRightIcon,
      ...rest
    } = this.props;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${size}`]: size,
      [`${componentClassName}--center`]: center,
      [`${componentClassName}--required`]: required,
      [`${componentClassName}--border`]: border,
    });

    return (
      <div className={className2Use} style={style} onClick={onClick} {...rest}>
        {this.renderIconLeft()}
        {this.renderTitle()}
        {this.renderValue()}
        {this.renderArrow()}
        {this.renderIconRight()}
      </div>
    );
  }
}
