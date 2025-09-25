import { Box as MuiBox, Stack as MuiStack } from '@mui/material';
import {
    ChartsTooltipContainer as MuiChartsTooltipContainer,
    useItemTooltip,
} from '@mui/x-charts';

import { Typography } from '@components/Typography';
import { salesDataset } from '@data';
import { theme } from '@theme';

import { StyledStack } from './CustomTooltip.styles';

/**
 *
 * @returns component for custom tooltip
 */
export const CustomTooltip = () => {
    const config = useItemTooltip();
    if (config?.identifier.dataIndex === undefined) return;
    const date = salesDataset[config?.identifier.dataIndex].date;
    const sales = salesDataset[config?.identifier.dataIndex].sales;
    return (
        <MuiChartsTooltipContainer placement="top">
            <StyledStack>
                <Typography variant="body1" color={theme.palette.grey[500]}>
                    {date.toLocaleString('default', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                    })}
                </Typography>
                <MuiStack direction="row" gap={2} alignItems="center">
                    <MuiBox
                        borderRadius="50%"
                        width={10}
                        height={10}
                        bgcolor={theme.palette.primary.main}
                    />
                    <Typography
                        variant="h4"
                        component="span"
                        color={theme.palette.grey[500]}
                    >
                        {config.label}{' '}
                        <Typography
                            variant="h3"
                            component="span"
                            color={theme.palette.grey[900]}
                            sx={{ display: 'inline' }}
                        >
                            ${sales / 1000}k
                        </Typography>
                    </Typography>
                </MuiStack>
            </StyledStack>
        </MuiChartsTooltipContainer>
    );
};
