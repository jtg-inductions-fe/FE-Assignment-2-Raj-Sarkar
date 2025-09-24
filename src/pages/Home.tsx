import { Box as MuiBox, Stack as MuiStack, useMediaQuery } from '@mui/material';

import { TableRow } from '@components/TableRow/TableRow.component';
import { CUSTOMERS, ITEM_DATA, PRODUCT_LIST } from '@constant';
import { Chart } from '@containers/Chart';
import { Customer } from '@containers/Customer';
import { ImageGrid } from '@containers/ImageGrid';
import { Product } from '@containers/Product';
import { Transaction } from '@containers/Transaction';
import { salesDataset } from '@models';
import { ColumnData, transactionDetails } from '@store';
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
                gap={isDesktop ? 4 : 0}
            >
                <MuiBox flexGrow={0} flexShrink={0} flexBasis={380}>
                    <Customer customerData={CUSTOMERS} isDesktop={isDesktop} />
                </MuiBox>
                <MuiBox
                    flexGrow={isDesktop ? 1 : 0}
                    flexShrink={1}
                    flexBasis={isDesktop ? 920 : 0}
                >
                    <Product productData={PRODUCT_LIST} isDesktop={isDesktop} />
                </MuiBox>
            </MuiStack>
            <Transaction
                transactionData={transactionDetails}
                isDesktop={isDesktop}
                RowRenderer={TableRow}
                columnData={ColumnData}
            />
        </MuiBox>
    );
};
