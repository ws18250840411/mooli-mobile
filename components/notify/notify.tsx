import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Popup, { PopupProps } from '../popup';
import { createClassName } from '../utils';
import { renderToContainer, GetContainer } from '../utils/renderToContainer';

export const btype = ['info', 'success', 'warning', 'danger'] as const;
export type NotifyType = typeof btype[number];

export interface NotifyProps extends PopupProps {
  visible?: boolean;
  color?: string;
  message?: React.ReactNode;
  background?: string;
  duration?: number;
  type?: NotifyType;
  getContainer?: GetContainer;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

interface ToastState {
  mountNode: GetContainer;
}

export interface NotifyProps extends PopupProps {
  visible?: boolean;
  color?: string;
  message?: React.ReactNode;
  background?: string;
  duration?: number;
  type?: NotifyType;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

export default class Notify extends React.PureComponent<
  NotifyProps,
  ToastState
> {
  static info: (props: any) => { close: () => void };
  static success: (props: any) => { close: () => void };
  static warning: (props: any) => { close: () => void };
  static danger: (props: any) => { close: () => void };
  static close: () => void;
  static setDefaultOptions: (options: NotifyProps) => void;
  static resetDefaultOptions: () => void;
  static propTypes = {
    visible: PropTypes.bool,
  };
  static defaultProps = {
    visible: false,
  };

  constructor(props: NotifyProps) {
    super(props);
    this.state = {
      mountNode: null,
    };
  }

  componentDidMount() {
    if (!this.state.mountNode) this.setState({ mountNode: document.body });
  }

  render() {
    const {
      visible,
      message,
      color,
      background,
      type,
      className,
      style,
      children,
      ...rest
    } = this.props;
    const { mountNode } = this.state;
    const componentClassName = createClassName('notify');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${type}`]: btype.some((t) => t === type),
    });
    const style2Use: React.CSSProperties = { color, background };

    let content = message || children;

    const node = (
      <Popup
        position="top"
        mask={false}
        visible={visible}
        className={className2Use}
        style={{ ...style2Use, ...style }}
        {...rest}
      >
        {typeof content === 'function' ? content() : content}
      </Popup>
    );
    return renderToContainer(mountNode, node);
  }
}
