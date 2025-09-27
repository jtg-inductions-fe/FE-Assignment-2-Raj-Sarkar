import {
    Table as MuiTable,
    TableBody as MuiTableBody,
    TableHead as MuiTableHead,
    TableRow as MuiTableRow,
} from '@mui/material';

import { TableCell } from '@components/TableCell';
import { TableRow } from '@components/TableRow';
import { Typography } from '@components/Typography';
import { theme } from '@theme';

import { TableProps } from './Table.types';

/**
 *
 * @param data - data of transaction
 * @param columnDef - columndef data
 * @returns component to render a table
 */
export const Table = <TValue,>(props: TableProps<TValue>) => {
    const { data, columnDef } = props;

    return (
        <MuiTable aria-label="Transactions table">
            <MuiTableHead>
                <MuiTableRow>
                    {columnDef.map((item) => (
                        <TableCell
                            key={item.columnName}
                            isBgGrey={true}
                            showBorder={true}
                            width={item.width}
                        >
                            <Typography
                                variant="body1"
                                color={theme.palette.grey[500]}
                            >
                                {item.columnName.toLocaleUpperCase()}
                            </Typography>
                        </TableCell>
                    ))}
                </MuiTableRow>
            </MuiTableHead>
            <MuiTableBody>
                {data.map((rowData, idx) => (
                    <TableRow
                        key={idx}
                        columnData={columnDef}
                        rowItem={rowData}
                    />
                ))}
            </MuiTableBody>
        </MuiTable>
    );
};
