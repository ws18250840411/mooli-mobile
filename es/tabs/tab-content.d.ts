import * as React from 'react';
import PropTypes from 'prop-types';
export interface TabContentProps {
    count: number;
    duration?: number;
    animated?: boolean;
    swipeable?: boolean;
    currentIndex: number;
    direction?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onChange?: (index: number) => void;
}
export default class TabContent extends React.PureComponent<TabContentProps> {
    static propTypes: {
        animated: PropTypes.Requireable<boolean>;
        swipeable: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {};
    distance: number;
    constructor(props: TabContentProps);
    get styles(): {
        transform: string;
        transitionDuration: string;
    } | {
        transform?: undefined;
        transitionDuration?: undefined;
    };
    onTouchStart: () => void;
    onTouchMove: (event: Event, position: {
        x: number;
        y: number;
    }) => void;
    onTouchEnd: () => false | undefined;
    genChildren: () => React.ReactNode;
    render(): JSX.Element;
}
