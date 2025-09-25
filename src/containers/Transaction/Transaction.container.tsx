import {
    Table as MuiTable,
    TableBody as MuiTableBody,
    TableHead as MuiTableHead,
    TableRow as MuiTableRow,
} from '@mui/material';

import { Card } from '@components/Card';
import { TableCell } from '@components/TableCell';
import type { ModifiedColumnType } from '@models';

import type { TableProps, TransactionProps } from './Transaction.types';

/**
 * @description passes each row to renderer component
 * @param transactionData - data set of transactions
 * @param columnData - data of columns
 * @param RowRenderer - component to render the transaction data items
 * @param isDesktop - boolean value of view width is dsktop or not
 * @returns component to render transaction data
 */
const Table = (props: TableProps) => {
    const { transactionData, columnData, RowRenderer, isDesktop } = props;

    /**
     *
     * @param isoString
     * @returns
     */
    const formatDate = (timeString: string) => {
        const date = new Date(timeString);

        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <MuiTable aria-label="Transactions table">
            <MuiTableHead>
                <MuiTableRow>
                    {columnData.map((item) => (
                        <TableCell
                            key={item.id}
                            width={item.width}
                            contentHeading={item.title}
                            isBgGrey={true}
                            showBorder={true}
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
                        contentNormalVariant={isDesktop ? 'subtitle2' : 'body2'}
                        contentBoldVariant={isDesktop ? 'subtitle1' : 'body1'}
                        badgeContent={
                            item.transactionStatus === 1
                                ? 'In progress'
                                : item.transactionStatus === 2
                                  ? 'Completed'
                                  : 'Cancelled'
                        }
                        badgeType={
                            item.transactionStatus === 1
                                ? 'info'
                                : item.transactionStatus === 2
                                  ? 'success'
                                  : 'error'
                        }
                        formatDate={formatDate}
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
    const visibleColumnData = isDesktop
        ? columnData
        : columnData.filter((item) => item.showInMobile);
    const modifiedColumnData: ModifiedColumnType[] = visibleColumnData.map(
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
            heading="Transactions"
            subHeading="This is a list of latest transactions."
        >
            <Table
                columnData={modifiedColumnData}
                transactionData={transactionData}
                RowRenderer={RowRenderer}
                isDesktop={isDesktop}
            />
        </Card>
    );
};
