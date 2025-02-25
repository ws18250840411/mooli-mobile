import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName, addUnit } from '../utils';

export interface PasswordInputProps {
  value: string;
  mask: boolean;
  length: number;
  gutter?: number | string;
  focused?: boolean;
  info?: React.ReactNode;
  errorInfo?: React.ReactNode;
  className?: string; // 自定义类名
  cursorColor?: string; // 自定义样式
  cursorStyle?: React.CSSProperties; // 自定义样式
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  onFocus?: () => void;
}

const componentClassName = createClassName('password-input');

export default class PasswordInput extends React.PureComponent<PasswordInputProps> {
  static displayName: 'PasswordInput';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {
    value: '',
    mask: true,
    length: 6,
  };
  renderPoints = () => {
    const { value, mask, length, gutter, focused, cursorColor, cursorStyle } =
      this.props;
    const pointArrs: any = [];
    for (let i = 0; i < length; i++) {
      const char = value[i];
      const showBorder = i !== 0 && !gutter;
      const showCursor = focused && i === value.length;
      const itemClassName = createClassName(componentClassName, 'item');

      let style: React.CSSProperties = {};
      if (i !== 0 && gutter) {
        style = { marginLeft: addUnit(gutter) };
      }
      pointArrs.push(
        <li
          key={i}
          className={classnames(itemClassName, {
            [`mooli-hairline--left`]: showBorder,
            [`${itemClassName}--focus`]: showCursor,
          })}
          style={style}
        >
          {mask ? (
            <i
              style={{
                visibility: char ? 'visible' : 'hidden',
                backgroundColor: cursorColor,
                ...cursorStyle,
              }}
            />
          ) : (
            char
          )}
          {showCursor && (
            <div className={createClassName(componentClassName, 'cursor')} />
          )}
        </li>,
      );
    }
    return pointArrs;
  };
  render() {
    const { gutter, info, errorInfo, className, onFocus } = this.props;
    const className2Use: string = classnames(componentClassName, className);
    const cInfo = errorInfo || info;

    return (
      <div className={className2Use}>
        <ul
          className={classnames(
            createClassName(componentClassName, 'security'),
            {
              [`mooli-hairline--surround`]: !gutter,
            },
          )}
          onClick={(e) => {
            e.stopPropagation();
            onFocus && onFocus();
          }}
        >
          {this.renderPoints()}
        </ul>
        {cInfo && (
          <div
            className={classnames({
              [`${className2Use}--info`]: !errorInfo,
              [`${className2Use}--error-info`]: errorInfo,
            })}
          >
            {cInfo}
          </div>
        )}
      </div>
    );
  }
}
