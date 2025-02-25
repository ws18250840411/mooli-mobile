import * as React from 'react';
import classnames from 'classnames';
import PropTypes, { number, string } from 'prop-types';
import { createClassName } from '../utils';

interface BadgeProps {
  dot?: boolean;
  badge?: string | number;
}

export default class Badge extends React.PureComponent<BadgeProps> {
  static displayName: 'Badge';
  static propTypes = {
    dot: PropTypes.bool,
    badge: PropTypes.oneOfType([string, number]),
  };
  static defaultProps = {};
  render() {
    const { dot, badge } = this.props;
    if (!dot && !badge) {
      return null;
    }
    const badgeClassName = createClassName('badge');
    const className2Use: string = classnames(badgeClassName, {
      [`${badgeClassName}--dot`]: dot,
    });
    return <div className={className2Use}>{dot ? '' : badge}</div>;
  }
}
