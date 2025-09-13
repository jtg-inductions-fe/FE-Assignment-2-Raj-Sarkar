import { Divider, Stack, useMediaQuery } from '@mui/material';

import { StyledDrawer, StyledMainStack } from '@components/Sidebar';
import { SideBarContent, SideBarIcons } from '@components/SidebarContent';
import { menuData1, MenuData2, menuIcons } from '@constant';
import { theme } from '@theme';
import { SidebarProps } from '@types';

/**
 *
 * @returns Component to render whole sidebar
 */
const SidebarComponent = () => (
    <StyledMainStack>
        <Stack spacing={6}>
            <SideBarContent menu={menuData1} />
            <Divider component="hr" />
            <SideBarContent menu={MenuData2} />
        </Stack>
        <SideBarIcons iconItems={menuIcons} />
    </StyledMainStack>
);

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
            <StyledDrawer
                open={open}
                onClose={onClose}
                slotProps={{
                    backdrop: {
                        invisible: true,
                    },
                }}
            >
                <SidebarComponent />
            </StyledDrawer>
        );
    }
    return <SidebarComponent />;
};
