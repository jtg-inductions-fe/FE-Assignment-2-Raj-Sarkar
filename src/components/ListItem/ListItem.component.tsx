import {
    Avatar as MuiAvatar,
    Stack as MuiStack,
    Typography as MuiTypography,
} from '@mui/material';

import { theme } from '@theme';

import type { ListItemProps } from './ListItem.types';

/**
 *
 * @param item - single product/customer item detail
 * @returns component to render a single product/customer item
 */
export const ListItem = (props: ListItemProps) => {
    const { item } = props;
    const isCustomer = item.kind === 'customer';

    return (
        <MuiStack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            paddingY={theme.spacing(2)}
        >
            <MuiStack direction={'row'} spacing={2} alignItems={'center'}>
                {isCustomer && item.avatar && (
                    <MuiAvatar
                        src={item.avatar}
                        sx={{
                            width: 32,
                            height: 32,
                        }}
                    />
                )}
                <MuiStack>
                    <MuiTypography variant="h3">
                        {isCustomer ? item.username : item.name}
                    </MuiTypography>
                    <MuiTypography
                        variant="body2"
                        color={theme.palette.grey[500]}
                    >
                        {isCustomer ? item.email : item.technology}
                    </MuiTypography>
                </MuiStack>
            </MuiStack>
            <MuiTypography variant="h3">
                {isCustomer ? `$${item.sales}` : `${item.sales} sales`}
            </MuiTypography>
        </MuiStack>
    );
};
