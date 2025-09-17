import { Box as MuiBox, Stack as MuiStack, useMediaQuery } from '@mui/material';

import { Chart } from '@containers/Chart';
import { ImageGrid } from '@containers/ImageGrid';
import { Product } from '@components/Product';
import { CUSTOMERS, ITEM_DATA, PRODUCT_LIST } from '@constant';
import { theme } from '@theme';
import { salesDataset } from '@models';

/**
 * @returns Home page component that contains all component for home page
 */
export const Home = () => {
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <MuiBox
            padding={4} 
            overflow={'auto'} 
            bgcolor={theme.palette.grey[50]}
        >
            <ImageGrid imageList={ITEM_DATA} isDesktop={isDesktop} />
            <Chart isDesktop={isDesktop} salesData={salesDataset} />
            <MuiStack
                direction={isDesktop ? 'row' : 'column'}
                spacing={4}
                marginTop={4}
            >
                <Customer customerData={CUSTOMERS} isDesktop={isDesktop} />
                <Product productData={PRODUCT_LIST} isDesktop={isDesktop} />
            </MuiStack>
        </MuiBox>
    );
};
