import { CONTAINER_GAP } from 'constant/containerConstant';
import { Outlet } from 'react-router-dom';

import {
    Box as MuiBox,
    Stack as MuiStack,
    Typography as MuiTypography,
} from '@mui/material';

import Exclamation from '@assets/icons/exclamation_circle.svg?react';
import { Icon } from '@components/Icon';
import { theme } from '@theme';

import { StyledContainer } from './Card.styles';
import { CardProps } from './Card.types';

/**
 *
 * @param padding - padding of container (default md)
 * @param gap - gap between heading and content (default sm)
 * @param hasicon - boolean status of whether there should be info icon or not (default false)
 * @param heading - heading of the container
 * @param subheading - subheading of container
 * @param children - children nodes
 * @returns component to be used to wrap the components of a section
 */
export const Card = (props: CardProps) => {
    const {
        padding = 'md',
        gap = 'sm',
        hasicon = false,
        heading,
        subheading,
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
                        {hasicon && (
                            <Icon
                                component={Exclamation}
                                customcolor={theme.palette.primary.light}
                            />
                        )}
                    </MuiStack>
                    {subheading && (
                        <MuiTypography variant="subtitle1">
                            {subheading}
                        </MuiTypography>
                    )}
                </MuiBox>
                {children ?? <Outlet />}
            </MuiStack>
        </StyledContainer>
    );
};
