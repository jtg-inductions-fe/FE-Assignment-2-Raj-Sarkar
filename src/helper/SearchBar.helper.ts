import { HandleSearchBarProps } from '@types';

/**
 *
 * Clicking on a product will redirect to that page
 * @param e - event handler for options chnage
 * @param value - value of input box
 * @param productList - List of products
 * @param navigate - NavigateFunction for navigating to product route
 */
export const handleOptionChange = (props: HandleSearchBarProps) => {
    const { value, productList, navigate } = props;
    const prod = productList.filter((product) => product.name === value);
    if (prod) {
        void navigate(prod[0].to);
    }
};
