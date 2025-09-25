import { Stack as MuiStack, styled } from '@mui/material';

export const StyledStack = styled(MuiStack)(({ theme: { spacing } }) => ({
    padding: spacing(4, 0, 4),
    gap: spacing(8),
}));
