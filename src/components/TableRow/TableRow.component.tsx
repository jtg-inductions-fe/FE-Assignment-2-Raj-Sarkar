import { TableCell } from '@components/TableCell';

import { StyledTableRow } from './TableRow.styles';
import type { TableRowProps } from './TableRow.types';

/**
 *
 * @param rowItem - data in in a row of transaction table
 * @param columnData - data of columndef
 * @returns component for rendering a row
 */
export const TableRow = <TValue,>(props: TableRowProps<TValue>) => {
    const { rowItem, columnData, ...rest } = props;

    return (
        <StyledTableRow {...rest}>
            {columnData.map((col) => (
                <TableCell key={col.columnName}>
                    {col.rowRenderer(rowItem)}
                </TableCell>
            ))}
        </StyledTableRow>
    );
};
