import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import Field, { FieldProps } from '../field';

export interface BInputProps extends FieldProps {
  border?: boolean;
  animate?: boolean;
  showErrorMessage?: boolean;
  filterEmoji?: boolean;
  onFinish?: (v: string) => void;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
  prefix?: React.ReactNode;
}

export default class BInput extends React.PureComponent<BInputProps> {
  static displayName: 'BInput';
  static propTypes = {
    border: PropTypes.bool,
    animate: PropTypes.bool,
  };
  static defaultProps = {
    animate: true,
    border: false,
  };
  render() {
    const {
      value,
      border,
      animate,
      placeholder,
      disabled,
      required,
      errorMessage,
      className,
      style,
      ...rest
    } = this.props;
    const componentClassName = createClassName('binput');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--errormessage`]: errorMessage,
      [`${componentClassName}--animate`]: animate,
      [`${componentClassName}--border`]: border,
      [`${componentClassName}--disabled`]: disabled,
      [`${componentClassName}--required`]: required,
    });

    return (
      <div className={className2Use} style={style}>
        <div className={createClassName(componentClassName, 'content')}>
          <Field
            className={classnames({
              'mooli-field--has-value': value,
            })}
            value={value}
            disabled={disabled}
            {...rest}
          />
          <div className={createClassName(componentClassName, 'error-message')}>
            {errorMessage}
          </div>
        </div>
      </div>
    );
  }
}
