import { styled, TableRow as MuiTableRow } from '@mui/material';

export const StyledTableRow = styled(MuiTableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.grey[50],
    },
}));
