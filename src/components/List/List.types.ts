import { ListItemProps } from '@components/ListItem/ListItem.types';
import { ProductItem } from '@components/Searchbar/Searchbar.types';
import { CustomerItem } from '@containers/Customer/Customer.types';

/**
 * Props types for list content component
 * @property listData - list of details of customer/product
 * @property RenderItem - component to render each item
 */
export type ListContentProps = {
    listData: CustomerItem[] | ProductItem[];
    RenderItem: React.FC<ListItemProps>;
};

/**
 * Types of props of styled box
 * @property component - component to render as the box
 */
export type StyledBoxProps = {
    component: string;
};
