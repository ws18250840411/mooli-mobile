import React, { Fragment } from 'react';
import classnames from 'classnames';
import Transition, {
  EXITED,
  TransitionStatus,
} from 'react-transition-group/Transition';
import CSSTransition, {
  CSSTransitionProps,
} from 'react-transition-group/CSSTransition';

export interface PopupProps extends React.HTMLAttributes<any> {
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  rootClassName?: string;
  rootStyle?: React.CSSProperties;
  rootProps?: React.HTMLAttributes<any>;
  visible?: boolean;
  fixed?: boolean;
  lazy?: boolean;
  zIndex?: number;
  duration?: number;
  forceRender?: boolean;
  transition?: Partial<CSSTransitionProps>;
  destroy?: boolean;
  getPosition?: (dom: HTMLElement) => {
    top?: number | string;
    left?: number | string;
    right?: number | string;
    bottom?: number | string;
  };
  disableMask?: boolean;
  icon?: React.ReactNode;
  mask?: boolean;
  maskStyle?: React.CSSProperties;
  maskProps?: React.HTMLAttributes<any>;
  maskClassName?: string;
  maskTransition?: Partial<CSSTransitionProps>;
  component?: React.ElementType;
  maskComponent?: React.ElementType;
  rootComponent?: React.ElementType;
  wrapContent?: (node: React.ReactNode) => React.ReactNode;
}
export class Popup extends React.Component<PopupProps, {}> {
  static defaultProps: PopupProps = {
    prefixCls: 'base-popup',
    style: {},
    className: '',
    rootClassName: '',
    rootStyle: {},
    rootProps: {},
    visible: false,
    fixed: false,
    lazy: true,
    forceRender: false,
    transition: { timeout: 500 },
    destroy: true,
    disableMask: false,
    duration: 0.3,
    mask: false,
    maskStyle: {},
    maskProps: {},
    maskClassName: '',
    maskTransition: {
      timeout: 500,
    },
    component: 'div',
    maskComponent: 'div',
    rootComponent: 'div',
    wrapContent: (node: React.ReactNode) => {
      return node;
    },
  };

  protected transitionStatus: TransitionStatus = EXITED;
  protected inTransition = false;
  protected inMaskTransition = false;

  protected rootInstance: React.RefObject<any>;
  protected popupInstance: React.RefObject<any>;
  protected maskInstance: React.RefObject<any>;

  constructor(props: PopupProps) {
    super(props);
    this.rootInstance = React.createRef();
    this.popupInstance = React.createRef();
    this.maskInstance = React.createRef();
  }

  getRootDOM(): HTMLElement | null {
    return this.rootInstance.current as HTMLElement | null;
  }

  getPopupDOM(): HTMLElement | null {
    return this.popupInstance.current as HTMLElement | null;
  }

  getMaskDOM(): HTMLElement | null {
    return this.maskInstance.current as HTMLElement | null;
  }

  shouldComponentUpdate(nextProps: PopupProps) {
    return (
      nextProps.forceRender ||
      !(EXITED === this.transitionStatus && !nextProps.visible)
    );
  }

  ShowPopup(node: HTMLElement | undefined) {
    if (!node) return;
    node.style.display = '';
    // @ts-ignore
    delete node.__popupHide;
  }

  HidePopup(node: HTMLElement | undefined) {
    if (!node) return;
    node.style.display = 'none';
    // @ts-ignore
    node.__popupHide = true;
  }

  componentDidMount() {
    const { lazy, visible, mask } = this.props;
    const rootElement = this.rootInstance.current as HTMLElement;
    const popupElement = this.popupInstance.current as HTMLElement;
    const maskElement = this.maskInstance.current as HTMLElement;

    if (!visible && !lazy) {
      this.HidePopup(rootElement);
      this.HidePopup(popupElement);
      this.HidePopup(maskElement);
    }
    if (visible && !mask) {
      this.HidePopup(maskElement);
    }
  }

  protected onEnter(
    { onEnter }: CSSTransitionProps,
    isMask: boolean,
    appearing: boolean,
  ) {
    const { getPosition } = this.props;
    const rootElement = this.rootInstance.current as HTMLElement;
    const popupElement = this.popupInstance.current as HTMLElement;
    const maskElement = this.maskInstance.current as HTMLElement;

    if (isMask) {
      this.inMaskTransition = true;
    } else {
      this.inTransition = true;
    }
    // @ts-ignore
    if (rootElement && rootElement.__popupHide) {
      this.ShowPopup(rootElement);
    }
    // @ts-ignore
    if (!isMask && popupElement && popupElement.__popupHide) {
      this.ShowPopup(popupElement);
    }
    // @ts-ignore
    if (isMask && maskElement && maskElement.__popupHide) {
      this.ShowPopup(maskElement);
    }

    if (!isMask && getPosition) {
      const pos = getPosition(popupElement);
      const transform = (v?: number | string): any =>
        typeof v === 'number' ? `${v}px` : v;

      if (pos) {
        if ('left' in pos) {
          popupElement.style.left = transform(pos.left);
        }
        if ('top' in pos) {
          popupElement.style.top = transform(pos.top);
        }
        if ('right' in pos) {
          popupElement.style.right = transform(pos.right);
        }
        if ('bottom' in pos) {
          popupElement.style.bottom = transform(pos.bottom);
        }
      }
    }

    if (onEnter) {
      onEnter(popupElement, appearing);
    }
  }

  protected onEntered({ onEntered }: any, isMask: boolean, appearing: boolean) {
    const popupElement = this.popupInstance.current as HTMLElement;
    if (isMask) {
      this.inMaskTransition = false;
    } else {
      this.inTransition = false;
    }

    if (onEntered) {
      onEntered(popupElement, appearing);
    }
  }

  protected onExit({ onExit }: CSSTransitionProps, isMask: boolean) {
    const popupElement = this.popupInstance.current as HTMLElement;
    if (isMask) {
      this.inMaskTransition = true;
    } else {
      this.inTransition = true;
    }

    if (onExit) {
      onExit(popupElement);
    }
  }

  protected onExited({ onExited }: CSSTransitionProps, isMask: boolean) {
    const { destroy, visible } = this.props;
    const rootElement = this.rootInstance.current as HTMLElement;
    const popupElement = this.popupInstance.current as HTMLElement;
    const maskElement = this.maskInstance.current as HTMLElement;

    if (isMask) {
      this.inMaskTransition = false;
    } else {
      this.inTransition = false;
    }

    if (!destroy) {
      if (
        !visible &&
        !this.inMaskTransition &&
        !this.inTransition &&
        rootElement
      ) {
        this.HidePopup(rootElement);
      }
      if (!isMask && popupElement) {
        this.HidePopup(popupElement);
      }
      if (isMask && maskElement) {
        this.HidePopup(maskElement);
      }
    }

    if (onExited) {
      onExited(popupElement);
    }
  }

  protected renderPopupMask() {
    const {
      prefixCls,
      visible,
      mask,
      maskProps,
      maskStyle,
      maskClassName,
      maskTransition,
      lazy,
      destroy,
      fixed,
      zIndex,
      duration,
      maskComponent,
    } = this.props;

    const MaskComponent = maskComponent!;

    const classes: string = classnames(
      {
        [`${prefixCls}-mask`]: true,
        [`${prefixCls}-mask-fixed`]: fixed,
      },
      maskProps!.className,
      maskClassName,
    );

    const TransitionComponent = maskTransition!.classNames
      ? CSSTransition
      : Transition;

    const style2Use: React.CSSProperties = {};
    if (duration) {
      style2Use.animationDuration = `${duration}s`;
    }

    return (
      <TransitionComponent
        enter
        exit
        appear
        addEndListener={(_, cb) => maskTransition!.timeout === null && cb()}
        {...maskTransition}
        in={mask && visible}
        onEnter={this.onEnter.bind(this, maskTransition, true)}
        onEntered={this.onEntered.bind(this, maskTransition, true)}
        onExit={this.onExit.bind(this, maskTransition, true)}
        onExited={this.onExited.bind(this, maskTransition, true)}
        unmountOnExit={destroy}
        mountOnEnter={lazy}
        nodeRef={this.maskInstance}
      >
        <MaskComponent
          {...maskProps}
          ref={this.maskInstance}
          style={{
            ...maskStyle,
            ...maskProps!.style,
            ...style2Use,
            zIndex,
          }}
          className={classes}
        />
      </TransitionComponent>
    );
  }

  addEndListener = (_: any, cb: () => void) => {
    const transition = this.props.transition;
    transition?.addEndListener?.(this.popupInstance.current as HTMLElement, cb);
  };

  render() {
    const {
      style,
      prefixCls,
      className,
      fixed,
      zIndex,
      duration,
      visible,
      children,
      lazy,
      destroy,
      icon,
      rootClassName,
      rootStyle,
      rootProps,
      rootComponent,
      component,
      transition,
      wrapContent,
      disableMask,
      ...childProps
    } = this.props;

    const RootComponent = rootComponent!;
    const Component = component!;

    delete childProps.mask;
    delete childProps.maskProps;
    delete childProps.maskStyle;
    delete childProps.maskClassName;
    delete childProps.maskComponent;
    delete childProps.maskTransition;
    delete childProps.getPosition;
    delete childProps.forceRender;

    let rootComponentProps: {} = {
      ...rootProps,
      className: classnames(
        `${prefixCls}-root`,
        rootClassName,
        rootProps!.className,
      ),
      style: {
        ...rootStyle,
        ...rootProps!.style,
        zIndex,
      },
    };

    if (RootComponent === Fragment) {
      rootComponentProps = {};
    }

    const classes: string = classnames(
      prefixCls,
      {
        [`${prefixCls}-fixed`]: fixed,
      },
      className,
    );

    const style2Use: React.CSSProperties = {};
    if (duration) {
      style2Use.animationDuration = `${duration}s`;
    }

    const TransitionComponent = transition!.classNames
      ? CSSTransition
      : Transition;

    const popup = (
      <RootComponent {...rootComponentProps} ref={this.rootInstance}>
        {!disableMask && this.renderPopupMask()}
        {wrapContent!(
          <TransitionComponent
            enter
            exit
            appear
            addEndListener={(_, cb) => transition!.timeout === null && cb()}
            {...transition}
            in={visible}
            onEnter={this.onEnter.bind(this, transition, false)}
            onEntered={this.onEntered.bind(this, transition, false)}
            onExit={this.onExit.bind(this, transition, false)}
            onExited={this.onExited.bind(this, transition, false)}
            unmountOnExit={destroy}
            mountOnEnter={lazy}
            nodeRef={this.popupInstance}
          >
            {(status) => {
              this.transitionStatus = status;
              return (
                <Component
                  {...childProps}
                  ref={this.popupInstance}
                  style={{ ...style2Use, ...style }}
                  className={classes}
                >
                  {typeof icon === 'function' ? icon() : icon}
                  {typeof children === 'function' ? children(status) : children}
                </Component>
              );
            }}
          </TransitionComponent>,
        )}
      </RootComponent>
    );

    return (
      <Transition
        enter
        exit
        appear
        addEndListener={() =>
          transition!.addEndListener ? this.addEndListener : undefined
        }
        timeout={transition!.timeout!}
        in={visible}
        unmountOnExit={destroy}
        mountOnEnter={lazy}
        nodeRef={this.rootInstance}
      >
        {() => popup}
      </Transition>
    );
  }
}

export default Popup;
