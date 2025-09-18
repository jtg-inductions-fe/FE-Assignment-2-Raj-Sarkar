import { styled, SvgIcon as MuiSvgIcon } from '@mui/material';

import { ICON_SIZE } from '@constant';

import type { StyledSvgIconProps } from './Icon.types';

const customProps: PropertyKey[] = ['size', 'customcolor'];

export const StyledSvgIcon = styled(MuiSvgIcon, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledSvgIconProps>(({ size = 'sm' }) => ({
    fontSize: 'inherit',
    width: ICON_SIZE[size],
    height: ICON_SIZE[size],
    fill: 'none',
}));
