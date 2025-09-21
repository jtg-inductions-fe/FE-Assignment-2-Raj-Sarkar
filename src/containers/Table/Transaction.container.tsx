import {
    Table as MuiTable,
    TableBody as MuiTableBody,
    TableHead as MuiTableHead,
    TableRow,
} from '@mui/material';

import { Card } from '@components/Card';
import { TableCell } from '@components/TableCell';

import type { TableProps, TransactionProps } from './Transaction.types';

/**
 * @description passes each row to renderer component
 * @returns component to render transaction data
 */
const Table = (props: TableProps) => {
    const { transactionData, columnData, RowRenderer } = props;

    return (
        <MuiTable>
            <MuiTableHead>
                <TableRow>
                    {columnData.map((item) => (
                        <TableCell
                            key={item.id}
                            width={item.width}
                            content={item.title}
                        />
                    ))}
                </TableRow>
            </MuiTableHead>
            <MuiTableBody>
                {transactionData.map((item) => (
                    <RowRenderer
                        key={item.transactionId}
                        rowItem={item}
                        columnData={columnData}
                    />
                ))}
            </MuiTableBody>
        </MuiTable>
    );
};

export const Transaction = (props: TransactionProps) => {
    const { isDesktop, transactionData, columnData, RowRenderer } = props;
    const modifiedColunData = isDesktop
        ? columnData
        : columnData.filter((item) => item.showInMobile);
    return (
        <Card
            heading="Transaction"
            subHeading="This is a list of latest transactions."
        >
            <Table
                columnData={modifiedColunData}
                transactionData={transactionData}
                RowRenderer={RowRenderer}
            />
        </Card>
    );
};
