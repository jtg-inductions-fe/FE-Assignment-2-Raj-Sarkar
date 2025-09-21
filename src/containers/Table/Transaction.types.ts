import type { TableRowProps } from '@components/TableRow/TableRow.types';
import type { ColumnType, TransactionItem } from '@types';

export type TableProps = {
    transactionData: TransactionItem[];
    columnData: ColumnType[];
    RowRenderer: React.FC<TableRowProps>;
};

export type TransactionProps = TableProps & {
    isDesktop: boolean;
};
