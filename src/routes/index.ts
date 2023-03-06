import { ReactNode } from 'react';

type Route = {
    path: string;
    component: ReactNode;
    layout?: ReactNode | null;
};

export const publicRoutes: Route[] = [];

export const privateRoutes: Route[] = [];
