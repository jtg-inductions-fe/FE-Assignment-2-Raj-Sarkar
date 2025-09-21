import { TableCell } from '@components/TableCell';

import { StyledTableRow } from './TableRow.styles';
import type { TableRowProps } from './TableRow.types';

/**
 *
 * @param rowItem - data in in a row of transaction table
 * @param columnData - data columns
 * @returns component for rendering a row
 */
export const TableRow = (props: TableRowProps) => {
    const { rowItem, columnData } = props;

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);

        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <StyledTableRow>
            {columnData.map((col) => {
                switch (col.title) {
                    case 'TRANSACTION':
                        return (
                            <TableCell
                                key={'name'}
                                contentNormal={`Payment ${rowItem.transactionType == 1 ? 'from' : 'refund to'} `}
                                contentBold={rowItem.name}
                            />
                        );
                    case 'DATE & TIME':
                        return (
                            <TableCell
                                key={'date-time'}
                                contentLight={formatDate(rowItem.time)}
                            />
                        );
                    case 'AMOUNT':
                        return (
                            <TableCell
                                key={'amount'}
                                contentLarge={`${rowItem.transactionType === 2 ? '-' : ''} ${rowItem.currency}${rowItem.amount}`}
                            />
                        );
                    case 'STATUS':
                        return (
                            <TableCell
                                key={'status'}
                                badgeContent={
                                    rowItem.transactionStatus === 1
                                        ? 'in progress'
                                        : rowItem.transactionStatus === 2
                                          ? 'completed'
                                          : 'cancelled'
                                }
                                badgeType={
                                    rowItem.transactionStatus === 1
                                        ? 'info'
                                        : rowItem.transactionStatus === 2
                                          ? 'success'
                                          : 'error'
                                }
                            />
                        );
                    default:
                        return null;
                }
            })}
        </StyledTableRow>
    );
};
