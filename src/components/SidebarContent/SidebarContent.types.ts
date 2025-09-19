import { NavigateFunction } from 'react-router-dom';

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
 * Contains types for menu icon data
 * @property id - id of item
 * @property label - title of item
 * @property icon - icon to render
 * @property to - path to re-direct
 */
export type MenuIcon = {
    id: string;
    label: string;
    icon: React.ElementType;
    to: string;
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
 * Contains types of props for handle click event on menu item
 * @property hasChildren - boolean sattus of whether it has children or not
 * @property navigate - function for navigation
 * @property item - menu item
 * @property setSelected - function to change to select state
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
 * @property hasicon - boolean status of whether it has icon or not
 * @property color - color of typography
 */
export type StyledTypographyProps = {
    hasicon?: boolean;
    color: string;
};
