import {
    Divider as MuiDivider,
    Stack as MuiStack,
    useMediaQuery,
} from '@mui/material';

import {
    StyledDrawer,
    StyledMainStack,
} from '@components/Sidebar/Sidebar.styles';
import { SidebarContent, SidebarIcons } from '@components/SidebarContent';
import { MENU_DATA_1, MENU_DATA_2, MENU_ICONS } from '@constant';
import { theme } from '@theme';

import { SidebarProps } from './Sidebar.types';

/**
 *
 * @returns Component to render whole sidebar
 */
const SidebarComponent = () => (
    <StyledMainStack>
        <MuiStack spacing={6}>
            <SidebarContent menu={MENU_DATA_1} />
            <MuiDivider component="hr" />
            <SidebarContent menu={MENU_DATA_2} />
        </MuiStack>
        <SidebarIcons iconItems={MENU_ICONS} />
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
