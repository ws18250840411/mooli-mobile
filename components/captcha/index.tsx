import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Loading from '../loading';
import Overlay from '../overlay';
import { Drag } from '../widgets/drag';
import { createClassName } from '../utils';

const componentClassName = createClassName('captcha');

interface ImageProps {
  src?: string;
  alt?: string;
  fit?: string;
  round?: boolean;
  width?: string;
  height?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
}

export interface CaptchaProps {
  backdrop?: ImageProps;
  slideblock?: ImageProps;
  loading?: boolean;
  children?: React.ReactNode;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  onChange?: Function;
  onFinish?: Function;
  onRefresh?: Function;
  onTouchStart?: Function;
  onTouchMove?: Function;
  onTouchEnd?: Function;
}

export interface CaptchaStates {
  value: number;
}

export default class Captcha extends React.PureComponent<
  CaptchaProps,
  CaptchaStates
> {
  public wrapRef: React.RefObject<any>;
  public sliderRef: React.RefObject<any>;
  public grayRef: React.RefObject<any>;
  public dragStatus: string;
  public startValue: number;
  public currentValue: number;
  public ratio: number;
  static displayName: 'Captcha';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {};

  constructor(props: CaptchaProps) {
    super(props);
    this.state = {
      value: 0,
    };
    this.dragStatus = '';
    this.startValue = 0;
    this.currentValue = 0;
    this.ratio = 1;

    this.wrapRef = React.createRef();
    this.grayRef = React.createRef();
    this.sliderRef = React.createRef();
  }

  sliderDiff() {
    const wrapRect = this.wrapRef.current!.getBoundingClientRect();
    const slideRect = this.sliderRef.current!.getBoundingClientRect();
    return wrapRect.width - slideRect.width;
  }
  grayDiff() {
    const wrapRect = this.wrapRef.current!.getBoundingClientRect();
    const grayRect = this.grayRef.current!.getBoundingClientRect();
    return wrapRect.width - grayRect.width;
  }
  hasMove() {
    const { loading, backdrop, slideblock } = this.props;
    if (!loading && backdrop?.src && slideblock?.src) return false;
    return true;
  }
  updateValue = (value: number) => {
    if (value >= 0 && value <= this.sliderDiff() && value <= this.grayDiff()) {
      this.setState({ value });
    }
    if (this.props.onChange) this.props.onChange(this.state.value);
  };
  onTouchStart = () => {
    if (this.hasMove()) return;
    if (this.props.onTouchStart) this.props.onTouchStart();
    this.startValue = this.state.value;
    this.dragStatus = 'start';
  };
  onTouchMove = (_event: any, position: any) => {
    if (this.hasMove()) return;
    if (this.props.onTouchMove) this.props.onTouchMove();
    this.currentValue = this.startValue + position.x;
    this.updateValue(this.currentValue);
    this.dragStatus = 'draging';
  };
  onTouchEnd = () => {
    if (this.hasMove()) return;
    if (this.props.onTouchEnd) this.props.onTouchEnd();
    if (this.props.onFinish) this.props.onFinish(this.state.value, this.ratio);
    this.dragStatus = 'end';
  };
  handleRefresh = () => {
    const { onRefresh } = this.props;
    if (onRefresh) {
      onRefresh();
    }
  };
  handleLoad = (e: any) => {
    const { naturalWidth, width } = e.target || e.srcElement;
    this.ratio = naturalWidth / width;
  };
  reset = () => {
    this.setState({ value: 0 });
    this.dragStatus = '';
    this.startValue = 0;
    this.currentValue = 0;
  };
  renderPanel() {
    const { backdrop, slideblock, loading, children } = this.props;
    const captchaClassName = createClassName(componentClassName, 'panel');

    const curSlideblock = { ...slideblock };
    const sliderStyle: React.CSSProperties = {
      left: this.state.value,
      ...(slideblock?.style || {}),
    };
    delete curSlideblock?.style;

    return (
      <div className={captchaClassName}>
        <div className={createClassName(captchaClassName, 'placeholder')}>
          {!loading && (
            <div className={createClassName(captchaClassName, 'bg-slider')}>
              {backdrop!.src && (
                <img
                  className={createClassName(captchaClassName, 'bg-img')}
                  alt="验证码背景"
                  onLoad={this.handleLoad}
                  {...backdrop}
                />
              )}
              {curSlideblock!.src && (
                <img
                  ref={this.sliderRef}
                  className={createClassName(captchaClassName, 'slider-img')}
                  style={sliderStyle}
                  alt="验证码滑块"
                  {...curSlideblock}
                />
              )}
              <span
                onClick={this.handleRefresh}
                className={createClassName(captchaClassName, 'refresh')}
              />
            </div>
          )}
          <Overlay
            className={createClassName(captchaClassName, 'loading')}
            visible={loading}
          >
            <div className={createClassName(captchaClassName, 'loading-wrap')}>
              <Loading vertical size="56" color="#FED000" />
            </div>
          </Overlay>
          {children}
        </div>
      </div>
    );
  }
  renderControl() {
    const controlClassName = createClassName(componentClassName, 'control');
    const grayStyle: React.CSSProperties = {
      width: `calc(100% - ${this.state.value}px)`,
    };
    return (
      <div className={controlClassName}>
        <Drag
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
        >
          <div
            style={grayStyle}
            className={createClassName(controlClassName, 'gray')}
          >
            <em />
            <span
              ref={this.grayRef}
              className={createClassName(controlClassName, 'button')}
            />
          </div>
        </Drag>
      </div>
    );
  }
  render() {
    const { className } = this.props;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--loading`]: true,
    });

    return (
      <div ref={this.wrapRef} className={className2Use}>
        {this.renderPanel()}
        {this.renderControl()}
      </div>
    );
  }
}
