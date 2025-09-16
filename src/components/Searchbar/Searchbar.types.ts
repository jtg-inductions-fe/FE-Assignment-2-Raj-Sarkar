import { NavigateFunction } from 'react-router-dom';

/**
 * Describes structure of product item.
 * @param name - product name
 * @param technology - technologies used for making the product
 * @param sales - number of sales of the product
 * @param to - path to re-direct on page of product details
 */
export type ProductItem = {
    name: string;
    technology: string;
    sales: number;
    to: string;
};

/**
 * Contains SearchBar component props
 * @param freesolo - boolean status to make searchbar a freesolo or not
 * @param productList - list of product items
 */
export type SearchBarProps = {
    freesolo?: boolean;
    productList: ProductItem[];
};

/**
 * Contains props for option change handling function
 * @param e - event details
 * @param value - value of input field
 * @param productList - list of product items
 * @param navigate - navigateFunction for navigating to different route
 */
export type HandleSearchBarProps = {
    e: React.SyntheticEvent<Element, Event>;
    value: string;
    productList: ProductItem[];
    navigate: NavigateFunction;
};

/**
 * Contains types of props for handling input change
 * @param e - event details
 * @param value - value of input field
 * @param navigate - navigateFunction for navigating to different route
 */
export type HandleInputChangeProps = {
    e: React.SyntheticEvent<Element, Event>;
    value: string;
    navigate: NavigateFunction;
};
