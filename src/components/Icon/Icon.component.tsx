import { StyledSvgIcon } from './Icon.styles';
import type { IconProps } from './Icon.types';

/**
 *
 * @param component - Icon element to render
 * @param size - Size of icon (sm | md |lg)
 * @param customColor - Custom color
 * @returns Custom SVGIcon element to render provided icon
 */
export const Icon = (props: IconProps) => {
    const { component, size } = props;

    return <StyledSvgIcon component={component} size={size} inheritViewBox />;
};
