export const frontRoutes = [
    {
        path: '/',
        component: () => import('../Layout/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../Pages/HomePage.vue')
            },
            {
                path: 'residences',
                name: 'Residences',
                component: () => import('../Pages/ResidencesPage.vue')
            },
            {
                path: 'residences/:id',
                name: 'ResidenceDetail',
                component: () => import('../Pages/ResidenceDetailPage.vue')
            },
            {
                path: 'amenities',
                name: 'Amenities',
                component: () => import('../Pages/AmenitiesPage.vue')
            },
            {
                path: 'penthouse',
                name: 'Penthouse',
                component: () => import('../Pages/PenthousePage.vue')
            },
            {
                path: 'inquire',
                name: 'Inquire',
                component: () => import('../Pages/InquirePage.vue')
            }
        ]
    }
];
