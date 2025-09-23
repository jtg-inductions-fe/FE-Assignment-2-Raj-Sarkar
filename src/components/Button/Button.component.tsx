import { Typography } from '@components/Typography';

import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

/**
 *
 * @param buttonContent - text content inside the button
 * @param buttonHref - path to be re-directed upon clicking the button
 * @returns component to render a button
 */
export const Button = (props: ButtonProps) => {
    const { buttonContent, buttonHref, ...rest } = props;

    return (
        <StyledButton href={buttonHref} {...rest}>
            <Typography variant="subtitle1">{buttonContent}</Typography>
        </StyledButton>
    );
};
