import { createBrowserRouter } from 'react-router-dom';

import { ROUTE_PATH } from '@constant';
import { Layout } from '@layout';
import { Home } from '@pages';
import { NotFound } from '@pages';

/**
 * Container all paths with respective elements
 */
export const routes = createBrowserRouter([
    {
        path: ROUTE_PATH.HOME,
        element: <Layout showSidebar />,
        children: [{ index: true, element: <Home /> }],
    },
    {
        path: ROUTE_PATH.NOT_FOUND,
        element: (
            <Layout>
                <NotFound />
            </Layout>
        ),
    },
]);
