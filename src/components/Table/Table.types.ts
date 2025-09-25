import type { TableProps as MuiTableProps } from '@mui/material';

/**
 * Types for table component
 * @property transactionData - data set of transactions
 * @property columnData - data of columns
 * @property rowRenderer - component to render the transaction data items
 * @property isDesktop - boolean value of view width is of desktop or not
 */
export type TableProps<TValue> = MuiTableProps & {
    transactionData: TValue[];
    columnDef: TableColumnDef<TValue>[];
};

/**
 * Types for columnDef
 * @property columnName - title of the column
 * @property rowRenderer - render component to use in table cell
 * @property width - percentage width for columns
 * @property showInMobile - boolean value to show/hide in mobile
 */
export type TableColumnDef<TValue> = {
    columnName: string;
    rowRenderer: (props: TValue) => React.ReactNode;
    mobileRowRenderer?: (props: TValue) => React.ReactNode;
    width: string;
    mobileWidth?: string;
    showInMobile: boolean;
};
