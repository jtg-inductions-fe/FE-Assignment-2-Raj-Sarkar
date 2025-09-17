import { Card } from '@components/Card';
import { List } from '@components/List';
import { ListItem } from '@components/ListItem';

import { ProductProps } from './Product.types';

/**
 *
 * @param productData - list of product details
 * @param isDesktop - boolean value of view width is desktop or not
 * @returns
 */
export const Product = (props: ProductProps) => {
    const { productData, isDesktop } = props;

    return (
        <Card
            padding={isDesktop ? 'lg' : 'md'}
            gap={'sm'}
            heading="Top products"
        >
            <List listData={productData} RenderItem={ListItem} />
        </Card>
    );
};
