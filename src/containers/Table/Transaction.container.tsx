import {
    Table as MuiTable,
    TableBody as MuiTableBody,
    TableHead as MuiTableHead,
    TableRow as MuiTableRow,
} from '@mui/material';

import { Card } from '@components/Card';
import { TableCell } from '@components/TableCell';
import type { ModifiedColumnType } from '@types';

import type { TableProps, TransactionProps } from './Transaction.types';

/**
 * @description passes each row to renderer component
 * @param transactionData - data set of transactions
 * @param columnData - data of columns
 * @param RowRenderer - component to render the transaction data items
 * @returns component to render transaction data
 */
const Table = (props: TableProps) => {
    const { transactionData, columnData, RowRenderer, isDesktop } = props;

    return (
        <MuiTable>
            <MuiTableHead>
                <MuiTableRow>
                    {columnData.map((item) => (
                        <TableCell
                            key={item.id}
                            width={item.width}
                            contentHeading={item.title}
                            isBgGrey={true}
                            showBorder={true}
                            isDesktop={isDesktop}
                        />
                    ))}
                </MuiTableRow>
            </MuiTableHead>
            <MuiTableBody>
                {transactionData.map((item) => (
                    <RowRenderer
                        key={item.transactionId}
                        rowItem={item}
                        columnData={columnData}
                        isDesktop={isDesktop}
                    />
                ))}
            </MuiTableBody>
        </MuiTable>
    );
};

/**
 *
 * @param transactionData - data set of transactions
 * @param columnData - data of columns
 * @param RowRenderer - component to render the transaction data items
 * @param isDesktop - boolean value of view width is of desktop or not
 * @returns component to render transaction data
 */
export const Transaction = (props: TransactionProps) => {
    const { isDesktop, transactionData, columnData, RowRenderer } = props;
    const visibleColunData = isDesktop
        ? columnData
        : columnData.filter((item) => item.showInMobile);
    const modifiedColunData: ModifiedColumnType[] = visibleColunData.map(
        (item) => ({
            id: item.id,
            title: item.title,
            showInMobile: item.showInMobile,
            width: isDesktop
                ? item.desktopConfig.width
                : item.mobileConfig.width,
        }),
    );
    return (
        <Card
            heading="Transaction"
            subHeading="This is a list of latest transactions."
        >
            <Table
                columnData={modifiedColunData}
                transactionData={transactionData}
                RowRenderer={RowRenderer}
                isDesktop={isDesktop}
            />
        </Card>
    );
};
