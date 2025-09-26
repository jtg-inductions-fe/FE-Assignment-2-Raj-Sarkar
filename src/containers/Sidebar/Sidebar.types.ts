/**
 * Contains type of props for sidebar component
 * @property open - boolean status of whether sidebar is open or not
 * @property onClose - Function to be done on closing
 */
export type SidebarProps = {
    open: boolean;
    onClose: () => void;
};
