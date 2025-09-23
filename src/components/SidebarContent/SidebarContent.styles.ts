import {
    List as MuiList,
    ListItemButton as MuiListItemButton,
    styled,
    Typography as MuiTypography,
} from '@mui/material';

import type { StyledTypographyProps } from './SidebarContent.types';

const customTypographyProps: PropertyKey[] = ['hasicon', 'color'];

export const StyledList = styled(MuiList)(({ theme: { typography } }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: typography.pxToRem(14),
    padding: 0,
}));

export const StyledListItemButton = styled(MuiListItemButton)(
    ({ theme: { palette, spacing } }) => ({
        padding: spacing(1, 2),
        borderRadius: spacing(3),
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        '&.Mui-selected': {
            backgroundColor: palette.primary.light,
        },
    }),
);

export const StyledTypography = styled(MuiTypography, {
    shouldForwardProp: (prop) => !customTypographyProps.includes(prop),
})<StyledTypographyProps>(
    ({ theme: { typography, mixins }, hasicon = true, color }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: hasicon ? 0 : typography.pxToRem(40),
        color: color,
        ...mixins.lineClamp(1),
    }),
);
