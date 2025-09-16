import { HandleNavigateProps } from '@components/Header';

/**
 * @description - Navigates to the route provided in params
 * @param navigate - NavigateFunction to navigate to the route
 * @param path - Path where the navigation should go
 */
export const navigateToPage = (props: HandleNavigateProps) => {
    const { navigate, path } = props;
    void navigate(path);
};
