import { CONTAINER_GAP } from 'constant/containerConstant';

import {
    Box as MuiBox,
    Stack as MuiStack,
    Typography as MuiTypography,
} from '@mui/material';

import Exclamation from '@assets/icons/exclamation_circle.svg?react';
import { Icon } from '@components/Icon';
import { theme } from '@theme';

import { StyledContainer } from './Card.styles';
import type { CardProps } from './Card.types';

/**
 *
 * @param padding - padding of container (default md)
 * @param gap - gap between heading and content (default sm)
 * @param hasIcon - boolean status of whether there should be info icon or not (default false)
 * @param heading - heading of the container
 * @param subHeading - subheading of container
 * @param children - children nodes
 * @returns component to be used to wrap the components of a section
 */
export const Card = (props: CardProps) => {
    const {
        padding = 'md',
        gap = 'sm',
        hasIcon = false,
        heading,
        subHeading,
        children,
    } = props;
    return (
        <StyledContainer padding={padding}>
            <MuiStack direction={'column'} spacing={CONTAINER_GAP[gap]}>
                <MuiBox>
                    <MuiStack direction={'row'} spacing={3}>
                        {heading && (
                            <MuiTypography variant="h2">
                                {heading}
                            </MuiTypography>
                        )}
                        {hasIcon && (
                            <Icon
                                component={Exclamation}
                                htmlColor={theme.palette.primary.light}
                            />
                        )}
                    </MuiStack>
                    {subHeading && (
                        <MuiTypography variant="subtitle1">
                            {subHeading}
                        </MuiTypography>
                    )}
                </MuiBox>
                {children && children}
            </MuiStack>
        </StyledContainer>
    );
};
