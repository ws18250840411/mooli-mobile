import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Drag } from '../widgets/drag';
import { preventDefault } from '../utils/dom/event';
import { createClassName } from '../utils';
export interface TabContentProps {
  count: number;
  duration?: number;
  animated?: boolean;
  swipeable?: boolean;
  currentIndex: number;
  direction?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: (index: number) => void;
}

const MIN_SWIPE_DISTANCE = 50;

export default class TabContent extends React.PureComponent<TabContentProps> {
  static propTypes = {
    animated: PropTypes.bool,
    swipeable: PropTypes.bool,
  };
  static defaultProps = {};
  public distance: number;
  constructor(props: TabContentProps) {
    super(props);
    this.distance = 0;
  }

  get styles() {
    if (this.props.animated) {
      // 垂直方向
      if (this.props.direction === 'vertical') {
        return {
          transform: `translate3d(0, ${
            -1 * this.props.currentIndex * 100
          }%, 0)`,
          transitionDuration: `${this.props.duration}s`,
        };
      }
      return {
        transform: `translate3d(${-1 * this.props.currentIndex * 100}%, 0, 0)`,
        transitionDuration: `${this.props.duration}s`,
      };
    }
    return {};
  }

  onTouchStart = () => {};

  onTouchMove = (event: Event, position: { x: number; y: number }) => {
    if (this.props.direction === 'horizontal') {
      this.distance = position.x;
    } else {
      this.distance = position.y;
    }
    preventDefault(event, true);
  };

  onTouchEnd = () => {
    const { count, swipeable, currentIndex, onChange } = this.props;
    if (!swipeable) return false;

    const distanceX = Math.abs(this.distance);
    if (distanceX >= MIN_SWIPE_DISTANCE) {
      if (this.distance > 0 && currentIndex !== 0) {
        onChange && onChange(currentIndex - 1);
      } else if (this.distance < 0 && currentIndex !== count - 1) {
        onChange && onChange(currentIndex + 1);
      }
    }
  };

  genChildren = () => {
    if (this.props.animated) {
      const componentClassName = createClassName('tabs');
      return (
        <div
          className={createClassName(componentClassName, 'track')}
          style={this.styles}
        >
          {this.props.children}
        </div>
      );
    }
    return this.props.children;
  };

  render() {
    const {
      count,
      duration = 300,
      direction,
      animated,
      swipeable,
      currentIndex,
      style,
      className,
      children,
      onChange,
      ...rest
    } = this.props;

    const className2Use: string = classnames(className, {
      [`${className}--animated`]: animated,
      [`${className}--${direction}`]: direction,
    });

    if (animated) {
      return (
        <Drag
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
        >
          <div className={className2Use}> {this.genChildren()}</div>
        </Drag>
      );
    }

    return (
      <div className={className2Use} style={style} {...rest}>
        {this.genChildren()}
      </div>
    );
  }
}
