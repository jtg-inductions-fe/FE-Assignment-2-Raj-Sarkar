import { CustomerItem } from '@components/Customer/Customer.types';
import { ListItemProps } from '@components/ListItem/ListItem.types';
import { ProductItem } from '@components/Searchbar/Searchbar.types';

/**
 * Props types for list content component
 * @property listData - list of details of customer/product
 * @property renderItem - component to render each item
 */
export type ListContentProps = {
    listData: CustomerItem[] | ProductItem[];
    RenderItem: React.FC<ListItemProps>;
};
