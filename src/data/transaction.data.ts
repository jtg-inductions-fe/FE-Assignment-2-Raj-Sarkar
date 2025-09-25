import type { ColumnType, TransactionItem } from '@models';

export const transactionDetails: TransactionItem[] = [
    {
        transactionId: 'transaction-1',
        name: 'Bonnie Green',
        time: '2021-04-23T06:15:30.450Z',
        amount: 2300,
        currency: '$',
        transactionType: 1,
        transactionStatus: 2,
    },
    {
        transactionId: 'transaction-2',
        name: 'Bonnie Green',
        time: '2021-04-23T06:15:30.450Z',
        amount: 670,
        currency: '$',
        transactionType: 2,
        transactionStatus: 2,
    },
    {
        transactionId: 'transaction-3',
        name: 'Jese Leos',
        time: '2021-04-18T06:15:30.450Z',
        amount: 234,
        currency: '$',
        transactionType: 1,
        transactionStatus: 3,
    },
    {
        transactionId: 'transaction-4',
        name: 'Bonnie Green',
        time: '2021-04-15T06:15:30.450Z',
        amount: 5000,
        currency: '$',
        transactionType: 1,
        transactionStatus: 1,
    },
    {
        transactionId: 'transaction-5',
        name: 'Jese Leos',
        time: '2021-04-15T06:15:30.450Z',
        amount: 2300,
        currency: '$',
        transactionType: 1,
        transactionStatus: 1,
    },
    {
        transactionId: 'transaction-6',
        name: 'THEMSBERG LLC',
        time: '2021-04-11T06:15:30.450Z',
        amount: 280,
        currency: '$',
        transactionType: 1,
        transactionStatus: 2,
    },
] as const;

export const columnData: ColumnType[] = [
    {
        id: 'col-1',
        title: 'TRANSACTION',
        desktopConfig: { width: '21%' },
        mobileConfig: { width: '65%' },
        showInMobile: true,
    },
    {
        id: 'col-2',
        title: 'DATE & TIME',
        desktopConfig: { width: '28%' },
        mobileConfig: { width: '35%' },
        showInMobile: true,
    },
    {
        id: 'col-3',
        title: 'AMOUNT',
        desktopConfig: { width: '32%' },
        mobileConfig: { width: '32%' },
        showInMobile: false,
    },
    {
        id: 'col-4',
        title: 'STATUS',
        desktopConfig: { width: '19%' },
        mobileConfig: { width: '19%' },
        showInMobile: false,
    },
];
