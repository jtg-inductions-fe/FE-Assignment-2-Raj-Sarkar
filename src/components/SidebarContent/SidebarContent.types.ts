import { NavigateFunction } from 'react-router-dom';

/**
 * Contains types for the menu item data
 * @param id - id of item
 * @param title - title of item
 * @param icon - icon to render
 * @param count - message number count
 * @param to - path to re-direct
 * @param children - menu item list to render dropdown
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
 * @param id - id of item
 * @param label - title of item
 * @param icon - icon to render
 * @param to - path to re-direct
 */
export type MenuIcon = {
    id: string;
    label: string;
    icon: React.ElementType;
    to: string;
};

/**
 * Contains types for component to render the item tree
 * @param item - menu item
 */
export type SidebarItemProps = {
    item: MenuItem;
};

/**
 * Contains types for component to render the items in tree
 * @param menu - menu item list
 */
export type SidebarContentProps = {
    menu: MenuItem[];
};

/**
 * Contains types for menu icons component
 * @param iconItems - menu icon list
 */
export type SidebarIconsProps = {
    iconItems: MenuIcon[];
};

/**
 * Contains types of props for handle click event on menu item
 * @param hasChildren - boolean sattus of whether it has children or not
 * @param navigate - function for navigation
 * @param item - menu item
 * @param setSelected - function to change to select state
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
 * @param hasicon - boolean status of whether it has icon or not
 * @param color - color of typography
 */
export type StyledTypographyProps = {
    hasicon?: boolean;
    color: string;
};
