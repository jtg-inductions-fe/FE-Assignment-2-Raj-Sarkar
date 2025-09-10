import type { Components } from '@mui/material/styles';

// Local Font files
import InterRegularTTF from '@assets/fonts/inter/InterVariable.ttf';
import InterRegularWOFF2 from '@assets/fonts/inter/InterVariable.woff2';

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontSize: '62.5%',
            },
            '@font-face': {
                fontDisplay: 'swap',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '400 700',
                src: `url(${InterRegularWOFF2}) format('woff2'), 
                url(${InterRegularTTF}) format('truetype')`,
            },
        },
    },
};
