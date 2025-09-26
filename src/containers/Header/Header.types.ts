import { NavigateFunction } from 'react-router-dom';

/**
 * Contains props for navigating to a route
 * @property navigate - function to do the navigation to a route
 * @property path - path to re-direct
 */
export type HandleNavigateProps = {
    navigate: NavigateFunction;
    path: string;
};

/**
 * Contains types of props for header component
 * @property onMenuClick - function to be done on click event on menu icon
 */
export type HeaderProps = {
    onMenuClick: () => void;
};
