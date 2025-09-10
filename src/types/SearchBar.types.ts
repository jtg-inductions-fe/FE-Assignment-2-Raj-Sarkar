import { NavigateFunction } from 'react-router-dom';

/**
 * Describes structure of product item.
 */
export type ProductItem = {
    name: string;
    technology: string;
    sales: number;
    to: string;
};

/**
 * Contains SearchBar component props
 */
export type SearchBarProps = {
    freesolo?: boolean;
    productList: ProductItem[];
};

/**
 * Contains props for option change handling function
 */
export type HandleSearchBarProps = {
    e: React.SyntheticEvent<Element, Event>;
    value: string;
    productList: ProductItem[];
    navigate: NavigateFunction;
};

/**
 * Contains types of props for handling input change
 */
export type HandleInputChangeProps = {
    e: React.SyntheticEvent<Element, Event>;
    value: string;
    navigate: NavigateFunction;
};
