import { Stack, styled } from '@mui/material';

export const StyledHeaderStack = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    maxHeight: theme.typography.pxToRem(70),
    position: 'sticky',
    top: 0,
    [theme.breakpoints.up('sm')]: {
        padding: `${theme.spacing(3)} ${theme.spacing(5)}`,
    },
}));
