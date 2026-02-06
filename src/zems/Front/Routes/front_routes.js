export const frontRoutes = [
    {
        path: '/',
        component: () => import('../Layout/FrontLayout.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../Pages/HomePage.vue')
            },
            // {
            //     path: 'residences',
            //     name: 'Residences',
            //     component: () => import('../Pages/ResidencesView.vue')
            // },
            // {
            //     path: 'penthouse',
            //     name: 'Penthouse',
            //     component: () => import('../Pages/PenthouseView.vue')
            // },
            // {
            //     path: 'amenities',
            //     name: 'Amenities',
            //     component: () => import('../Pages/AmenitiesView.vue')
            // },
            // {
            //     path: 'inquire',
            //     name: 'Inquire',
            //     component: () => import('../Pages/InquireView.vue')
            // },
            // {
            //     path: 'residence/:id',
            //     name: 'UnitDetail',
            //     component: () => import('../Pages/UnitDetailView.vue')
            // }
        ]
    }
];
