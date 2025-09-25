import React from 'react';

import { ContainerProps as MuiContainerProps } from '@mui/material';

import {
    CONTAINER_GAP,
    CONTAINER_MARGIN,
    PADDING_TO_SIZE_MAP,
} from '@constant';

/**
 * Props for styled container
 * @property size - padding of container
 */
export type StyledContainerProps = MuiContainerProps & {
    size?: keyof typeof PADDING_TO_SIZE_MAP;
    margin?: keyof typeof CONTAINER_MARGIN;
};

/**
 * Props of container component
 * @property gap - gap between heading and content
 * @property hasIcon - boolean value of whether to show the info icon or not
 * @property heading - heading of the container
 * @property subHeading - subheading of he container
 * @property children - child nodes
 * @property hasHeadingPadding - boolean value of heading has padding or not
 */
export type CardProps = StyledContainerProps & {
    gap?: keyof typeof CONTAINER_GAP;
    hasIcon?: boolean;
    heading?: string;
    subHeading?: string;
    children?: React.ReactNode;
    hasHeadingPadding?: boolean;
};
