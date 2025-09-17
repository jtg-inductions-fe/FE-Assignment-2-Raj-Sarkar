import { Box, useMediaQuery } from '@mui/material';

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
            <Box padding={4} overflow={'auto'}>
                <ImageGrid itemData={ITEM_DATA} isDesktop={isDesktop} />
            </Box>
        </>
    );
};
