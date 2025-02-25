import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Popup, PopupProps } from '../widgets/popup';
import Button from '../button';
import { createClassName, addUnit } from '../utils';
import { renderToContainer, GetContainer } from '../utils/renderToContainer';
import { ConfirmProps } from './confirm';

export const BODY_LOCK_CLASS = 'mooli-overflow-hidden';

export type DialogAction = 'onConfirm' | 'onCancel';

export interface DialogProps extends PopupProps {
  visible?: boolean;
  title?: string;
  message?: string | React.ReactNode;
  width?: string | number;
  lock?: boolean;
  showCancelButton?: boolean;
  cancelButtonText?: string;
  cancelButtonColor?: string;
  cancelLoading?: boolean;
  showConfirmButton?: boolean;
  confirmButtonText?: string;
  confirmButtonColor?: string;
  confirmLoading?: boolean;
  closeOnClickMask?: boolean;
  children?: React.ReactNode;
  getContainer?: GetContainer;
  vertical?: boolean;
  callback?: (action?: DialogAction) => void;
  onConfirm?: React.EventHandler<React.SyntheticEvent>; // 点击确认按钮时触发
  onCancel?: React.EventHandler<React.SyntheticEvent>; // 点击取消按钮时触发
  onOpen?: React.EventHandler<React.SyntheticEvent>; // 打开弹窗时触发
  onClose?: React.EventHandler<React.SyntheticEvent>; // 关闭弹窗时触发
  onOpened?: React.EventHandler<React.SyntheticEvent>; // 打开弹窗且动画结束后触发
  onClosed?: React.EventHandler<React.SyntheticEvent>; // 关闭弹窗且动画结束后触发
}

interface DialogState {
  loading: {
    confirm: boolean;
    cancel: boolean;
  };
}

export default class Dialog extends React.PureComponent<
  DialogProps,
  DialogState
> {
  static alert: (props: ConfirmProps) => void;
  static confirm: (props: ConfirmProps) => void;
  static close: () => void;
  static setDefaultOptions: (options: DialogProps) => void;
  static resetDefaultOptions: () => void;
  static propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.node,
    message: PropTypes.node,
    width: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    showCancelButton: PropTypes.bool,
    cancelButtonText: PropTypes.string,
    cancelButtonColor: PropTypes.string,
    cancelLoading: PropTypes.bool,
    showConfirmButton: PropTypes.bool,
    confirmButtonText: PropTypes.string,
    confirmButtonColor: PropTypes.string,
    confirmLoading: PropTypes.bool,
    closeOnClickMask: PropTypes.bool,
    callback: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
  };
  static defaultProps = {
    visible: true,
    mask: true,
    closeOnClickMask: false,
    showCancelButton: true,
    cancelButtonText: '取消',
    cancelLoading: false,
    showConfirmButton: true,
    confirmButtonText: '确定',
    confirmLoading: false,
    getContainer: typeof document !== 'undefined' ? document.body : null,
  };
  constructor(props: Readonly<DialogProps>) {
    super(props);
    this.state = {
      loading: {
        confirm: false,
        cancel: false,
      },
    };
  }
  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.visible !== prevState.visible) {
      return {
        visible: nextProps.visible,
      };
    }
    return null;
  }

  handleEnter = (e: React.MouseEvent) => {
    const { onOpen, lock } = this.props;
    if (lock) document.body.classList.add(BODY_LOCK_CLASS);
    if (typeof onOpen === 'function') onOpen(e);
  };
  handleEntered = (e: React.MouseEvent) => {
    const { onOpened } = this.props;
    if (typeof onOpened === 'function') onOpened(e);
  };
  handleExit = (e: React.MouseEvent) => {
    const { onClose } = this.props;
    if (typeof onClose === 'function') onClose(e);
  };
  handleExited = (e: React.MouseEvent) => {
    const { onClosed, lock } = this.props;
    if (lock) document.body.classList.remove(BODY_LOCK_CLASS);
    if (typeof onClosed === 'function') onClosed(e);
  };

  render() {
    const {
      visible,
      title,
      width,
      message,
      showCancelButton,
      cancelButtonText,
      cancelButtonColor,
      cancelLoading,
      showConfirmButton,
      confirmButtonText,
      confirmButtonColor,
      confirmLoading,
      mask,
      transition,
      maskTransition,
      maskProps,
      destroy,
      children,
      onConfirm,
      onCancel,
      lock,
      onClosed,
      onOpened,
      closeOnClickMask,
      getContainer,
      className,
      style,
      vertical,
      ...rest
    } = this.props;

    const componentClassName = createClassName('dialog');
    const classNameUse: string = classnames(componentClassName, className);

    const renderTitle = () => {
      if (title) {
        const headerClassName = createClassName(componentClassName, 'header');
        const className2Use: string = classnames(headerClassName, {
          [`${headerClassName}--isolated`]: !message,
        });
        return <div className={className2Use}>{title}</div>;
      }
      return null;
    };

    const renderMessage = (hasTitle: boolean) => {
      let content = message || children;
      const messageClassName = createClassName(componentClassName, 'message');
      const className3Use: string = classnames(messageClassName, {
        [`${messageClassName}--has-title`]: hasTitle,
      });
      if (content) {
        return (
          <div className={className3Use}>
            {typeof content === 'function' ? content() : content}
          </div>
        );
      }
      return null;
    };
    const renderContent = () => {
      const hasTitle = !!title;
      const contentClassName = createClassName(componentClassName, 'content');
      return <div className={contentClassName}>{renderMessage(hasTitle)}</div>;
    };

    const renderFooter = () => {
      if (!showCancelButton && !showConfirmButton) return null;
      const footerClassName = createClassName(componentClassName, 'footer');
      const cancelClassName = createClassName(componentClassName, 'cancel');
      const confirmClassName = createClassName(componentClassName, 'confirm');
      const className3Use: string = classnames(footerClassName, {
        [`${footerClassName}--vertical`]: vertical,
      });
      const className4Use: string = classnames(confirmClassName, {
        [`mooli-hairline--left`]: showCancelButton,
        [`${confirmClassName}--loading`]: confirmLoading,
      });
      const className5Use: string = classnames(cancelClassName, {
        [`mooli-hairline--top`]: vertical,
      });

      const btns: any = [];
      if (showCancelButton) {
        btns.push(
          <Button
            key="cancel"
            size="large"
            className={className5Use}
            style={{ color: cancelButtonColor }}
            loading={cancelLoading}
            onClick={onCancel}
          >
            {cancelButtonText}
          </Button>,
        );
      }
      if (showConfirmButton) {
        if (vertical) {
          btns.unshift(
            <Button
              key="confirm"
              size="large"
              className={className4Use}
              style={{ color: confirmButtonColor }}
              loading={confirmLoading}
              onClick={onConfirm}
            >
              {confirmButtonText}
            </Button>,
          );
        } else {
          btns.push(
            <Button
              key="confirm"
              size="large"
              className={className4Use}
              style={{ color: confirmButtonColor }}
              loading={confirmLoading}
              onClick={onConfirm}
            >
              {confirmButtonText}
            </Button>,
          );
        }
      }
      return (
        <div className={`${className3Use} mooli-hairline--top`}>{btns}</div>
      );
    };

    let popupTransition = {
      timeout: 500,
      classNames: createClassName(componentClassName, 'scale'),
      onEnter: (e: any) => this.handleEnter(e),
      onEntered: (e: any) => this.handleEntered(e),
      onExit: (e: any) => this.handleExit(e),
      onExited: (e: any) => this.handleExited(e),
      ...transition,
    };

    let masksTransition = {
      timeout: 500,
      classNames: 'mooli-fade',
      ...maskTransition,
    };
    const node = (
      <Popup
        className={classNameUse}
        visible={visible}
        mask={mask}
        destroy={destroy}
        transition={popupTransition}
        maskTransition={masksTransition}
        maskProps={maskProps}
        style={{ width: addUnit(width), ...style }}
        {...rest}
      >
        {renderTitle()}
        {renderContent()}
        {renderFooter()}
      </Popup>
    );
    return renderToContainer(getContainer as GetContainer, node);
  }
}
