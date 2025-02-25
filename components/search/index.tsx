import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Field, { FieldProps } from '../field';
import { createClassName } from '../utils';
import { preventDefault } from '../utils/dom/event';

export interface SearchProps extends FieldProps {
  shape?: 'sqaure' | 'round';
  value?: string;
  label?: React.ReactNode;
  showSearchIcon?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  background?: string;
  left?: React.ReactNode;
  action?: React.ReactNode;
  showAction?: boolean;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onCancel?: (value?: any) => void;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
  onKeypress?: (event: KeyboardEvent) => void;
}

const componentClassName = createClassName('search');
export default class Search extends React.PureComponent<SearchProps> {
  static displayName: 'Search';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {};
  renderLabel() {
    const { label } = this.props;
    if (label) {
      return (
        <div className={createClassName(componentClassName, 'label')}>
          {label}
        </div>
      );
    }
    return null;
  }
  renderAction() {
    const { showAction, action = '取消', onCancel } = this.props;
    if (!showAction) {
      return;
    }
    return (
      <div
        className={createClassName(componentClassName, 'action')}
        role="button"
        onClick={() => {
          if (!action) {
            return;
          }
          onCancel && onCancel();
        }}
      >
        {action}
      </div>
    );
  }
  render() {
    const {
      left,
      background,
      value = '',
      showSearchIcon = true,
      shape = 'sqaure',
      label,
      action,
      showAction,
      leftIcon = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="5.25" stroke="#ACACAC" strokeWidth="1.5" />
          <path
            d="M14.5478 14.6966L10.6568 10.8056"
            stroke="#ACACAC"
            strokeWidth="1.5"
          />
        </svg>
      ),
      rightIcon,
      className,
      children,
      onKeyPress,
      onSearch,
      style,
      ...rest
    } = this.props;

    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--show-action`]: showAction,
    });
    const filedClassName = createClassName(componentClassName, 'content');

    return (
      <div
        className={className2Use}
        style={{
          ...style,
          background,
        }}
      >
        {left}
        <div
          className={classnames(filedClassName, {
            [`${filedClassName}--${shape}`]: shape,
          })}
        >
          {this.renderLabel()}
          <Field
            type="search"
            border={false}
            value={value}
            leftIcon={
              showSearchIcon && (
                <span
                  className={createClassName(componentClassName, 'left-icon')}
                >
                  {leftIcon}
                </span>
              )
            }
            rightIcon={
              <span
                className={createClassName(componentClassName, 'right-icon')}
              >
                {rightIcon}
              </span>
            }
            onKeyPress={(event: KeyboardEvent) => {
              if (
                event.keyCode === 13 ||
                event.code === 'Enter' ||
                event.which === 13
              ) {
                preventDefault(event);
                onSearch && onSearch(value);
              }
              onKeyPress && onKeyPress(event);
            }}
            {...rest}
          />
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
