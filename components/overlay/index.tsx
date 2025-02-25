import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { createClassName, noop } from '../utils';
import { preventDefault } from '../utils/dom/event';

export interface OverlayProps {
  visible: boolean;
  duration?: number;
  lockScroll?: boolean; // 是否锁定背景滚动
  destory?: boolean;
  className?: string; // 自定义类名
  zIndex?: React.CSSProperties['zIndex'];
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function preventTouchMove(event: any) {
  preventDefault(event, true);
}

interface OverlayStates {
  display: boolean;
}

export default class Overlay extends React.PureComponent<
  OverlayProps,
  OverlayStates
> {
  static displayName: 'Overlay';
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    destory: PropTypes.bool,
    lockScroll: PropTypes.bool,
    zIndex: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {
    visible: false,
    destory: false,
    lockScroll: true,
  };
  protected rootRef: React.RefObject<any>;
  constructor(props: OverlayProps) {
    super(props);
    this.state = {
      display: props.visible,
    };
    this.rootRef = React.createRef();
  }

  render() {
    const {
      visible = false,
      destory = false,
      lockScroll = true,
      zIndex,
      duration,
      className,
      style,
      children,
      onClick,
      ...rest
    } = this.props;

    const { display } = this.state;
    const componentClassName = createClassName('overlay');
    const className2Use: string = classnames(componentClassName, className);
    const style2Use: React.CSSProperties = {
      zIndex,
      display: display ? '' : 'none',
    };
    if (duration) {
      style2Use.animationDuration = `${duration}s`;
    }

    return (
      <CSSTransition
        appear
        classNames="mooli-fade"
        in={visible}
        timeout={1000}
        unmountOnExit={destory}
        onEnter={() => this.setState({ display: true })}
        onExited={() => this.setState({ display: false })}
        nodeRef={this.rootRef}
      >
        <div
          ref={this.rootRef}
          className={className2Use}
          style={{ ...style2Use, ...style }}
          onTouchMove={lockScroll ? preventTouchMove : noop}
          onClick={onClick}
          {...rest}
        >
          {children}
        </div>
      </CSSTransition>
    );
  }
}
