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

    return (
        <MuiStack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            paddingY={theme.typography.pxToRem(11)}
        >
            <MuiStack direction={'row'} spacing={2} alignItems={'center'}>
                {item.avatar && (
                    <MuiAvatar
                        src={item.avatar}
                        sx={{
                            width: 32,
                            height: 32,
                        }}
                    />
                )}
                <MuiStack>
                    <MuiTypography
                        variant="h3"
                        sx={{
                            ...theme.mixins.lineClamp(1),
                        }}
                    >
                        {item.title}
                    </MuiTypography>
                    <MuiTypography
                        variant="body2"
                        color={theme.palette.grey[500]}
                        sx={{
                            ...theme.mixins.lineClamp(1),
                        }}
                    >
                        {item.description}
                    </MuiTypography>
                </MuiStack>
            </MuiStack>
            <MuiStack direction={'row'} spacing={1}>
                {item.sales && (
                    <MuiTypography variant="h3">
                        {`${item.prefix ? item.prefix : ''}${item.sales}`}
                    </MuiTypography>
                )}
                {item.suffix && (
                    <MuiTypography variant="h4" color={theme.palette.grey[500]}>
                        {item.suffix}
                    </MuiTypography>
                )}
            </MuiStack>
        </MuiStack>
    );
};
