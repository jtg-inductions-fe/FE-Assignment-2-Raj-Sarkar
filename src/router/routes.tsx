import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import { createBrowserRouter } from 'react-router-dom';

import { routePaths } from '../constant/index';
import { Layout } from '../layout';

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
