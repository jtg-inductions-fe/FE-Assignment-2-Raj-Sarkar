import { useState } from 'react';

import { Outlet } from 'react-router-dom';

import { Box as MuiBox, Stack as MuiStack } from '@mui/material';

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
        <MuiBox>
            <Header onMenuClick={toggleSidebar} />
            <MuiStack direction="row">
                {showSidebar && (
                    <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
                )}
                <MuiBox component="main" maxWidth={1800} mx={'auto'}>
                    {children ?? <Outlet />}
                </MuiBox>
            </MuiStack>
        </MuiBox>
    );
};

export default Layout;
