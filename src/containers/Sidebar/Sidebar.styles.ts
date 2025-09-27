import { Drawer as MuiDrawer, Stack as MuiStack, styled } from '@mui/material';

export const StyledMainStack = styled(MuiStack)(
    ({ theme: { palette, typography, breakpoints, spacing } }) => ({
        width: typography.pxToRem(302),
        height: 'calc(100vh - 64px)',
        [breakpoints.up('sm')]: {
            width: typography.pxToRem(250),
            height: 'calc(100vh - 70px)',
            top: typography.pxToRem(70),
        },
        padding: `${typography.pxToRem(12)}`,
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'sticky',
        left: 0,
        top: typography.pxToRem(64),
        borderRight: `${typography.pxToRem(1)} solid ${palette.grey[200]}`,
        flexShrink: 0,
        overflow: 'auto',
        gap: spacing(4),
    }),
);

export const StyledDrawer = styled(MuiDrawer)({
    '& .MuiDrawer-paper': {
        top: `64px`,
        height: `calc(100% - 64px)`,
    },
});
