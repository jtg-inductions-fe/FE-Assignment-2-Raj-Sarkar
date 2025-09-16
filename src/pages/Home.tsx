import { Box } from '@mui/material';

import { ImageGrid } from '@components/ImageGrid';

/**
 * @returns Home page component that contains all component for home page
 */
export const Home = () => (
    <>
        <Box sx={{ p: 4, overflow: 'scroll' }}>
            <ImageGrid />
        </Box>
    </>
);
