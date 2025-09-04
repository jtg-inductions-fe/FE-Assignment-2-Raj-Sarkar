import { Box, Stack } from '@mui/material';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { LayoutProps } from '../types';

const Layout = ({ showSidebar = false, children }: LayoutProps) => (
    <Box>
        <Header />
        <Stack direction="row">
            {showSidebar && <Sidebar />}
            {children}
        </Stack>
    </Box>
);

export default Layout;
