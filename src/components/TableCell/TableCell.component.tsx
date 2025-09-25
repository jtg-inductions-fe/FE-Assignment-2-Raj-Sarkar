import { StyledTableCell } from './TableCell.styles';
import { TableCellProps } from './TableCell.types';

/**
 *
 * @param isBgGrey - boolean value whether background is grey or not
 * @param showBorder - boolean value whether to show border
 * @returns component to render a cell
 */
export const TableCell = (props: TableCellProps) => {
    const { isBgGrey = false, showBorder = false, children, ...rest } = props;

    return (
        <StyledTableCell showBorder={showBorder} isBgGrey={isBgGrey} {...rest}>
            {children}
        </StyledTableCell>
    );
};
