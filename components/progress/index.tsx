import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName, addUnit } from '../utils';

export interface ProgressProps {
  color?: string;
  inactive?: boolean;
  pivotText?: string;
  textColor?: string;
  pivotColor?: string;
  trackColor?: string;
  strokeWidth?: number;
  cssTransition?: boolean;
  percentage: number;
  showPivot?: boolean;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

interface ProgressStates {
  pivotWidth: number;
  progressWidth: number;
}
export default class Progress extends React.PureComponent<
  ProgressProps,
  ProgressStates
> {
  static displayName: 'Progress';
  static propTypes = {
    color: PropTypes.string,
    inactive: PropTypes.bool,
    pivotText: PropTypes.string,
    textColor: PropTypes.string,
    pivotColor: PropTypes.string,
    trackColor: PropTypes.string,
    strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    cssTransition: PropTypes.bool,
    percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    showPivot: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {
    cssTransition: false,
    showPivot: true,
  };
  protected wrapperRef: React.RefObject<any>;
  protected pivotRef: React.RefObject<any>;
  constructor(props: ProgressProps) {
    super(props);
    this.state = {
      pivotWidth: 0,
      progressWidth: 0,
    };
    this.wrapperRef = React.createRef();
    this.pivotRef = React.createRef();
  }
  componentDidMount() {
    this.update();
  }
  componentDidUpdate(prevProps: any) {
    if (prevProps.percentage !== this.props.percentage) {
      this.update();
    }
  }
  update = () => {
    if (this.wrapperRef.current) {
      this.setState({
        progressWidth: this.wrapperRef.current.offsetWidth,
      });
    }
    if (this.pivotRef.current) {
      this.setState({
        pivotWidth: this.pivotRef.current.offsetWidth,
      });
    }
  };
  render() {
    const {
      color,
      inactive,
      pivotText,
      textColor,
      pivotColor,
      trackColor,
      strokeWidth,
      cssTransition = false,
      showPivot = true,
      percentage,
      className,
      children,
      ...rest
    } = this.props;
    const { pivotWidth, progressWidth } = this.state;

    const text = pivotText ?? percentage + '%';
    const hasHowPivot = showPivot && text;
    const background = inactive ? '#cacaca' : color;

    const pivotStyle = cssTransition
      ? {
          color: textColor,
          background: pivotColor || background,
          transform: `translateX(${
            ((progressWidth - pivotWidth) * percentage) / 100
          }px) translateY(-50%)`,
        }
      : {
          color: textColor,
          left: `${((progressWidth - pivotWidth) * percentage) / 100}px`,
          background: pivotColor || background,
        };

    const portionStyle = cssTransition
      ? {
          background,
          transform: `translateX(-${(100 - percentage) / 2}%) scaleX(${
            percentage / 100
          })`,
        }
      : {
          background,
          width: (progressWidth * percentage) / 100 + 'px',
        };

    const wrapperStyle = {
      background: trackColor,
      height: addUnit(strokeWidth),
    };

    const componentClassName = createClassName('progress');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--csstransition`]: cssTransition,
    });

    return (
      <div
        ref={this.wrapperRef}
        className={className2Use}
        style={wrapperStyle}
        {...rest}
      >
        <span
          className={createClassName(componentClassName, 'portion')}
          style={portionStyle}
        />
        {hasHowPivot && (
          <span
            ref={this.pivotRef}
            className={createClassName(componentClassName, 'pivot')}
            style={pivotStyle}
          >
            {text}
          </span>
        )}
        {typeof children === 'function' ? children(text) : children}
      </div>
    );
  }
}
