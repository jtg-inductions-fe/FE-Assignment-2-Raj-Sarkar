import { Box as MuiBox } from '@mui/material';
import {
    ChartsTooltip as MuiChartsTooltip,
    LineChart as MuiLineChart,
} from '@mui/x-charts';

import { theme } from '@theme';

import type { SalesLineChartProps } from './Chart.types';

/**
 *
 * @property yMin - minimum value of y-axis
 * @property yMax - maximum value of y-axis
 * @property xMin - minimum value of x axis
 * @property dates - list of dates
 * @property sales - list of sales
 * @returns component to render the chart
 */
export const SalesLineChart = (props: SalesLineChartProps) => {
    const { yMin = 0, yMax = 240000, xMin, dates, sales } = props;

    return (
        <MuiBox width="100%">
            <MuiLineChart
                aria-label="Sales over time"
                hideLegend
                xAxis={[
                    {
                        data: dates,
                        scaleType: 'time',
                        valueFormatter: (val: Date) =>
                            `${val.getDate()} ${val.toLocaleString('default', { month: 'short' })}`,
                        tickInterval: dates,
                        tickPlacement: 'end',
                        disableLine: true,
                        disableTicks: true,
                        min: xMin,
                        tickLabelStyle: {
                            fontSize: 14,
                            fontWeight: 600,
                            fill: theme.palette.grey[500],
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
                        tickLabelStyle: {
                            fontSize: 14,
                            fontWeight: 600,
                            fill: theme.palette.grey[500],
                        },
                    },
                ]}
                series={[
                    {
                        data: sales,
                        label: 'Sales',
                        valueFormatter: (v) => `$${(v! / 1000).toFixed(0)}k`,
                        color: theme.palette.primary.main,
                        showMark: false,
                    },
                ]}
                height={418}
                slots={{ tooltip: MuiChartsTooltip }}
            />
        </MuiBox>
    );
};
