import * as React from 'react';
import PropTypes from 'prop-types';
import CollapseItem from './collapse-item';
export interface CollapseProps {
    accordion?: boolean;
    value?: any;
    border?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: Function;
    onInput?: Function;
}
interface CollapseStates {
    curValue: any;
}
export default class Collapse extends React.PureComponent<CollapseProps, CollapseStates> {
    static Item: typeof CollapseItem;
    static displayName: 'Collapse';
    static propTypes: {
        accordion: PropTypes.Requireable<boolean>;
        border: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onInput: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        value: never[];
        border: boolean;
    };
    constructor(props: CollapseProps);
    onSwitch: (name: any, expanded: any) => void;
    render(): JSX.Element;
}
export {};
