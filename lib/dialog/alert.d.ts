import { DialogProps } from './dialog';
export interface AlertProps extends DialogProps {
    beforeClose?: (action: string, done: () => void) => void;
    closeOnAction?: boolean;
}
export default function confirm(props: AlertProps): {
    close: () => void;
};
