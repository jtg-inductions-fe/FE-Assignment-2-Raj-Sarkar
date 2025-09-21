import type { TableRowProps } from '@components/TableRow/TableRow.types';
import type { ColumnType, TransactionItem } from '@types';

/**
 * types for table component
 * @property transactionData - data set of transactions
 * @property columnData - data of columns
 * @property RowRenderer - component to render the transaction data items
 */
export type TableProps = {
    transactionData: TransactionItem[];
    columnData: ColumnType[];
    RowRenderer: React.FC<TableRowProps>;
};

/**
 *
 * @property isDesktop - boolean value of view width is of desktop or not
 */
export type TransactionProps = TableProps & {
    isDesktop: boolean;
};
