import { Drawer, useMediaQuery } from '@mui/material';

import { SideBarContent } from '@components/sidebar';
import { theme } from '@theme';
import { SidebarProps } from '@types';

/**
 *
 * @param open - boolean value to show sidebar
 * @param onClose - function to open/close sidebar
 * @returns Sidebar component that contains all sidebar icons
 */
export const Sidebar = (props: SidebarProps) => {
    const { open, onClose } = props;
    const isDesktop = useMediaQuery(theme.breakpoints.down('sm'));

    if (isDesktop) {
        return (
            <Drawer open={open} onClose={onClose}>
                <SideBarContent />
            </Drawer>
        );
    }
    return <SideBarContent />;
};
