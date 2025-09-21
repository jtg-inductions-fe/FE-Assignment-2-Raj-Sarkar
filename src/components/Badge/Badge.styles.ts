import {
    Box as MuiBox,
    styled,
    Typography as MuiTypography,
} from '@mui/material';

import { BADGE_TYPE_COLORS } from '@constant';

import { StyledBadgeProps } from './Badge.types';

const customProps: PropertyKey[] = ['type'];

export const StyledBadge = styled(MuiTypography, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledBadgeProps>(({ type }) => ({
    color: BADGE_TYPE_COLORS[type]?.['text'],
}));

export const StyledBox = styled(MuiBox, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledBadgeProps>(({ theme: { spacing }, type }) => ({
    padding: spacing(0.5, 2.5),
    borderRadius: spacing(2.5),
    backgroundColor: BADGE_TYPE_COLORS[type]?.['background'],
}));
