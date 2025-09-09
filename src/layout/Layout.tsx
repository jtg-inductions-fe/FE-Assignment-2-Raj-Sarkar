import { useState } from 'react';

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
const Layout = ({ showSidebar = false, children }: LayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const toggleSidebar = () => setSidebarOpen((prev) => !prev);

    return (
        <Box>
            <Header onMenuClick={toggleSidebar} />
            <Stack direction="row">
                {showSidebar && (
                    <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
                )}
                <Box component={'main'} maxWidth={1600} mx={'auto'}>
                    {children ?? <Outlet />}
                </Box>
            </Stack>
        </Box>
    );
};

export default Layout;
