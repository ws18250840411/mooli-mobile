import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Drag } from '../widgets/drag';
import { getElementTranslateY } from './lib/utils';
import { createClassName, range, isObject } from '../utils';

const DEFAULT_DURATION = 200;
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 10;
const componentClassName = createClassName('picker-column');

interface PickerColumnProps {
  valueKey: string;
  readonly?: boolean;
  allowHtml?: boolean;
  itemHeight: number;
  defaultIndex: number;
  swipeDuration: number;
  visibleItemCount: number;
  initialOptions: [];
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  onCollect?: Function;
  onChange?: Function;
}

interface PickerColumnStates {
  offset: number;
  options: any;
}

export class PickerColumn extends React.PureComponent<
  PickerColumnProps,
  PickerColumnStates
> {
  static propTypes = {
    initialOptions: PropTypes.array,
    defaultIndex: PropTypes.number,
  };
  static defaultProps = {
    initialOptions: [],
    defaultIndex: 0,
  };
  private wrapper: React.RefObject<HTMLUListElement>;
  private moving: boolean;
  private duration: number;
  private currentIndex: number;
  private startOffset: number;
  private transitionEndTrigger: any;
  private touchStartTime: number;
  private momentumOffset: number;

  constructor(props: PickerColumnProps) {
    super(props);
    this.state = {
      offset: 0,
      options: [],
    };
    this.moving = false;
    this.duration = 0;
    this.startOffset = 0;
    this.touchStartTime = 0;
    this.momentumOffset = 0;
    this.currentIndex = 0;
    this.transitionEndTrigger = null;
    this.wrapper = React.createRef();
  }
  componentDidMount() {
    if (this.props.onCollect) {
      this.props.onCollect(this);
    }
    this.update();
  }
  componentDidUpdate(prevProps: any) {
    if (
      JSON.stringify(prevProps) !== JSON.stringify(this.props) &&
      JSON.stringify(this.props.initialOptions) !==
        JSON.stringify(this.state.options)
    ) {
      this.update();
    }
  }
  componentWillUnmount() {
    if (this.props.onCollect) {
      this.props.onCollect(this, true);
    }
  }
  update = () => {
    this.setOptions(this.props.initialOptions);
  };
  get baseOffset() {
    return (this.props.itemHeight * (this.props.visibleItemCount - 1)) / 2;
  }
  get count() {
    return this.state.options.length;
  }
  getValue = () => {
    return this.state.options[this.currentIndex];
  };
  setValue = (value: any) => {
    const { options } = this.state;
    for (let i = 0; i < options.length; i++) {
      if (this.getOptionText(options[i]) === value) {
        return this.setIndex(i);
      }
    }
  };
  setOptions = (options: any) => {
    if (JSON.stringify(options) !== JSON.stringify(this.state.options)) {
      this.setState(
        {
          options: [...options],
        },
        () => {
          this.setIndex(this.props.defaultIndex);
        },
      );
    }
  };
  isOptionDisabled = (option: { disabled: boolean }) => {
    return isObject(option) && option.disabled;
  };
  adjustIndex(index: number) {
    index = range(index, 0, this.count);
    for (let i = index; i < this.count; i++) {
      if (!this.isOptionDisabled(this.state.options[i])) return i;
    }
    for (let i = index - 1; i >= 0; i--) {
      if (!this.isOptionDisabled(this.state.options[i])) return i;
    }
  }
  setIndex = (index: number, emitChange?: boolean) => {
    index = this.adjustIndex(index) || 0;
    const offset = -index * this.props.itemHeight;
    const trigger = () => {
      if (index !== this.currentIndex) {
        this.currentIndex = index;
        if (emitChange && this.props.onChange) {
          this.props.onChange(index);
        }
      }
    };
    if (this.moving && offset !== this.state.offset) {
      this.transitionEndTrigger = trigger;
    } else {
      trigger();
    }
    this.setState({
      offset,
    });
  };
  momentum = (distance: number, duration: number) => {
    const speed = Math.abs(distance / duration);
    distance = this.state.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);
    const index = this.getIndexByOffset(distance);
    this.duration = Number(this.props.swipeDuration);
    this.setIndex(index, true);
  };
  stopMomentum = () => {
    this.moving = false;
    this.duration = 0;
    if (this.transitionEndTrigger) {
      this.transitionEndTrigger();
      this.transitionEndTrigger = null;
    }
  };
  getOptionText = (option: { [x: string]: any }) => {
    if (isObject(option) && this.props.valueKey in option) {
      // @ts-ignore
      return option[this.props.valueKey];
    }
    return option;
  };
  genOptions = () => {
    const { options, offset } = this.state;
    const { itemHeight } = this.props;
    const optionStyle = {
      height: `${itemHeight}px`,
    };

    return options.map((option: any, index: number) => {
      const text = this.getOptionText(option);
      const disabled = this.isOptionDisabled(option);

      const currentIndex = Math.abs(offset / itemHeight);
      const itemClassName = createClassName(componentClassName, 'item');
      const className2Use: string = classnames(itemClassName, {
        [`${itemClassName}--selected`]: index === currentIndex,
        [`${itemClassName}--disabled`]: disabled,
      });

      return (
        <li
          key={index}
          className={className2Use}
          style={optionStyle}
          onClick={() => this.onClickItem(index)}
        >
          <div className="mooli-ellipsis">{text}</div>
        </li>
      );
    });
  };
  getIndexByOffset = (offset: number) => {
    return range(
      Math.round(-offset / this.props.itemHeight),
      0,
      this.count - 1,
    );
  };
  onTouchStart = () => {
    const { readonly } = this.props;
    if (readonly) return;

    if (this.moving) {
      const translateY = getElementTranslateY(this.wrapper.current!);
      this.setState({
        offset: Math.min(0, translateY - this.baseOffset),
      });
      this.startOffset = this.state.offset;
    } else {
      this.startOffset = this.state.offset;
    }

    this.duration = 0;
    this.transitionEndTrigger = null;
    this.touchStartTime = Date.now();
    this.momentumOffset = this.startOffset;
  };
  onTouchMove = (_event: Event, position: { y: number }) => {
    const { readonly, itemHeight } = this.props;
    if (readonly) return;

    this.moving = true;
    this.setState({
      offset: range(
        this.startOffset + position.y,
        -(this.count * itemHeight),
        itemHeight,
      ),
    });
    const now = Date.now();
    if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
      this.touchStartTime = now;
      this.momentumOffset = this.state.offset;
    }
  };
  onTouchEnd = () => {
    const { readonly } = this.props;
    if (readonly) return;

    const distance = this.state.offset - this.momentumOffset;
    const duration = Date.now() - this.touchStartTime;
    const allowMomentum =
      duration < MOMENTUM_LIMIT_TIME &&
      Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

    if (allowMomentum) {
      this.momentum(distance, duration);
      return;
    }
    const index = this.getIndexByOffset(this.state.offset);
    this.duration = DEFAULT_DURATION;
    this.setIndex(index, true);
    setTimeout(() => {
      this.moving = false;
    }, 0);
  };
  onTransitionEnd = () => {
    this.stopMomentum();
  };
  onClickItem = (index: number) => {
    if (this.moving || this.props.readonly) {
      return;
    }
    this.transitionEndTrigger = null;
    this.duration = DEFAULT_DURATION;
    this.setIndex(index, true);
  };

  render() {
    const { className, style } = this.props;
    const { offset } = this.state;
    const wrapperStyle = {
      transform: `translate3d(0, ${offset + this.baseOffset}px, 0)`,
      transitionDuration: `${this.duration}ms`,
      transitionProperty: this.duration ? 'all' : 'none',
    };

    const className2Use: string = classnames(componentClassName, className);

    return (
      <Drag
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
      >
        <div className={className2Use}>
          <ul
            ref={this.wrapper}
            style={{ ...style, ...wrapperStyle }}
            className={createClassName(componentClassName, 'wrapper')}
            onTransitionEnd={this.onTransitionEnd}
          >
            {this.genOptions()}
          </ul>
        </div>
      </Drag>
    );
  }
}
