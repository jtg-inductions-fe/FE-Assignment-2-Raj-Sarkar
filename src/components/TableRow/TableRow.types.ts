import type { TableRowProps as MuiTableRowProps } from '@mui/material';

import { TableColumnDef } from '@components/Table/Table.types';

/**
 * Props for tablerow component
 * @property rowItem - data in in a row of transaction table
 * @property columnData - data of columndef
 */
export type TableRowProps<TValue> = MuiTableRowProps & {
    rowItem: TValue;
    columnData: TableColumnDef<TValue>[];
};
