import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { createClassName } from '../utils';
import { Popup, PopupProps } from '../widgets/popup';
import Loading, { Types, types as loadTypes } from '../loading';
import Icon from '../icon';
import { renderToContainer, GetContainer } from '../utils/renderToContainer';

export const positions = ['center', 'top', 'bottom'] as const; // 位置
export type Position = typeof positions[number];

export const types = ['html', 'loading', 'success', 'fail'] as const; // 类型
export type Type = typeof types[number];

export const [DEFAULT_TYPE] = types;
export const [DEFAULT_POSITION] = positions;
export const DEFAULT_DURATION = 2000;
export const prefixCls = createClassName('toast');
const BODY_FORBID_CLASS = 'mooli-forbid-hidden';

export interface ToastProps extends PopupProps {
  type?: Type;
  duration?: number;
  position?: Position;
  message?: React.ReactNode;
  icon?: React.ReactNode;
  iconSize?: string;
  loadingType?: Types;
  closeOnClick?: boolean;
  forbidClick?: boolean;
  className?: string;
  single?: boolean;
  style?: React.CSSProperties;
  onClick?: React.EventHandler<React.SyntheticEvent>;
  onClose?: Function; // 关闭
  onEnter?: Function; // 移除
  onExited?: Function; // 移除
}

interface ToastState {
  visible: boolean;
  hide: boolean;
  mountNode: Element | null;
}

export default class Toast extends React.PureComponent<ToastProps, ToastState> {
  static propTypes = {
    type: PropTypes.oneOf([...types]),
    message: PropTypes.node,
    duration: PropTypes.number,
    position: PropTypes.oneOf([...positions]),
    iconSize: PropTypes.string,
    loadingType: PropTypes.oneOf([...loadTypes]),
    closeOnClick: PropTypes.bool,
    forbidClick: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    onClose: PropTypes.func,
  };
  static defaultProps = {
    type: DEFAULT_TYPE,
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
    forbidClick: false,
    closeOnClick: false,
  };
  static displayName: 'Toast';
  private timer: number | null = null; // 定时器

  constructor(props: ToastProps) {
    super(props);
    this.state = {
      visible: true,
      mountNode: null,
      hide: false
    };
  }

  componentDidMount() {
    const { duration, position } = this.props;
    const mountNode = document.querySelector(`.${prefixCls}--${position}`);
    if (mountNode) this.setState({ mountNode });
    if (duration && duration > 0) this.setTimer(duration);
  }

  setTimer = (duration: number) => {
    if (duration > 0)
      this.timer = window.setTimeout(
        () => this.setState({ visible: false }),
        duration,
      );
  };

  clearTimer = () => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  };

  handleEnter = () => {
    const { forbidClick, onEnter } = this.props;
    if (forbidClick) document.body.classList.add(BODY_FORBID_CLASS);
    if (typeof onEnter === 'function') onEnter();
  };

  handleExit = () => {
    const { forbidClick, onClose, onExited } = this.props;
    if (forbidClick) document.body.classList.remove(BODY_FORBID_CLASS);
    if (typeof onExited === 'function') onExited();
    if (typeof onClose === 'function') onClose();
  };

  handleClose = () => {
    this.setState({ visible: false });
    this.clearTimer();
  };

  handleClick = (e: React.MouseEvent) => {
    const { closeOnClick, onClick } = this.props;
    if (closeOnClick) this.handleClose();
    if (typeof onClick === 'function') onClick(e);
  };

  handleSingle = () => {
    this.setState({ hide: true })
  }

  render() {
    const {
      type,
      message,
      icon,
      iconSize,
      loadingType,
      transition,
      className,
      style,
    } = this.props;
    const { visible, mountNode, hide } = this.state;
    if (!mountNode) return null;

    const renderIcon = () => {
      const hasIcon = icon || type === 'success' || type === 'fail';
      if (hasIcon) {
        if (React.isValidElement(icon)) {
          return icon;
        } else {
          return (
            <Icon
              name={(icon as string) || type}
              size={iconSize}
              className={createClassName(prefixCls, 'icon')}
            />
          );
        }
      }
      if (type === 'loading') {
        return (
          <Loading
            className={createClassName(prefixCls, 'loading')}
            size={iconSize}
            type={loadingType}
          />
        );
      }
      return null;
    };

    const renderMessage = () => {
      const messageClassName = createClassName(prefixCls, 'text');
      if (message) {
        return <div className={messageClassName}>{message}</div>;
      }
      return null;
    };

    const toastClassName = createClassName(prefixCls, 'content');
    const className2Use: string = classnames(toastClassName, className, {
      [`${toastClassName}--icon`]:
        icon || types.slice(1).some((t) => t === type),
    });
    const node = (
      <Popup
        visible={visible}
        fixed={false}
        transition={{
          timeout: 500,
          classNames: 'mooli-fade',
          onEnter: this.handleEnter,
          onExited: this.handleExit,
          ...transition,
        }}
        style={{ display: hide ? 'none' : 'block' }}
      >
        <div
          role="toast"
          className={className2Use}
          style={style}
          onClick={this.handleClick}
        >
          {renderIcon()}
          {renderMessage()}
        </div>
      </Popup>
    );
    return renderToContainer(mountNode as GetContainer, node);
  }
}
