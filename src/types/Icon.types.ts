import { SvgIconProps } from '@mui/material';

/**
 * Contains props for StyledSvgIcon component
 */
export type StyledSvgIconProps = SvgIconProps & {
    customwidth?: number;
    customheight?: number;
    customcolor?: string;
};

/**
 * Contains props for Icon component
 */
export type IconProps = StyledSvgIconProps & {
    component: React.ElementType;
};
