import type {
    TableRowProps as MuiTableRowProps,
    TypographyVariant as MuiTypographyVariant,
} from '@mui/material';

import type { ModifiedColumnType, TransactionItem } from '@models';

/**
 * Props for tablerow component
 * @property rowItem - data in in a row of transaction table
 * @property columnData - data columns
 * @property contentNormalVariant - variant for normal font text
 * @property contentBoldVariant - variant for bold font text
 * @property badgeContent - content of badge
 * @property badgeType - type of badge
 * @property formatDate - function to formate the date & time
 */
export type TableRowProps = MuiTableRowProps & {
    rowItem: TransactionItem;
    columnData: ModifiedColumnType[];
    contentNormalVariant?: MuiTypographyVariant;
    contentBoldVariant?: MuiTypographyVariant;
    badgeContent?: string;
    badgeType?: 'error' | 'success' | 'info';
    formatDate: (timeString: string) => string;
};
