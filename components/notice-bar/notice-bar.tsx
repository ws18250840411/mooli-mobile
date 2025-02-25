import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Icon from '../icon';
import { createClassName, getUniqueId, range, isString } from '../utils';
import { raf, doubleRaf } from './lib/utils';
import { Keyframes } from './lib/keyframe';
import NoticeBarContext from './lib/context';
import NoticeBarItem from './notice-bar-item';

const componentClassName = createClassName('notice-bar');
export interface NoticeBarProps {
  mode?: string;
  text?: string;
  color?: string;
  wrapable?: boolean;
  background?: string;
  scrollable?: boolean;
  cssTransition?: boolean;
  delay?: number;
  speed?: number;
  vertical?: boolean;
  leftIcon?: React.ReactNode | string;
  rightIcon?: React.ReactNode;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onClose?: Function;
  onReplay?: Function;
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}
export interface NoticeBarState {
  show: boolean;
  offset?: number;
  duration?: number;
  display: boolean;
  animationDuration?: number;
}
export default class NoticeBar extends React.PureComponent<
  NoticeBarProps,
  NoticeBarState
> {
  static Item: typeof NoticeBarItem;
  static displayName: 'NoticeBar';
  static propTypes = {
    mode: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
    wrapable: PropTypes.bool,
    background: PropTypes.string,
    scrollable: PropTypes.bool,
    cssTransition: PropTypes.bool,
    delay: PropTypes.number,
    speed: PropTypes.number,
    vertical: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    onClose: PropTypes.func,
    onReplay: PropTypes.func,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    scrollable: null,
    delay: 2000,
    speed: 60,
    cssTransition: false,
    vertical: false,
  };
  public rootRef: React.RefObject<HTMLDivElement>;
  public wrapRef: React.RefObject<HTMLDivElement>;
  public contentRef: React.RefObject<HTMLDivElement>;
  public wrapWidth: number;
  public contentWidth: number;
  public startTimer: any;
  public keyframeName: string;
  public keyframe: Keyframes;
  public wrapHeight: number;
  public contentHeight: number;
  public active: number;

  constructor(props: NoticeBarProps) {
    super(props);
    this.state = {
      show: true,
      offset: 0,
      duration: 0,
      display: true,
    };
    this.active = 0;
    this.wrapWidth = 0;
    this.contentWidth = 0;
    this.rootRef = React.createRef();
    this.wrapRef = React.createRef();
    this.contentRef = React.createRef();
    this.keyframeName = `${componentClassName}-${getUniqueId()}`;
  }

  componentDidMount() {
    this.keyframe = new Keyframes(this.keyframeName);
    this.start();
  }

  componentWillUnmount() {
    this.keyframe.remove();
  }
  get counts() {
    return React.Children.count(this.props.children);
  }

  reset = () => {
    this.setState({
      offset: 0,
      duration: 0,
    });
    this.wrapWidth = 0;
    this.contentWidth = 0;
  };
  correctPosition = () => {
    this.setState({
      duration: 0,
    });
    if (this.active <= -1) {
      this.move({ pace: this.counts });
    }
    if (this.active >= this.counts) {
      this.move({ pace: -this.counts });
    }
  };

  getTargetActive = (pace: number) => {
    if (pace) {
      return range(this.active + pace, -1, this.counts);
    }
    return this.active;
  };

  getTargetOffset = (targetActive: number, offset = 0) => {
    let currentPosition = targetActive * this.wrapHeight;
    let targetOffset = offset - currentPosition;
    return targetOffset;
  };

  move = ({ pace = 0, offset = 0 }) => {
    if (this.counts <= 1) {
      return;
    }
    const targetActive = this.getTargetActive(pace);
    const targetOffset = this.getTargetOffset(targetActive, offset);
    this.active = targetActive;
    this.setState({
      offset: targetOffset,
    });
  };

  next = () => {
    this.correctPosition();
    doubleRaf(() => {
      this.setState({
        duration: 0.5,
      });
      this.move({
        pace: 1,
      });
    });
  };

  start = () => {
    const {
      cssTransition,
      scrollable,
      speed = 60,
      delay,
      vertical,
    } = this.props;
    const childs = this.counts;
    const wrapWidth = this.wrapRef.current!.getBoundingClientRect().width;
    const wrapHeight = this.wrapRef.current!.getBoundingClientRect().height;
    const contentWidth = this.contentRef.current!.getBoundingClientRect().width;
    const contentHeight =
      this.contentRef.current!.getBoundingClientRect().height;

    if (!vertical) this.reset();
    if (cssTransition) {
      if (
        scrollable ||
        contentWidth > wrapWidth ||
        contentHeight > wrapHeight
      ) {
        if (vertical) {
          if (childs <= 1) return;
          let curChilds = childs + 1;
          const animationDuration = Math.round(
            delay! * (curChilds - 1) + (contentHeight / speed) * 1000,
          );

          const delayPercent = Math.round((delay! * 100) / animationDuration);
          const residue = (100 - delayPercent) / curChilds; // 动画时间
          const move = (100 - residue * curChilds) / (curChilds - 1); // 停留时间
          let startNs = 0;
          let animationContent = '';
          for (let i = 0; i < curChilds; i++) {
            animationContent += `
                ${startNs}%, ${startNs + residue}% {
                  transform: translate3d(0, ${-(i * wrapHeight)}px, 0);
                }
              `;
            if (i < curChilds - 1) {
              startNs = startNs + residue + move;
            } else {
              startNs = startNs + residue;
            }
          }
          this.keyframe.add(animationContent);
          this.setState({ animationDuration });
        } else {
          const animationDuration = Math.round(
            delay! * 2 + (contentWidth / speed) * 1000,
          );
          const delayPercent = Math.round((delay! * 100) / animationDuration);
          const animationContent = `
              0%, ${delayPercent}% {
                transform: translate3d(0, 0, 0);
              }
              ${100 - delayPercent}%, 100% {
                transform: translate3d(${-(contentWidth - wrapWidth)}px, 0, 0);
              }
            `;
          this.keyframe.add(animationContent);
          this.setState({ animationDuration });
        }
      }
    } else {
      clearTimeout(this.startTimer);
      this.startTimer = setTimeout(() => {
        if (
          scrollable ||
          contentWidth > wrapWidth ||
          contentHeight > wrapHeight
        ) {
          if (vertical) {
            this.wrapHeight = wrapHeight;
            this.contentHeight = contentHeight;
            this.next();
          } else {
            doubleRaf(() => {
              this.wrapWidth = wrapWidth;
              this.contentWidth = contentWidth;
              this.setState({
                offset: -contentWidth,
                duration: contentWidth / speed,
              });
            });
          }
        }
      }, delay);
    }
  };

  onTransitionEnd = () => {
    const { cssTransition, speed = 60, onReplay, vertical } = this.props;
    if (cssTransition) return;
    if (vertical) {
      this.setState({
        duration: 0.5,
      });
      this.start();
    } else {
      this.setState({
        offset: this.wrapWidth,
        duration: 0,
      });
      raf(() => {
        doubleRaf(() => {
          this.setState({
            offset: -this.contentWidth,
            duration: (this.contentWidth + this.wrapWidth) / speed,
          });
          if (typeof onReplay === 'function') onReplay();
        });
      });
    }
  };

  onClickIcon = () => {
    const { mode, onClose } = this.props;
    if (typeof onClose === 'function') onClose();
    if (mode === 'closeable') {
      this.setState({ show: false });
    }
  };

  getLeftIconRender = () => {
    const { leftIcon } = this.props;
    const leftIconClassName = createClassName(componentClassName, 'left-icon');

    if (React.isValidElement(leftIcon)) {
      return leftIcon;
    }
    if (isString(leftIcon)) {
      return <Icon className={leftIconClassName} name={String(leftIcon)} />;
    }

    return null;
  };

  getRightIconRender = () => {
    const { rightIcon, mode } = this.props;
    const rightIconClassName = createClassName(
      componentClassName,
      'right-icon',
    );

    if (React.isValidElement(rightIcon)) {
      return rightIcon;
    }

    let iconName: any;
    if (mode === 'closeable') {
      iconName = 'cross';
    } else if (mode === 'link') {
      iconName = 'arrow';
    } else {
      iconName = rightIcon;
    }

    if (isString(iconName)) {
      return (
        <Icon
          className={rightIconClassName}
          name={iconName}
          onClick={this.onClickIcon}
        />
      );
    }

    return null;
  };

  getContentRender = () => {
    const { cssTransition, text, scrollable, wrapable, vertical, children } =
      this.props;
    const { offset, duration, animationDuration } = this.state;

    const contentClassName = createClassName(componentClassName, 'content');
    const className3Use: string = classnames(contentClassName, {
      [`mooli-ellipsis`]: scrollable === false && !wrapable,
    });
    const translateDirection = vertical ? 'Y' : 'X';

    const contentStyle = cssTransition
      ? animationDuration! > 0
        ? {
            animation: `${this.keyframeName} ${animationDuration}ms linear infinite`,
          }
        : undefined
      : {
          transform: offset
            ? `translate${translateDirection}(${offset}px)`
            : '',
          transitionDuration: duration + 's',
        };

    const renderChilds = () => {
      let childrenArrs: any = [];
      let firstChild: any;
      React.Children.forEach(children, (child, index) => {
        const { props } = child as any;
        const curChild = React.cloneElement(child as any, {
          index,
          key: index,
          ...props,
        });
        childrenArrs.push(curChild);
        if (vertical && cssTransition) {
          if (index === 0) {
            firstChild = React.cloneElement(child as any, {
              index: this.counts,
              key: this.counts,
              ...props,
            });
          }
          if (index === this.counts - 1) {
            childrenArrs.push(firstChild);
          }
        }
      });
      return childrenArrs;
    };

    return (
      <div
        ref={this.wrapRef}
        className={createClassName(componentClassName, 'wrap')}
      >
        <div
          ref={this.contentRef}
          className={className3Use}
          style={contentStyle}
          onTransitionEnd={this.onTransitionEnd}
        >
          <NoticeBarContext.Provider
            value={{
              offset: this.state.offset,
              isLast: this.active === this.counts,
            }}
          >
            {(children && renderChilds()) || text}
          </NoticeBarContext.Provider>
        </div>
      </div>
    );
  };

  render() {
    const { wrapable, color, background, vertical, onClick, style, className } =
      this.props;
    const { show } = this.state;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--wrapable`]: wrapable,
      [`${componentClassName}--vertical`]: vertical,
    });

    const barStyle = {
      color: color,
      background: background,
    };

    return (
      <CSSTransition
        appear
        classNames="mooli-fade"
        in={show}
        timeout={500}
        unmountOnExit={true}
        nodeRef={this.rootRef}
      >
        <div
          role="alert"
          ref={this.rootRef}
          className={className2Use}
          style={{ ...barStyle, ...style }}
          onClick={onClick}
        >
          {this.getLeftIconRender()}
          {this.getContentRender()}
          {this.getRightIconRender()}
        </div>
      </CSSTransition>
    );
  }
}
