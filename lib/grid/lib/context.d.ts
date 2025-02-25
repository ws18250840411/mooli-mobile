import { Context } from 'react';
import { DirectionType } from '../grid';
export interface GridContextState {
    gutter?: [number, number];
    column?: number;
    border?: boolean;
    square?: boolean;
    direction?: DirectionType;
}
declare const GridContext: Context<GridContextState>;
export default GridContext;
