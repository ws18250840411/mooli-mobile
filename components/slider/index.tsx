import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import { Drag } from '../widgets/drag';
import { createClassName, addUnit } from '../utils';
import { preventDefault } from '../utils/dom/event';

const componentClassName = createClassName('slider');
export interface SliderProps {
  value: any;
  step: number;
  min: number;
  max: number;
  disabled?: boolean;
  vertical?: boolean;
  range?: boolean;
  barHeight?: number;
  button?: React.ReactNode;
  buttonSize?: string;
  activeColor?: string;
  inactiveColor?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: Function;
  onDragStart?: Function;
  onDragEnd?: Function;
}
export default class Slider extends React.PureComponent<SliderProps> {
  static propTypes = {
    step: PropTypes.number,
  };
  static defaultProps = {
    value: 0,
    step: 1,
    min: 0,
    max: 100,
  };
  public wrapperRef: React.RefObject<HTMLDivElement>;
  public index: number;
  public startValue: any;
  public currentValue: any;
  public dragStatus: string;
  constructor(props: SliderProps) {
    super(props);
    this.wrapperRef = React.createRef();
    this.dragStatus = '';
    this.index = 0;
    this.startValue = 0;
    this.currentValue = 0;
  }
  get scope() {
    return this.props.max - this.props.min;
  }
  get buttonStyle() {
    const { buttonSize } = this.props;
    if (!buttonSize) return {};
    const size = addUnit(buttonSize);
    return {
      width: size,
      height: size,
    };
  }

  componentDidMount() {
    this.updateValue(this.props.value);
  }

  updateValue = (value: any) => {
    const { range, onChange } = this.props;
    if (range) {
      value = this.handleOverlap(value).map(this.format);
    } else {
      value = this.format(value);
    }
    if (!this.isSameValue(value, this.startValue)) {
      console.log(`value: ${value}`);
      onChange && onChange(value);
    }
  };

  isSameValue = (newValue: any, oldValue: any) => {
    return JSON.stringify(newValue) === JSON.stringify(oldValue);
  };

  format = (value: number) => {
    return (
      Math.round(
        Math.max(this.props.min, Math.min(value, this.props.max)) /
          this.props.step,
      ) * this.props.step
    );
  };

  handleOverlap = (value: any[]) => {
    if (value[0] > value[1]) {
      value = cloneDeep(value);
      return value.reverse();
    }
    return value;
  };

  onTouchStart = () => {
    if (this.props.disabled) {
      return;
    }
    this.currentValue = this.props.value;
    if (this.props.range) {
      this.startValue = this.props.value.map(this.format);
    } else {
      this.startValue = this.format(this.props.value);
    }
    this.dragStatus = 'start';
  };
  onTouchMove = (event: any, position: any) => {
    if (this.props.disabled) {
      return;
    }

    if (this.props.onDragStart) this.props.onDragStart();

    preventDefault(event, true);

    this.dragStatus = 'draging';

    const rect = this.wrapperRef.current!.getBoundingClientRect();
    const delta = this.props.vertical ? position.y : position.x;
    const total = this.props.vertical ? rect.height : rect.width;
    const diff = (delta / total) * this.scope;

    if (this.props.range) {
      this.currentValue[this.index] = this.startValue[this.index] + diff;
    } else {
      this.currentValue = this.startValue + diff;
    }
    this.updateValue(this.currentValue);
  };
  onTouchEnd = () => {
    if (this.props.disabled) {
      return;
    }
    if (this.dragStatus === 'draging') {
      this.updateValue(this.currentValue);
      if (this.props.onDragEnd) this.props.onDragEnd();
    }
    this.dragStatus = '';
  };
  onClick = (event) => {
    event.stopPropagation();
    if (this.props.disabled) {
      return;
    }
    const { vertical, min, range } = this.props;
    const rect = this.wrapperRef.current!.getBoundingClientRect();
    const delta = vertical
      ? event.clientY - rect.top
      : event.clientX - rect.left;
    const total = vertical ? rect.height : rect.width;

    let value: any = Number(min) + (delta / total) * this.scope;

    if (range) {
      let [left, right] = this.props.value;
      const middle = (left + right) / 2;
      if (value <= middle) {
        left = value;
      } else {
        right = value;
      }
      value = [left, right];
    }

    this.startValue = this.props.value;
    this.updateValue(value);
  };

  renderButton = () => {
    const { disabled, button } = this.props;
    return (
      <Drag
        onTouchStart={() => {
          this.index = 1;
          this.onTouchStart();
        }}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
      >
        <div
          tabIndex={disabled ? -1 : 0}
          className={createClassName(
            componentClassName,
            'button-wrapper-right',
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {button || (
            <div
              className={createClassName(componentClassName, 'button')}
              style={this.buttonStyle}
            />
          )}
        </div>
      </Drag>
    );
  };
  renderButtonGroup = () => {
    const { disabled, button } = this.props;
    return (
      <>
        <Drag
          onTouchStart={() => {
            this.index = 0;
            this.onTouchStart();
          }}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
        >
          <div
            tabIndex={disabled ? -1 : 0}
            className={createClassName(
              componentClassName,
              'button-wrapper-left',
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {button || (
              <div
                className={createClassName(componentClassName, 'button')}
                style={this.buttonStyle}
              />
            )}
          </div>
        </Drag>

        {this.renderButton()}
      </>
    );
  };
  render() {
    const {
      value = 0,
      step = 1,
      min = 0,
      max = 100,
      disabled,
      vertical,
      range,
      barHeight,
      button,
      buttonSize,
      activeColor,
      inactiveColor,
      className,
      children,
      onChange,
      onDragEnd,
      onDragStart,
      ...rest
    } = this.props;

    const mainAxis = vertical ? 'height' : 'width';
    const crossAxis = vertical ? 'width' : 'height';

    const wrapperStyle: any = {
      background: inactiveColor,
    };
    wrapperStyle[crossAxis] = addUnit(barHeight);

    // 长度百分比
    const calcMainAxis = () => {
      if (range) {
        return `${((value[1] - value[0]) * 100) / this.scope}%`;
      }
      return `${((value - min) * 100) / this.scope}%`;
    };
    // 偏移量
    const calcOffset = () => {
      if (range) {
        return `${((value[0] - min) * 100) / this.scope}%`;
      }
      return null;
    };
    const barStyle: any = {
      left: vertical ? null : calcOffset(),
      top: vertical ? calcOffset() : null,
      background: activeColor,
    };
    barStyle[mainAxis] = calcMainAxis();

    if (this.dragStatus) {
      barStyle.transition = 'none';
    }

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--disabled`]: disabled,
      [`${componentClassName}--vertical`]: vertical,
    });

    return (
      <div
        ref={this.wrapperRef}
        className={className2Use}
        style={wrapperStyle}
        onClick={this.onClick}
        {...rest}
      >
        <div
          className={createClassName(componentClassName, 'bar')}
          style={barStyle}
        >
          {range ? this.renderButtonGroup() : this.renderButton()}
        </div>
      </div>
    );
  }
}
