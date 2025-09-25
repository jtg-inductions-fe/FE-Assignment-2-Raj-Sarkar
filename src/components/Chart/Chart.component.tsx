import { Box as MuiBox } from '@mui/material';
import {
    ChartsTooltip as MuiChartsTooltip,
    chartsTooltipClasses,
    // ChartsTooltipContainer,
    LineChart as MuiLineChart,
    // useItemTooltip,
} from '@mui/x-charts';

// import { Typography } from '@components/Typography';
import { FONTWEIGHTS } from '@constant';
import { theme } from '@theme';

import type { SalesLineChartProps } from './Chart.types';

// function CustomTooltip() {
//   const config = useItemTooltip();
//   if (item === null) {
//     return null;
//   }

//   const {
//     formattedValue,
//     color,
//   } = item;

//   const { label } = series;
//   return (
//     <ChartsTooltipContainer>
//       <MuiBox
//         sx={{
//           p: 1,
//           bgcolor: theme.palette.primary.light,
//           border: `${theme.spacing(0.25)} solid ${theme.palette.grey[50]}`,
//           borderRadius: 1,
//         }}
//       >
//         <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
//           {label}
//         </Typography>
//         <MuiBox sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
//           <MuiBox
//             sx={{
//               width: 10,
//               height: 10,
//               bgcolor: color,
//               borderRadius: '50%',
//               mr: 1,
//             }}
//           />
//           <Typography variant="body2">{`Value: ${formattedValue}`}</Typography>
//         </MuiBox>
//       </MuiBox>
//     </ChartsTooltipContainer>
//   );
// }

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
                        tickPlacement: 'end',
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
                        showMark: false,
                    },
                ]}
                height={418}
                // slots={{tooltip:CustomTooltip}}
                slots={{ tooltip: MuiChartsTooltip }}
                slotProps={{
                    tooltip: {
                        sx: {
                            [`& .${chartsTooltipClasses.mark}`]: {
                                '& > *': {
                                    display: 'none ',
                                },
                                '&::after': {
                                    content: '""',
                                    display: 'block',
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    backgroundColor: theme.palette.primary.main,
                                },
                            },
                            [`& .${chartsTooltipClasses.paper}`]: {
                                padding: theme.spacing(2.5, 2.5, 5),
                                borderRadius: theme.spacing(4),
                            },
                            [`& .${chartsTooltipClasses.labelCell}`]: {
                                fontSize: theme.typography.pxToRem(16),
                                fontWeight: FONTWEIGHTS.fontWeightLight,
                                borderBottom: 0,
                            },
                            [`& .${chartsTooltipClasses.valueCell}`]: {
                                fontSize: theme.typography.pxToRem(16),
                                fontWeight: FONTWEIGHTS.fontWeightMedium,
                            },
                        },
                    },
                }}
            />
        </MuiBox>
    );
};
