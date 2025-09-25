import { Card } from '@components/Card';
import { SalesLineChart } from '@components/Chart';

import { ChartProps } from './Chart.types';

/**
 *
 * @param isDesktop - boolean status of view width is desktop or not
 * @returns container that calls chart component
 */
export const Chart = (props: ChartProps) => {
    const { isDesktop, salesData } = props;
    const dates = salesData.map((data) => data.date);
    const sales = salesData.map((data) => data.sales);
    const xMin = new Date(dates[0].getTime() - 24 * 60 * 60 * 1000);

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
                yMin={0}
                yMax={240000}
            />
        </Card>
    );
};
