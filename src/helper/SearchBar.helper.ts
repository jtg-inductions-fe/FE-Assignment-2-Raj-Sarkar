import {
    HandleInputChangeProps,
    HandleSearchBarProps,
} from '@components/Searchbar';

/**
 *
 * Clicking on a product will redirect to that page
 * @param e - event handler for options change
 * @param value - value of input box
 * @param productList - List of products
 * @param navigate - NavigateFunction for navigating to product route
 */
export const handleOptionChange = (props: HandleSearchBarProps) => {
    const { value, productList, navigate } = props;
    const prod = productList.find(
        (product) =>
            product.name.toLocaleLowerCase() === value.toLocaleLowerCase(),
    );
    if (prod) {
        void navigate(prod.to);
    } else {
        void navigate(`/${value.toLocaleLowerCase()}`);
    }
};

/**
 *
 * Re-direct to home route when Input field is empty
 * @param e - event handler for input change
 * @param value - value of input box
 * @param navigate - NavigateFunction for navigating to home route
 */
export const handleInputChange = (props: HandleInputChangeProps) => {
    const { value, navigate } = props;
    if (!value) {
        void navigate('/');
    }
};
