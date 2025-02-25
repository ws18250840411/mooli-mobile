import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import { createClassName } from '../utils';
import {
  Popup as BasePopup,
  PopupProps as BasePopupProps,
} from '../widgets/popup';

const BODY_LOCK_CLASS = 'mooli-overflow-hidden';
const componentClassName = createClassName('popup');
export interface PopupProps extends BasePopupProps {
  visible?: boolean;
  lock?: boolean;
  position?: string;
  round?: boolean;
  closeable?: boolean;
  closeIcon?: string;
  closeIconPosition?: string;
  closeProps?: React.HTMLAttributes<any>;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  onClick?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onClickMask?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onClickIcon?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onOpened?: React.EventHandler<React.SyntheticEvent>; // 打开弹窗且动画结束后触发
  onClosed?: React.EventHandler<React.SyntheticEvent>; // 关闭弹窗且动画结束后触发
}

export default class Popup extends React.PureComponent<PopupProps> {
  static displayName: 'popup';
  static propTypes = {
    visible: PropTypes.bool,
    lock: PropTypes.bool,
    position: PropTypes.string,
    round: PropTypes.bool,
    closeable: PropTypes.bool,
    closeIcon: PropTypes.string,
    closeIconPosition: PropTypes.string,
    closeProps: PropTypes.object,
    className: PropTypes.string, // 自定义类名
    style: PropTypes.object, // 自定义样式
    onClick: PropTypes.func,
    onClickMask: PropTypes.func,
    onClickIcon: PropTypes.func,
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
  };
  static defaultProps = {
    destroy: false,
    lock: true,
    position: 'center',
    closeIcon: 'cross',
    closeIconPosition: 'top-right',
    closeProps: {},
    fixed: true,
    mask: true,
  };

  onEnter = (e: React.MouseEvent) => {
    if (this.props.lock) document.body.classList.add(BODY_LOCK_CLASS);
    if (this.props.onOpened) this.props.onOpened(e);
  };

  onExited = (e: React.MouseEvent) => {
    if (this.props.lock) document.body.classList.remove(BODY_LOCK_CLASS);
    if (this.props.onClosed) this.props.onClosed(e);
  };

  // 设置关闭按钮
  renderIcon = () => {
    const {
      closeable,
      position,
      closeIcon,
      closeIconPosition,
      onClickIcon,
      className,
    } = this.props;
    if (closeable && position === 'bottom') {
      const iconClassName = createClassName(componentClassName, 'close-icon');
      const className3Use: string = classnames(iconClassName, className, {
        [`${iconClassName}--${closeIconPosition}`]: closeIconPosition,
      });
      return (
        <Icon
          name={closeIcon}
          className={className3Use}
          onClick={onClickIcon}
        />
      );
    }
    return null;
  };

  render() {
    const {
      destroy = false,
      lock = true,
      position = 'center',
      closeable,
      round,
      closeIcon = 'cross',
      closeIconPosition = 'top-right',
      closeProps = {},
      transition,
      fixed = true,
      mask = true,
      maskTransition,
      maskProps,
      className,
      style,
      onClickMask,
      onClickIcon,
      onClick,
      onOpened,
      onClosed,
      ...rest
    } = this.props;

    let masksTransition = {
      timeout: 500,
      classNames: 'mooli-fade',
      ...maskTransition,
    };

    const name =
      position === 'center'
        ? ''
        : createClassName(componentClassName, `slide-${position}`);
    let popupTransition: any = {
      timeout: 500,
      classNames: 'mooli-fade',
      ...transition,
    };
    if (name) popupTransition['classNames'] = name;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--round`]: round,
      [`${componentClassName}--${position}`]: position,
    });

    return (
      <BasePopup
        className={className2Use}
        destroy={destroy}
        transition={{
          ...popupTransition,
          onEnter: this.onEnter,
          onExited: this.onExited,
        }}
        fixed={fixed}
        mask={mask}
        maskTransition={masksTransition}
        maskProps={{ onClick: onClickMask, ...maskProps }}
        style={style}
        icon={this.renderIcon}
        {...rest}
      />
    );
  }
}

// export const Popup: React.FC<PopupProps> = (props) => {
//   const componentClassName = createClassName('popup');

//   const {
//     destroy = false,
//     lock = true,
//     position = 'center',
//     closeable,
//     round,
//     closeIcon = 'cross',
//     closeIconPosition = 'top-right',
//     closeProps = {},
//     transition,
//     fixed = true,
//     mask = true,
//     maskTransition,
//     maskProps,
//     className,
//     style,
//     onClickMask,
//     onClickIcon,
//     onClick,
//     ...rest
//   } = props;

//   let masksTransition = {
//     timeout: 500,
//     classNames: 'mooli-fade',
//     ...maskTransition,
//   };

//   const name =
//     position === 'center'
//       ? ''
//       : createClassName(componentClassName, `slide-${position}`);
//   let popupTransition: any = { ...transition, timeout: 500 };
//   if (name) popupTransition['classNames'] = name;

//   const className2Use: string = classnames(componentClassName, className, {
//     [`${componentClassName}--round`]: round,
//     [`${componentClassName}--${position}`]: position,
//   });

//   const onEnter = () => {
//     if (lock) document.body.classList.add(BODY_LOCK_CLASS);
//   };

//   const onExited = () => {
//     if (lock) document.body.classList.remove(BODY_LOCK_CLASS);
//   };

//   // 设置关闭按钮
//   const renderIcon = () => {
//     if (closeable && position === 'bottom') {
//       const iconClassName = createClassName(componentClassName, 'close-icon');
//       const className3Use: string = classnames(iconClassName, className, {
//         [`${iconClassName}--${closeIconPosition}`]: closeIconPosition,
//       });
//       return (
//         <Icon
//           name={closeIcon}
//           className={className3Use}
//           onClick={onClickIcon}
//         />
//       );
//     }
//     return null;
//   };

//   return (
//     <BasePopup
//       className={className2Use}
//       destroy={destroy}
//       transition={{
//         ...popupTransition,
//         onEnter,
//         onExited,
//       }}
//       fixed={fixed}
//       mask={mask}
//       maskTransition={masksTransition}
//       maskProps={{ onClick: onClickMask, ...maskProps }}
//       style={style}
//       icon={renderIcon}
//       {...rest}
//     />
//   );
// };

// Popup.propTypes = {
//   position: PropTypes.string,
//   lock: PropTypes.bool,
//   destroy: PropTypes.bool,
//   transition: PropTypes.object,
//   maskTransition: PropTypes.object,
//   className: PropTypes.string,
//   style: PropTypes.object,
// };

// Popup.displayName = 'Button';
