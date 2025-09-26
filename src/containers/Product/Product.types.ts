import { ListItem } from '@models';

/**
 * Props types for product component
 * @property productData - list of product details
 * @property isDesktop - boolean value of whether view width is desktop or not
 */
export type ProductProps = {
    productData: ListItem[];
    isDesktop: boolean;
};
