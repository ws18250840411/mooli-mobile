import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Image from '../image';
import Popup from '../popup';
import Swiper from '../swiper/swiper';
import Icon from '../icon';
import { createClassName } from '../utils';
import { renderToContainer, GetContainer } from '../utils/renderToContainer';

export interface ImagePreviewProps {
  visible?: boolean;
  images?: any[];
  initial?: number;
  showIndex?: boolean;
  showIndicators?: boolean;
  closeable?: boolean;
  closeIcon?: string;
  closeIconPosition?: string;
  maskClosable?: boolean;
  loop?: boolean;
  lock?: boolean;
  destroy?: boolean;
  getContainer?: GetContainer;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  onClose?: () => void;
  onChange?: (index: number) => void;
}

export default class ImagePreview extends React.PureComponent<ImagePreviewProps> {
  static propTypes = {
    visible: PropTypes.bool,
    images: PropTypes.array,
    initial: PropTypes.number,
    showIndex: PropTypes.bool,
    showIndicators: PropTypes.bool,
    closeable: PropTypes.bool,
    closeIcon: PropTypes.string,
    closeIconPosition: PropTypes.string,
    maskClosable: PropTypes.bool,
    loop: PropTypes.bool,
    lock: PropTypes.bool,
    destroy: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    onClose: PropTypes.func,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    closeIcon: 'clear',
    closeIconPosition: 'top-right',
    maskClosable: true,
    showIndex: true,
    loop: true,
    getContainer: typeof document !== 'undefined' ? document.body : null,
  };
  static create: (options: ImagePreviewProps) => { close: () => void };
  constructor(props: ImagePreviewProps) {
    super(props);
    this.state = {
      index: 0,
      ismove: false,
      touchStartTime: new Date(),
    };
  }
  onTouchStart = () => {
    if (!this.props.maskClosable) return;
    this.setState({
      ismove: false,
      touchStartTime: new Date(),
    });
  };
  onTouchMove = () => {
    if (!this.props.maskClosable) return;
    this.setState({
      ismove: true,
    });
  };
  onTouchEnd = () => {
    if (!this.props.maskClosable) return;
    const { ismove, touchStartTime } = this.state as any;
    const { onClose } = this.props;
    const deltaTime = Number(new Date()) - Number(touchStartTime);
    if (onClose && !ismove && deltaTime < 250) onClose();
    this.setState({
      ismove: false,
    });
  };
  render() {
    const {
      visible,
      images,
      closeable,
      closeIcon = 'clear',
      closeIconPosition = 'top-right',
      maskClosable = true,
      showIndex = true,
      showIndicators,
      initial = 0,
      loop = true,
      lock,
      destroy,
      getContainer,
      className,
      onClose,
      onChange,
      ...rest
    } = this.props;
    const componentClassName = createClassName('image-preview');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--loading`]: true,
    });

    const popupTransition = {
      timeout: 500,
      classNames: 'mooli-fade',
    };
    const renderIndex = () => {
      if (showIndex && images?.length) {
        const { index = 0 } = this.state as any;
        const indexClassName = createClassName(componentClassName, 'index');
        return (
          <div className={indexClassName}>{`${Number(index) + 1} / ${
            images.length
          }`}</div>
        );
      }
      return null;
    };

    const renderClose = () => {
      if (closeable) {
        const iconClassName = createClassName(componentClassName, 'close-icon');
        const className3Use: string = classnames(iconClassName, {
          [`${iconClassName}--${closeIconPosition}`]: closeIconPosition,
        });
        return (
          <Icon
            name={closeIcon}
            className={className3Use}
            onClick={() => onClose && onClose()}
          />
        );
      }
      return null;
    };

    const renderSwiper = () => {
      if (images && images.length > 0) {
        return (
          <Swiper
            loop
            indicator={showIndicators}
            initial={initial}
            onChange={(index) => {
              this.setState({ index });
              if (onChange) onChange(index);
            }}
            {...rest}
          >
            {images?.map((item, index) => (
              <Image
                onMouseUp={this.onTouchEnd}
                onMouseMove={this.onTouchMove}
                onMouseDown={this.onTouchStart}
                key={index}
                fit="contain"
                src={item}
              />
            ))}
          </Swiper>
        );
      }
      return null;
    };
    const node = (
      <Popup
        className={className2Use}
        transition={popupTransition}
        visible={visible}
        destroy={destroy}
        lock={lock}
      >
        {renderClose()}
        {renderIndex()}
        {renderSwiper()}
      </Popup>
    );
    return renderToContainer(getContainer as GetContainer, node);
  }
}
