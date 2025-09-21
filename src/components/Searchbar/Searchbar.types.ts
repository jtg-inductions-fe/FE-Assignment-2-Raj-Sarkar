/**
 * Describes structure of product item.
 * @property name - product name
 * @property technology - technologies used for making the product
 * @property sales - number of sales of the product
 * @property to - path to re-direct on page of product details
 * @property id - is of product
 */
export type ProductItem = {
    id: string;
    name: string;
    technology: string;
    sales: number;
    to: string;
    kind: 'product';
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
