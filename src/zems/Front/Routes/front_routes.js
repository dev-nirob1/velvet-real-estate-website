export const frontRoutes = [
    {
        path: '/',
        component: () => import('../Layout/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../Pages/HomePage.vue')
            }
        ]
    }
];
