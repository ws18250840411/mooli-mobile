import React, { PureComponent } from 'react';
import { eventStore } from '../../utils';
import { getPosition, getDirection } from './lib/utils';

export type DragEvent = MouseEvent | TouchEvent;

export interface DragType {
  className?: string; // 自定义类名
  style?: React.CSSProperties; // 自定义样式
  children: React.ReactNode;
  onTouchStart: (event: DragEvent, position?: any) => void;
  onTouchMove: (event: DragEvent, position?: any) => void;
  onTouchEnd: (event: DragEvent, position?: any) => void;
}

export class Drag extends PureComponent<DragType> {
  protected movePosition: { x: any; y: any } | null;
  public events: {
    add: (
      node: EventTarget,
      type: string,
      handler: any,
      options?: {} | undefined,
    ) => any;
    removeAll: () => any;
  };
  constructor(props: DragType) {
    super(props);
    this.events = eventStore();
  }
  isMouseEvent(e: DragEvent) {
    return e && !('touches' in e);
  }
  _onTouchStart = (event: DragEvent) => {
    const { x, y } = getPosition(event);
    this.movePosition = { x, y };
    this.props.onTouchStart(event, this.movePosition);
    if (this.isMouseEvent(event)) {
      this.events.add(document.body, 'mousemove', this._onTouchMove);
      this.events.add(document.body, 'mouseup', this._onTouchEnd);
    }
  };
  _onTouchMove = (event: DragEvent) => {
    if (!this.movePosition) {
      return;
    }
    const { x, y } = getPosition(event);
    const deltaX = x - this.movePosition.x;
    const deltaY = y - this.movePosition.y;

    const direction = getDirection(deltaX, deltaY);
    const curMovePosition = {
      x: deltaX,
      y: deltaY,
      direction,
    };
    this.props.onTouchMove(event, curMovePosition);
  };
  _onTouchEnd = (event: DragEvent) => {
    if (!this.movePosition) {
      return;
    }
    if (this.isMouseEvent(event)) {
      this.events.removeAll();
    }
    this.props.onTouchEnd(event, this.movePosition);
    this.movePosition = null;
  };
  render() {
    const { children, ...rest } = this.props;
    return React.cloneElement(children as any, {
      ...rest,
      onTouchStart: this._onTouchStart,
      onTouchMove: this._onTouchMove,
      onTouchEnd: this._onTouchEnd,
      onMouseDown: this._onTouchStart,
      onMouseMove: this._onTouchMove,
      onMouseUp: this._onTouchEnd,
    });
  }
}
