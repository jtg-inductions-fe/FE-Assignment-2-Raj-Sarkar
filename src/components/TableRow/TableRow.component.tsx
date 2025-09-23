import { TableCell } from '@components/TableCell';

import { StyledTableRow } from './TableRow.styles';
import type { TableRowProps } from './TableRow.types';

/**
 *
 * @param rowItem - data in in a row of transaction table
 * @param columnData - data columns
 * @param contentNormalVariant - variant for normal font text
 * @param contentBoldVariant - variant for bold font text
 * @param badgeContent - content of badge
 * @param badgeType - type of badge
 * @param formatDate - function to format date & time
 * @returns component for rendering a row
 */
export const TableRow = (props: TableRowProps) => {
    const {
        rowItem,
        columnData,
        contentNormalVariant,
        contentBoldVariant,
        badgeContent,
        badgeType,
        formatDate,
        ...rest
    } = props;

    return (
        <StyledTableRow {...rest}>
            {columnData.map((col) => {
                switch (col.id) {
                    case 'col-1':
                        return (
                            <TableCell
                                key={col.id}
                                contentNormal={`Payment ${rowItem.transactionType === 1 ? 'from' : 'refund to'} `}
                                contentBold={rowItem.name}
                                contentBoldVariant={contentBoldVariant}
                                contentNormalVariant={contentNormalVariant}
                            />
                        );
                    case 'col-2':
                        return (
                            <TableCell
                                key={col.id}
                                contentLight={formatDate(rowItem.time)}
                                contentNormalVariant={contentNormalVariant}
                            />
                        );
                    case 'col-3':
                        return (
                            <TableCell
                                key={col.id}
                                contentLarge={`${rowItem.transactionType === 2 ? '-' : ''}${rowItem.currency}${rowItem.amount}`}
                            />
                        );
                    case 'col-4':
                        return (
                            <TableCell
                                key={col.id}
                                badgeContent={badgeContent}
                                badgeType={badgeType}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </StyledTableRow>
    );
};
