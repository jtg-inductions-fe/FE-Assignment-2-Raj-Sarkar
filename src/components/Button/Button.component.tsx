import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

/**
 *
 * @param buttonContent - text content inside the button
 * @param href - path to be re-directed upon clicking the button
 * @returns component to render a button
 */
export const Button = (props: ButtonProps) => {
    const { buttonContent, buttonHref } = props;

    return <StyledButton href={buttonHref}>{buttonContent}</StyledButton>;
};
