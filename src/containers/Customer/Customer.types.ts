import type { ListItem } from '@models';

/**
 * Props types for customer component
 * @property customerData - list of customer details
 * @property isDesktop -  boolean value view width is desktop or not
 */
export type CustomerProps = {
    customerData: ListItem[];
    isDesktop: boolean;
};

/**
 * Props types for cutomer content component
 * @property customerData - list of customer details
 */
export type CustomerContentProps = {
    customerData: ListItem[];
};
