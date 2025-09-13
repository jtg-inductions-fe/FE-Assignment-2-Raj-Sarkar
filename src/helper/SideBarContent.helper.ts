import { HandleClickOnListButtonProps } from '@types';

/**
 *
 * @param hasChildren - boolean value to know whether there is children or not
 * @param open - boolean status of whether dropdown list is open or not
 * @param setOpen - function to set boolean value to open state
 * @param navigate - navigateFunction to do the navigation
 * @param item - menu item
 * @param selected - boolean status of List item button's selection
 * @param setSelected - function to toggle the status of selection of list item button
 * @description - handles click event on a menu item.
 * If there is children then open/close child list , otherwise navigate to the destination path route.
 * Also toggle the selected state when clicking
 */
export const handleClickOnListButton = (
    props: HandleClickOnListButtonProps,
) => {
    const {
        hasChildren,
        open,
        setOpen,
        navigate,
        item,
        selected,
        setSelected,
    } = props;
    setSelected(!selected);
    if (hasChildren) {
        setOpen(!open);
    } else {
        void navigate(item.to ? item.to : '/');
    }
};
