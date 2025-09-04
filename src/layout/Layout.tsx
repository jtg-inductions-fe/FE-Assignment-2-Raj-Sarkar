import { Box, Stack } from '@mui/material';

import { Header } from '../components';
import { Sidebar } from '../components';
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
