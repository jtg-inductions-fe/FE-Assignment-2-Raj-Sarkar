import { Box as MuiBox, Stack as MuiStack, useMediaQuery } from '@mui/material';

import { CUSTOMERS, ITEM_DATA } from '@constant';
import { Chart } from '@containers/Chart';
import { Customer } from '@containers/Customer';
import { ImageGrid } from '@containers/ImageGrid';
import { salesDataset } from '@models';
import { theme } from '@theme';

/**
 * @returns Home page component that contains all component for home page
 */
export const Home = () => {
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <MuiBox padding={4} overflow={'auto'} bgcolor={theme.palette.grey[50]}>
            <ImageGrid imageList={ITEM_DATA} isDesktop={isDesktop} />
            <Chart isDesktop={isDesktop} salesData={salesDataset} />
            <MuiStack
                direction={isDesktop ? 'row' : 'column'}
                gap={isDesktop ? 4 : 2}
                marginTop={4}
            >
                <MuiBox sx={{ flexGrow: 0, flexShrink: 0, flexBasis: 380 }}>
                    <Customer customerData={CUSTOMERS} isDesktop={isDesktop} />
                </MuiBox>
                <MuiBox
                    sx={{
                        flexGrow: isDesktop ? 1 : 0,
                        flexShrink: 1,
                        flexBasis: isDesktop ? 920 : 0,
                    }}
                >
                    <Product productData={PRODUCT_LIST} isDesktop={isDesktop} />
                </MuiBox>
            </MuiStack>
        </MuiBox>
    );
};
