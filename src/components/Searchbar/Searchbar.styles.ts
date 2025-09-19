import { Autocomplete as MuiAutocomplete, styled } from '@mui/material';

export const StyledAutocomplete = styled(MuiAutocomplete)(
    ({ theme: { palette, breakpoints, typography, spacing } }) => ({
        backgroundColor: palette.grey[50],
        display: 'none',
        width: '100%',
        maxWidth: typography.pxToRem(402),
        [breakpoints.up('sm')]: {
            display: 'flex',
        },
        alignItems: 'center',
        '& .MuiOutlinedInput-root': {
            borderRadius: typography.pxToRem(16),
            boxShadow: `0 ${typography.pxToRem(4)} ${typography.pxToRem(4)} ${palette.grey[400]}`,
        },
        '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
            padding: spacing(1, 0, 1.1),
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: `${typography.pxToRem(1)} solid ${palette.grey[200]}`,
        },
    }),
);
