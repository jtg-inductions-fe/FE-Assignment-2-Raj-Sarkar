import { styled, TableCell as MuiTableCell } from '@mui/material';

import { StyledTableCellProps } from './TableCellBadge.types';

const customProps: PropertyKey[] = ['showBorder', 'isBgGrey'];

export const StyledTableCell = styled(MuiTableCell, {
    shouldForwardProp: (prop) => !customProps.includes(prop),
})<StyledTableCellProps>(
    ({ theme: { typography, palette }, showBorder, isBgGrey }) => ({
        borderBottom: showBorder
            ? `${typography.pxToRem(1)} solid ${palette.grey[200]}`
            : 'none',
        backgroundColor: isBgGrey ? palette.grey[50] : 'transparent',
        padding: typography.pxToRem(15),
    }),
);
