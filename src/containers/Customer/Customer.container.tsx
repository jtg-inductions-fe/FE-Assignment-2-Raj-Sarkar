import { Box as MuiBox } from '@mui/material';

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
        <MuiBox flexGrow={0} flexShrink={0} flexBasis={380}>
            <Card
                size={isDesktop ? 'lg' : 'md'}
                gap="sm"
                heading="Latest Customers"
            >
                <List listData={customerData} renderItem={ListItem} />
            </Card>
        </MuiBox>
    );
};
