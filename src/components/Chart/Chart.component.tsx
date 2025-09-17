import { dates, sales } from 'constant/chartConstant';

import { Box } from '@mui/material';
import { ChartsTooltip, LineChart } from '@mui/x-charts';

import { Container } from '@components/Container';
import { theme } from '@theme';

import { ChartProps, SalesLineChartProps } from './Chart.types';

export const SalesLineChart = (props: SalesLineChartProps) => {
    const { yMin = 0, yMax = 250000 } = props;
    const xAxisMin = new Date(dates[0].getTime() - 24 * 60 * 60 * 1000);

    return (
        <Box sx={{ width: '100%' }}>
            <LineChart
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
                        min: xAxisMin,
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
                slots={{ tooltip: ChartsTooltip }}
            />
        </Box>
    );
};

export const Chart = (props: ChartProps) => {
    const { isDesktop } = props;

    return (
        <Container
            padding={isDesktop ? 'xl' : 'sm'}
            gap={isDesktop ? 'md' : 'sm'}
            hasicon={true}
            heading="Sales"
        >
            <SalesLineChart />
        </Container>
    );
};
