import { StyledSvgIcon } from './Icon.styles';
import { IconProps } from './Icon.types';

/**
 *
 * @param component - Icon element to render
 * @param size - Size of icon (sm | md |lg)
 * @param customcolor - Custom color
 * @returns Custom SVGIcon element to render provided icon
 */
export const Icon = (props: IconProps) => {
    const { component, size, customcolor } = props;

    return (
        <StyledSvgIcon
            component={component}
            size={size}
            customcolor={customcolor}
            inheritViewBox
        />
    );
};
