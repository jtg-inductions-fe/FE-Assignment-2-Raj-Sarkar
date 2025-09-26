/**
 * Types of props for sales line chart component
 * @property yMin - minimum value of y-axis
 * @property yMax - maximum value of y-axis
 * @property xMin - minimum value of x axis
 * @property dates - list of dates
 * @property sales - list of sales
 * @property yPosition - position of y
 * @property xWeight - weight of x-label
 */
export type SalesLineChartProps = {
    yMin?: number;
    yMax?: number;
    xMin: Date;
    dates: Date[];
    sales: number[];
    yPosition: 'left' | 'right' | 'none';
    xWeight: number;
};
