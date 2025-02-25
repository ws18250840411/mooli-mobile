import React from 'react';
import getPosition from './lib/getPosition';
import { Placements, Feedback } from './lib/getPlacement';
import { listen, contains, removeClass, addClass } from './lib/utils';
import Popup, { PopupProps } from '../popup';
import Portal, { PortalProps } from '../portal';

export type ActionType =
  | 'click'
  | 'contextMenu'
  | 'focus'
  | 'hover'
  | 'mouseDown';
export type ShowActionType =
  | 'click'
  | 'contextMenu'
  | 'focus'
  | 'mouseEnter'
  | 'mouseDown';
export type HideActionType =
  | 'click'
  | 'mouseLeave'
  | 'blur'
  | 'resize'
  | 'mouseDown';
export interface Delay {
  show?: number;
  hide?: number;
}

export function feedbackToPlacement(feedback: Feedback) {
  const map = {
    center_top_center_bottom: 'top',
    left_top_left_bottom: 'top-left',
    right_top_right_bottom: 'top-right',
    center_bottom_center_top: 'bottom',
    left_bottom_left_top: 'bottom-left',
    right_bottom_right_top: 'bottom-right',
    left_center_right_center: 'left',
    left_top_right_top: 'left-top',
    left_bottom_right_bottom: 'left-bottom',
    right_center_left_center: 'right',
    right_top_left_top: 'right-top',
    right_bottom_left_bottom: 'right-bottom',
  };
  // @ts-ignore
  return map[feedback.at.join('_') + '_' + feedback.my.join('_')];
}
export interface TriggerProps {
  prefixCls?: string; // 样式前缀
  placement?: Placements; // 弹出框显示位置
  offset?: [number, number] | number; // 弹出框位置偏移量
  action?: ActionType | ActionType[] | null; // 触发事件
  showAction?: ShowActionType | ShowActionType[] | null; // 显示触发事件
  hideAction?: HideActionType | HideActionType[] | null; // 隐藏触发事件
  outsideHideEventName?: any; // 点击popup或trigger元素以外的节点时隐藏popup事件
  delay?: number | Delay; // 显示/隐藏延迟时间
  disabled?: boolean; // 禁用
  popup?: React.ReactNode | ((trigger: Trigger) => React.ReactNode); // 触发后弹出显示内容
  popupClassName?: string; // 弹出框CSS样式
  popupMaskClassName?: string; // 弹出框遮罩层CSS样式
  popupRootClassName?: string; // 弹出框根节点元素CSS样式
  popupTransition?: PopupProps['transition']; // 弹出框CSSTransition参数
  popupMaskTransition?: PopupProps['maskTransition']; // 弹出框遮罩层CSSTransition参数
  defaultPopupVisible?: boolean; // 初始时弹出框是否可见
  popupVisible?: boolean; // 控制弹出框是否可见(受控)
  popupProps?: PopupProps; // 弹出框组件(Popup)属性
  popupStyle?: React.CSSProperties; // 弹出框样式
  popupMaskStyle?: React.CSSProperties; // 弹出框遮罩层样式
  popupRootStyle?: React.CSSProperties; // popup根节点样式遮罩层样式
  popupMaskProps?: PopupProps['maskProps']; // 弹出框的遮罩层元素的属性
  aequilate?: boolean; // 是否与target节点等宽
  mask?: boolean; // 是否显示遮罩层
  disableMask?: boolean; // 是否禁用遮罩层
  maskClosable?: boolean; // 点击遮罩层隐藏弹出框
  destroyPopupOnHide?: boolean; // 隐藏销毁弹出框
  zIndex?: number; // 设置弹出框的zIndex
  usePortal?: boolean; // 是否使用Portal进行渲染弹出框
  forceRender?: boolean; // 组件刷新时强制更新弹出框组件
  position?: string; // 弹出位置配置参数
  container?: PortalProps['container'];
  getDocument?: () => Document | Element;
  checkDefaultPrevented?: boolean;
  onPopupVisibleChange?: (visible: boolean) => void;
  onBeforeShow?: (popupNode: HTMLElement) => void;
  onAfterShow?: (popupNode: HTMLElement) => void;
  onBeforeHide?: (popupNode: HTMLElement) => void;
  onAfterHide?: (popupNode: HTMLElement) => void;
}

export interface TriggerState {
  popupVisible: boolean;
  mounted?: PortalProps['container'] | null;
}

export class Trigger extends React.Component<TriggerProps, TriggerState> {
  static defaultProps: TriggerProps = {
    prefixCls: 'mooli-trigger',
    placement: 'bottomLeft',
    offset: 0,
    defaultPopupVisible: false,
    action: ['click'],
    showAction: [],
    hideAction: [],
    outsideHideEventName: ['mousedown', 'click'], // , "scroll"
    delay: 0,
    getDocument: () => window.document,
    container: typeof document !== 'undefined' ? document.body : null,
    aequilate: false,
    mask: false,
    maskClosable: true,
    destroyPopupOnHide: true,
    popupProps: {},
    popupStyle: {},
    popupMaskStyle: {},
    checkDefaultPrevented: false,
    usePortal: true,
  };

  protected triggerRef: React.RefObject<any>;
  constructor(props: TriggerProps) {
    super(props);
    this.state = {
      popupVisible: false,
      mounted: props.container || null,
    };
    this.triggerRef = React.createRef();
  }

  static getDerivedStateFromProps(
    nextProps: TriggerProps,
    state: TriggerState,
  ) {
    return {
      popupVisible: nextProps.disabled
        ? false
        : nextProps.popupVisible === undefined
        ? state.popupVisible
        : nextProps.popupVisible,
    };
  }

  state: Readonly<TriggerState> = {
    popupVisible: this.props.defaultPopupVisible!,
  };

  protected delayTimer: number | null = null;

  popupInstance: Popup | undefined;
  triggerInstance: React.ReactInstance | undefined;

  protected clickOutsideHandler: null | (() => void) | undefined;
  protected touchOutsideHandler: null | (() => void) | undefined;
  protected contextMenuOutsideHandler1: null | (() => void) | undefined;
  protected contextMenuOutsideHandler2: null | (() => void) | undefined;
  protected windowScrollHandler: null | (() => void) | undefined;
  protected windowResizeHandler: null | (() => void) | undefined;

  componentDidMount() {
    this.togglePopupCloseEvents();
    if (!this.state.mounted) {
      this.setState({ mounted: document.body });
    }
  }

  componentDidUpdate() {
    this.togglePopupCloseEvents();
  }

  componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
  }

  protected togglePopupCloseEvents() {
    const { getDocument, outsideHideEventName } = this.props;
    const { popupVisible } = this.state;
    if (popupVisible) {
      const currentDocument = getDocument!() as HTMLElement;
      // 点击popup元素之外都需要隐藏popup
      if (
        !this.clickOutsideHandler &&
        (this.isMouseDownToHide() ||
          this.isClickToHide() ||
          this.isContextMenuToShow())
      ) {
        if (Array.isArray(outsideHideEventName)) {
          const cancelHandlers: ReturnType<typeof listen>[] = [];
          outsideHideEventName.forEach((name) => {
            cancelHandlers.push(
              listen(currentDocument, name, this.onOutsideClickToHide as any),
            );
          });
          this.clickOutsideHandler = () => {
            cancelHandlers.forEach((cancel) => cancel());
          };
        } else {
          this.clickOutsideHandler = listen(
            currentDocument,
            outsideHideEventName!,
            this.onOutsideClickToHide as any,
          );
        }
      }
      // 滚动或者窗口失焦/重置等都需要隐藏popup
      if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler1 = listen(
          currentDocument,
          'scroll',
          this.onContextMenuClose,
        );
      }
      if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
        this.contextMenuOutsideHandler2 = listen(
          window as any,
          'blur',
          this.onContextMenuClose,
        );
      }
      if (!this.windowResizeHandler && this.isWindowResizeToHide()) {
        this.windowResizeHandler = listen(
          window as any,
          'resize',
          this.hide.bind(this),
        );
      }
    } else {
      this.clearOutsideHandler();
    }
  }

  getTriggerNode() {
    return (this.triggerRef.current as HTMLElement) || null;
  }

  getPopupNode() {
    return this.popupInstance && this.popupInstance.getPopupDOM();
  }

  protected getComponentNode() {
    return (this.triggerRef.current as HTMLElement) || null;
  }

  protected onOutsideClickToHide = (event: MouseEvent) => {
    const target = event.target as Element;
    const triggerNode = this.getTriggerNode();
    const popupRootNode = this.popupInstance && this.popupInstance.getRootDOM();
    if (!contains(triggerNode, target) && !contains(popupRootNode!, target)) {
      this.hide();
    }
  };

  protected clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler();
      this.clickOutsideHandler = null;
    }
    if (this.contextMenuOutsideHandler1) {
      this.contextMenuOutsideHandler1();
      this.contextMenuOutsideHandler1 = null;
    }
    if (this.contextMenuOutsideHandler2) {
      this.contextMenuOutsideHandler2();
      this.contextMenuOutsideHandler2 = null;
    }
    if (this.touchOutsideHandler) {
      this.touchOutsideHandler();
      this.touchOutsideHandler = null;
    }
    if (this.windowScrollHandler) {
      this.windowScrollHandler();
      this.windowScrollHandler = null;
    }
    if (this.windowResizeHandler) {
      this.windowResizeHandler();
      this.windowResizeHandler = null;
    }
  }

  protected _setPopupVisible(popupVisible: boolean) {
    if (this.props.popupVisible === undefined) {
      this.setState({
        popupVisible,
      });
    }
    this.props.onPopupVisibleChange?.(popupVisible);
  }

  show() {
    this.delaySetPopupVisible(true);
  }

  hide() {
    this.delaySetPopupVisible(false);
  }

  protected clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  }

  protected getDelayTime(action: 'show' | 'hide' = 'show') {
    const { delay } = this.props;

    if (delay && typeof delay !== 'number') {
      return Math.abs(delay[action]!);
    }

    return Math.abs(delay! as any);
  }

  protected delaySetPopupVisible(visible: boolean) {
    if (this.state.popupVisible === visible) {
      return;
    }
    this._setPopupVisible(visible);
    this.clearDelayTimer();
    this.clearOutsideHandler();

    const delay = this.getDelayTime(visible ? 'show' : 'hide');

    if (delay) {
      this.delayTimer = setTimeout(() => {
        this.delayTimer = null;
        this._setPopupVisible(visible);
      }, delay) as unknown as number;
    } else {
      this._setPopupVisible(visible);
    }
  }
  // 检查是否显示
  protected checkToShow(actions: Array<ActionType | ShowActionType>) {
    const { action, showAction } = this.props;

    const action1 = Array.isArray(action) ? action : [action];
    const showAction1 = Array.isArray(showAction) ? showAction : [showAction];
    const s: Array<ActionType | ShowActionType | undefined | null> = [
      ...action1,
      ...showAction1,
    ];

    for (let i = 0; i < actions.length; i++) {
      if (s.indexOf(actions[i]) !== -1) return true;
    }

    return false;
  }
  // 检查是否隐藏
  protected checkToHide(actions: Array<ActionType | HideActionType>) {
    const { action, hideAction } = this.props;

    const action1 = Array.isArray(action) ? action : [action];
    const hideAction1 = Array.isArray(hideAction) ? hideAction : [hideAction];
    const s: Array<ActionType | HideActionType | undefined | null> = [
      ...action1,
      ...hideAction1,
    ];

    for (let i = 0; i < actions.length; i++) {
      if (s.indexOf(actions[i]) !== -1) return true;
    }

    return false;
  }

  protected isContextMenuToShow() {
    return this.checkToShow(['contextMenu']);
  }

  protected isMouseDownToShow() {
    return this.checkToShow(['mouseDown']);
  }

  protected isMouseDownToHide() {
    return this.checkToHide(['mouseDown']);
  }

  protected isClickToShow() {
    return this.checkToShow(['click']);
  }

  protected isClickToHide() {
    return this.checkToHide(['click']);
  }

  protected isMouseEnterToShow() {
    return this.checkToShow(['hover', 'mouseEnter']);
  }

  protected isMouseLeaveToHide() {
    return this.checkToHide(['hover', 'mouseLeave']);
  }

  protected isFocusToShow = () => {
    return this.checkToShow(['focus']);
  };

  protected isBlurToHide = () => {
    return this.checkToHide(['focus', 'blur']);
  };

  protected isWindowResizeToHide = () => {
    return this.checkToHide(['resize']);
  };

  protected onContextMenu(e: React.MouseEvent) {
    e.preventDefault();
    this.delaySetPopupVisible(true);
  }

  protected onTriggerClick() {
    const nextVisible = !this.state.popupVisible;
    if (
      (this.isClickToHide() && !nextVisible) ||
      (nextVisible && this.isClickToShow())
    ) {
      this.delaySetPopupVisible(nextVisible);
    }
  }

  protected onTriggerMouseDown() {
    const nextVisible = !this.state.popupVisible;
    if (
      (this.isMouseDownToHide() && !nextVisible) ||
      (nextVisible && this.isMouseDownToShow())
    ) {
      this.delaySetPopupVisible(nextVisible);
    }
  }

  protected onMouseEnter = () => {
    this.delaySetPopupVisible(true);
  };

  protected onMouseLeave = () => {
    this.delaySetPopupVisible(false);
  };

  protected onFocus = () => {
    this.delaySetPopupVisible(true);
  };

  protected onBlur = () => {
    this.delaySetPopupVisible(false);
  };

  protected onContextMenuClose = () => {
    this.hide();
  };

  protected removeClassNames(popupNode: HTMLElement) {
    const { prefixCls } = this.props;
    [
      `${prefixCls}-placement-top`,
      `${prefixCls}-placement-topLeft`,
      `${prefixCls}-placement-topRight`,
      `${prefixCls}-placement-bottom`,
      `${prefixCls}-placement-bottomLeft`,
      `${prefixCls}-placement-bottomRight`,
      `${prefixCls}-placement-left`,
      `${prefixCls}-placement-leftTop`,
      `${prefixCls}-placement-leftBottom`,
      `${prefixCls}-placement-right`,
      `${prefixCls}-placement-rightTop`,
      `${prefixCls}-placement-rightBottom`,
    ].forEach(removeClass.bind(null, popupNode));
  }

  protected addPlacementClassName(popupNode: HTMLElement, feedback: Feedback) {
    const { prefixCls } = this.props;
    this.removeClassNames(popupNode);
    addClass(
      popupNode,
      `${prefixCls}-placement-${feedbackToPlacement(feedback)}`,
    );
  }
  // 设置popup位置
  protected setPopupPosition(popupRootNode: HTMLElement) {
    const { placement, offset, aequilate } = this.props;
    const triggerNode = this.getTriggerNode();
    const { positon, feedback } = getPosition(triggerNode, popupRootNode, {
      placement,
      offset,
    });
    this.addPlacementClassName(popupRootNode, feedback);
    if (aequilate) popupRootNode.style.width = positon.width + 'px';
    popupRootNode.style.left = positon.left + 'px';
    popupRootNode.style.top = positon.top + 'px';
  }

  updatePopupPosition() {
    const node = this.getPopupNode() as HTMLElement;
    node && this.setPopupPosition(node);
  }
  // 创建popup组件
  protected getPopupComponent() {
    const {
      popup,
      prefixCls,
      popupClassName,
      popupMaskClassName,
      popupProps,
      popupMaskProps,
      popupTransition,
      popupMaskTransition,
      forceRender,
      mask,
      disableMask,
      maskClosable,
      popupStyle,
      popupMaskStyle,
      destroyPopupOnHide,
      zIndex,
      popupRootClassName,
      popupRootStyle,
      onBeforeShow,
      onAfterShow,
      onBeforeHide,
      onAfterHide,
    } = this.props;
    const { popupVisible } = this.state;

    const newPopupStyle: React.CSSProperties = { ...popupStyle };
    const newPopupMaskStyle: React.CSSProperties = { ...popupMaskStyle };

    if (zIndex !== null) {
      newPopupStyle.zIndex = zIndex;
      newPopupMaskStyle.zIndex = zIndex;
    }

    return (
      <Popup
        ref={(node: Popup) => (this.popupInstance = node)}
        prefixCls={prefixCls}
        destroy={destroyPopupOnHide}
        style={newPopupStyle}
        className={popupClassName}
        maskClassName={popupMaskClassName}
        maskStyle={newPopupMaskStyle}
        mask={mask}
        disableMask={disableMask}
        rootClassName={popupRootClassName}
        rootStyle={popupRootStyle}
        forceRender={forceRender}
        {...popupProps}
        fixed={false}
        visible={popupVisible}
        transition={{
          ...popupTransition,
          onEnter: (dom, appearing) => {
            onBeforeShow?.(dom);
            this.setPopupPosition(dom);
            popupTransition?.onEnter?.(dom, appearing);
          },
          onEntered: (dom, appearing) => {
            popupTransition?.onEntered?.(dom, appearing);
            onAfterShow?.(dom);
          },
          onExit: (dom) => {
            onBeforeHide?.(dom);
            popupTransition?.onExit?.(dom);
          },
          onExited: (dom) => {
            onAfterHide?.(dom);
            popupTransition?.onExit?.(dom);
          },
        }}
        onMouseEnter={(e) => {
          this.clearDelayTimer();
          popupProps?.onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          if (this.isMouseLeaveToHide()) this.onMouseLeave();
          popupProps?.onMouseLeave?.(e);
        }}
        maskTransition={popupMaskTransition}
        maskProps={{
          ...popupMaskProps,
          onClick: (e: React.MouseEvent) => {
            if (maskClosable) this.hide();
            popupMaskProps?.onClick?.(e);
          },
          onMouseEnter: (e) => {
            this.clearDelayTimer();
            popupMaskProps?.onMouseEnter?.(e);
          },
        }}
      >
        {typeof popup === 'function' ? popup(this) : popup}
      </Popup>
    );
  }
  // 重新克隆新的child节点（绑定事件）
  protected genNewChildProps(child: React.ReactElement) {
    const { checkDefaultPrevented, disabled } = this.props;
    const newChildProps: React.HTMLAttributes<any> = {};

    if (disabled) return newChildProps;
    // 右击鼠标事件
    if (this.isContextMenuToShow()) {
      newChildProps.onContextMenu = (e) => {
        if (child.props.onContextMenu) {
          child.props.onContextMenu(e);
        }
        if (checkDefaultPrevented && e.defaultPrevented) return;
        this.clearDelayTimer();
        this.onContextMenu(e);
      };
    }
    // 鼠标按下事件
    if (this.isMouseDownToShow() || this.isMouseDownToHide()) {
      newChildProps.onMouseDown = (e) => {
        if (child.props.onMouseDown) {
          child.props.onMouseDown(e);
        }
        if (checkDefaultPrevented && e.defaultPrevented) return;
        this.clearDelayTimer();
        this.onTriggerMouseDown();
      };
    }
    // 点击事件
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = (e) => {
        if (child.props.onClick) {
          child.props.onClick(e);
        }
        if (checkDefaultPrevented && e.defaultPrevented) return;
        this.clearDelayTimer();
        this.onTriggerClick();
      };
    }
    // 鼠标移入事件
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = (e) => {
        if (child.props.onMouseEnter) {
          child.props.onMouseEnter(e);
        }
        if (checkDefaultPrevented && e.defaultPrevented) return;
        this.clearDelayTimer();
        this.onMouseEnter();
      };
    }
    // 鼠标移出事件
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = (e) => {
        if (child.props.onMouseLeave) {
          child.props.onMouseLeave(e);
        }
        if (checkDefaultPrevented && e.defaultPrevented) return;
        this.clearDelayTimer();
        this.onMouseLeave();
      };
    }
    // 聚焦事件
    if (this.isFocusToShow()) {
      newChildProps.onFocus = (e) => {
        if (child.props.onFocus) {
          child.props.onFocus(e);
        }
        if (checkDefaultPrevented && e.defaultPrevented) return;
        this.clearDelayTimer();
        this.onFocus();
      };
    }
    // 失焦事件
    if (this.isBlurToHide()) {
      newChildProps.onBlur = (e) => {
        if (child.props.onBlur) {
          child.props.onBlur(e);
        }
        if (checkDefaultPrevented && e.defaultPrevented) return;
        this.clearDelayTimer();
        this.onBlur();
      };
    }
    return newChildProps;
  }

  render() {
    const { prefixCls, usePortal, children } = this.props;

    const child = React.Children.only(children) as React.ReactElement;

    const trigger = React.cloneElement(child, this.genNewChildProps(child));

    let popup = this.getPopupComponent();

    if (usePortal)
      popup = <Portal container={this.state.mounted}>{popup}</Portal>;

    return (
      <span ref={this.triggerRef} className={`${prefixCls}-wrapper`}>
        {trigger}
        {popup}
      </span>
    );
  }
}

export default Trigger;
