import type { TableCellProps as MuiTableCellProps } from '@mui/material';

/**
 * Props for styled table cell
 * @property isBgGrey - boolean value whether background is grey or not
 * @property showBorder - boolean value whether to show border
 */
export type StyledTableCellProps = {
    showBorder?: boolean;
    isBgGrey?: boolean;
};

export type TableCellBadgeProps = MuiTableCellProps &
    StyledTableCellProps & {
        content: string;
        badgeType: 'success' | 'error' | 'info';
    };
