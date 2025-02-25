import { Context } from 'react';
export interface NoticeBarContextState {
    offset?: number;
    isLast?: boolean;
}
declare const NoticeBarContext: Context<NoticeBarContextState>;
export default NoticeBarContext;
