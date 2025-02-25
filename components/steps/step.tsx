import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';

export interface StepProps {
  index?: number;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  status?: 'wait' | 'process' | 'finish';
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
}

export default class Step extends React.PureComponent<StepProps> {
  static displayName: 'Step';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {};

  render() {
    const {
      title,
      description,
      icon,
      status,
      index = 0,
      className,
      children,
      ...rest
    } = this.props;
    const componentClassName = createClassName('step');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${status}`]: true,
    });

    return (
      <div className={className2Use} {...rest}>
        <div className={createClassName(componentClassName, 'indicator')}>
          <div className={createClassName(componentClassName, 'icon')}>
            {icon || (
              <span className={createClassName(componentClassName, 'icon-dot')}>
                {index + 1}
              </span>
            )}
          </div>
        </div>
        <div className={createClassName(componentClassName, 'content')}>
          <div className={createClassName(componentClassName, 'title')}>
            {title}
          </div>
          <div className={createClassName(componentClassName, 'description')}>
            {description}
          </div>
        </div>
      </div>
    );
  }
}
