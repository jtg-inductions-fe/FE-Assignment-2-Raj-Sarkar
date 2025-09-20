import { IconButton as MuiIconButton, styled } from '@mui/material';

import { ICON_SIZE } from '@constant';

import type { StyledIconButtonProps } from './IconButton.types';

const customProps: PropertyKey[] = ['buttonSize', 'showShadow'];

export const StyledIconButton = styled(MuiIconButton, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledIconButtonProps>(
    ({ theme, buttonSize = 'sm', showShadow = false }) => ({
        width: ICON_SIZE[buttonSize],
        height: ICON_SIZE[buttonSize],
        padding: theme.spacing(1),
        boxShadow: showShadow
            ? `0 ${theme.typography.pxToRem(4)} ${theme.typography.pxToRem(4)} ${theme.palette.grey[400]}`
            : '',
    }),
);
