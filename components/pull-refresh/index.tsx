import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName, getScrollTop } from '../utils';
import { preventDefault } from '../utils/dom/event';
import { Drag } from '../widgets/drag';
import Loading from '../loading';

const componentClassName = createClassName('pull-refresh');
export interface PullRefreshProps {
  pullDistance?: number;
  headHeight?: number;
  finished?: boolean; // 是否加载完成
  disabled?: boolean; // 是否禁用下拉刷新
  pulling?: React.ReactNode; // 下拉过程提示内容
  loosing?: string; // 释放过程提示内容
  loading?: string; // 加载过程提示内容
  success?: string; // 刷新成功提示内容
  pullingText?: string; // 下拉过程提示文案
  loosingText?: string; // 释放过程提示文案
  loadingText?: string; // 加载过程提示文案
  successText?: string; // 刷新成功提示文案
  successDuration?: number; // 刷新成功提示展示时长(ms)
  animationDuration?: number; // 动画时长
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onRefresh: () => Promise<any>; // 下拉刷新时触发
}

interface PullRefreshStates {
  status: string;
  ceiling: boolean;
  distance: any;
  duration: any;
}
export default class PullRefresh extends React.PureComponent<
  PullRefreshProps,
  PullRefreshStates
> {
  static displayName: 'PullRefresh';
  static propTypes = {
    pullDistance: PropTypes.number,
    headHeight: PropTypes.number,
    finished: PropTypes.bool,
    disabled: PropTypes.bool,
    pulling: PropTypes.node,
    loading: PropTypes.string,
    success: PropTypes.string,
    pullingText: PropTypes.string,
    loosingText: PropTypes.string,
    loadingText: PropTypes.string,
    successText: PropTypes.string,
    successDuration: PropTypes.number,
    animationDuration: PropTypes.number,
    onRefresh: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
  };
  static defaultProps = {
    headHeight: 50,
    finished: false,
    animationDuration: 300,
    successDuration: 500,
    pullingText: '下拉即可刷新...',
    loosingText: '释放即可刷新...',
    loadingText: '加载中...',
    disabled: false,
  };
  protected rootRef: React.RefObject<any>;
  constructor(props: PullRefreshProps) {
    super(props);
    this.state = {
      status: 'normal',
      ceiling: false,
      distance: 0,
      duration: 0,
    };
    this.rootRef = React.createRef();
  }
  get touchable() {
    return (
      this.state.status !== 'loading' &&
      this.state.status !== 'success' &&
      !this.props.disabled
    );
  }
  get headStyle() {
    if (this.props.headHeight !== 50) {
      return {
        height: `${this.props.headHeight}px`,
      };
    }
    return {};
  }

  componentDidUpdate(prevProps: any) {
    if (
      prevProps.finished !== this.props.finished ||
      prevProps.children !== this.props.children
    ) {
      this.update();
    }
  }

  update = () => {
    const { finished, success, successText, successDuration } = this.props;
    if (finished && (success || successText)) {
      this.setState({ status: 'success' });
      setTimeout(() => {
        this.updateStatus(0);
        this.setState({ status: 'normal' });
      }, successDuration);
    } else {
      this.updateStatus(0, false);
    }
  };

  checkPullStart = () => {
    if (!this.rootRef || !this.rootRef.current) return;
    const ceiling = getScrollTop(this.rootRef.current) === 0;
    this.setState({ ceiling });
    if (ceiling) this.setState({ duration: 0 });
  };

  updateStatus = (
    distance: React.SetStateAction<number>,
    finish?: boolean | undefined,
  ) => {
    const { pullDistance, headHeight } = this.props;
    let curStatus: any;
    if (finish) {
      curStatus = 'loading';
    } else if (distance === 0) {
      curStatus = 'normal';
    } else {
      curStatus =
        distance < (pullDistance || headHeight || 0) ? 'pulling' : 'loosing';
    }
    this.setState({ distance });
    if (curStatus !== this.state.status) this.setState({ status: curStatus });
  };

  ease = (distance: any) => {
    const { pullDistance, headHeight } = this.props;
    const curPullDistance = Number(pullDistance || headHeight);
    if (distance > curPullDistance) {
      if (distance < curPullDistance * 2) {
        distance = curPullDistance + (distance - curPullDistance) / 2;
      } else {
        distance = curPullDistance * 1.5 + (distance - curPullDistance * 2) / 4;
      }
    }
    return Math.round(distance);
  };

  onTouchStart = () => {
    if (this.touchable) this.checkPullStart();
  };

  onTouchMove = (event: Event, position: { y: number }) => {
    if (!this.touchable) return;
    if (!this.state.ceiling) this.checkPullStart();
    preventDefault(event, true);
    if (this.state.ceiling && position.y >= 0) {
      const distance = this.ease(position.y);
      this.updateStatus(distance);
    }
  };

  onTouchEnd = () => {
    const { animationDuration, headHeight, onRefresh } = this.props;
    if (this.touchable && this.state.ceiling) {
      this.setState({ duration: animationDuration });
      if (this.state.status === 'loosing') {
        this.updateStatus(Number(headHeight), true);
        if (onRefresh) onRefresh();
      } else {
        this.updateStatus(0);
      }
    }
  };

  pullDownRender = () => {
    const {
      disabled,
      pulling,
      pullingText,
      loosing,
      loosingText,
      success,
      successText,
      loadingText,
    } = this.props;
    const { status } = this.state;
    if (disabled) return null;
    const pullDownClassName = createClassName(componentClassName, 'head');
    const textClassName = createClassName(pullDownClassName, 'text');
    const textNodes: any = [];

    if (status === 'pulling') {
      textNodes.push(
        <div key="pulling" className={textClassName}>
          {pulling || pullingText}
        </div>,
      );
    }
    if (status === 'loosing') {
      textNodes.push(
        <div key="loosing" className={textClassName}>
          {loosing || loosingText}
        </div>,
      );
    }
    if (status === 'success') {
      textNodes.push(
        <div key="success" className={textClassName}>
          {success || successText}
        </div>,
      );
    }
    if (status === 'loading') {
      textNodes.push(
        <Loading key="loading" size="16">
          {loadingText}
        </Loading>,
      );
    }
    return (
      <div className={pullDownClassName} style={this.headStyle}>
        {textNodes}
      </div>
    );
  };

  trackRender = () => {
    const { children } = this.props;
    const trackClassName = createClassName(componentClassName, 'track');
    return (
      <div className={trackClassName}>
        {this.pullDownRender()}
        {children}
      </div>
    );
  };

  render() {
    const {
      pullDistance,
      headHeight = 50,
      finished = false,
      animationDuration = 300,
      successDuration = 500,
      pulling,
      loosing,
      loading,
      success,

      pullingText = '下拉即可刷新...',
      loosingText = '释放即可刷新...',
      loadingText = '加载中...',
      successText,

      disabled = false,

      className,
      children,
      onRefresh,
      ...rest
    } = this.props;
    const { duration, distance } = this.state;

    const className2Use: string = classnames(componentClassName, className);
    const trackStyle = {
      transitionDuration: `${duration}ms`,
      transform: distance ? `translate3d(0,${distance}px, 0)` : '',
    };

    const touchableClassName = createClassName(componentClassName, 'touchable');

    return (
      <div ref={this.rootRef} className={className2Use} {...rest}>
        <Drag
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
        >
          <div className={touchableClassName} style={trackStyle}>
            {this.trackRender()}
          </div>
        </Drag>
      </div>
    );
  }
}
