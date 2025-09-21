import type { ColumnType, TransactionItem } from '@types';

/**
 * Props for tablerow component
 * @property rowItem - data in in a row of transaction table
 * @property columnData - data columns
 */
export type TableRowProps = {
    rowItem: TransactionItem;
    columnData: ColumnType[];
};
