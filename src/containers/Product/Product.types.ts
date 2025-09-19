import { ProductItem } from '@components/Searchbar/Searchbar.types';

/**
 * Props types for product component
 * @property productData - list of product details
 * @property isDesktop - boolean value of whether view width is desktop or not
 */
export type ProductProps = {
    productData: ProductItem[];
    isDesktop: boolean;
};
