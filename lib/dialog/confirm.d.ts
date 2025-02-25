import { DialogProps } from './dialog';
export interface ConfirmProps extends DialogProps {
    beforeClose?: (action: string, done: () => void) => void;
    closeOnAction?: boolean;
}
export default function confirm(props: ConfirmProps): {
    close: () => void;
};
