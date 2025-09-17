import { CONTAINER_PADDING } from 'constant/containerConstant';

import { Container as MuiContainer, styled } from '@mui/material';

import { StyledContainerProps } from './Container.types';

const customProps: PropertyKey[] = ['padding'];

export const StyledContainer = styled(MuiContainer, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledContainerProps>(({ theme: { palette, spacing }, padding = 'md' }) => ({
    backgroundColor: palette.primary.light,
    borderRadius: spacing(4),
    marginTop: spacing(8),
    '&.MuiContainer-root': {
        padding: spacing(CONTAINER_PADDING[padding]),
    },
}));
