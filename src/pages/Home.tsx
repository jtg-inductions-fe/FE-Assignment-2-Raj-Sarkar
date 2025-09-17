import { Box, useMediaQuery } from '@mui/material';

import { Chart } from '@components/Chart';
import { ImageGrid } from '@components/ImageGrid';
import { ITEM_DATA } from '@constant';
import { theme } from '@theme';

/**
 * @returns Home page component that contains all component for home page
 */
export const Home = () => {
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
<<<<<<< HEAD
            <Box padding={4} overflow={'auto'}>
                <ImageGrid itemData={ITEM_DATA} isDesktop={isDesktop} />
=======
            <Box
                sx={{
                    p: 4,
                    overflowY: 'auto',
                    bgcolor: theme.palette.grey[50],
                }}
            >
                <ImageGrid itemData={itemData} isDesktop={isDesktop} />
                <Chart isDesktop={isDesktop} />
>>>>>>> a097c63 ([RS_A2_04]: Created chart and fixed helpers)
            </Box>
        </>
    );
};
