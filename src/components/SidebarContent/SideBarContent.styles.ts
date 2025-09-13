import { List, ListItemButton, styled, Typography } from '@mui/material';

import { StyledTypographyProps } from '@types';

export const StyledList = styled(List)(({ theme: { typography } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: typography.pxToRem(22),
    padding: 0,
}));

export const StyledBadge = styled(Typography)(({ theme: { palette } }) => ({
    backgroundColor: palette.error.light,
    color: palette.error.main,
    borderRadius: '50%',
    width: 20,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

export const StyledListItemButton = styled(ListItemButton)(
    ({ theme: { palette } }) => ({
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        '&.Mui-selected': {
            backgroundColor: palette.primary.light,
        },
    }),
);

export const StyledTypography = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'hasicon' && prop !== 'color',
})<StyledTypographyProps>(({ hasicon = true, color }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: hasicon ? 0 : 40,
    color: color,
}));
