import { IconButtonProps as MuiIconButtonProps } from '@mui/material';

import { ICON_SIZE } from '@constant';

type CustomIconButtonProps = Omit<
    MuiIconButtonProps,
    'size' | 'color' | 'children'
>;

/**
 * Contains prop types for IconButton component
 * @property buttonSize - size of icon
 * @property showShadow - boolean status whether to add shadow or not
 */
export type StyledIconButtonProps = CustomIconButtonProps & {
    buttonSize?: keyof typeof ICON_SIZE;
    showShadow?: boolean;
};

/**
 * Types of props for IconButton component
 * @property component - icon component to render
 * @property customColor - custom color of icon
 */
export type IconButtonProps = StyledIconButtonProps & {
    component: React.ElementType;
    customColor?: string;
};
