import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse as MuiCollapse, Stack as MuiStack } from '@mui/material';

import { Badge } from '@components/Badge';
import { Icon } from '@components/Icon';
import { IconButton } from '@components/IconButton';
import {
    StyledList,
    StyledListItemButton,
    StyledTypography,
} from '@components/SidebarContent/SidebarContent.styles';
import { theme } from '@theme';

import type {
    SidebarContentProps,
    SidebarIconsProps,
    SidebarItemProps,
} from './SidebarContent.types';

/**
 *
 * @param item - menu item
 * @returns Component to render menu item with its children recursively
 */
const SidebarItem = (props: SidebarItemProps) => {
    const { item } = props;
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();
    const hasChildren = item.children ? item.children.length > 0 : false;
    const isActive = location.pathname === item.to;

    /**
     *
     * @description - handles click event on a menu item.
     * If there is children then open/close child list , otherwise navigate to the destination path route.
     * Also toggle the selected state when clicking
     */
    const handleClickOnListButton = () => {
        if (hasChildren) {
            setOpen((prev) => !prev);
        } else {
            void navigate(item.to ? item.to : '/');
        }
    };

    return (
        <>
            <StyledListItemButton onClick={handleClickOnListButton}>
                <MuiStack direction={'row'} spacing={4}>
                    {item.icon && (
                        <Icon
                            component={item.icon}
                            customcolor={
                                isActive
                                    ? theme.palette.primary.main
                                    : theme.palette.grey[900]
                            }
                        />
                    )}
                    <StyledTypography
                        variant="h3"
                        hasicon={!!item.icon}
                        color={
                            isActive
                                ? theme.palette.primary.main
                                : theme.palette.grey[900]
                        }
                    >
                        {item.title}
                    </StyledTypography>
                </MuiStack>
                {item.count !== undefined && (
                    <Badge type="error" content={item.count} />
                )}
                {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
            </StyledListItemButton>

            {hasChildren && (
                <MuiCollapse in={open} timeout="auto" unmountOnExit>
                    <StyledList>
                        {item.children!.map((child, index) => (
                            <SidebarItem key={index} item={child} />
                        ))}
                    </StyledList>
                </MuiCollapse>
            )}
        </>
    );
};

/**
 *
 * @param menu - Arrays of menu items[]
 * @returns Component to render whole menu items data
 */
export const SidebarContent = (props: SidebarContentProps) => {
    const { menu } = props;
    return (
        <StyledList>
            {menu.map((item, index) => (
                <SidebarItem key={index} item={item} />
            ))}
        </StyledList>
    );
};

/**
 *
 * @param iconItems - data of icons with re-direct paths
 * @returns Component to render icons with path to re-direct
 */
export const SidebarIcons = (props: SidebarIconsProps) => {
    const { iconItems } = props;
    const navigate = useNavigate();

    return (
        <MuiStack direction={'row'} spacing={5.5} justifyContent={'center'}>
            {iconItems.map((icon) => (
                <IconButton
                    key={icon.id}
                    aria-label={icon.label}
                    component={icon.icon}
                    onClick={() => void navigate(icon.to)}
                />
            ))}
        </MuiStack>
    );
};
