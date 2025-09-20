import { Divider as MuiDivider, Stack as MuiList } from '@mui/material';

import { StyledBox } from './List.styles';
import type { ListContentProps } from './List.types';

/**
 *
 * @param listData - list of product/customer details
 * @param RenderItem - Component to render each item
 * @returns component that will render each item through provided RenderItem
 */
export const List = (props: ListContentProps) => {
    const { listData, RenderItem } = props;
    const length = listData.length;

    return (
        <MuiList role="list">
            {listData.map((item, index) => (
                <StyledBox key={item.id} role="listitem" component="li">
                    <RenderItem item={item} />
                    {index < length - 1 && <MuiDivider component="hr" />}
                </StyledBox>
            ))}
        </MuiList>
    );
};
