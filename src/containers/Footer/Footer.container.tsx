import { Typography as MuiTypography } from '@mui/material';

import { Card } from '@components/Card';
import { FooterIcons } from '@components/FooterIcons';
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
                justifyContent={'space-between'}
            >
                <MuiTypography variant="h4" color={theme.palette.grey[500]}>
                    &copy; 2021 Themesberg, LLC. All rights reserved.
                </MuiTypography>
                <FooterIcons iconData={iconData} />
            </StyledStack>
        </Card>
    );
};
