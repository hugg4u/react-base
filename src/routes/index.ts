import Home from '~/pages/Home';

type Router = {
    path: string;
    component: () => JSX.Element;
    layout?: React.ExoticComponent<{
        children?: React.ReactNode;
    }> | null;
};

export const publicRoutes: Router[] = [
    {
        path: '/',
        component: Home,
        layout: null,
    },
];

export const privateRoutes: Router[] = [];
