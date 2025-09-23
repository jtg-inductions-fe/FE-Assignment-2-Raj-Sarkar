import { Container as MuiContainer, styled } from '@mui/material';

import { CONTAINER_MARGIN, PADDING_TO_SIZE_MAP } from '@constant';

import type { StyledContainerProps } from './Card.types';

const customProps: PropertyKey[] = ['size', 'margin'];

export const StyledContainer = styled(MuiContainer, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledContainerProps>(
    ({
        theme: { palette, spacing, typography },
        size = 'md',
        margin = 'sm',
    }) => ({
        backgroundColor: palette.primary.light,
        borderRadius: spacing(4),
        marginTop: spacing(CONTAINER_MARGIN[margin]),
        boxShadow: `0 ${typography.pxToRem(1)} ${typography.pxToRem(3)} ${palette.grey[200]}`,
        '&.MuiContainer-root': {
            padding: spacing(PADDING_TO_SIZE_MAP[size]),
        },
    }),
);
