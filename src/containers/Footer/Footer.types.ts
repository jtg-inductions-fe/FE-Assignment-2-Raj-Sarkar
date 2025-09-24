import type { MenuIcon } from '@types';

/**
 * Types for footer component props
 * @property iconData - data of icon details
 * @property isDesktop - boolean value of view width is desktop or not
 */
export type FooterProps = {
    iconData: MenuIcon[];
    isDesktop: boolean;
};
