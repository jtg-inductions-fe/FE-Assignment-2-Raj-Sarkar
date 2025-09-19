import { useState } from 'react';

import { Box, Stack } from '@mui/material';

import { Header } from '@containers/Header';
import { Sidebar } from '@containers/Sidebar';

import { LayoutProps } from './Layout.types';

/**
 *
 * @param showSidebar - boolean value to show/hide sidebar
 * @returns Layout component for layout reusability
 */
const Layout = (props: LayoutProps) => {
    const { showSidebar = false, children } = props;
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
                    {children}
                </Box>
            </Stack>
        </Box>
    );
};

export default Layout;
