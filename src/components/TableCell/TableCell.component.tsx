import { Typography as MuiTypography } from '@mui/material';

import { Badge } from '@components/Badge';
import { theme } from '@theme';

import { StyledTableCell } from './TableCell.styles';
import { TableCellProps } from './TableCell.types';

/**
 *
 * @param width - width of column
 * @param contentLight - content text for light font
 * @param contentNormal - content text for normal font
 * @param contentBold - content text for bold font
 * @param contentLarge - content text for large font
 * @param badgeContent - content of badge
 * @param badgeType - type of badge
 * @param contentHeading - content of heading
 * @param isBgGrey - boolean value whether background is grey or not
 * @param showBorder - boolean value whether to show border
 * @returns component to render a cell
 */
export const TableCell = (props: TableCellProps) => {
    const {
        width,
        contentLight,
        contentNormal,
        contentBold,
        contentLarge,
        badgeContent,
        badgeType,
        contentHeading,
        isBgGrey = false,
        showBorder = false,
        isDesktop,
    } = props;

    return (
        <StyledTableCell
            width={width}
            showBorder={showBorder}
            isBgGrey={isBgGrey}
        >
            {contentNormal && (
                <MuiTypography variant={isDesktop ? 'subtitle2' : 'body2'}>
                    {contentNormal}
                    {contentBold && (
                        <MuiTypography
                            component="span"
                            variant={isDesktop ? 'subtitle1' : 'body1'}
                        >
                            {contentBold}
                        </MuiTypography>
                    )}
                </MuiTypography>
            )}
            {contentLight && (
                <MuiTypography
                    variant={isDesktop ? 'subtitle2' : 'body2'}
                    color={theme.palette.grey[500]}
                >
                    {contentLight}
                </MuiTypography>
            )}
            {contentLarge && (
                <MuiTypography variant="h3">{contentLarge}</MuiTypography>
            )}
            {badgeType && badgeContent && (
                <Badge content={badgeContent} type={badgeType} />
            )}
            {contentHeading && (
                <MuiTypography variant="body1" color={theme.palette.grey[500]}>
                    {contentHeading}
                </MuiTypography>
            )}
        </StyledTableCell>
    );
};
