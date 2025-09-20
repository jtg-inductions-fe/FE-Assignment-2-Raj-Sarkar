import { SvgIconProps as MuiSvgIconProps } from '@mui/material';

import { ICON_SIZE } from '@constant';

type CustomSvgIconProps = Omit<MuiSvgIconProps, 'children>'>;

/**
 * Contains props for StyledSvgIcon component
 * @property size - custom size of Icon
 */
export type StyledSvgIconProps = CustomSvgIconProps & {
    size?: keyof typeof ICON_SIZE;
};

/**
 * Contains props for Icon component
 * @property component - component to render via the icon component
 */
export type IconProps = StyledSvgIconProps & {
    component: React.ElementType;
};
