import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Loading from '../loading';
import { createClassName, eventStore } from '../utils';

export interface ListProps {
  error?: boolean | React.ReactNode;
  errorText?: string;
  loading?: boolean | React.ReactNode;
  loadingText?: string;
  loadingStyle?: {};
  finished?: boolean | React.ReactNode;
  finishedText?: string;
  immediateCheck?: boolean;
  offset: number;
  direction?: 'down' | 'up';
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onLoad?: () => void;
}

export interface ListState {
  innerLoading?: boolean;
}

const componentClassName = createClassName('list');
export default class List extends React.PureComponent<ListProps, ListState> {
  static propTypes = {
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    immediateCheck: PropTypes.bool,
    offset: PropTypes.number,
    direction: PropTypes.string,
  };
  static defaultProps = {
    loadingText: '加载中...',
    errorText: '请求失败，点击重新加载',
    immediateCheck: true,
    offset: 300,
    direction: 'down',
  };
  public rootRef: React.RefObject<HTMLDivElement>;
  public placeholderRef: React.RefObject<HTMLDivElement>;
  public events: {
    add: (
      node: EventTarget,
      type: string,
      handler: any,
      options?: {} | undefined,
    ) => any;
    removeAll: () => any;
  };

  constructor(props: ListProps) {
    super(props);
    this.state = {
      innerLoading: Boolean(props.loading) || false,
    };
    this.rootRef = React.createRef();
    this.placeholderRef = React.createRef();
    this.events = eventStore();
  }

  static getDerivedStateFromProps(
    prevProps: { loading: any },
    prevState: { innerLoading: any },
  ) {
    if (prevProps.loading !== prevState.innerLoading) {
      return {
        innerLoading: prevProps.loading,
      };
    }
    return null;
  }

  componentDidMount() {
    this.events
      .add(this.rootRef.current!, 'scroll', this.check)
      .add(window, 'scroll', this.check);
  }

  componentWillUnmount() {
    this.events.removeAll();
  }

  clickErrorText = () => {
    const { onLoad } = this.props;
    if (onLoad) onLoad();
  };

  check = (e: { currentTarget: any; target: any; srcElement: any }) => {
    const { innerLoading } = this.state;
    const { finished, error, direction, offset, onLoad } = this.props;

    if (innerLoading || finished || error) {
      return;
    }

    let scrollerRect: any;
    const scroller = e.currentTarget || e.target || e.srcElement;
    if (scroller.getBoundingClientRect) {
      scrollerRect = scroller.getBoundingClientRect();
    } else {
      scrollerRect = {
        top: 0,
        bottom: scroller.innerHeight,
      };
    }

    const scrollerHeight = scrollerRect.bottom - scrollerRect.top;
    if (!scrollerHeight) {
      return false;
    }
    let isReachEdge = false;
    const placeholderRect =
      this.placeholderRef.current!.getBoundingClientRect();
    if (direction === 'up') {
      isReachEdge = scrollerRect.top - placeholderRect.top <= offset;
    } else {
      isReachEdge = placeholderRect.bottom - scrollerRect.bottom <= offset;
    }

    // 是否到达边缘
    if (isReachEdge) {
      this.setState({ innerLoading: true });
      if (onLoad) onLoad();
    }
  };

  loadingRender = () => {
    const { innerLoading } = this.state;
    const { finished, loading, loadingText, loadingStyle } = this.props;

    if (innerLoading && !finished) {
      const loadingClassName = createClassName(componentClassName, 'loading');
      return (
        <div className={loadingClassName}>
          {(React.isValidElement(loading) && loading) || (
            <Loading size="16" {...loadingStyle}>
              {loadingText}
            </Loading>
          )}
        </div>
      );
    }
    return null;
  };

  finishedTextRender = () => {
    const { finished, finishedText } = this.props;

    if (finished) {
      const finishedTextClassName = createClassName(
        componentClassName,
        'finished-text',
      );
      return (
        <div className={finishedTextClassName}>
          {(React.isValidElement(finished) && finished) || finishedText}
        </div>
      );
    }
    return null;
  };

  errorTextRender = () => {
    const { innerLoading } = this.state;
    const { error, finished, errorText } = this.props;
    if (error && !finished && !innerLoading) {
      const errorTextClassName = createClassName(
        componentClassName,
        'error-text',
      );
      return (
        <div className={errorTextClassName} onClick={this.clickErrorText}>
          {(React.isValidElement(error) && error) || errorText}
        </div>
      );
    }
    return null;
  };

  placeholderRender = () => {
    return (
      <div
        ref={this.placeholderRef}
        key="placeholder"
        className={createClassName(componentClassName, 'placeholder')}
      />
    );
  };

  render() {
    const {
      error,
      finished,
      errorText,
      loading,
      loadingText,
      loadingStyle,
      finishedText,
      immediateCheck,
      offset,
      direction,
      className,
      children,
      onLoad,
      ...rest
    } = this.props;

    const className2Use: string = classnames(componentClassName, className);

    return (
      <div ref={this.rootRef} className={className2Use} {...rest}>
        {direction === 'down' ? children : this.placeholderRender()}
        {this.loadingRender()}
        {this.finishedTextRender()}
        {this.errorTextRender()}
        {direction === 'up' ? children : this.placeholderRender()}
      </div>
    );
  }
}
