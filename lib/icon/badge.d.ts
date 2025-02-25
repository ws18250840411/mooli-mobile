import * as React from 'react';
import PropTypes from 'prop-types';
interface BadgeProps {
    dot?: boolean;
    badge?: string | number;
}
export default class Badge extends React.PureComponent<BadgeProps> {
    static displayName: 'Badge';
    static propTypes: {
        dot: PropTypes.Requireable<boolean>;
        badge: PropTypes.Requireable<string | number>;
    };
    static defaultProps: {};
    render(): JSX.Element | null;
}
export {};
