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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;