import { NavigateFunction } from 'react-router-dom';

/**
 * Contains types for the menu item data
 */
export type MenuItem = {
    id: string;
    title: string;
    icon?: React.ElementType;
    count?: number;
    to?: string;
    children?: MenuItem[];
};

/**
 * Contains types for menu icon data
 */
export type MenuIcon = {
    id: string;
    label: string;
    icon: React.ElementType;
    to: string;
};

/**
 * Contains types for component to render the item tree
 */
export type SidebarItemProps = {
    item: MenuItem;
};

/**
 * Contains types for component to render the items in tree
 */
export type SidebarContentProps = {
    menu: MenuItem[];
};

/**
 * Contains types for menu icons component
 */
export type SidebarIconsProps = {
    iconItems: MenuIcon[];
};

/**
 * Contains types of props for handle click event on menu item
 */
export type HandleClickOnListButtonProps = {
    hasChildren: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    navigate: NavigateFunction;
    item: MenuItem;
    setSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

/**
 * Contains types for props of styled typography that will be used to show the title of menu item
 */
export type StyledTypographyProps = {
    hasicon?: boolean;
    color: string;
};
