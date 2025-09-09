import { Icon } from '@components/Icon';
import { StyledIconButtonProps } from '@types';

import { StyledIconButton } from './IconButton.styles';

/**
 *
 * @param component - Icon to show
 * @param onClick - Function to handle click event
 * @param customwidth - Custom width of the button
 * @param customheight - Custom height of the button
 * @param customcolor - Custom color of the button
 * @param hideinmobile - Boolean value to hide icon in smaller device (default=false)
 * @param hideintablet - Boolean value to hide icon in Medium device (default=false)
 * @param showshadow - Boolean value to show box-shadow (default=false)
 * @returns Component for Icon that works as a button
 */
export const IconButton = (props: StyledIconButtonProps) => {
    const {
        component,
        onClick,
        customwidth,
        customheight,
        customcolor,
        hideinmobile,
        hideintablet,
        showshadow,
    } = props;
    return (
        <StyledIconButton
            onClick={onClick}
            customwidth={customwidth}
            customheight={customheight}
            customcolor={customcolor}
            hideinmobile={hideinmobile}
            hideintablet={hideintablet}
            showshadow={showshadow}
            {...props}
        >
            <Icon
                component={component}
                customwidth={customwidth ? customwidth - 4 : 24}
                customheight={customheight ? customheight - 4 : 24}
                customcolor={customcolor}
                inheritViewBox
            />
        </StyledIconButton>
    );
};
