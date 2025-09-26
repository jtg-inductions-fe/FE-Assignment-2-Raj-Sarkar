import { Stack as MuiStack, styled } from '@mui/material';

export const StyledStack = styled(MuiStack)(
    ({ theme: { typography, palette, spacing } }) => ({
        width: typography.pxToRem(148),
        height: typography.pxToRem(94),
        gap: spacing(1),
        padding: spacing(3, 4),
        backgroundColor: palette.primary.light,
        border: `${spacing(0.25)} solid ${palette.grey[200]}`,
        borderRadius: spacing(4),
        filter: `drop-shadow(${spacing(0, 0.25, 0)} ${palette.grey[300]})`,
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            left: '42%',
            top: '100%',
            width: 0,
            height: 0,
            borderLeft: `${spacing(2.5)} solid transparent`,
            borderRight: `${spacing(2.5)} solid transparent`,
            borderTop: `${spacing(2.5)} solid ${palette.primary.light}`,
            clear: 'both',
        },
    }),
);
