import { Box } from '@mui/material';

import { ImageGrid } from '@components/ImageGrid';
import { itemData } from '@constant';

/**
 * @returns Home page component that contains all component for home page
 */
export const Home = () => (
    <>
        <Box sx={{ p: 4, overflowY: 'scroll' }}>
            <ImageGrid itemData={itemData} />
        </Box>
    </>
);
