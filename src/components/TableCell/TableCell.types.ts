import type { TableCellProps as MuiTableCellProps } from '@mui/material';

/**
 * Types for TableCell component
 * @property height - height of cell
 */
export type TableCellProps = MuiTableCellProps & {
    height?: number;
    content: string;
};
