import { Drawer as MuiDrawer, useMediaQuery } from '@mui/material';

import { SideBarContent } from '@components/Sidebar';
import { theme } from '@theme';

import { SidebarProps } from './Sidebar.types';

/**
 *
 * @param open - boolean value to show sidebar
 * @param onClose - function to open/close sidebar
 * @returns Sidebar component that contains all sidebar icons
 */
export const Sidebar = (props: SidebarProps) => {
    const { open, onClose } = props;
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    if (!isDesktop) {
        return (
            <MuiDrawer open={open} onClose={onClose}>
                <SideBarContent />
            </MuiDrawer>
        );
    }
    return <SideBarContent />;
};
