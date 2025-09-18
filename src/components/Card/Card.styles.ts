import { CONTAINER_PADDING } from 'constant/containerConstant';

import { Container as MuiContainer, styled } from '@mui/material';

import type { StyledContainerProps } from './Card.types';

const customProps: PropertyKey[] = ['padding'];

export const StyledContainer = styled(MuiContainer, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledContainerProps>(
    ({ theme: { palette, spacing, typography }, padding = 'md' }) => ({
        backgroundColor: palette.primary.light,
        borderRadius: spacing(4),
        marginTop: spacing(8),
        boxShadow: `${typography.pxToRem(0)} ${typography.pxToRem(1)} ${typography.pxToRem(3)} ${palette.grey[200]}`,
        '&.MuiContainer-root': {
            padding: spacing(CONTAINER_PADDING[padding]),
        },
    }),
);
