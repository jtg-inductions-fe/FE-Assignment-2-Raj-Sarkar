import { Table as MuiTable } from '@mui/material';

import type { TableProps } from './Table.types';

/**
 * @description passes each row to renderer component
 * @returns component to render transaction data
 */
export const Table = (props: TableProps) => {
    const {} = props;

    return <MuiTable></MuiTable>;
};
