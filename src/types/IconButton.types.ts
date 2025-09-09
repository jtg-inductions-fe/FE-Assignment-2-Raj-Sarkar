/**
 * Contains prop types for IconButton component
 */
export type StyledIconButtonProps = {
    component: React.ElementType;
    customwidth?: number;
    customheight?: number;
    customcolor?: string;
    hideinmobile?: boolean;
    hideintablet?: boolean;
    showshadow?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
