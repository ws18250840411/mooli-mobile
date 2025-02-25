import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Loading, { Types as LoadingType } from '../loading';
import Icon from '../icon';
import { isString, createClassName } from '../utils';

export const btype = [
  'default',
  'primary',
  'info',
  'warning',
  'danger',
] as const;
export type ButtonType = typeof btype[number];

export const bsize = ['large', 'normal', 'small', 'mini'];
export type ButtonSize = typeof bsize[number];

export const iconpositions = ['top', 'left', 'right', 'bottom'];
export type IconPositionType = typeof iconpositions[number];

const htmlTypes = ['button', 'reset', 'submit'] as const;
export type HtmlType = typeof htmlTypes[number];

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  text?: string;
  color?: string;
  plain?: boolean;
  hairline?: Boolean;
  disabled?: boolean;
  round?: boolean;
  square?: boolean;
  bordered?: boolean;
  loading?: boolean;
  loadingSize?: string;
  loadingType?: LoadingType;
  loadingText?: string;
  loadingIndicator?: React.ReactNode;
  icon?: React.ReactNode;
  iconSize?: string;
  iconPosition?: IconPositionType;
  block?: boolean;
  htmlType?: HtmlType;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

const componentClassName = createClassName('button');
const contentClassName = createClassName(componentClassName, 'content');
export default class Button extends React.PureComponent<ButtonProps> {
  static displayName: 'ActionSheet';
  static propTypes = {
    type: PropTypes.oneOf([...btype]),
    size: PropTypes.oneOf([...bsize]),
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {
    type: 'default',
    size: 'normal',
    bordered: true,
    loadingSize: '20',
    iconSize: '16',
    iconPosition: 'left',
    htmlType: 'button',
  };

  renderIcon() {
    const {
      loading,
      loadingSize,
      loadingType,
      loadingIndicator,
      loadingText,
      children,
      icon,
      iconSize,
    } = this.props;

    if (loading) {
      const loadingClassName = createClassName(contentClassName, 'loading');
      const text = loadingText || children;
      return (
        <Loading
          key="loading"
          color="currentColor"
          className={loadingClassName}
          size={loadingSize}
          type={loadingType}
          indicator={loadingIndicator}
        >
          {text}
        </Loading>
      );
    }

    if (icon) {
      const iconClassName = createClassName(contentClassName, 'icon');
      if (isString(icon)) {
        return (
          <Icon
            key="icon"
            color="currentColor"
            className={iconClassName}
            name={String(icon)}
            size={iconSize}
          />
        );
      } else {
        return (
          <span key="icon" className={iconClassName}>
            {icon}
          </span>
        );
      }
    }
  }

  renderContent() {
    const { loading, iconPosition, loadingText, children } = this.props;
    const content: any = [];
    const iconElement = this.renderIcon();
    const textClassName = createClassName(contentClassName, 'text');
    if (iconPosition === 'left') {
      content.push(iconElement);
    }
    if (!loading) {
      const text = loadingText || children;
      content.push(
        <span key="btn-text" className={textClassName}>
          {text}
        </span>,
      );
    }
    if (iconPosition === 'right') {
      content.push(iconElement);
    }
    return content;
  }
  render() {
    const {
      type = 'default',
      size = 'normal',
      color,
      plain,
      hairline,
      disabled,
      round,
      square,
      bordered = true,
      loading,
      loadingSize = '20',
      loadingType,
      loadingText,
      loadingIndicator,
      icon,
      iconSize = '16',
      iconPosition = 'left',
      htmlType = 'button',
      block,
      style,
      className,
      children,
      onClick,
      ...rest
    } = this.props;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${type}`]: btype.some((t) => t === type),
      [`${componentClassName}--${size}`]: bsize.some((t) => t === size),
      [`${componentClassName}--block`]: block,
      [`${componentClassName}--plain`]: plain,
      [`${componentClassName}--disabled`]: disabled,
      [`${componentClassName}--round`]: round,
      [`${componentClassName}--square`]: square,
      [`${componentClassName}--loading`]: loading,
      [`${componentClassName}--bordered`]: !bordered,
      [`${componentClassName}--hairline mooli-hairline--surround`]: hairline,
    });

    const style2Use: React.CSSProperties = {};
    if (color) {
      style2Use.color = plain ? color : 'white';
      if (!plain) {
        style2Use.background = color;
      }
      if (color.indexOf('gradient') !== -1) {
        style2Use.border = 0;
      } else {
        style2Use.borderColor = color;
      }
    }

    return (
      <button
        type={htmlType}
        className={className2Use}
        style={{ ...style2Use, ...style }}
        onClick={onClick}
        {...rest}
      >
        <div className={contentClassName}>{this.renderContent()}</div>
      </button>
    );
  }
}
