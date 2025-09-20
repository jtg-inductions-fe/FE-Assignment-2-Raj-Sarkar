import { RouterProvider } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { routes } from '@router';
import { theme } from '@theme';

/**
 *
 * @returns component that holds all routes with components
 */
export const App = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={routes} />
    </ThemeProvider>
);
