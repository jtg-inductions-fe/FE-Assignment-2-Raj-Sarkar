import type { ListItemProps } from '@components/ListItem/ListItem.types';
import { ListItem } from '@models';

/**
 * Props types for list content component
 * @property listData - list of details of customer/product
 * @property renderItem - component to render each item
 */
export type ListContentProps = {
    listData: ListItem[];
    renderItem: (props: ListItemProps) => React.ReactNode;
};

/**
 * Types of props of styled box
 * @property component - component to render as the box
 */
export type StyledBoxProps = {
    component: string;
};
