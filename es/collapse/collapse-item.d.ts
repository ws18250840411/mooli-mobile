import * as React from 'react';
import PropTypes from 'prop-types';
import { CellProps } from '../cell/cell';
export interface CollapseItemProps extends CellProps {
    index?: number;
    name?: string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
interface CollapseItemStates {
    expanded: any;
}
export default class CollapseItem extends React.PureComponent<CollapseItemProps, CollapseItemStates> {
    static displayName: 'CollapseItem';
    static propTypes: {
        index: PropTypes.Requireable<number>;
        name: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        arrow: boolean;
    };
    static contextType: React.Context<import("./lib/context").CollapseContextState>;
    protected wrapperRef: React.RefObject<HTMLDivElement>;
    protected contentRef: React.RefObject<HTMLDivElement>;
    constructor(props: CollapseItemProps);
    get currentName(): string | number | undefined;
    get expanded(): any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    update: () => void;
    toggle: () => void;
    genTitle: () => JSX.Element;
    genContent: () => JSX.Element;
    render(): JSX.Element;
}
export {};
