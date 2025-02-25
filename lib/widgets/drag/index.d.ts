import React, { PureComponent } from 'react';
export declare type DragEvent = MouseEvent | TouchEvent;
export interface DragType {
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
    onTouchStart: (event: DragEvent, position?: any) => void;
    onTouchMove: (event: DragEvent, position?: any) => void;
    onTouchEnd: (event: DragEvent, position?: any) => void;
}
export declare class Drag extends PureComponent<DragType> {
    protected movePosition: {
        x: any;
        y: any;
    } | null;
    events: {
        add: (node: EventTarget, type: string, handler: any, options?: {} | undefined) => any;
        removeAll: () => any;
    };
    constructor(props: DragType);
    isMouseEvent(e: DragEvent): boolean;
    _onTouchStart: (event: DragEvent) => void;
    _onTouchMove: (event: DragEvent) => void;
    _onTouchEnd: (event: DragEvent) => void;
    render(): React.FunctionComponentElement<{
        onTouchStart: (event: DragEvent) => void;
        onTouchMove: (event: DragEvent) => void;
        onTouchEnd: (event: DragEvent) => void;
        onMouseDown: (event: DragEvent) => void;
        onMouseMove: (event: DragEvent) => void;
        onMouseUp: (event: DragEvent) => void;
        className: string;
        style: React.CSSProperties;
    }>;
}
