import React from 'react';
export interface PortalProps {
    container?: HTMLElement | Promise<HTMLElement | null> | null;
    onChildrenMount?: () => void;
}
interface PortalState {
    container: HTMLElement | null;
}
export declare class Portal extends React.Component<PortalProps, PortalState> {
    static defaultProps: PortalProps;
    static getDerivedStateFromProps(nextProps: PortalProps, nextState: PortalState): {
        container: HTMLElement | null | undefined;
    };
    protected unmount: boolean;
    protected mounted: boolean;
    protected seqId: number;
    state: {
        container: null;
    };
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal | null;
}
export default Portal;
