import * as React from 'react';
import classnames from 'classnames';
import { createClassName } from '../utils';
import Popup from '../popup';
import Key, { KeyProps } from './key';

const componentClassName = createClassName('number-keyboard');

export interface NumberKeyboardProps {
  value: string;
  show: boolean;
  maxlength: number | string;
  theme?: 'custom' | 'default';
  title?: React.ReactNode;
  titleLeft?: React.ReactNode;
  extraKey?: React.ReactNode;
  zIndex?: number;
  closeButtonText?: React.ReactNode;
  deleteButtonText?: React.ReactNode;
  showDeleteButtonIcon?: boolean;
  hideOnClickOutside?: boolean;
  safeAreaInsetBottom?: boolean;
  randomKeyOrder?: boolean;
  blurOnClose?: boolean;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onTitleLeftClick?: () => void;
  onInput?: (v: string) => void;
  onChange?: (v: string) => void;
  onDelete?: () => void;
  onBlur?: () => void;
  onClose?: () => void;
  onShow?: () => void;
  onHide?: () => void;
}

export default class NumberKeyboard extends React.PureComponent<NumberKeyboardProps> {
  static displayName: 'NumberKeyboard';
  static defaultProps = {
    value: '',
    theme: 'default',
    maxlength: Number.MAX_VALUE,
    showDeleteButtonIcon: true,
    hideOnClickOutside: true,
    safeAreaInsetBottom: true,
    closeButtonText: '',
    zIndex: 100,
  };
  randomKeys: KeyProps[];
  get keys() {
    if (this.props.theme === 'custom') {
      return this.genCustomKeys();
    }
    return this.genDefaultKeys();
  }
  genCustomKeys = () => {
    const keys = this.genBasicKeys();
    const { extraKey } = this.props;
    const extraKeys = Array.isArray(extraKey) ? extraKey : [extraKey];

    if (extraKeys.length === 1) {
      keys.push(
        { text: 0, wider: true },
        { text: extraKeys[0], type: 'extra' },
      );
    } else if (extraKeys.length === 2) {
      keys.push(
        { text: extraKeys[0], type: 'extra' },
        { text: 0 },
        { text: extraKeys[1], type: 'extra' },
      );
    }
    return keys;
  };
  genDefaultKeys = () => {
    const { extraKey, showDeleteButtonIcon, deleteButtonText } = this.props;
    return [
      ...this.genBasicKeys(),
      { text: extraKey || '', type: 'extra' },
      { text: 0 },
      {
        text: deleteButtonText || '',
        type: showDeleteButtonIcon ? 'delete' : '',
      },
    ] as KeyProps[];
  };
  genBasicKeys = () => {
    const keys: KeyProps[] = [];
    for (let i = 1; i <= 9; i++) {
      keys.push({ text: i });
    }

    if (this.props.randomKeyOrder) {
      if (this.props.show || !this.randomKeys) {
        this.randomKeys = keys.sort(() => (Math.random() > 0.5 ? 1 : -1));
      }
      return this.randomKeys;
    }

    return keys;
  };
  onClose = () => {
    const { onClose, blurOnClose } = this.props;
    onClose && onClose();
    blurOnClose && this.onBlur();
  };
  onBlur = () => {
    const { onBlur, show } = this.props;
    if (show) {
      onBlur && onBlur();
    }
  };
  onPress = ({ text, type }) => {
    if (type === 'extra' && text === '') {
      this.onBlur();
      return;
    }
    const { value, maxlength, onInput, onChange, onDelete } = this.props;
    if (type === 'delete') {
      onDelete && onDelete();
      onChange && onChange(value.slice(0, value.length - 1));
    } else if (type === 'close') {
      this.onClose();
    } else if (value.length < maxlength) {
      onInput && onInput(text);
      onChange && onChange(value + text);
    }
  };
  onAnimationEnd = () => {
    const { show, onShow, onHide } = this.props;
    if (show) {
      onShow && onShow();
    } else {
      onHide && onHide();
    }
  };
  renderTitle = () => {
    const { title, titleLeft, theme, closeButtonText, onTitleLeftClick } =
      this.props;
    const showClose = closeButtonText && theme === 'default';
    const showTitle = title || showClose || titleLeft;

    if (!showTitle) return;

    const headerClassName = createClassName(componentClassName, 'header');

    return (
      <div className={headerClassName}>
        {titleLeft && (
          <span
            className={createClassName(headerClassName, 'title-left')}
            onClick={() => onTitleLeftClick && onTitleLeftClick()}
          >
            {titleLeft}
          </span>
        )}
        {title && (
          <h2 className={createClassName(headerClassName, 'title')}>{title}</h2>
        )}
        {showClose && (
          <button
            type="button"
            className={createClassName(componentClassName, 'close')}
            onClick={this.onClose}
          >
            {closeButtonText}
          </button>
        )}
      </div>
    );
  };
  renderContent = () => {
    const contentClassName = createClassName(componentClassName, 'body');
    return (
      <div className={contentClassName}>
        {this.renderKeys()}
        {this.renderSidebar()}
      </div>
    );
  };
  renderKeys = () => {
    const keysClassName = createClassName(componentClassName, 'keys');

    return (
      <div className={keysClassName}>
        {this.keys.map((key, i) => (
          <Key
            key={i}
            text={key.text}
            type={key.type}
            wider={key.wider}
            color={key.color}
            onPress={this.onPress}
          />
        ))}
      </div>
    );
  };

  renderSidebar = () => {
    const { theme, showDeleteButtonIcon, deleteButtonText, closeButtonText } =
      this.props;
    if (theme === 'custom') {
      const contentClassName = createClassName(componentClassName, 'sidebar');
      return (
        <div className={contentClassName}>
          {showDeleteButtonIcon && (
            <Key
              large
              text={deleteButtonText}
              type="delete"
              onPress={this.onPress}
            />
          )}
          <Key
            large
            text={closeButtonText}
            type="close"
            color="blue"
            onPress={this.onPress}
          />
        </div>
      );
    }
    return null;
  };
  render() {
    const {
      show,
      title,
      className,
      theme,
      closeButtonText,
      titleLeft,
      zIndex,
      hideOnClickOutside,
    } = this.props;
    const showTitle =
      title || (closeButtonText && theme === 'default') || titleLeft;
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--with-title`]: showTitle,
    });

    return (
      <>
        <Popup
          visible={show}
          maskStyle={{
            backgroundColor: 'rgba(0,0,0,0)',
          }}
          onClickMask={() => {
            if (hideOnClickOutside) {
              this.onBlur();
            }
          }}
          position="bottom"
          className={className2Use}
          onTouchStart={(e) => e.stopPropagation()}
          onAnimationEnd={this.onAnimationEnd}
          style={{
            zIndex,
          }}
        >
          {this.renderTitle()}
          {this.renderContent()}
        </Popup>
      </>
    );
  }
}
