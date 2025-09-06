import { styled, SvgIcon } from '@mui/material';

import { StyledSvgIconProps } from '@types';

export const StyledSvgIcon = styled(SvgIcon, {
    shouldForwardProp: (prop) =>
        prop !== 'customwidth' &&
        prop !== 'customheight' &&
        prop !== 'customcolor',
})<StyledSvgIconProps>(
    ({ theme, customwidth = 24, customheight = 24, customcolor }) => ({
        fontSize: 'inherit',
        width: customwidth,
        height: customheight,
        color: customcolor ?? theme.palette.grey[900],
    }),
);
