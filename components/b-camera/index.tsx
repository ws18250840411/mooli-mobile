import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Camera, { CameraProps } from '../camera';
import { createClassName, getViewportSize } from '../utils';

const componentClassName = createClassName('bcamera');

export interface BCameraProps extends CameraProps {
  type: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onFinish?: (imgSrc: string) => void;
}

interface BCameraStates {
  isFinish: boolean;
  isHold: boolean;
}

export default class BCamera extends React.PureComponent<
  BCameraProps,
  BCameraStates
> {
  static displayName: 'BCamera';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {
    type: 'ID', // 'hold'
  };
  static defaultRatio = {
    width: 1440,
    height: 1080,
  }; // 分辨率
  public cameraRef: React.RefObject<any>;
  constructor(props: BCameraProps) {
    super(props);
    this.cameraRef = React.createRef();
    this.state = {
      isFinish: false,
      isHold: props.type === 'hold',
    };
  }

  changeStatus = (isFinish: boolean) => {
    this.setState({
      isFinish,
    });
  };

  switchCamera = () => {
    this.setState({
      isHold: !this.state.isHold,
    });
  };

  getScreenshot = () => {
    // if (this.cameraRef.current) {
    //   const imgSrc = this.cameraRef.current.getScreenshot({
    //     width: BCamera.defaultRatio.height,
    //     height: BCamera.defaultRatio.width,
    //   });
    //   this.changeStatus(true);
    //   if (this.props.onFinish) this.props.onFinish(imgSrc);
    // }
  };

  renderFooter = () => {
    const footerClassName = createClassName(componentClassName, 'footer');
    const className3Use: string = classnames(footerClassName, {
      [`${componentClassName}--isFinish`]: this.state.isFinish,
    });
    return (
      <div className={className3Use}>
        <div className={createClassName(componentClassName, 'footer-body')}>
          {this.state.isFinish ? (
            <>
              <span
                className={createClassName(componentClassName, 'remake')}
                onClick={this.getScreenshot}
              >
                Remake
              </span>
              <span
                className={createClassName(componentClassName, 'kirim')}
                onClick={this.getScreenshot}
              >
                Kirim
              </span>
            </>
          ) : (
            <>
              <span
                className={createClassName(componentClassName, 'remake')}
                onClick={this.getScreenshot}
              >
                Cancel
              </span>
              <em onClick={this.getScreenshot} />
              {this.props.type === 'hold' && <i onClick={this.switchCamera} />}
            </>
          )}
        </div>
      </div>
    );
  };

  render() {
    const { type, className, style, children, onFinish, ...rest } = this.props;

    const videoConstraints = {
      ...BCamera.defaultRatio,
      facingMode: this.state.isHold ? 'user' : 'environment', // environment、user
    };

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${type}`]: type,
    });
    const { width } = getViewportSize();

    return (
      <div className={className2Use} style={style}>
        <div className={createClassName(componentClassName, 'camera')}>
          <Camera
            ref={this.cameraRef}
            videoConstraints={videoConstraints}
            height={(width * 4) / 3}
            {...rest}
          />
          {children}
        </div>
        {this.renderFooter()}
      </div>
    );
  }
}
