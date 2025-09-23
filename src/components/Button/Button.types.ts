import type { ButtonProps as MuiButtonProps } from '@mui/material';

/**
 * Types for Button component props
 * @property buttonContent - text content inside the button
 * @property buttonHref - path to be re-directed upon clicking the button
 */
export type ButtonProps = MuiButtonProps & {
    buttonContent: string;
    buttonHref: string;
};
