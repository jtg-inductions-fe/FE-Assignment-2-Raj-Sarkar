/**
 * Contains type of props for sidebar component
 * @param open - boolean status of whether sidebar is open or not
 * @param onClose - Function to be done on closing
 */
export type SidebarProps = {
    open: boolean;
    onClose: () => void;
};
