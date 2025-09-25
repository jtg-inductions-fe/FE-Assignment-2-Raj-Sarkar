import { Card } from '@components/Card';
import { FooterIcons } from '@components/FooterIcons';
import { Typography } from '@components/Typography';
import { theme } from '@theme';

import { StyledStack } from './Footer.styles';
import type { FooterProps } from './Footer.types';

/**
 *
 * @param iconData - data of icon details
 * @param isDesktop - boolean value of view width is desktop or not
 * @returns
 */
export const Footer = (props: FooterProps) => {
    const { iconData, isDesktop } = props;

    return (
        <Card size="xl">
            <StyledStack
                direction={isDesktop ? 'row' : 'column'}
                justifyContent="space-between"
            >
                <Typography
                    variant="h4"
                    color={theme.palette.grey[500]}
                    lines={3}
                >
                    &copy; 2021 Themesberg, LLC. All rights reserved.
                </Typography>
                <FooterIcons iconData={iconData} />
            </StyledStack>
        </Card>
    );
};
