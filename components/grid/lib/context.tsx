import { createContext, Context } from 'react';
import { DirectionType } from '../grid';

export interface GridContextState {
  gutter?: [number, number];
  column?: number;
  border?: boolean;
  square?: boolean;
  direction?: DirectionType;
}

const GridContext: Context<GridContextState> = createContext({});

export default GridContext;
