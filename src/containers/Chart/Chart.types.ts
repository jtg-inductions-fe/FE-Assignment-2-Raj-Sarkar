import type { SalesItem } from '@models';

/**
 * Props for Chart component
 * @property isDesktop - boolean value to determine whethern the view width is desktop or not
 * @property salesData - data set of sales
 */
export type ChartProps = {
    isDesktop: boolean;
    salesData: SalesItem[];
};
