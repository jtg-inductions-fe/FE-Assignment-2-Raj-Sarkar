import { Box as MuiBox, styled } from '@mui/material';

import { StyledBoxProps } from './List.types';

export const StyledBox = styled(MuiBox)<StyledBoxProps>({
    listStyle: 'none',
});
