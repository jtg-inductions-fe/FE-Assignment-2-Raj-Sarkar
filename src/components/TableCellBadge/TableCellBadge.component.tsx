import { Badge } from '@components/Badge';

import { StyledTableCell } from './TableCellBadge.styles';
import { TableCellBadgeProps } from './TableCellBadge.types';

export const TableCellBadge = (props: TableCellBadgeProps) => {
    const { content, badgeType, isBgGrey, showBorder } = props;

    return (
        <StyledTableCell showBorder={showBorder} isBgGrey={isBgGrey}>
            <Badge content={content} type={badgeType} />
        </StyledTableCell>
    );
};
