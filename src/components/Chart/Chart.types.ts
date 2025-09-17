/**
 * Props for Chart component
 * @param isDesktop - boolean value to determine whethern the view width is desktop or not
 */
export type ChartProps = {
    isDesktop: boolean;
};

export type SalesLineChartProps = {
    yMin?: number;
    yMax?: number;
};
