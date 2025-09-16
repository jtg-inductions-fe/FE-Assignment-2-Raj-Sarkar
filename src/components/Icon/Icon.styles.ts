import { styled, SvgIcon as MuiSvgIcon } from '@mui/material';

import { ICON_SIZE } from '@constant';

import { StyledSvgIconProps } from './Icon.types';

const customProps: PropertyKey[] = ['size', 'customcolor'];

export const StyledSvgIcon = styled(MuiSvgIcon, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledSvgIconProps>(({ theme, size = 'sm', customcolor }) => ({
    fontSize: 'inherit',
    width: ICON_SIZE[size],
    height: ICON_SIZE[size],
    color: customcolor ?? theme.palette.grey[900],
}));
