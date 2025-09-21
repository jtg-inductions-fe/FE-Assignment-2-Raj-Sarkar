import type { ModifiedColumnType, TransactionItem } from '@types';

/**
 * Props for tablerow component
 * @property rowItem - data in in a row of transaction table
 * @property columnData - data columns
 * @property isDesktop - boolean value of view width is of desktop or not
 */
export type TableRowProps = {
    rowItem: TransactionItem;
    columnData: ModifiedColumnType[];
    isDesktop: boolean;
};
