import { SvgIconProps } from '@mui/material';

import { ICON_SIZE } from '@constant';

/**
 * Contains props for StyledSvgIcon component
 * @param size - custom size of Icon
 * @param customcolor - custom color of Icon
 */
export type StyledSvgIconProps = SvgIconProps & {
    size?: keyof typeof ICON_SIZE;
    customcolor?: string;
};

/**
 * Contains props for Icon component
 * @param component - component to render via the icon component
 */
export type IconProps = StyledSvgIconProps & {
    component: React.ElementType;
};
