import { ImageList as MuiImageList, styled } from '@mui/material';

export const StyledImageList = styled(MuiImageList)(
    ({ theme: { spacing } }) => ({
        margin: 0,
        marginTop: spacing(4.75),
    }),
);
