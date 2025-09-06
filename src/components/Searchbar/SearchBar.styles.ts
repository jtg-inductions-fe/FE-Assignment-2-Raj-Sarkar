import { Autocomplete, styled } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)(
    ({ theme: { palette, breakpoints } }) => ({
        background: palette.grey[50],
        display: 'none',
        width: '100%',
        [breakpoints.up('md')]: {
            display: 'block',
        },
        borderRadius: 24,
    }),
);
