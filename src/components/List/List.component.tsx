import { Divider as MuiDivider, Stack as MuiList } from '@mui/material';

import { StyledBox } from './List.styles';
import type { ListContentProps } from './List.types';

/**
 *
 * @param listData - list of product/customer details
 * @param renderItem - Component to render each item
 * @returns component that will render each item through provided renderItem
 */
export const List = (props: ListContentProps) => {
    const { listData, renderItem } = props;
    const length = listData.length;

    return (
        <MuiList role="list">
            {listData.map((item, index) => (
                <StyledBox key={item.id} role="listitem" component="li">
                    {renderItem({ item })}
                    {index < length - 1 && <MuiDivider component="hr" />}
                </StyledBox>
            ))}
        </MuiList>
    );
};
