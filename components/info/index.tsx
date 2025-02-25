import * as React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { createClassName } from '../utils';

interface InfoProps {
  dot?: boolean;
  info?: React.ReactNode;
  badge?: number;
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
}

export default class Info extends React.PureComponent<InfoProps> {
  static displayName: 'Info';
  static propTypes = {
    dot: PropTypes.bool,
    info: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {};
  render() {
    const { dot, info, className, ...rest } = this.props;
    const componentClassName = createClassName('info');
    const className2Use: string = classnames(componentClassName, className, {
      [`${componentClassName}--dot`]: dot,
    });
    const showInfo = info !== '';

    if (!dot && !showInfo) {
      return null;
    }

    return (
      <div className={className2Use} {...rest}>
        {dot ? '' : info}
      </div>
    );
  }
}
