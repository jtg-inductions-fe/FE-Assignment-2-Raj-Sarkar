import { Container as MuiContainer, styled } from '@mui/material';

import { PADDING_TO_SIZE_MAP } from '@constant';

import type { StyledContainerProps } from './Card.types';

const customProps: PropertyKey[] = ['size'];

export const StyledContainer = styled(MuiContainer, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledContainerProps>(
    ({ theme: { palette, spacing, typography }, size = 'md' }) => ({
        backgroundColor: palette.primary.light,
        borderRadius: spacing(4),
        marginTop: spacing(8),
        boxShadow: `0 ${typography.pxToRem(1)} ${typography.pxToRem(3)} ${palette.grey[200]}`,
        '&.MuiContainer-root': {
            padding: spacing(PADDING_TO_SIZE_MAP[size]),
        },
    }),
);
