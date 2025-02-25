import * as React from 'react';
import PropTypes from 'prop-types';
import GridItem from './grid-item';
export declare const directions: string[];
export declare type DirectionType = typeof directions[number];
export interface GridProps {
    gutter?: number | string;
    direction?: DirectionType;
    column?: number;
    border?: boolean;
    square?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export default class Grid extends React.PureComponent<GridProps> {
    static Item: typeof GridItem;
    static displayName: 'Grid';
    static propTypes: {
        gutter: PropTypes.Requireable<string | number>;
        column: PropTypes.Requireable<string | number>;
        border: PropTypes.Requireable<boolean>;
        square: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    static defaultProps: {
        gutter: number;
        square: boolean;
        border: boolean;
        direction: string;
    };
    render(): JSX.Element;
}
