import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'balita.index',
        component: () => import("@/views/balita/Index.vue")
    },
    {
        path: '/',
        name: 'balita.create',
        component: () => import("@/views/balita/Create.vue")
    },
    {
        path: '/edit/:id',
        name: 'balita.edit',
        component: () => import("@/views/balita/Edit.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;