import { TableColumnDef } from '@components/Table/Table.types';
import type { TransactionItem } from '@models';

/**
 * Types for transaction container
 * @property transactionData - transactionData
 * @property columnData - data f columnDef
 * @property isDesktop - boolean value of view width is desktop or not
 */
export type TransactionProps = {
    transactionData: TransactionItem[];
    columnData: TableColumnDef<TransactionItem>[];
    isDesktop: boolean;
};
