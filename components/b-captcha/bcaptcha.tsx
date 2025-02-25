import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Captcha from '../captcha';
import Overlay from '../overlay';
import Popup from '../popup';
import Toast from '../toast';
import { createClassName } from '../utils';
import { renderToContainer, GetContainer } from '../utils/renderToContainer';
import { ajax } from './lib/fetch';

const componentClassName = createClassName('bcaptcha');
const BACKDROPWIDTH = 248;

interface ActionType {
  getStrategyFetchUrl?: string; // 获取安全策略
  getCaptchaFetchUrl?: string; // 获取滑块
  validatorCaptchaFetchUrl?: string; // 滑块验证
  validationFetchUrl?: string; // 安全策略校验
}

export interface BCaptchaProps {
  action: ActionType;
  method?: string;
  withCredentials?: boolean;
  headers?: object;
  type?: string;
  phoneNumber: number | string;
  operationId?: number | string;
  duration?: number;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  callback?: Function;
}

interface BCaptchaState {
  mountNode: GetContainer;
  loading: boolean;
  backdropUrl: string;
  slideblockUrl: string;
  status: string;
  showStatus: boolean;
  visible: boolean;
}

export default class BCaptcha extends React.PureComponent<
  BCaptchaProps,
  BCaptchaState
> {
  static displayName: 'BCaptcha';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {
    duration: 2000,
  };
  ratio: number;
  backdrop: {};
  slideblock: {};
  catchLastImgSource: never[];
  requestId: any;
  takeTime: number;
  captchaRef: React.RefObject<any>;
  timer: any;
  constructor(props: BCaptchaProps) {
    super(props);
    this.state = {
      mountNode: null,
      visible: true,
      // loading: true,
      loading: false,
      backdropUrl: '',
      slideblockUrl: '',
      // status: '',
      status: '',
      showStatus: true,
    };
    this.captchaRef = React.createRef();
    this.backdrop = {};
    this.slideblock = {};
    this.ratio = 1;
    this.takeTime = 0;
    this.timer = null;
  }
  componentDidMount() {
    if (!this.state.mountNode) this.setState({ mountNode: document.body });
    this.getSliderCaptcha();
  }
  getSliderCaptcha() {
    const { action, operationId, callback } = this.props;
    if (!operationId || !action.getCaptchaFetchUrl) return;

    this.setState({ loading: true });
    ajax({
      url: action.getCaptchaFetchUrl,
      data: { operationId },
      onSuccess: async (res) => {
        if (res.success) {
          await this.loadImg(res.data);
          this.setState({
            loading: false,
          });
        } else {
          callback && callback(true, { operationId });
          res.errMsg && Toast({ message: res.errMsg });
        }
      },
      onError: (e: any) => {
        callback && callback(e, {});
      },
    });
  }
  async loadImg(data: any) {
    const { smallImageUrl, bigImageUrl, yLength, requestId } = data;
    const slideWidth: any = await this.calculateWidthAndHeight(smallImageUrl);
    const bgWidth: any = await this.calculateWidthAndHeight(bigImageUrl);
    const ratio = BACKDROPWIDTH / bgWidth;
    this.requestId = requestId;
    // 滑块
    this.slideblock = {
      src: smallImageUrl,
      width: slideWidth * ratio,
      height: slideWidth * ratio,
      style: {
        top: yLength * ratio,
      },
    };
    // 背景图
    this.backdrop = {
      src: bigImageUrl,
    };
  }
  async calculateWidthAndHeight(imgUrl: string) {
    return new Promise((resove) => {
      const img = new Image();
      img.src = imgUrl;
      if (img.complete) {
        resove(Number(img.naturalWidth || img.width));
      }
      img.onload = () => {
        resove(Number(img.naturalWidth || img.width));
      };
    });
  }
  validatorCaptcha(moveLength: number) {
    const { operationId, action, callback } = this.props;
    if (
      !moveLength ||
      !this.requestId ||
      !operationId ||
      !action.validatorCaptchaFetchUrl
    ) {
      return;
    }
    console.log(`moveLength: ${moveLength}`);
    ajax({
      url: action.validatorCaptchaFetchUrl,
      data: {
        moveLength,
        operationId,
        requestId: this.requestId,
      },
      onSuccess: async (res) => {
        if (res.success) {
          const status = this.getStatus(res.data.status);
          if (status === 'success') {
            this.checkValid(status);
          } else {
            this.updateStatus(status, 2000, () => {
              if (status === 'timeout') {
                this.handleRefresh();
              } else {
                this.reset();
              }
            });
          }
        } else {
          this.reset();
          callback && callback(true, { operationId });
          res.errMsg && Toast({ message: res.errMsg });
        }
      },
      onError: (e: any) => {
        callback && callback(e, {});
      },
    });
  }
  checkValid = (status: string) => {
    const { operationId, phoneNumber, action, callback } = this.props;
    if (!operationId || !phoneNumber || !action.validationFetchUrl) return;

    ajax({
      url: action.validationFetchUrl,
      data: {
        operationId,
        phoneNumber,
        securityMethods: ['image'],
        image: 1,
      },
      onSuccess: (res) => {
        if (res.success && res.data.operationStatus === 100) {
          // 计算耗时
          const startTime = this.takeTime;
          this.takeTime = Date.now() - startTime;
          // 更新UI
          this.updateStatus(status, 1000, () => {
            callback && callback(false, { operationId });
            this.reset();
            this.setState({ visible: false });
          });
        } else {
          res.errMsg && Toast({ message: res.errMsg });
          this.reset();
          callback && callback(true, { operationId });
        }
      },
      onError: (e: any) => {
        callback && callback(e, {});
      },
    });
  };
  updateStatus = (
    status: string,
    duration = this.props.duration,
    cb?: () => void,
  ) => {
    this.setState({ status, showStatus: true });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ showStatus: false });
      cb && cb();
    }, duration);
  };
  getStatus = (state: number) => {
    let status: string;
    switch (state) {
      case 0:
        status = 'success'; // 成功
        break;
      case 600:
        status = 'timeout'; // 超时
        break;
      case 500:
        status = 'frequency'; // 超次数
        break;
      default:
        status = 'fail'; // 失败
        break;
    }
    return status;
  };
  reset = () => {
    if (this.captchaRef.current) {
      this.captchaRef.current.reset();
    }
  };
  close = () => {
    this.setState({ visible: false });
  };
  handleTouchStart = () => {
    this.takeTime = Date.now();
  };
  handleRefresh = () => {
    this.getSliderCaptcha();
  };
  handleFinish = (value: number, ratio: number) => {
    const offset = value * ratio;
    if (offset) {
      this.validatorCaptcha(offset);
    }
  };
  renderResult() {
    const { status, showStatus } = this.state;
    if (status) {
      const resultClassName = createClassName(componentClassName, 'result');
      const className3Use: string = classnames(resultClassName, {
        [`${resultClassName}--${status}`]: true,
      });

      const text = () => {
        if (status === 'success') {
          return (
            <>
              Keren! Kamu menyelesaikannya dalam{' '}
              {(this.takeTime / 1000).toFixed(2)} detik
            </>
          );
        }
        if (status === 'timeout') {
          return <>Maaf, mohon selesaikan dalam 60 detik.</>;
        }
        if (status === 'fail') {
          return <>Verifikasi gagal, silakan coba lagi!</>;
        }
      };

      return (
        <Overlay className={className3Use} visible={showStatus}>
          <div>
            <em className={createClassName(resultClassName, 'icon')} />
            <p className={createClassName(resultClassName, 'descript')}>
              {text()}
            </p>
          </div>
        </Overlay>
      );
    }
    return null;
  }
  render() {
    const { className } = this.props;
    const { mountNode, visible, loading, status } = this.state;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--loading`]: true,
    });
    const isTooMany = status === 'frequency';

    const node = (
      <Popup className={className2Use} visible={visible} destroy={true}>
        {isTooMany ? (
          <div className={createClassName(componentClassName, 'frequency')}>
            <div
              className={createClassName(componentClassName, 'frequency-icon')}
            />
            <h2>Oops..kamu telah gagal berulang kali!</h2>
            <p>Silakan coba lagi dalam 30 menit</p>
            <div
              onClick={this.close}
              className={createClassName(componentClassName, 'frequency-btn')}
            >
              Batal
            </div>
          </div>
        ) : (
          <>
            <div className={createClassName(componentClassName, 'container')}>
              <div className={createClassName(componentClassName, 'header')}>
                <h3>Verify</h3>
                <p>
                  For security reason, please slide the slider below to complete
                  verification.
                </p>
              </div>
              <div className={createClassName(componentClassName, 'body')}>
                <Captcha
                  ref={this.captchaRef}
                  loading={loading}
                  backdrop={this.backdrop}
                  slideblock={this.slideblock}
                  onTouchStart={this.handleTouchStart}
                  onRefresh={this.handleRefresh}
                  onFinish={this.handleFinish}
                >
                  {this.renderResult()}
                </Captcha>
              </div>
            </div>
            <span
              onClick={this.close}
              className={createClassName(componentClassName, 'close')}
            />
          </>
        )}
      </Popup>
    );
    return renderToContainer(mountNode, node);
  }
}
