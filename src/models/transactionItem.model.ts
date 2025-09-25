import type { TableCellProps } from '@components/TableCell/TableCell.types';
import type { TableCellBadgeProps } from '@components/TableCellBadge/TableCellBadge.types';
import type { ModifiedTransactionItem } from '@containers/Transaction/Transaction.types';

/**
 * Types of each transaction item
 * @property transactionId - unique id of transaction
 * @property name - name of user
 * @property time - date&time of transaction
 * @property amount - amount of transaction
 * @property currency - currency of the transaction amount
 * @property transactionType - type of transaction (1:from, 2:refund)
 * @property transactionStatus - status of transaction(1:in progress, 2:completed, 3:cancelled)
 */
export type TransactionItem = {
    transactionId: string;
    transactionName: string;
    transactionTime: string;
    transactionAmount: number;
    transactionCurrency: string;
    transactionType: 1 | 2;
    transactionStatus: 1 | 2 | 3;
};

/**
 * Types of props for column data
 * @property id - id of column
 * @property title - title of column
 * @property desktopConfig - width of column in desktop
 * @property mobileConfig - width of column in mobile
 * @property showInMobile - boolean value to show/hide in mobile
 */
export type ColumnType<TValue> = {
    id: string;
    key: keyof ModifiedTransactionItem;
    title: string;
    showInMobile: boolean;
    desktopConfig: { width: string };
    mobileConfig: { width: string };
    cellRenderer: (props: TValue) => React.ReactNode;
    // cellRendererProps: TableCellProps | TableCellBadgeProps;
};

/**
 * Types of props for column data
 * @property id - id of column
 * @property title - title of column
 * @property width - width of column
 * @property showInMobile - boolean value to show/hide in mobile
 */
export type ModifiedColumnType = {
    id: string;
    key: keyof ModifiedTransactionItem;
    title: string;
    showInMobile: boolean;
    width: string;
    cellRenderer: (
        props: TableCellProps | TableCellBadgeProps,
    ) => React.ReactNode;
};
