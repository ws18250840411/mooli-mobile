import * as React from 'react';
import PropTypes from 'prop-types';
interface InfoProps {
    dot?: boolean;
    info?: React.ReactNode;
    badge?: number;
    className?: string;
    style?: React.CSSProperties;
}
export default class Info extends React.PureComponent<InfoProps> {
    static displayName: 'Info';
    static propTypes: {
        dot: PropTypes.Requireable<boolean>;
        info: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    static defaultProps: {};
    render(): JSX.Element | null;
}
export {};
