import { ListItem } from '@models';
/**
 * Contains SearchBar component props
 * @property freesolo - boolean status to make searchbar a freesolo or not
 * @property productList - list of product items
 */
export type SearchBarProps = {
    freesolo?: boolean;
    productList: ListItem[];
};
