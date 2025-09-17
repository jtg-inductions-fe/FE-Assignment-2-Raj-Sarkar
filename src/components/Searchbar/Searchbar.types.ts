import { NavigateFunction } from 'react-router-dom';

/**
 * Describes structure of product item.
 * @property name - product name
 * @property technology - technologies used for making the product
 * @property sales - number of sales of the product
 * @property to - path to re-direct on page of product details
 */
export type ProductItem = {
    name: string;
    technology: string;
    sales: number;
    to: string;
};

/**
 * Contains SearchBar component props
 * @property freesolo - boolean status to make searchbar a freesolo or not
 * @property productList - list of product items
 */
export type SearchBarProps = {
    freesolo?: boolean;
    productList: ProductItem[];
};

/**
 * Contains props for option change handling function
 * @property e - event details
 * @property value - value of input field
 * @property productList - list of product items
 * @property navigate - navigateFunction for navigating to different route
 */
export type HandleSearchBarProps = {
    e: React.SyntheticEvent<Element, Event>;
    value: string;
    productList: ProductItem[];
    navigate: NavigateFunction;
};

/**
 * Contains types of props for handling input change
 * @property e - event details
 * @property value - value of input field
 * @property navigate - navigateFunction for navigating to different route
 */
export type HandleInputChangeProps = {
    e: React.SyntheticEvent<Element, Event>;
    value: string;
    navigate: NavigateFunction;
};
