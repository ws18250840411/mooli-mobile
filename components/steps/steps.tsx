import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';
import Step from './step';

export interface StepsProps {
  current?: string | number;
  direction?: 'horizontal' | 'vertical';
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children?: React.ReactNode;
}

export default class Steps extends React.PureComponent<StepsProps> {
  static displayName: 'Steps';
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static Step: typeof Step;
  static defaultProps = {};
  render() {
    const {
      current = 0,
      direction = 'horizontal',
      className,
      children,
      ...rest
    } = this.props;
    const componentClassName = createClassName('steps');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--${direction}`]: true,
    });
    return (
      <div className={className2Use} {...rest}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const { props } = child;
            let status = props.status || 'wait';
            if (index < current) {
              status = props.status || 'finish';
            } else if (index === current) {
              status = props.status || 'process';
            }
            return React.cloneElement(child, {
              index,
              status,
              ...props,
            });
          }
          return null;
        })}
      </div>
    );
  }
}
