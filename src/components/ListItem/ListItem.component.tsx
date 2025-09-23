import { Avatar as MuiAvatar, Stack as MuiStack } from '@mui/material';

import { Typography } from '@components/Typography';
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
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            paddingY={theme.typography.pxToRem(8)}
        >
            <MuiStack direction="row" spacing={2} alignItems="center">
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
                    <Typography variant="h3">{item.title}</Typography>
                    <Typography variant="body2" color={theme.palette.grey[500]}>
                        {item.description}
                    </Typography>
                </MuiStack>
            </MuiStack>
            <MuiStack direction="row" spacing={1}>
                {item.sales && (
                    <Typography variant="h3">
                        {`${item.prefix ? item.prefix : ''}${item.sales}`}
                    </Typography>
                )}
                {item.suffix && (
                    <Typography variant="h4" color={theme.palette.grey[500]}>
                        {item.suffix}
                    </Typography>
                )}
            </MuiStack>
        </MuiStack>
    );
};
