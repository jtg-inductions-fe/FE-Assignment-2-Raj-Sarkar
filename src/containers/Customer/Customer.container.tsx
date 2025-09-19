import { Card } from '@components/Card';
import { List } from '@components/List';
import { ListItem } from '@components/ListItem';

import type { CustomerProps } from './Customer.types';

/**
 *
 * @param customerData - list of customer data
 * @param isDesktop -  boolean value view width is desktop or not
 * @returns component to render csutomers list in a container
 */
export const Customer = (props: CustomerProps) => {
    const { customerData, isDesktop } = props;

    return (
        <Card
            size={isDesktop ? 'lg' : 'md'}
            gap={'sm'}
            heading="Latest Customers"
        >
            <List listData={customerData} RenderItem={ListItem} />
        </Card>
    );
};
