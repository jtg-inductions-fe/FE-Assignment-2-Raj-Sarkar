import { IconButton as MuiIconButton, styled } from '@mui/material';

import { ICON_SIZE } from '@constant';

import { StyledIconButtonProps } from './IconButton.types';

const customProps: PropertyKey[] = [
    'buttonsize',
    'customcolor',
    'component',
    'hideinmobile',
    'hideintablet',
    'showshadow',
];

export const StyledIconButton = styled(MuiIconButton, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledIconButtonProps>(
    ({
        theme,
        buttonsize = 'sm',
        customcolor,
        hideinmobile = false,
        hideintablet = false,
        showshadow = false,
    }) => ({
        width: ICON_SIZE[buttonsize],
        height: ICON_SIZE[buttonsize],
        color: customcolor ?? theme.palette.grey[900],
        padding: theme.spacing(1),
        boxShadow: showshadow
            ? `0 ${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(4)} ${theme.palette.grey[400]}`
            : '',
        display: hideinmobile ? 'none' : 'inline-flex',
        [theme.breakpoints.up('sm')]: {
            display: hideintablet ? 'none' : 'inline-flex',
        },
    }),
);
