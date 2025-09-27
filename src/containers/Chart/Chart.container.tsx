import { Card } from '@components/Card';
import { SalesLineChart } from '@components/Chart';
import { FONTWEIGHTS } from '@constant';

import { ChartProps } from './Chart.types';

/**
 *
 * @param isDesktop - boolean status of view width is desktop or not
 * @param salesData - sales data set
 * @returns container that calls chart component
 */
export const Chart = (props: ChartProps) => {
    const { isDesktop, salesData } = props;
    const dates = salesData.map((data) => data.date);
    const sales = salesData.map((data) => data.sales);
    const xMin = new Date(dates[0].getTime() - 6 * 60 * 60 * 1000);
    const yMin = 0,
        yMax = 242500,
        interval = 40000,
        yIntervalArray = [];
    for (let i = yMin; i < yMax; i += interval) yIntervalArray.push(i);

    return (
        <Card
            size={isDesktop ? 'xl' : 'sm'}
            gap={isDesktop ? 'md' : 'sm'}
            hasIcon
            heading="Sales"
            hasHeadingPadding={true}
            margin="md"
        >
            <SalesLineChart
                dates={dates}
                sales={sales}
                xMin={xMin}
                yMin={yMin}
                yMax={yMax}
                yInterval={yIntervalArray}
                yPosition={isDesktop ? 'left' : 'none'}
                xWeight={
                    isDesktop
                        ? FONTWEIGHTS.fontWeightMedium
                        : FONTWEIGHTS.fontWeightLight
                }
            />
        </Card>
    );
};
