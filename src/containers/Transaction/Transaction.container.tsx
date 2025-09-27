import { Card } from '@components/Card';
import { Table } from '@components/Table';
import { TableColumnDef } from '@components/Table/Table.types';
import { TransactionItem } from '@models';

import { TransactionProps } from './Transaction.types';

/**
 *
 * @param transactionData - data set of transactions
 * @param columnData - data of columndef
 * @param isDesktop - boolean value of view width is desktop or not
 * @returns component to render transaction data
 */
export const Transaction = (props: TransactionProps) => {
    const { transactionData, columnData, isDesktop } = props;
    const modifiedColumnData: TableColumnDef<TransactionItem>[] = isDesktop
        ? columnData
        : columnData.filter((item) => item.showInMobile === !isDesktop);
    const modifiedMappedColumnData: TableColumnDef<TransactionItem>[] =
        modifiedColumnData.map((item) => ({
            rowRenderer: isDesktop
                ? item.rowRenderer
                : (item.mobileRowRenderer ?? item.rowRenderer),
            columnName: item.columnName,
            showInMobile: item.showInMobile,
            width: isDesktop ? item.width : (item.mobileWidth ?? item.width),
        }));

    return (
        <Card
            heading="Transactions"
            subHeading="This is a list of latest transactions."
        >
            <Table
                data={transactionData}
                columnDef={modifiedMappedColumnData}
            />
        </Card>
    );
};
