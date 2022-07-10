import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    //home
    // {
    //     path: '/home',
    //     name: 'saran.index',
    //     component: () => import("/src/views/saran/Index.vue")
    // },
    //balita routes
    {
        path: '/balita',
        name: 'balita.index',
        component: () => import("/src/views/balita/Index.vue")
    },
    {
        path: '/balita/create',
        name: 'balita.create',
        component: () => import("/src/views/balita/Create.vue")
    },
    {
        path: '/balita/edit/:id',
        name: 'balita.edit',
        component: () => import("/src/views/balita/Edit.vue")
    },

    //saran routes
    {
        path: '/saran',
        name: 'saran.index',
        component: () => import("/src/views/saran/Index.vue")
    },
    {
        path: '/saran/create',
        name: 'saran.create',
        component: () => import("/src/views/saran/Create.vue")
    },
    {
        path: '/saran/edit/:id',
        name: 'saran.edit',
        component: () => import("/src/views/saran/Edit.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;