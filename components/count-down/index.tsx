import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName, inBrowser, raf, cancelRaf } from '../utils';
import { isSameSecond, parseTimeData, parseFormat } from './lib/utils';

export interface CountDownProps {
  millisecond?: boolean;
  time: number;
  format: string;
  autoStart: boolean;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onFinish?: Function;
  onChange?: Function;
}

export interface CountDownState {
  remain: number;
}

export default class CountDown extends React.PureComponent<
  CountDownProps,
  CountDownState
> {
  static propTypes = {
    millisecond: PropTypes.bool,
    time: PropTypes.number,
    format: PropTypes.string,
  };
  static defaultProps = {
    time: 0,
    format: 'HH:mm:ss',
    autoStart: true,
  };
  public rafId: number;
  public endTime: number;
  public counting: boolean;
  constructor(props: CountDownProps) {
    super(props);
    this.state = {
      remain: 0,
    };
  }
  componentDidMount() {
    this.reset();
  }
  componentWillUnmount() {
    this.pause();
  }
  get timeData() {
    return parseTimeData(this.state.remain);
  }
  start = () => {
    if (this.counting) {
      return;
    }
    this.counting = true;
    this.endTime = Date.now() + this.state.remain;
    this.tick();
  };
  pause = () => {
    this.counting = false;
    cancelRaf(this.rafId);
  };
  reset = () => {
    const { time, autoStart } = this.props;
    this.pause();
    this.setState(
      {
        remain: time,
      },
      () => {
        if (autoStart) {
          this.start();
        }
      },
    );
  };
  tick = () => {
    if (!inBrowser) return;
    if (this.props.millisecond) {
      this.microTick();
    } else {
      this.macroTick();
    }
  };
  microTick = () => {
    this.rafId = raf(() => {
      if (!this.counting) {
        return;
      }
      const remain = this.getRemain();
      this.setRemain(remain);
      if (remain > 0) {
        this.microTick();
      }
    });
  };
  macroTick = () => {
    this.rafId = raf(() => {
      if (!this.counting) {
        return;
      }
      const remain = this.getRemain();
      if (!isSameSecond(remain, this.state.remain) || remain === 0) {
        this.setRemain(remain);
      }
      if (remain > 0) {
        this.macroTick();
      }
    });
  };
  getRemain() {
    return Math.max(this.endTime - Date.now(), 0);
  }
  setRemain(remain: number) {
    const { onChange, onFinish } = this.props;
    this.setState({ remain }, () => {
      if (typeof onChange === 'function') onChange(this.timeData);
      if (remain === 0) {
        this.pause();
        if (typeof onFinish === 'function') onFinish();
      }
    });
  }

  render() {
    const { format, className, children } = this.props;

    const componentClassName = createClassName('count-down');
    const className2Use: string = classnames(componentClassName, className);

    const formattedTime = parseFormat(format, this.timeData);

    return (
      <div className={className2Use}>
        {typeof children === 'function'
          ? children(this.timeData)
          : formattedTime}
      </div>
    );
  }
}
