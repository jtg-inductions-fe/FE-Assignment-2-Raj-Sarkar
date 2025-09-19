/**
 * Props for Chart component
 * @param isDesktop - boolean value to determine whethern the view width is desktop or not
 */
export type ChartProps = {
    isDesktop: boolean;
};

/**
 * Types of props for sales line chart component
 * @property yMin - minimum value of y-axis
 * @property yMax - maximum value of y-axis
 */
export type SalesLineChartProps = {
    yMin?: number;
    yMax?: number;
};
