import { Autocomplete, styled } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)(
    ({ theme: { palette, breakpoints, typography } }) => ({
        background: palette.grey[50],
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
            padding: `4px 0 5px`,
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: `${typography.pxToRem(1)} solid ${palette.grey[200]}`,
        },
    }),
);
