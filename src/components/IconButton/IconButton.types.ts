import { IconButtonProps } from '@mui/material';

import { ICON_SIZE } from '@constant';

/**
 * Contains prop types for IconButton component
 * @property buttonsize - size of icon
 * @property customcolor - custom color of icon
 * @property hideinmobile - boolean status whether to hide icon in moile view or not
 * @property hideintablet - boolean status whether to hide icon in tablet view or not
 * @property showshadow - boolean status whether to add shadow or not
 * @property onClick - function to be done on click event
 */
export type StyledIconButtonProps = IconButtonProps & {
    component: React.ElementType;
    buttonsize?: keyof typeof ICON_SIZE;
    customcolor?: string;
    hideinmobile?: boolean;
    hideintablet?: boolean;
    showshadow?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
