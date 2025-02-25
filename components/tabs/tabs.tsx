import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TabContext from './lib/tabContext';
import TabPaneContext from './lib/tabPaneContext';
import TabBar from './tab-bar';
import TabContent from './tab-content';
import TabPane from './tab-pane';
import Sticky from '../sticky';
import { scrollLeftTo } from './lib/utils';
import { createClassName, addUnit } from '../utils';

export interface TabsProps {
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  direction?: string;
  type?: string;
  active?: number;
  ellipsis: boolean;
  duration?: number;
  offsetTop?: number;
  lazyRender?: boolean;
  swipeThreshold: number;
  color?: string;
  border?: boolean;
  sticky?: boolean;
  animated?: boolean;
  swipeable?: boolean;
  scrollspy?: boolean;
  background?: string;
  lineWidth?: number | string;
  lineHeight?: number | string;
  titleActiveColor?: string;
  titleInactiveColor?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  beforeChange?: () => void;
  onDisabled?: (index: number) => void;
  onClick?: (index: number) => void;
  onChange?: (index: number) => void;
  onSticktScroll?: () => void;
}

export interface TabsState {
  currentIndex: any;
  lineStyle: any;
}

const componentClassName = createClassName('tabs');

export default class Tabs extends React.PureComponent<TabsProps, TabsState> {
  static TabPane: typeof TabPane;
  static propTypes = {
    type: PropTypes.string,
  };
  static defaultProps = {
    disabled: false,
    swipeable: false,
    direction: 'horizontal',
    defaultValue: 0,
    type: 'line',
    active: 0,
    ellipsis: true,
    duration: 0.3,
    offsetTop: 0,
    lazyRender: true,
    swipeThreshold: 5,
  };
  events: {
    add: (
      node: EventTarget,
      type: string,
      handler: any,
      options?: {} | undefined,
    ) => any;
    removeAll: () => any;
  };
  public tabBarRef: React.RefObject<HTMLDivElement>;
  public shouldAnimate: boolean;

  constructor(props: TabsProps) {
    super(props);
    this.state = {
      currentIndex: props.value || props.defaultValue,
      lineStyle: {
        backgroundColor: this.props.color,
      },
    };
    this.shouldAnimate = false;
    this.tabBarRef = React.createRef();
  }

  get scrollable() {
    const { children, swipeThreshold, ellipsis } = this.props;
    return React.Children.count(children) > swipeThreshold || !ellipsis;
  }

  get navStyle() {
    return {
      borderColor: this.props.color,
      background: this.props.background,
    };
  }

  componentDidMount() {
    const { children } = this.props;
    if (React.Children.count(children)) {
      this.setLine();
      this.scrollIntoView(true);
      this.shouldAnimate = true;
    }
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.value !== this.props.value) {
      this.setCurrentIndex(Number(this.props.value));
    }
    if (
      React.Children.count(prevProps.children) !==
      React.Children.count(this.props.children)
    ) {
      this.setLine();
      this.scrollIntoView(true);
      this.shouldAnimate = true;
    }
  }

  onTabChange(index: number) {
    this.setCurrentIndex(index);
    const { onClick, onChange } = this.props;
    typeof onClick === 'function' && onClick(index);
    this.state.currentIndex !== index &&
      typeof onChange === 'function' &&
      onChange(index);
  }
  setCurrentIndex = (index: number) => {
    if (this.state.currentIndex !== index) {
      this.setState({ currentIndex: index }, () => {
        this.scrollIntoView();
        this.setLine();
      });
    }
  };
  scrollIntoView = (immediate?: boolean | undefined) => {
    if (!this.scrollable || !this.tabBarRef.current) return;
    const { currentIndex } = this.state;
    const { duration, direction } = this.props;
    const tabBar = this.tabBarRef.current;
    const tabEle = tabBar.children[currentIndex] as any;
    let to: number;
    let type: string;

    if (direction === 'horizontal') {
      to = tabEle.offsetLeft - (tabBar.offsetWidth - tabEle.offsetWidth) / 2;
      type = 'scrollLeft';
    } else {
      to = tabEle.offsetTop - (tabBar.offsetHeight - tabEle.offsetHeight) / 2;
      type = 'scrollTop';
    }
    scrollLeftTo(tabBar, to, immediate ? 0 : Number(duration), type);
  };
  setLine = () => {
    const { currentIndex } = this.state;
    const { lineWidth, lineHeight, color, duration, direction } = this.props;
    const tabEle = this.tabBarRef.current?.children[currentIndex] as any;
    if (tabEle) {
      let lineStyle: React.CSSProperties = {};

      if (direction === 'horizontal') {
        const left = tabEle.offsetLeft + tabEle.offsetWidth / 2;
        lineStyle = {
          width: addUnit(lineWidth),
          backgroundColor: color,
          transform: `translateX(${left}px) translateX(-50%)`,
        };
      } else {
        const top = tabEle.offsetTop + tabEle.offsetHeight / 2;
        lineStyle = {
          width: addUnit(lineWidth),
          backgroundColor: color,
          transform: `translateY(${top}px) translateY(-50%)`,
        };
      }

      if (this.shouldAnimate) {
        lineStyle.transitionDuration = `${duration}s`;
      }

      if (lineHeight) {
        const height = addUnit(lineHeight);
        lineStyle.height = height;
        lineStyle.borderRadius = height;
      }

      this.setState({
        lineStyle,
      });
    }
    return;
  };

  handleNavClick(item: any, index: number) {
    if (item.props.disabled) {
      const { onDisabled } = this.props;
      typeof onDisabled === 'function' && onDisabled(index);
      return;
    }
    this.onTabChange(index);
  }

  renderLine = () => {
    if (this.props.type === 'line') {
      const underlineClassName = createClassName(
        componentClassName,
        'underline',
      );
      return (
        <div className={underlineClassName} style={this.state.lineStyle} />
      );
    }
    return null;
  };

  renderNavs = () => {
    const { type, titleActiveColor, titleInactiveColor } = this.props;
    const navClassName = createClassName(componentClassName, 'nav');
    const className4Use: string = classnames(navClassName, {
      [`${navClassName}--${type}`]: type,
      [`${navClassName}--complete`]: this.scrollable,
    });

    const navs = React.Children.toArray(this.props.children);

    return (
      <div className={className4Use} ref={this.tabBarRef}>
        {navs.length > 0 && (
          <>
            {navs.map((nav: any, index) => (
              <TabBar
                key={index}
                type={type}
                scrollable={this.scrollable}
                isActive={Number(this.state.currentIndex) === Number(index)}
                activeColor={titleActiveColor}
                inactiveColor={titleInactiveColor}
                onClick={() => this.handleNavClick(nav, index)}
                {...nav.props}
              />
            ))}
            {this.renderLine()}
          </>
        )}
      </div>
    );
  };

  renderWrap = () => {
    const { type, border, sticky, offsetTop, direction, onSticktScroll } =
      this.props;
    const wrapClassName = createClassName(componentClassName, 'wrap');
    const isVertical = direction === 'vertical';
    const className5Use: string = classnames(wrapClassName, {
      [`mooli-hairline--top-bottom`]: type === 'line' && border && !isVertical,
      [`mooli-hairline--right`]: isVertical && border,
      [`${wrapClassName}--scrollable`]: this.scrollable,
    });
    const wrap = <div className={className5Use}>{this.renderNavs()}</div>;

    if (sticky) {
      return (
        <Sticky
          container="tabsConatiner"
          offsetTop={offsetTop}
          onScroll={onSticktScroll}
        >
          {wrap}
        </Sticky>
      );
    }

    return wrap;
  };

  renderPanes = () => {
    const { animated, duration, swipeable, direction } = this.props;
    const contentClassName = createClassName(componentClassName, 'content');
    const panes = React.Children.toArray(this.props.children);
    return (
      <TabContent
        count={panes.length}
        animated={animated}
        duration={duration}
        direction={direction}
        swipeable={swipeable}
        currentIndex={Number(this.state.currentIndex)}
        className={contentClassName}
        onChange={this.setCurrentIndex}
      >
        {panes.map((pane, tabKey) => {
          return (
            <TabPaneContext.Provider key={tabKey} value={{ tabKey }}>
              {pane}
            </TabPaneContext.Provider>
          );
        })}
      </TabContent>
    );
  };

  render() {
    const {
      type,
      active,
      ellipsis,
      duration,
      direction,
      offsetTop,
      lazyRender,
      swipeThreshold,
      color,
      border,
      sticky,
      animated,
      swipeable,
      scrollspy,
      background,
      lineWidth,
      lineHeight,
      titleActiveColor,
      titleInactiveColor,
      className,
      children,
      onDisabled,
      onChange,
      onClick,
      onSticktScroll,
      ...rest
    } = this.props;
    const { currentIndex } = this.state;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${type}`]: type,
      [`${componentClassName}--${direction}`]: direction,
    });

    return (
      <TabContext.Provider value={{ activeKey: currentIndex, animated }}>
        <div id="tabsConatiner" className={className2Use} {...rest}>
          {this.renderWrap()}
          {this.renderPanes()}
        </div>
      </TabContext.Provider>
    );
  }
}
