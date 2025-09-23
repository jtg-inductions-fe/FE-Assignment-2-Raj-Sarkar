import { MouseEvent, useState } from 'react';

import {
    Box as MuiBox,
    Popover as MuiPopover,
    Stack as MuiStack,
} from '@mui/material';

import Exclamation from '@assets/icons/exclamation_circle.svg?react';
import { IconButton } from '@components/IconButton';
import { Typography } from '@components/Typography';
import { CONTAINER_GAP } from '@constant';
import { theme } from '@theme';

import { StyledContainer } from './Card.styles';
import type { CardProps } from './Card.types';

/**
 *
 * @param size - padding of container (default md)
 * @param gap - gap between heading and content (default sm)
 * @param hasIcon - boolean status of whether there should be info icon or not (default false)
 * @param heading - heading of the container
 * @param subHeading - subheading of container
 * @param children - children nodes
 * @returns component to be used to wrap the components of a section
 */
export const Card = (props: CardProps) => {
    const {
        size = 'md',
        gap = 'sm',
        hasIcon = false,
        heading,
        subHeading,
        children,
        hasHeadingPadding = false,
        margin = 'sm',
        ...rest
    } = props;
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <StyledContainer size={size} margin={margin} maxWidth={false} {...rest}>
            <MuiStack direction={'column'} spacing={CONTAINER_GAP[gap]}>
                <MuiBox>
                    <MuiStack
                        direction={'row'}
                        spacing={3}
                        paddingY={hasHeadingPadding ? 3.5 : 0}
                    >
                        {heading && (
                            <Typography variant="h2">{heading}</Typography>
                        )}
                        {hasIcon && (
                            <MuiBox>
                                <IconButton
                                    component={Exclamation}
                                    customColor={theme.palette.primary.light}
                                    aria-owns={open ? 'sales-info' : undefined}
                                    aria-haspopup="true"
                                    onMouseEnter={handlePopoverOpen}
                                    onMouseLeave={handlePopoverClose}
                                />
                                <MuiPopover
                                    id="sales-info"
                                    sx={{ pointerEvents: 'none' }}
                                    open={open}
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    onClose={handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Typography padding={5}>
                                        Sales chart information
                                    </Typography>
                                </MuiPopover>
                            </MuiBox>
                        )}
                    </MuiStack>
                    {subHeading && (
                        <Typography
                            variant="subtitle2"
                            color={theme.palette.grey[500]}
                        >
                            {subHeading}
                        </Typography>
                    )}
                </MuiBox>
                {children && children}
            </MuiStack>
        </StyledContainer>
    );
};
