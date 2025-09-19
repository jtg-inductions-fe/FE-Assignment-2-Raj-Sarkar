/**
 * Types for customer details
 * @property id - customer id
 * @property avatar - image of customer
 * @property username - name of customer
 * @property email - email of customer
 * @property sales - amount of sales of customer
 */
export type CustomerItem = {
    id: string;
    avatar: string;
    username: string;
    email: string;
    sales: number;
    kind: 'customer';
};

/**
 * Props types for customer component
 * @property customerData - list of customer details
 * @property isDesktop -  boolean value view width is desktop or not
 */
export type CustomerProps = {
    customerData: CustomerItem[];
    isDesktop: boolean;
};

/**
 * Props types for cutomer content component
 * @property customerData - list of customer details
 */
export type CustomerContentProps = {
    customerData: CustomerItem[];
};
