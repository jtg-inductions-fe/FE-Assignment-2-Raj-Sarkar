import { ImageGrid } from 'containers/ImageGrid';

import { Box, useMediaQuery } from '@mui/material';

import { ITEM_DATA } from '@constant';
import { Chart } from '@containers/Chart';
import { salesDataset } from '@models';
import { theme } from '@theme';

/**
 * @returns Home page component that contains all component for home page
 */
export const Home = () => {
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
            <Box padding={4} overflow={'auto'}>
                <ImageGrid imageList={ITEM_DATA} isDesktop={isDesktop} />
                <Chart isDesktop={isDesktop} salesData={salesDataset} />
            </Box>
        </>
    );
};
