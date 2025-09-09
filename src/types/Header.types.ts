import { NavigateFunction } from 'react-router-dom';

/**
 * Contains props for navigating to a route
 */
export type HandleNavigateProps = {
    navigate: NavigateFunction;
    path: string;
};

/**
 * Contains types of props for header component
 */
export type HeaderProps = {
    onMenuClick: () => void;
};
