import { CustomerItem } from '@components/Customer/Customer.types';
import { ProductItem } from '@components/Searchbar/Searchbar.types';

/**
 * Props type of List Item component
 * @property item - single product/customer item detail
 */
export type ListItemProps = {
    item: CustomerItem | ProductItem;
};
