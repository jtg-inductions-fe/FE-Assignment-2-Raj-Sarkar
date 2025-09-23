import { Typography as MuiTypography } from '@mui/material';

import { Badge } from '@components/Badge';
import { Typography } from '@components/Typography';
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
 * @param contentNormalVariant - variant for normal font text
 * @param contentBoldVariant - variant for bold font text
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
        contentNormalVariant = 'body2',
        contentBoldVariant = 'body1',
    } = props;

    return (
        <StyledTableCell
            width={width}
            showBorder={showBorder}
            isBgGrey={isBgGrey}
        >
            {contentNormal && (
                <Typography variant={contentNormalVariant} lines={2}>
                    {contentNormal}
                    {contentBold && (
                        <MuiTypography
                            component="span"
                            variant={contentBoldVariant}
                        >
                            {contentBold}
                        </MuiTypography>
                    )}
                </Typography>
            )}
            {contentLight && (
                <Typography
                    variant={contentNormalVariant}
                    color={theme.palette.grey[500]}
                    lines={2}
                >
                    {contentLight}
                </Typography>
            )}
            {contentLarge && (
                <Typography variant="h3">{contentLarge}</Typography>
            )}
            {badgeType && badgeContent && (
                <Badge content={badgeContent} type={badgeType} />
            )}
            {contentHeading && (
                <Typography
                    variant="body1"
                    color={theme.palette.grey[500]}
                    lines={2}
                >
                    {contentHeading}
                </Typography>
            )}
        </StyledTableCell>
    );
};
