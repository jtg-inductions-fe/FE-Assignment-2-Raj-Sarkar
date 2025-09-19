import { ProductItem } from '@components/Searchbar/Searchbar.types';
import { CustomerItem } from '@containers/Customer/Customer.types';

/**
 * Props type of List Item component
 * @property item - single product/customer item detail
 */
export type ListItemProps = {
    item: CustomerItem | ProductItem;
};
