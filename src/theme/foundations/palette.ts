import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    // TODO: Add necessary colors here
    primary: {
        main: COLORS.PRIMARY.MAIN,
        light: '#FFFFFF',
    },
    grey: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        400: '#9CA3AF',
        500: '#6B7280',
        900: '#111827',
    },
    success: {
        main: '#03543F',
        light: '#DEF7EC',
    },
    error: {
        main: '#9B1C1C',
        light: '#FBD5D5',
    },
    info: {
        main: '#1E429F',
        light: '#E1EFFE',
    },
};
