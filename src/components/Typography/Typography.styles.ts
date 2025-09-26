import { styled, Typography as MuiTypography } from '@mui/material';

import { TypographyProps } from './Typography.types';

const customProps: PropertyKey[] = ['lines'];

export const StyledTypography = styled(MuiTypography, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<TypographyProps>(({ theme: { mixins }, lines = 1 }) => ({
    ...mixins.lineClamp(lines),
}));
