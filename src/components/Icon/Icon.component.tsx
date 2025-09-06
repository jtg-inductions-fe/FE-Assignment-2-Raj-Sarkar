import { IconProps } from '@types';

import { StyledSvgIcon } from './Icon.styles';

/**
 *
 * @param component - Icon element to render
 * @param customwidth - Custom width
 * @param customheight - Custom height
 * @param customcolor - Custom color
 * @returns Custom SVGIcon element to render provided icon
 */
export const Icon = ({
    component,
    customwidth,
    customheight,
    customcolor,
    ...props
}: IconProps) => (
    <StyledSvgIcon
        component={component}
        customwidth={customwidth}
        customheight={customheight}
        customcolor={customcolor}
        {...props}
    />
);
