import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import SwiperItem from './swiper-item';
import MooliCarousel, {
  MooliCarouselType,
  MooliOptionsType,
} from 'mooli-carousel';
import { canUseDOM } from './lib/utils';
import { createClassName, isBoolean, raf, cancelRaf } from '../utils';

export interface SwiperProps {
  mode?: 'slide' | 'scroll';
  initial?: number;
  loop?: boolean;
  autoPlay?: boolean | number;
  indicator?: boolean;
  touchable?: boolean;
  thumb?: boolean;
  thumbNode?: React.ReactNode;
  progress?: boolean;
  align?: 'start' | 'center' | 'end' | number;
  vertical?: boolean;
  slideNums?: number;
  direction?: 'ltr' | 'rtl';
  scale?: boolean;
  arrow?: boolean; // 是否显示箭头
  arrowIcon?: string; // 是否显示箭头
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onChange?: (index: number) => void;
  onScroll?: (index: number, progress: number) => void;
  onRef?: (ref: MooliCarouselType) => void;
}

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false;
}

const componentClassName = createClassName('swiper');

const AUTOPLAY_INTERVAL = 4000;

interface SwiperStates {
  prevBtnEnabled: boolean;
  nextBtnEnabled: boolean;
  selectedIndex: number;
  scrollProgress: number;
  scrollSnaps: number[];
}
export default class Swiper extends React.PureComponent<
  SwiperProps,
  SwiperStates
> {
  static Item: typeof SwiperItem;
  static displayName: 'Swiper';
  static propTypes = {
    mode: PropTypes.string,
    initial: PropTypes.number,
    loop: PropTypes.bool,
    autoPlay: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    indicator: PropTypes.bool,
    touchable: PropTypes.bool,
    thumb: PropTypes.bool,
    thumbNode: PropTypes.node,
    progress: PropTypes.bool,
    vertical: PropTypes.bool,
    slideNums: PropTypes.number,
    scale: PropTypes.bool,
    arrow: PropTypes.bool,
    arrowIcon: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    onChange: PropTypes.func,
    onScroll: PropTypes.func,
    onRef: PropTypes.func,
  };
  static defaultProps = {
    mode: 'slide',
    loop: false,
    autoPlay: false,
    arrow: false,
    indicator: false,
    thumb: false,
    vertical: false,
    progress: false,
    scale: false,
    touchable: true,
    initial: 0,
    slideNums: 1,
    direction: 'ltr',
    align: 'start',
    arrowIcon: 'arrow-left',
  };
  protected rafId: number;
  protected timer: any;
  protected isAutoplay: any;
  protected embla: MooliCarouselType | null;
  protected emblaThumbs: MooliCarouselType | null;
  protected viewportRef: React.RefObject<any>;
  protected thumbViewportRef: React.RefObject<any>;
  constructor(props: SwiperProps) {
    super(props);
    this.state = {
      prevBtnEnabled: false,
      nextBtnEnabled: false,
      selectedIndex: 0,
      scrollProgress: 0,
      scrollSnaps: [],
    };
    this.viewportRef = React.createRef();
    this.thumbViewportRef = React.createRef();
    this.isAutoplay = props.autoPlay;
    if (isBoolean(props.autoPlay) && props.autoPlay) {
      this.isAutoplay = AUTOPLAY_INTERVAL;
    }
  }
  componentDidMount() {
    if (canUseDOM()) {
      this.initViewport();
      this.initThumbViewport();
    }
    if (this.isAutoplay) {
      this.play();
    }
  }
  componentDidUpdate(_prevProps: any, prevState: any) {
    if (
      this.props.onChange &&
      prevState.selectedIndex !== this.state.selectedIndex
    ) {
      this.props.onChange(this.state.selectedIndex);
    }
  }
  componentWillUnmount() {
    this.embla = null;
    this.emblaThumbs = null;
    this.timer = null;
    cancelRaf(this.rafId);
  }
  initViewport = () => {
    const {
      mode = 'slide',
      loop = false,
      thumb = false,
      vertical = false,
      progress = false,
      scale = false,
      touchable = true,
      initial = 0,
      slideNums = 1,
      direction = 'ltr',
      align = 'start',
      onRef,
    } = this.props;
    let dragFree = false;
    if (progress) dragFree = true;
    if (thumb) dragFree = false;
    if (mode === 'scroll') dragFree = true;
    const viewportOptions: MooliOptionsType = {
      containScroll: 'keepSnaps',
      skipSnaps: false,
      slidesToScroll: slideNums,
      axis: vertical ? 'y' : 'x',
      align: scale ? 'center' : align,
      startIndex: initial,
      draggable: touchable,
      loop,
      dragFree,
      direction,
    };
    this.embla = MooliCarousel(this.viewportRef.current, viewportOptions);
    this.embla.on('select', this.onSelect);
    this.embla.on('scroll', this.onScroll);
    this.embla.on('pointerDown', this.stop);
    this.embla.on('pointerUp', () => {
      if (!this.isAutoplay) return;
      if (this.timer) clearTimeout(this.timer);
      this.play();
    });
    if (this.props.indicator) {
      this.setState({
        scrollSnaps: this.embla.scrollSnapList(),
      });
    }
    if (onRef) {
      onRef(this.embla);
    }
    this.onSelect();
    this.onScroll();
  };
  initThumbViewport = () => {
    if (!this.props.thumb) return;
    const thumbViewportOptions: MooliOptionsType = {
      containScroll: 'keepSnaps',
      selectedClass: 'is-selected',
      dragFree: true,
    };
    this.emblaThumbs = MooliCarousel(
      this.thumbViewportRef.current,
      thumbViewportOptions,
    );
  };
  onThumbClick = (index: number) => {
    if (!this.embla || !this.emblaThumbs) return;
    if (this.emblaThumbs.clickAllowed()) this.embla.scrollTo(index);
  };

  autoplay = () => {
    if (!this.embla) return;
    if (this.embla.canScrollNext()) {
      this.embla.scrollNext();
    } else {
      this.embla.scrollTo(0);
    }
    this.play();
  };
  play = () => {
    if (!this.isAutoplay) return;
    this.rafId = raf(() => {
      this.timer = setTimeout(this.autoplay, this.isAutoplay as number);
    });
  };
  stop = () => {
    cancelRaf(this.rafId);
  };
  scrollNext = () => {
    if (!this.embla) return;
    this.embla.scrollNext();
    this.stop();
  };
  scrollPrev = () => {
    if (!this.embla) return;
    this.embla.scrollPrev();
    this.stop();
  };
  onSelect = () => {
    if (!this.embla) return;
    const { thumb, arrow } = this.props;
    if (thumb && this.emblaThumbs) {
      this.emblaThumbs.scrollTo(this.embla.selectedScrollSnap());
    }
    if (arrow) {
      this.setState({
        prevBtnEnabled: this.embla.canScrollPrev(),
        nextBtnEnabled: this.embla.canScrollNext(),
      });
    }
    this.setState({
      selectedIndex: this.embla.selectedScrollSnap(),
    });
  };
  onScroll = () => {
    if (!this.embla) return;
    if (this.props.progress || this.props.onScroll) {
      const p = Math.max(0, Math.min(1, this.embla.scrollProgress()));
      if (this.props.progress) {
        this.setState({
          scrollProgress: p * 100,
        });
      }
      if (this.props.onScroll) {
        this.props.onScroll(this.state.selectedIndex, p);
      }
    }
  };

  render() {
    const {
      mode = 'slide',
      loop = false,
      autoPlay = false,
      arrow = false,
      indicator = false,
      thumb = false,
      vertical = false,
      thumbNode,
      progress = false,
      scale = false,
      touchable = true,
      initial = 0,
      slideNums = 1,
      direction = 'ltr',
      align = 'start',
      arrowIcon = 'arrow-left',
      className,
      children,
      onChange,
      onScroll,
      onRef,
      ...rest
    } = this.props;
    const {
      prevBtnEnabled,
      nextBtnEnabled,
      scrollSnaps,
      selectedIndex,
      scrollProgress,
    } = this.state;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--arrow`]: arrow,
      [`${componentClassName}--vertical`]: vertical,
      [`${componentClassName}--scale`]: scale,
    });

    const renderArrow = () => {
      if (arrow) {
        let icon: {} | null | undefined;
        if (React.isValidElement(arrowIcon)) {
          icon = arrowIcon;
        } else if (isImage(arrowIcon)) {
          icon = <img src={arrowIcon} />;
        } else {
          icon = <Icon name={arrowIcon} />;
        }
        const componentLeftBtnClassName = createClassName(
          componentClassName,
          'btn-prev',
        );
        const componentRightBtnClassName = createClassName(
          componentClassName,
          'btn-next',
        );
        const classNameLeftBtn: string = classnames(componentLeftBtnClassName, {
          [`${componentLeftBtnClassName}--disable`]: !prevBtnEnabled,
        });
        const classNameRightBtn: string = classnames(
          componentRightBtnClassName,
          {
            [`${componentRightBtnClassName}--disable`]: !nextBtnEnabled,
          },
        );
        return (
          <>
            <span onClick={this.scrollPrev} className={classNameLeftBtn}>
              {icon}
            </span>
            <span onClick={this.scrollNext} className={classNameRightBtn}>
              {icon}
            </span>
          </>
        );
      }
      return null;
    };

    const renderIndicator = () => {
      if (indicator) {
        const componentIndicatorClassName = createClassName(
          componentClassName,
          'indicators',
        );
        return (
          <div className={componentIndicatorClassName}>
            {scrollSnaps.map((_, index) => {
              const componentDotsClassName = createClassName(
                componentClassName,
                'dots',
              );
              const className3Use: string = classnames(componentDotsClassName, {
                [`${componentDotsClassName}--is-selected`]:
                  index === selectedIndex,
              });
              return <span key={index} className={className3Use} />;
            })}
          </div>
        );
      }
      return null;
    };

    const renderProgress = () => {
      if (progress) {
        const componentProgressClassName = createClassName(
          componentClassName,
          'progress',
        );

        return (
          <div className={componentProgressClassName}>
            <div
              className={createClassName(componentProgressClassName, 'bar')}
              style={{ transform: `translateX(${scrollProgress}%)` }}
            />
          </div>
        );
      }
      return null;
    };

    const renderSwiper = () => {
      const componentContainerClassName = createClassName(
        componentClassName,
        'container',
      );
      return (
        <div
          ref={this.viewportRef}
          className={className2Use}
          dir={direction}
          {...rest}
        >
          <div className={componentContainerClassName}>
            {React.Children.map(children, (child, index) => {
              if (React.isValidElement(child)) {
                const { props } = child;
                return React.cloneElement(child, {
                  className: index === selectedIndex ? 'is-actived' : '',
                  ...props,
                });
              }
              return null;
            })}
          </div>
          {renderArrow()}
          {renderIndicator()}
        </div>
      );
    };

    const renderThumb = () => {
      if (thumb) {
        const componentThumbsClassName = createClassName('thumbs');
        const childs = thumbNode || children;
        const thumbArr: any = [];

        if (childs) {
          let curChildren = childs;
          if (React.isValidElement(childs)) {
            const { children }: any = childs.props;
            curChildren = children;
          }

          React.Children.map(curChildren, (child, index) => {
            const componentThumbClassName = createClassName(
              componentThumbsClassName,
              'thumb',
            );
            const className4Use: string = classnames(componentThumbClassName, {
              [`${componentThumbClassName}--actived`]: index === selectedIndex,
            });
            thumbArr.push(
              <div
                key={index}
                className={className4Use}
                onClick={() => this.onThumbClick(index)}
              >
                {child}
              </div>,
            );
          });
        }
        return (
          <div
            ref={this.thumbViewportRef}
            className={`${className2Use} ${componentThumbsClassName}`}
          >
            <div className={createClassName(componentClassName, 'container')}>
              {thumbArr}
            </div>
          </div>
        );
      }
      return null;
    };

    return (
      <>
        {renderSwiper()}
        {renderThumb()}
        {renderProgress()}
      </>
    );
  }
}
