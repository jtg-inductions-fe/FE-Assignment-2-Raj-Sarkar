import { SvgIconProps } from '@mui/material';

import { ICON_SIZE } from '@constant';

/**
 * Contains props for StyledSvgIcon component
 * @property size - custom size of Icon
 * @property customcolor - custom color of Icon
 */
export type StyledSvgIconProps = SvgIconProps & {
    size?: keyof typeof ICON_SIZE;
    customcolor?: string;
};

/**
 * Contains props for Icon component
 * @property component - component to render via the icon component
 */
export type IconProps = StyledSvgIconProps & {
    component: React.ElementType;
};
