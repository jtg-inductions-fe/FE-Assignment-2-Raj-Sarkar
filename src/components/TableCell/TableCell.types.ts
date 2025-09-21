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

/**
 * Types for TableCell component
 * @param width - width of column
 * @param contentLight - content text for light font
 * @param contentNormal - content text for normal font
 * @param contentBold - content text for bold font
 * @param contentLarge - content text for large font
 * @param badgeContent - content of badge
 * @param badgeType - type of badge
 * @param contentHeading - content of heading
 */
export type TableCellProps = StyledTableCellProps &
    MuiTableCellProps & {
        width?: string | number;
        contentLight?: string;
        contentNormal?: string;
        contentBold?: string;
        contentLarge?: string;
        contentHeading?: string;
        badgeContent?: string;
        badgeType?: 'error' | 'success' | 'info';
    };
