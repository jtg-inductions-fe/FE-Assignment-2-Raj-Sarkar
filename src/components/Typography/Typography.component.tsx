import { StyledTypography } from './Typography.styles';
import { TypographyProps } from './Typography.types';

export const Typography = (props: TypographyProps) => {
    const { lines = 1, ...rest } = props;

    return <StyledTypography lines={lines} {...rest} />;
};
