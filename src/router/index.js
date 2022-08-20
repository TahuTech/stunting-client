import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    //login
    {
        path: '/login',
        name: 'login.index',
        component: () => import("../views/home/Login.vue")
    },
    //home
    {
        path: '/',
        name: 'home.index',
        component: () => import("../views/home/Index.vue")
    },
    //about
    {
        path: '/about',
        name: 'about.index',
        component: () => import("../views/home/About.vue")
    },


    //admin
    {
        path: '/admin',
        name: 'admin.index',
        component: () => import("../views/admin/Index.vue")
    },

    //statistik
    {
        path: '/statistik',
        name: 'statistik.index',
        component: () => import("../views/statistik/Index.vue")
    },

    //user
    {
        path: '/user',
        name: 'user.index',
        component: () => import("../views/user/Index.vue")
    },
    //user balita
    {
        path: '/user/balita',
        name: 'user.balita',
        component: () => import("../views/user/Balita.vue")
    },
    //user knn
    {
        path: '/user/knn',
        name: 'user.knn',
        component: () => import("../views/user/Knn.vue")
    },
    //user detail knn
    {
        path: '/user/knndetail',
        name: 'user.knndetail',
        component: () => import("../views/user/Knndetail.vue")
    },
    //user saran
    {
        path: '/user/saran',
        name: 'user.saran',
        component: () => import("../views/user/Saran.vue")
    },
    //user about
    {
        path: '/user/about',
        name: 'user.about',
        component: () => import("../views/user/About.vue")
    },
    //user statistik
    {
        path: '/user/statistik',
        name: 'user.statistik',
        component: () => import("../views/user/Statistik.vue")
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

    //penganganan routes
    {
        path: '/aksi/susu',
        name: 'aksi.susu',
        component: () => import("../views/knn/aksi/Susu.vue")
    },

    //dataset routes
    {
        path: '/dataset',
        name: 'dataset.index',
        component: () => import("../views/dataset/Index.vue")
    },
    {
        path: '/dataset/create',
        name: 'dataset.create',
        component: () => import("../views/dataset/Create.vue")
    },
    {
        path: '/dataset/edit/:id',
        name: 'dataset.edit',
        component: () => import("../views/dataset/Edit.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;