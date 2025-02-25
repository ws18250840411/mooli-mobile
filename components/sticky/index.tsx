import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  createClassName,
  eventStore,
  isHidden,
  getScrollTop,
  getElementTop,
  unitToPx,
} from '../utils';

export interface StickyProps {
  zIndex?: number;
  offsetTop: number;
  container?: any;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: (isFixed: boolean) => void;
  onScroll?: (scrollTop: number, isFixed: boolean) => void;
}

interface StickyStates {
  fixed: boolean;
  transform: {};
}

export default class Sticky extends React.PureComponent<
  StickyProps,
  StickyStates
> {
  static propTypes = {
    zIndex: PropTypes.number,
  };
  static defaultProps = {
    offsetTop: 0,
  };
  public rootRef: React.RefObject<HTMLDivElement>;
  public events: {
    add: (
      node: EventTarget,
      type: string,
      handler: any,
      options?: {} | undefined,
    ) => any;
    removeAll: () => any;
  };
  public height: number;
  public offsetTopPx: number;
  public container: any;
  public flog: boolean;
  constructor(props: StickyProps) {
    super(props);
    this.state = {
      fixed: false,
      transform: 0,
    };
    this.rootRef = React.createRef();
    this.events = eventStore();
    this.flog = false;
  }
  componentDidMount() {
    if (this.rootRef.current) {
      this.events
        .add(this.rootRef.current, 'scroll', this.onscroll)
        .add(window, 'scroll', this.onscroll);
      this.height = this.rootRef.current.offsetHeight;
      this.container =
        this.props.container && document.getElementById(this.props.container);
      this.offsetTopPx = unitToPx(this.props.offsetTop);
    }
  }

  componentWillUnmount() {
    this.events.removeAll();
  }

  componentDidUpdate(_prevProps: any, prevState: any) {
    if (this.props.onChange) this.props.onChange(prevState.fixed);
  }

  emitScroll = (scrollTop: number, isFixed: boolean) => {
    if (this.props.onScroll) this.props.onScroll(scrollTop, isFixed);
  };

  onscroll = () => {
    if (!this.rootRef.current || isHidden(this.rootRef.current)) return;
    const scrollTop = getScrollTop(window);
    const topToPageTop = getElementTop(this.rootRef.current);

    if (this.container) {
      const bottomToPageTop = topToPageTop + this.container.offsetHeight;
      if (scrollTop + this.offsetTopPx + this.height > bottomToPageTop) {
        const distanceToBottom = this.height + scrollTop - bottomToPageTop;
        if (distanceToBottom < this.height) {
          this.emitScroll(scrollTop, true);
          this.setState({
            fixed: true,
            transform: -(distanceToBottom + this.offsetTopPx),
          });
          this.flog = true;
        } else {
          this.emitScroll(scrollTop, false);
          if (!this.flog) return;
          this.setState({ fixed: false });
          this.flog = false;
        }
        return;
      }
    }
    if (scrollTop + this.offsetTopPx > topToPageTop) {
      this.emitScroll(scrollTop, true);
      if (this.flog) return;
      this.setState({ fixed: true, transform: 0 });
      this.flog = true;
    } else {
      this.emitScroll(scrollTop, false);
      if (!this.flog) return;
      this.setState({ fixed: false });
      this.flog = false;
    }
  };

  get curStyle() {
    const { fixed, transform } = this.state;
    if (!fixed) return null;

    const { zIndex } = this.props;
    const style: any = {};

    if (zIndex) {
      style.zIndex = zIndex;
    }

    if (this.offsetTopPx && fixed) {
      style.top = `${this.offsetTopPx}px`;
    }

    if (transform) {
      style.transform = `translate3d(0, ${transform}px, 0)`;
    }

    return style;
  }

  render() {
    const { fixed } = this.state;
    const {
      zIndex,
      offsetTop,
      container,
      className,
      children,
      onChange,
      onScroll,
      ...rest
    } = this.props;

    const componentClassName = createClassName('sticky');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--fixed`]: fixed,
    });
    const rootStyle: any = {
      height: fixed ? `${this.height}px` : null,
    };

    return (
      <div ref={this.rootRef} style={rootStyle} {...rest}>
        <div style={this.curStyle} className={className2Use}>
          {children}
        </div>
      </div>
    );
  }
}
