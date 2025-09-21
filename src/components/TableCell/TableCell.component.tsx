import { TableCell as MuiTableCell } from '@mui/material';

import { TableCellProps } from './TableCell.types';

export const TableCell = (props: TableCellProps) => {
    const { height = 54, content } = props;

    return <MuiTableCell height={height}>{content}</MuiTableCell>;
};
