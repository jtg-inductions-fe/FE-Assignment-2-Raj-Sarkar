import { Drawer, Stack, styled } from '@mui/material';

export const StyledMainStack = styled(Stack)(
    ({ theme: { typography, breakpoints } }) => ({
        width: typography.pxToRem(302),
        height: 'calc(100vh - 64px)',
        [breakpoints.up('sm')]: {
            width: typography.pxToRem(250),
            height: 'calc(100vh - 70px)',
        },
        padding: `${typography.pxToRem(16)} ${typography.pxToRem(20)}`,
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'sticky',
        left: 0,
        top: 70,
    }),
);

export const StyledDrawer = styled(Drawer)({
    '& .MuiDrawer-paper': {
        top: `64px`,
        height: `calc(100% - 64px)`,
    },
});
