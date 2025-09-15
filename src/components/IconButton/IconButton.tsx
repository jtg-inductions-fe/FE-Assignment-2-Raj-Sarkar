import { Icon } from '@components/Icon';

import { StyledIconButton } from './IconButton.styles';
import { StyledIconButtonProps } from './IconButton.types';

/**
 *
 * @param component - Icon to show
 * @param onClick - Function to handle click event
 * @param buttonsize - Size of the button
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
        buttonsize,
        customcolor,
        hideinmobile,
        hideintablet,
        showshadow,
    } = props;
    return (
        <StyledIconButton
            onClick={onClick}
            buttonsize={buttonsize}
            customcolor={customcolor}
            hideinmobile={hideinmobile}
            hideintablet={hideintablet}
            showshadow={showshadow}
            {...props}
        >
            <Icon
                component={component}
                size={buttonsize}
                customcolor={customcolor}
            />
        </StyledIconButton>
    );
};
