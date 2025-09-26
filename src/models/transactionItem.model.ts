/**
 * Types of each transaction item
 * @property transactionId - unique id of transaction
 * @property transactionName - name of user
 * @property transactionTime - date&time of transaction
 * @property transactionAmount - amount of transaction
 * @property transactionCurrency - currency of the transaction amount
 * @property transactionType - type of transaction (1:from, 2:refund)
 * @property transactionStatus - status of transaction(1:in progress, 2:completed, 3:cancelled)
 */
export type TransactionItem = {
    transactionId: string;
    transactionName: string;
    transactionTime: string;
    transactionAmount: number;
    transactionCurrency: string;
    transactionType: 1 | 2;
    transactionStatus: 1 | 2 | 3;
};
