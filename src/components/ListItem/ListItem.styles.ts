import { Avatar as MuiAvatar, styled } from '@mui/material';

export const StyledAvatar = styled(MuiAvatar)(({ theme: { spacing } }) => ({
    width: spacing(8),
    height: spacing(8),
}));
