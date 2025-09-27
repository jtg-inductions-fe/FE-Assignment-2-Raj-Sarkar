import { Box as MuiBox } from '@mui/material';

import { Card } from '@components/Card';
import { List } from '@components/List';
import { ListItem } from '@components/ListItem';

import type { ProductProps } from './Product.types';

/**
 *
 * @param productData - list of product details
 * @param isDesktop - boolean value of view width is desktop or not
 * @returns
 */
export const Product = (props: ProductProps) => {
    const { productData, isDesktop } = props;

    return (
        <MuiBox
            flexGrow={isDesktop ? 1 : 0}
            flexShrink={1}
            flexBasis={isDesktop ? 920 : 0}
        >
            <Card
                size={isDesktop ? 'lg' : 'md'}
                gap="sm"
                heading="Top products"
            >
                <List listData={productData} renderItem={ListItem} />
            </Card>
        </MuiBox>
    );
};
