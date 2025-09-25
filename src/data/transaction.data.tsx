import { Badge } from '@components/Badge';
import { TableColumnDef } from '@components/Table/Table.types';
import { Typography } from '@components/Typography';
import { formatDate } from '@helper';
import type { TransactionItem } from '@models';
import { theme } from '@theme';

export const transactionDetails: TransactionItem[] = [
    {
        transactionId: 'transaction-1',
        transactionName: 'Bonnie Green',
        transactionTime: '2021-04-23T06:15:30.450Z',
        transactionAmount: 2300,
        transactionCurrency: '$',
        transactionType: 1,
        transactionStatus: 2,
    },
    {
        transactionId: 'transaction-2',
        transactionName: 'Bonnie Green',
        transactionTime: '2021-04-23T06:15:30.450Z',
        transactionAmount: 670,
        transactionCurrency: '$',
        transactionType: 2,
        transactionStatus: 2,
    },
    {
        transactionId: 'transaction-3',
        transactionName: 'Jese Leos',
        transactionTime: '2021-04-18T06:15:30.450Z',
        transactionAmount: 234,
        transactionCurrency: '$',
        transactionType: 1,
        transactionStatus: 3,
    },
    {
        transactionId: 'transaction-4',
        transactionName: 'Bonnie Green',
        transactionTime: '2021-04-15T06:15:30.450Z',
        transactionAmount: 5000,
        transactionCurrency: '$',
        transactionType: 1,
        transactionStatus: 1,
    },
    {
        transactionId: 'transaction-5',
        transactionName: 'Jese Leos',
        transactionTime: '2021-04-15T06:15:30.450Z',
        transactionAmount: 2300,
        transactionCurrency: '$',
        transactionType: 1,
        transactionStatus: 1,
    },
    {
        transactionId: 'transaction-6',
        transactionName: 'THEMSBERG LLC',
        transactionTime: '2021-04-11T06:15:30.450Z',
        transactionAmount: 280,
        transactionCurrency: '$',
        transactionType: 1,
        transactionStatus: 2,
    },
];

export const columnDef: TableColumnDef<TransactionItem>[] = [
    {
        columnName: 'transaction',
        rowRenderer: (props) => (
            <Typography variant="subtitle2" lines={2}>
                {`Payment ${props.transactionType === 1 ? 'from ' : 'refund to '}`}
                <Typography
                    variant="subtitle1"
                    component="span"
                    sx={{ display: 'inline' }}
                >
                    {props.transactionName}
                </Typography>
            </Typography>
        ),
        mobileRowRenderer: (props) => (
            <Typography variant="body2" lines={2}>
                {`Payment ${props.transactionType === 1 ? 'from ' : 'refund to '}`}
                <Typography
                    variant="body1"
                    component="span"
                    sx={{ display: 'inline' }}
                >
                    {props.transactionName}
                </Typography>
            </Typography>
        ),
        width: '21%',
        mobileWidth: '65%',
        showInMobile: true,
    },
    {
        columnName: 'date & time',
        rowRenderer: (props) => (
            <Typography
                variant="subtitle2"
                color={theme.palette.grey[500]}
                lines={2}
            >
                {formatDate(props.transactionTime)}
            </Typography>
        ),
        mobileRowRenderer: (props) => (
            <Typography
                variant="body2"
                color={theme.palette.grey[500]}
                lines={2}
            >
                {formatDate(props.transactionTime)}
            </Typography>
        ),
        width: '28%',
        mobileWidth: '35%',
        showInMobile: true,
    },
    {
        columnName: 'amount',
        rowRenderer: (props) => (
            <Typography variant="h3">
                {`${props.transactionType === 1 ? '' : '-'}${props.transactionCurrency}${props.transactionAmount}`}
            </Typography>
        ),
        width: '32%',
        showInMobile: false,
    },
    {
        columnName: 'status',
        rowRenderer: (props) => (
            <Badge
                type={
                    props.transactionStatus === 1
                        ? 'success'
                        : props.transactionStatus === 2
                          ? 'info'
                          : 'error'
                }
                content={
                    props.transactionStatus === 1
                        ? 'Completed'
                        : props.transactionStatus === 2
                          ? 'In progress'
                          : 'Cancelled'
                }
            />
        ),
        width: '19%',
        showInMobile: false,
    },
];
