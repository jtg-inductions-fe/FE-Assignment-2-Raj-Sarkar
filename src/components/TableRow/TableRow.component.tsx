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
    const { rowItem, columnData, isDesktop, ...rest } = props;

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);

        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

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
                                isDesktop={isDesktop}
                            />
                        );
                    case 'col-2':
                        return (
                            <TableCell
                                key={col.id}
                                contentLight={formatDate(rowItem.time)}
                                isDesktop={isDesktop}
                            />
                        );
                    case 'col-3':
                        return (
                            <TableCell
                                key={col.id}
                                contentLarge={`${rowItem.transactionType === 2 ? '-' : ''}${rowItem.currency}${rowItem.amount}`}
                                isDesktop={isDesktop}
                            />
                        );
                    case 'col-4':
                        return (
                            <TableCell
                                key={col.id}
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
                                isDesktop={isDesktop}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </StyledTableRow>
    );
};
