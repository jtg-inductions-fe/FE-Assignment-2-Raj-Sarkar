import type { MenuIcon } from '@types';

/**
 * Contains types for the menu item data
 * @property id - id of item
 * @property title - title of item
 * @property icon - icon to render
 * @property count - message number count
 * @property to - path to re-direct
 * @property children - menu item list to render dropdown
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
 * Contains types for component to render the item tree
 * @property item - menu item
 */
export type SidebarItemProps = {
    item: MenuItem;
};

/**
 * Contains types for component to render the items in tree
 * @property menu - menu item list
 */
export type SidebarContentProps = {
    menu: MenuItem[];
};

/**
 * Contains types for menu icons component
 * @property iconItems - menu icon list
 */
export type SidebarIconsProps = {
    iconItems: MenuIcon[];
};

/**
 * Contains types for props of styled typography that will be used to show the title of menu item
 * @property hasicon - boolean status of whether it has icon or not
 * @property color - color of typography
 */
export type StyledTypographyProps = {
    hasicon?: boolean;
    color: string;
};
