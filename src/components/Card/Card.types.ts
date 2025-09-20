import React from 'react';

import { CONTAINER_GAP, CONTAINER_PADDING } from 'constant/containerConstant';

/**
 * Props for styled container
 * @property padding - padding of container
 */
export type StyledContainerProps = {
    padding?: keyof typeof CONTAINER_PADDING;
};

/**
 * Props of container component
 * @property gap - gap between heading and content
 * @property hasIcon - boolean value of whether to show the info icon or not
 * @property heading - heading of the container
 * @property subHeading - subheading of he container
 * @property children - child nodes
 */
export type CardProps = StyledContainerProps & {
    gap?: keyof typeof CONTAINER_GAP;
    hasIcon?: boolean;
    heading?: string;
    subHeading?: string;
    children?: React.ReactNode;
};
