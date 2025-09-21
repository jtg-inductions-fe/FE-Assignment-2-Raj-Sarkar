/**
 * Types of each transaction item
 * @property transactionId - unique id of transaction
 * @property name - name of user
 * @property time - date&time of transaction
 * @property amount - amount of transaction
 * @property currency - currency of the transaction amount
 * @property transactionType - type of transaction (1:from, 2:refund)
 * @property transactionStatus - status of transaction(1:in progress, 2:completed, 3:cancelled)
 */
export type TransactionItem = {
    transactionId: string;
    name: string;
    time: string;
    amount: number;
    currency: string;
    transactionType: 1 | 2;
    transactionStatus: 1 | 2 | 3;
};

/**
 * Types of props for column data
 * @property id - id of column
 * @property title - title of column
 * @property width - width of column
 * @property showInMobile - boolean value to show/hide in mobile
 */
export type ColumnType = {
    id: string;
    title: string;
    width: string;
    showInMobile: boolean;
};
