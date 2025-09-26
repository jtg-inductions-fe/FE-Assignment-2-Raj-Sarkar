import { ImageList as MuiImageList, styled } from '@mui/material';

import { StyledImageListProps } from './ImageGrid.types';

const customProps: PropertyKey[] = ['marginTop'];

export const StyledImageList = styled(MuiImageList, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledImageListProps>(({ theme: { spacing }, marginTop }) => ({
    margin: 0,
    marginTop: spacing(marginTop),
}));
