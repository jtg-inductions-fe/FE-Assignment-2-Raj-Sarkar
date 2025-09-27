import { Box as MuiBox } from '@mui/material';
import { LineChart as MuiLineChart } from '@mui/x-charts';

import { CustomTooltip } from '@components/CustomTooltip';
import { FONTWEIGHTS } from '@constant';
import { theme } from '@theme';

import type { SalesLineChartProps } from './Chart.types';

/**
 *
 * @param yMin - minimum value of y-axis
 * @param yMax - maximum value of y-axis
 * @param xMin - minimum value of x axis
 * @param dates - list of dates
 * @param sales - list of sales
 * @param yPosition - position of yAxis
 * @param xWeight - weight of x-label
 * @returns component to render the chart
 */
export const SalesLineChart = (props: SalesLineChartProps) => {
    const {
        yMin = 0,
        yMax = 240000,
        yInterval = [],
        xMin,
        dates,
        sales,
        yPosition,
        xWeight,
    } = props;

    return (
        <MuiBox width="100%">
            <MuiLineChart
                aria-label="Sales over time"
                hideLegend
                grid={{ horizontal: true }}
                xAxis={[
                    {
                        data: dates,
                        scaleType: 'time',
                        valueFormatter: (val: Date) =>
                            `${val.toLocaleString('default', { day: '2-digit', month: 'short' })}`,
                        tickInterval: dates,
                        disableLine: true,
                        disableTicks: true,
                        min: xMin,
                        tickLabelStyle: {
                            fontSize: theme.typography.pxToRem(12),
                            fontWeight: xWeight,
                            fill: theme.palette.grey[500],
                            transform: `translateY(${theme.spacing(5)})`,
                        },
                    },
                ]}
                yAxis={[
                    {
                        valueFormatter: (v: number) => `${v / 1000}k`,
                        disableLine: true,
                        disableTicks: true,
                        min: yMin,
                        max: yMax,
                        tickInterval: yInterval,
                        tickLabelStyle: {
                            fontSize: theme.typography.pxToRem(14),
                            fontWeight: FONTWEIGHTS.fontWeightMedium,
                            fill: theme.palette.grey[500],
                            transform: `translateX(-${theme.spacing(6)})`,
                        },
                        position: yPosition,
                    },
                ]}
                series={[
                    {
                        data: sales,
                        label: 'Sales:',
                        valueFormatter: (v) => `$${(v! / 1000).toFixed(0)}k`,
                        color: theme.palette.primary.main,
                        showMark: true,
                    },
                ]}
                height={418}
                slots={{ tooltip: CustomTooltip }}
                slotProps={{
                    tooltip: {
                        trigger: 'item',
                    },
                    mark: {
                        opacity: 0,
                    },
                }}
            />
        </MuiBox>
    );
};
