import { createRouter, createWebHistory } from 'vue-router';
import { frontRoutes } from '../zems/Front/Routes/front_routes';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...frontRoutes
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;
