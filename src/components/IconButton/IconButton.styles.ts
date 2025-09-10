import { IconButton, styled } from '@mui/material';

import { StyledIconButtonProps } from '@types';

export const StyledIconButton = styled(IconButton, {
    shouldForwardProp: (prop) =>
        prop !== 'customwidth' &&
        prop !== 'customheight' &&
        prop !== 'customcolor' &&
        prop !== 'component' &&
        prop !== 'hideinmobile' &&
        prop !== 'hideintablet' &&
        prop !== 'showshadow',
})<StyledIconButtonProps>(
    ({
        theme,
        customwidth = 24,
        customheight = 24,
        customcolor,
        hideinmobile = false,
        hideintablet = false,
        showshadow = false,
    }) => ({
        width: customwidth,
        height: customheight,
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
