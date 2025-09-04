import { createBrowserRouter } from 'react-router-dom';

import { routePaths } from '../constant';
import { Layout } from '../layout';
import { Home } from '../pages';
import { NotFound } from '../pages';

export const routes = createBrowserRouter([
    {
        path: routePaths.home,
        element: (
            <Layout showSidebar={true}>
                <Home />
            </Layout>
        ),
    },
    {
        path: routePaths.notFound,
        element: (
            <Layout showSidebar={false}>
                <NotFound />
            </Layout>
        ),
    },
]);
