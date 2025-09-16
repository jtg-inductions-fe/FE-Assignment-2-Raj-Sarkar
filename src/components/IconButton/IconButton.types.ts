import { IconButtonProps } from '@mui/material';

import { ICON_SIZE } from '@constant';
/**
 * Contains prop types for IconButton component
 * @param buttonsize - size of icon
 * @param customcolor - custom color of icon
 * @param hideinmobile - boolean status whether to hide icon in moile view or not
 * @param hideintablet - boolean status whether to hide icon in tablet view or not
 * @param showshadow - boolean status whether to add shadow or not
 * @param onClick - function to be done on click event
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
