import { styled, Typography as MuiTypography } from '@mui/material';

import { BADGE_TYPE_COLORS } from '@constant';

import { StyledBadgeProps } from './Badge.types';

const customProps: PropertyKey[] = ['type'];

export const StyledBadge = styled(MuiTypography, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledBadgeProps>(({ theme: { spacing }, type }) => ({
    backgroundColor: BADGE_TYPE_COLORS[type]['background'],
    color: BADGE_TYPE_COLORS[type]['text'],
    borderRadius: spacing(2.5),
    padding: spacing(0.5, 2.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));
