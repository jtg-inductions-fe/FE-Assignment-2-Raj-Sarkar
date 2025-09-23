import { useMediaQuery } from '@mui/material';

import NotFoundImage from '@assets/imgs/not_found.png';
import { NotFound as NotFoundComponent } from '@components/NotFound';
import { theme } from '@theme';

/**
 * @returns Not found page component that contains all component for not found page
 */
export const NotFound = () => {
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <NotFoundComponent
            image={NotFoundImage}
            imageAlt="Not found image"
            heading="Page not found"
            description="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
            buttonContent="Go back home"
            buttonHref="/"
            isDesktop={isDesktop}
        />
    );
};
