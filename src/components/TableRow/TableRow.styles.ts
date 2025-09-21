import { styled, TableRow as MuiTableRow } from '@mui/material';

export const StyledTableRow = styled(MuiTableRow)(({ theme }) => ({
    borderRadius: theme.typography.pxToRem(12),
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.grey[50],
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
