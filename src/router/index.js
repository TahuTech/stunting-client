import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/balita',
        name: 'balita.index',
        component: () => import("/src/views/balita/Index.vue")
    },
    {
        path: '/balita',
        name: 'balita.create',
        component: () => import("/src/views/balita/Index.vue")
    },
    {
        path: '/balita/edit/:id',
        name: 'balita.edit',
        component: () => import("/src/views/balita/Index.vue")
    },

    {
        path: '/saran',
        name: 'saran.index',
        component: () => import("/src/views/saran/Index.vue")
    },
    {
        path: '/saran',
        name: 'saran.create',
        component: () => import("/src/views/saran/Index.vue")
    },
    {
        path: '/saran/edit/:id',
        name: 'saran.edit',
        component: () => import("/src/views/saran/Index.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;