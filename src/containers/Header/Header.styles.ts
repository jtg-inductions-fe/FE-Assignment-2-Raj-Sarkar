import {
    Avatar as MuiAvatar,
    AvatarProps as MuiAvatarProps,
    Stack as MuiStack,
    styled,
} from '@mui/material';

export const StyledHeaderStack = styled(MuiStack)(
    ({ theme: { palette, typography, breakpoints, spacing } }) => ({
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: spacing(4),
        maxHeight: typography.pxToRem(70),
        position: 'sticky',
        top: 0,
        zIndex: 1201,
        backgroundColor: palette.primary.light,
        borderBottom: `${typography.pxToRem(1)} solid ${palette.grey[200]}`,
        [breakpoints.up('sm')]: {
            padding: spacing(3, 5),
        },
    }),
);

export const StyledAvatar = styled(MuiAvatar)<MuiAvatarProps>(
    ({ theme: { spacing, palette } }) => ({
        width: 32,
        height: 32,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        padding: 0,
        '&:focus': {
            outline: `${spacing(0.25)} solid ${palette.grey[900]}`,
        },
    }),
);
