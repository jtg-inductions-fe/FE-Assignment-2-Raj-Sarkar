import { Box, useMediaQuery } from '@mui/material';

import { ImageGrid } from '@components/ImageGrid';
import { itemData } from '@constant';
import { theme } from '@theme';

/**
 * @returns Home page component that contains all component for home page
 */
export const Home = () => {
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
            <Box sx={{ p: 4, overflowY: 'scroll' }}>
                <ImageGrid itemData={itemData} isDesktop={isDesktop} />
            </Box>
        </>
    );
};
