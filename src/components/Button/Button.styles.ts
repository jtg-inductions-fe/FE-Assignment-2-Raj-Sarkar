import { Button as MuiButton, styled } from '@mui/material';

export const StyledButton = styled(MuiButton)(
    ({ theme: { palette, typography, spacing } }) => ({
        backgroundColor: palette.primary.main,
        padding: `${typography.pxToRem(9)} ${typography.pxToRem(17)}`,
        color: palette.primary.light,
        width: 'fit-content',
        borderRadius: spacing(3),
    }),
);
