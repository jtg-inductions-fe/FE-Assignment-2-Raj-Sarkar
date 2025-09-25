import type {
    TableCellProps as MuiTableCellProps,
    TypographyVariant as MuiTypographyVariant,
} from '@mui/material';

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
 * @property width - width of column
 * @property contentLight - content text for light font
 * @property contentNormal - content text for normal font
 * @property contentBold - content text for bold font
 * @property contentLarge - content text for large font
 * @property badgeContent - content of badge
 * @property badgeType - type of badge
 * @property contentHeading - content of heading
 * @property contentNormalVariant - variant for normal font text
 * @property contentBoldVariant - variant for bold font text
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
        contentNormalVariant?: MuiTypographyVariant;
        contentBoldVariant?: MuiTypographyVariant;
    };
