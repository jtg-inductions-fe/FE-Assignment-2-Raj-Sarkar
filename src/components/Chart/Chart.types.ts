/**
 * Types of props for sales line chart component
 * @property yMin - minimum value of y-axis
 * @property yMax - maximum value of y-axis
 * @property xMin - minimum value of x axis
 * @property dates - list of dates
 * @property sales - list of sales
 */
export type SalesLineChartProps = {
    yMin?: number;
    yMax?: number;
    xMin: Date;
    dates: Date[];
    sales: number[];
};
