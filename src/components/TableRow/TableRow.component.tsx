import {
    TableCell as MuiTableCell,
    TableRow as MuiTableRow,
    Typography as MuiTypography,
} from '@mui/material';

import { TableCell } from '@components/TableCell';

import type { TableRowProps } from './TableRow.types';

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
        <MuiTableRow>
            {columnData.map((col) => {
                switch (col.title) {
                    case 'Transaction':
                        return (
                            <MuiTableCell key={'name'}>
                                <MuiTypography></MuiTypography>
                                {`Payment ${rowItem.transactionType == 1 ? 'from' : 'refund to'} ${rowItem.name}`}
                            </MuiTableCell>
                        );
                    case 'Date & time':
                        return (
                            <TableCell
                                key={'date-time'}
                                content={formatDate(rowItem.time)}
                            />
                        );
                    case 'Amount':
                        return (
                            <TableCell
                                key={'amount'}
                                content={`${rowItem.currency}${rowItem.name}`}
                            />
                        );
                    case 'Status':
                        return (
                            <TableCell
                                key={'status'}
                                content={
                                    rowItem.transactionStatus === 1
                                        ? 'Pending'
                                        : rowItem.transactionStatus === 2
                                          ? 'Success'
                                          : 'Failed'
                                }
                            />
                        );
                    default:
                        return null;
                }
            })}
        </MuiTableRow>
    );
};
