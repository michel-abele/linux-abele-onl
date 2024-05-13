import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { supportedLanguages } from '../utils/supportedLanguages';

// generate routes with layout
const routes = setupLayouts(generatedRoutes);

// define specific routes
const specificRoutes = [
    {
        path: '/en',
        component: () => import('../pages/de/index.vue'),
    },
    {
        path: '/de',
        component: () => import('../pages/de/index.vue'),
    },
];

// combine routes
const combinedRoutes = [...routes, ...specificRoutes];

// create router
const router = createRouter({
    history: createWebHistory(),
    routes: combinedRoutes,
});

// navigation guard
router.beforeEach((to, from, next) => {

    if (to.path === '/') {
        const userPreferredLang = navigator.language.split('-')[0].toLowerCase();
    
        // check if the user's preferred language is supported
        if (supportedLanguages.includes(userPreferredLang)) {
            next(`/${userPreferredLang}`);
        }
        else {
            // default language
            next('/en');
        }
    }
    else {
        // continue
        next();
    }
});

// export router
export default router;
