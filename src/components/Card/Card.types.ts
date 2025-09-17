import { CONTAINER_GAP, CONTAINER_PADDING } from 'constant/containerConstant';

/**
 * Props of container component
 * @property padding - value of padding
 * @property gap - gap between heading and content
 * @property hasicon - boolean value of whether to show the info icon or not
 * @property heading - heading of the container
 * @property subheading - subheading of he container
 * @property children - child nodes
 */
export type CardProps = {
    padding?: keyof typeof CONTAINER_PADDING;
    gap?: keyof typeof CONTAINER_GAP;
    hasicon?: boolean;
    heading?: string;
    subheading?: string;
    children?: React.ReactNode;
};

/**
 * Props for styled container
 * @property padding - padding of container
 */
export type StyledContainerProps = {
    padding?: keyof typeof CONTAINER_PADDING;
};
