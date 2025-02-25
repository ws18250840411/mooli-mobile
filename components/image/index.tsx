import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { createClassName, addUnit } from '../utils';

const componentClassName = createClassName('image');

export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
export interface ImageProps {
  src?: string;
  alt?: string;
  fit?: ImageFit;
  round?: boolean;
  width?: string;
  height?: string;
  radius?: string;
  iconSize?: string;
  showError?: boolean;
  iconPrefix?: string;
  showLoading?: boolean;
  errorIcon?: string;
  errorIndicator?: React.ReactNode;
  loadingIcon?: string;
  loadingIndicator?: React.ReactNode;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  onError?: React.ReactEventHandler<HTMLImageElement>;
  onMouseUp?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onMouseMove?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onMouseDown?: React.EventHandler<React.MouseEvent<HTMLElement>>;
}

interface ImageStates {
  error: boolean;
  loading: boolean;
}
export default class Image extends React.PureComponent<
  ImageProps,
  ImageStates
> {
  static displayName: 'Image';
  static propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    round: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    radius: PropTypes.string,
    iconSize: PropTypes.string,
    showError: PropTypes.bool,
    iconPrefix: PropTypes.string,
    showLoading: PropTypes.bool,
    errorIcon: PropTypes.string,
    errorIndicator: PropTypes.node,
    loadingIcon: PropTypes.string,
    loadingIndicator: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    onClick: PropTypes.func,
    onLoad: PropTypes.func,
    onError: PropTypes.func,
  };
  static defaultProps = {
    showLoading: true,
    showError: true,
    loadingIcon: 'photo',
    errorIcon: 'photo-fail',
  };
  constructor(props: ImageProps) {
    super(props);
    this.state = {
      error: false,
      loading: true,
    };
  }

  componentDidUpdate(prevProps: any): void {
    if(prevProps.src !== this.props.src){
      this.setState({
        error: false,
        loading: true,
      })
    }
  }

  renderLoadingIcon = () => {
    const { iconPrefix, loadingIndicator, iconSize, loadingIcon } = this.props;
    const iconClassName = createClassName(componentClassName, 'loading-icon');
    const className3Use: string = classnames(iconClassName, iconPrefix);

    if (React.isValidElement(loadingIndicator)) {
      return loadingIndicator;
    }
    return (
      <Icon className={className3Use} size={iconSize} name={loadingIcon} />
    );
  };

  renderErrorIcon = () => {
    const { iconPrefix, errorIndicator, iconSize, errorIcon } = this.props;
    const errorClassName = createClassName(componentClassName, 'error-icon');
    const className4Use: string = classnames(errorClassName, iconPrefix);

    if (React.isValidElement(errorIndicator)) {
      return errorIndicator;
    }
    return <Icon className={className4Use} size={iconSize} name={errorIcon} />;
  };

  renderPlaceholder = () => {
    const { showLoading, showError } = this.props;
    const { loading, error } = this.state;
    if (loading && showLoading) {
      return (
        <div className={createClassName(componentClassName, 'loading')}>
          {this.renderLoadingIcon()}
        </div>
      );
    }
    if (error && showError) {
      return (
        <div className={createClassName(componentClassName, 'error')}>
          {this.renderErrorIcon()}
        </div>
      );
    }
    return null;
  };

  renderImage = () => {
    const { src, fit, alt, onLoad, onError, onClick } = this.props;
    const { error } = this.state;
    if (error && !src) return null;

    const style: React.CSSProperties = {};
    if (fit) style.objectFit = fit;

    const imgClassName = createClassName(componentClassName, 'img');
    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      this.setState({ loading: false });
      if (typeof onLoad === 'function') onLoad(e);
    };

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      this.setState({
        error: true,
        loading: false,
      });
      if (typeof onError === 'function') onError(e);
    };

    return (
      <img
        src={src}
        alt={alt}
        className={imgClassName}
        style={style}
        onClick={onClick}
        onLoad={handleLoad}
        onError={handleError}
      />
    );
  };

  render() {
    const {
      src,
      alt,
      fit,
      round,
      width,
      height,
      radius,
      showLoading = true,
      showError = true,
      loadingIndicator,
      loadingIcon = 'photo',
      iconSize,
      iconPrefix,
      errorIndicator,
      errorIcon = 'photo-fail',
      className,
      style,
      children,
      onClick,
      onLoad,
      onError,
      ...rest
    } = this.props;
    const componentClassName = createClassName('image');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--round`]: round,
    });

    const style2Use: React.CSSProperties = {};
    if (width) style2Use.width = addUnit(width);
    if (height) style2Use.height = addUnit(height);
    if (radius) {
      style2Use.overflow = 'hidden';
      style2Use.borderRadius = addUnit(radius);
    }

    return (
      <div
        className={className2Use}
        style={{ ...style2Use, ...style }}
        {...rest}
      >
        {this.renderImage()}
        {this.renderPlaceholder()}
        {children}
      </div>
    );
  }
}
