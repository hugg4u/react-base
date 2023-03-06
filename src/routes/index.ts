import { DefaultLayout } from '~/layouts';

import config from '~/config';

import Home from '~/pages/Home';

export const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        layout: DefaultLayout,
    },
];

export const privateRoutes = [];
