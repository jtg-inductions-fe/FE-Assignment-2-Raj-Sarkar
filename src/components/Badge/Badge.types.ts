import { BADGE_TYPE_COLORS } from '@constant';

/**
 * Props for styled badge
 * @property type - type of badge (error/success/info)
 */
export type StyledBadgeProps = {
    type: keyof typeof BADGE_TYPE_COLORS;
};

/**
 * Types for Badge component props
 * @property type - type of badge (error/success/info)
 * @property content - content text to show in badge
 */
export type BadgeProps = StyledBadgeProps & {
    content: string;
};
