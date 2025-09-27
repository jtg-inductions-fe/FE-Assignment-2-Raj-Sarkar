/**
 * Types for customer details
 * @property id - customer id
 * @property avatar - image of customer
 * @property title - name of customer
 * @property description - email of customer
 * @property sales - amount of sales of customer
 * @property prefix - prefix of sales
 * @property suffix - suffix of sales
 * @property to - path to re-direct
 */
export type ListItem = {
    id: string;
    title: string;
    description: string;
    sales?: number;
    prefix?: string;
    suffix?: string;
    to?: string;
    avatar?: string;
};
