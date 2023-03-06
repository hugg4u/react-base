import Home from '~/pages/Home';

type Route = {
    path: string;
    component: () => JSX.Element;
    layout?: React.ExoticComponent<{
        children?: React.ReactNode;
    }> | null;
};

export const publicRoutes: Route[] = [
    {
        path: '/',
        component: Home,
        layout: null,
    },
];

export const privateRoutes: Route[] = [];
