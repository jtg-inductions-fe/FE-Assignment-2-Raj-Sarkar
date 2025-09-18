import { theme } from '@theme';

export const BADGE_TYPE_COLORS = {
    error: {
        text: theme.palette.error.main,
        background: theme.palette.error.light,
    },
    success: {
        text: theme.palette.success.main,
        background: theme.palette.success.light,
    },
    info: {
        text: theme.palette.info.main,
        background: theme.palette.info.light,
    },
} as const;
