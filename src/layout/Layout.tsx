import { Outlet } from 'react-router-dom';

import { Box, Stack } from '@mui/material';

import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar';
import { LayoutProps } from '@types';

/**
 *
 * @param showSidebar - boolean value to show/hide sidebar
 * @returns Layout component for layout reusability
 */
const Layout = ({ showSidebar = false, children }: LayoutProps) => (
    <Box>
        <Header />
        <Stack direction="row">
            {showSidebar && <Sidebar />}
            <Box component={'main'} maxWidth={1600} mx={'auto'}>
                {children ?? <Outlet />}
            </Box>
        </Stack>
    </Box>
);

export default Layout;
