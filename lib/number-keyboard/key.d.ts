import * as React from 'react';
import PropTypes from 'prop-types';
export interface KeyProps {
    text: number | React.ReactNode;
    type?: string;
    color?: string;
    wider?: boolean;
    large?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onPress?: (key: {
        text: KeyProps['text'];
        type: KeyProps['type'];
    }) => void;
}
export default class Key extends React.PureComponent<KeyProps> {
    static displayName: 'Key';
    static propTypes: {
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {};
    renderKeyContent: () => React.ReactNode;
    render(): JSX.Element;
}
