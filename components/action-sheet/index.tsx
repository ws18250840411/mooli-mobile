import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Popup, { PopupProps } from '../popup';
import { createClassName } from '../utils';
import Icon from '../icon';
import Button from '../button';
import Loading from '../loading';

export interface ActionSheetAction {
  name?: string;
  color?: string;
  subname?: string;
  loading?: boolean;
  disabled?: boolean;
  callback?: (action: ActionSheetAction) => void;
  className?: string;
}

export interface ActionSheetProps extends PopupProps {
  visible?: boolean;
  title?: string;
  round?: boolean;
  closeable?: boolean;
  actions?: ActionSheetAction[];
  cancelText?: React.ReactNode;
  description?: React.ReactNode;
  safeAreaInsetBottom?: boolean;
  closeIcon?: string;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onSelect?: (params: any) => void;
  onCancel?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onClickMask?: React.EventHandler<React.MouseEvent<HTMLElement>>;
  onOpen?: React.EventHandler<React.SyntheticEvent>; // 打开弹窗时触发
  onClose?: React.EventHandler<React.SyntheticEvent>; // 关闭弹窗时触发
  onOpened?: React.EventHandler<React.SyntheticEvent>; // 打开弹窗且动画结束后触发
  onClosed?: React.EventHandler<React.SyntheticEvent>; // 关闭弹窗且动画结束后触发
}

const componentClassName = createClassName('action-sheet');
export default class ActionSheet extends React.PureComponent<ActionSheetProps> {
  static displayName: 'ActionSheet';
  static propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    round: PropTypes.bool,
    closeable: PropTypes.bool,
    cancelText: PropTypes.node,
    description: PropTypes.node,
    closeIcon: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onSelect: PropTypes.func,
    onCancel: PropTypes.func,
    onClickMask: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
  };
  static defaultProps = {
    round: true,
    closeIcon: 'cross',
  };

  renderHeader = () => {
    const { title, closeable, closeIcon, onCancel } = this.props;
    if (title) {
      return (
        <div className={createClassName(componentClassName, 'header')}>
          {title}
          {closeable && (
            <Icon
              name={closeIcon}
              className={createClassName(componentClassName, 'close')}
              onClick={onCancel}
            />
          )}
        </div>
      );
    }
    return null;
  };

  renderCancel = () => {
    const { cancelText, onCancel } = this.props;
    if (cancelText) {
      return (
        <div className={createClassName(componentClassName, 'gap')}>
          <Button
            bordered={false}
            className={createClassName(componentClassName, 'cancel')}
            onClick={onCancel}
          >
            {cancelText}
          </Button>
        </div>
      );
    }
    return null;
  };

  renderDescription = () => {
    const { description } = this.props;
    if (description) {
      return (
        <div className={createClassName(componentClassName, 'description')}>
          {typeof description === 'function' ? description() : description}
        </div>
      );
    }
    return null;
  };

  renderOption = (item: ActionSheetAction, index: number) => {
    const { onSelect } = this.props;
    const { name, color, subname, loading, callback, disabled, className } =
      item;
    const Content = loading ? (
      <Loading
        className={createClassName(componentClassName, 'loading-icon')}
      />
    ) : (
      <>
        {name && (
          <span className={createClassName(componentClassName, 'name')}>
            {name}
          </span>
        )}
        {subname && (
          <div className={createClassName(componentClassName, 'subname')}>
            {subname}
          </div>
        )}
      </>
    );
    const buttonClassName = createClassName(componentClassName, 'item');
    const className4Use: string = classnames(buttonClassName, className, {
      [`${buttonClassName}--loading`]: loading,
      [`${buttonClassName}--disabled`]: disabled,
    });
    const handleClick = () => {
      if (disabled || loading) {
        return;
      }
      if (callback) {
        callback(item);
      }
      if (typeof onSelect === 'function') onSelect({ item, index });
    };

    return (
      <Button
        disabled={!!disabled}
        key={index}
        bordered={false}
        className={className4Use}
        style={{ color }}
        onClick={handleClick}
      >
        {Content}
      </Button>
    );
  };

  renderOptions = () => {
    const { actions } = this.props;
    if (actions) {
      return actions.map(this.renderOption);
    }
    return null;
  };

  renderContent = () => {
    const { children } = this.props;
    return (
      <div className={createClassName(componentClassName, 'content')}>
        {this.renderOptions()}
        {typeof children === 'function' ? children() : children}
      </div>
    );
  };

  render() {
    const {
      visible,
      title,
      round = true,
      closeable,
      closeIcon = 'cross',
      cancelText,
      description,
      actions,
      children,
      onSelect,
      onCancel,
      ...rest
    } = this.props;
    return (
      <Popup visible={visible} round={round} position="bottom" {...rest}>
        {this.renderHeader()}
        {this.renderDescription()}
        {this.renderContent()}
        {this.renderCancel()}
      </Popup>
    );
  }
}
