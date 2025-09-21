import { Icon } from '@components/Icon';
import { theme } from '@theme';

import { StyledIconButton } from './IconButton.styles';
import type { IconButtonProps } from './IconButton.types';

/**
 *
 * @param component - Icon to show
 * @param buttonSize - Size of the button
 * @param customColor - Custom color of the button
 * @param showShadow - Boolean value to show box-shadow (default=false)
 * @param padding - padding of button
 * @returns Component for Icon that works as a button
 */
export const IconButton = (props: IconButtonProps) => {
    const {
        component,
        buttonSize,
        customColor = theme.palette.grey[900],
        showShadow,
        padding = 0,
        ...rest
    } = props;
    return (
        <StyledIconButton
            buttonSize={buttonSize}
            showShadow={showShadow}
            padding={padding}
            {...rest}
        >
            <Icon
                component={component}
                size={buttonSize}
                htmlColor={customColor}
            />
        </StyledIconButton>
    );
};
