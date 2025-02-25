import { createContext, Context } from 'react';

export interface NoticeBarContextState {
  offset?: number;
  isLast?: boolean;
}

const NoticeBarContext: Context<NoticeBarContextState> = createContext({});

export default NoticeBarContext;
