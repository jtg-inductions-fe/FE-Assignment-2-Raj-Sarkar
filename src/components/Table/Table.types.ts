import type { TableProps as MuiTableProps } from '@mui/material';

/**
 * Types for table component
 * @property data - data set of transactions
 * @property columnDef - data of columns
 */
export type TableProps<TValue> = MuiTableProps & {
    data: TValue[];
    columnDef: TableColumnDef<TValue>[];
};

/**
 * Types for columnDef
 * @property columnName - title of the column
 * @property rowRenderer - render component to use in table cell
 * @property width - percentage width for columns
 * @property showInMobile - boolean value to show/hide in mobile
 * @property mobileRowRenderer - renderer for mobile
 * @property mobileWidth - width in mobile
 */
export type TableColumnDef<TValue> = {
    columnName: string;
    rowRenderer: (props: TValue) => React.ReactNode;
    width: string;
    showInMobile: boolean;
    mobileWidth?: string;
    mobileRowRenderer?: (props: TValue) => React.ReactNode;
};
