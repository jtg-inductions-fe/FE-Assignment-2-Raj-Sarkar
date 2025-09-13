import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, Stack } from '@mui/material';

import { Icon } from '@components/Icon';
import { IconButton } from '@components/IconButton';
import {
    StyledBadge,
    StyledList,
    StyledListItemButton,
    StyledTypography,
} from '@components/SidebarContent';
import { handleClickByNavigate, handleClickOnListButton } from '@helper';
import { theme } from '@theme';
import {
    SidebarContentProps,
    SideBarIconsProps,
    SidebarItemProps,
} from '@types';

/**
 *
 * @param item - menu item
 * @returns Component to render menu item with its children recursively
 */
const SidebarItem = (props: SidebarItemProps) => {
    const { item } = props;
    const [open, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const [selected, setSelected] = useState<boolean>(false);

    const hasChildren = item.children ? item.children.length > 0 : false;

    return (
        <>
            <StyledListItemButton
                selected={selected}
                onClick={() =>
                    handleClickOnListButton({
                        hasChildren,
                        open,
                        setOpen,
                        navigate,
                        item,
                        selected,
                        setSelected,
                    })
                }
            >
                <Stack direction={'row'} spacing={4}>
                    {item.icon && (
                        <Icon
                            component={item.icon}
                            customcolor={
                                selected
                                    ? theme.palette.primary.main
                                    : theme.palette.grey[900]
                            }
                        />
                    )}
                    <StyledTypography
                        variant="h3"
                        hasicon={!!item.icon}
                        color={
                            selected
                                ? theme.palette.primary.main
                                : theme.palette.grey[900]
                        }
                    >
                        {item.title}
                    </StyledTypography>
                </Stack>
                {item.count && (
                    <StyledBadge variant="body2">{item.count}</StyledBadge>
                )}
                {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
            </StyledListItemButton>

            {hasChildren && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <StyledList>
                        {item.children!.map((child, index) => (
                            <SidebarItem key={index} item={child} />
                        ))}
                    </StyledList>
                </Collapse>
            )}
        </>
    );
};

/**
 *
 * @param menu - Arrays of menu items[]
 * @returns Component to render whole menu items data
 */
export const SideBarContent = (props: SidebarContentProps) => {
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
export const SideBarIcons = (props: SideBarIconsProps) => {
    const { iconItems } = props;
    const navigate = useNavigate();

    return (
        <Stack direction={'row'} spacing={5.5} justifyContent={'center'}>
            {iconItems.map((icon) => (
                <IconButton
                    key={icon.id}
                    component={icon.icon}
                    onClick={() =>
                        handleClickByNavigate({ navigate, path: icon.to })
                    }
                />
            ))}
        </Stack>
    );
};
