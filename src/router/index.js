import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    //home
    {
        path: '/',
        name: 'home.index',
        component: () => import("../views/home/Index.vue")
    },
    //balita routes
    {
        path: '/balita',
        name: 'balita.index',
        component: () => import("../views/balita/Index.vue")
    },
    {
        path: '/balita/create',
        name: 'balita.create',
        component: () => import("../views/balita/Create.vue")
    },
    {
        path: '/balita/edit/:id',
        name: 'balita.edit',
        component: () => import("../views/balita/Edit.vue")
    },

    //saran routes
    {
        path: '/saran',
        name: 'saran.index',
        component: () => import("../views/saran/Index.vue")
    },
    {
        path: '/saran/create',
        name: 'saran.create',
        component: () => import("../views/saran/Create.vue")
    },
    {
        path: '/saran/edit/:id',
        name: 'saran.edit',
        component: () => import("../views/saran/Edit.vue")
    },

    //KNN routes
    {
        path: '/knn',
        name: 'knn.index',
        component: () => import("../views/knn/Index.vue")
    },
    {
        path: '/knn/create',
        name: 'knn.create',
        component: () => import("../views/knn/Create.vue")
    },
    {
        path: '/knn/edit/:id',
        name: 'knn.edit',
        component: () => import("../views/knn/Edit.vue")
    },
    {
        path: '/knn/detail/:id',
        name: 'knn.detail',
        component: () => import("../views/knn/Detail.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;