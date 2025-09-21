import { StyledBadge, StyledBox } from './Badge.styles';
import { BadgeProps } from './Badge.types';

/**
 *
 * @param type - type of badge (error/success/info)
 * @param content - content text to show in badge
 * @returns component to render a badge
 */
export const Badge = (props: BadgeProps) => {
    const { type, content } = props;

    return (
        <StyledBox type={type}>
            <StyledBadge variant="body2" type={type}>
                {content}
            </StyledBadge>
        </StyledBox>
    );
};
