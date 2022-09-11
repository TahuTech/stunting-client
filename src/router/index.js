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
     //statistik allbb
    {
        path: '/statistik/all',
        name: 'statistik.all',
        component: () => import("../views/statistik/Allbb.vue")
    },
    //statistik normal
    {
        path: '/statistik/normal',
        name: 'statistik.normal',
        component: () => import("../views/statistik/Normal.vue")
    },
    //statistik stunting
    {
        path: '/statistik/stun',
        name: 'statistik.stun',
        component: () => import("../views/statistik/Stun.vue")
    },

    //statistik gizi baik
    {
        path: '/statistik/gizba',
        name: 'statistik.gizba',
        component: () => import("../views/statistik/gizi/Gizbai.vue")
    },
    //statistik gizi buruk
    {
        path: '/statistik/gizbu',
        name: 'statistik.gizbu',
        component: () => import("../views/statistik/gizi/Gizbur.vue")
    },
    //statistik gizi kurang
    {
        path: '/statistik/gizku',
        name: 'statistik.gizku',
        component: () => import("../views/statistik/gizi/Gizkura.vue")
    },
    //statistik gizi lebih
    {
        path: '/statistik/gizle',
        name: 'statistik.gizle',
        component: () => import("../views/statistik/gizi/Gizle.vue")
    },

    //statistik tinggi normal
    {
        path: '/statistik/tingno',
        name: 'statistik.tingno',
        component: () => import("../views/statistik/tinggi/Tingno.vue")
    },
    //statistik tinggi sangat Pendek
    {
        path: '/statistik/tingspen',
        name: 'statistik.tingspen',
        component: () => import("../views/statistik/tinggi/Tingspen.vue")
    },
    //statistik tinggi pendek
    {
        path: '/statistik/tingpen',
        name: 'statistik.tingpen',
        component: () => import("../views/statistik/tinggi/Gizkura.vue")
    },
    //statistik tinggi lebih
    {
        path: '/statistik/tinggi',
        name: 'statistik.tinggi',
        component: () => import("../views/statistik/tinggi/Tinggi.vue")
    },
    

    
    //statistik berat normal
    {
        path: '/statistik/bernor',
        name: 'statistik.bernor',
        component: () => import("../views/statistik/berat/Bernor.vue")
    },
    //statistik berat sangat Kurus
    {
        path: '/statistik/berskur',
        name: 'statistik.berskur',
        component: () => import("../views/statistik/berat/berskur.vue")
    },
    //statistik berat kurus
    {
        path: '/statistik/berkur',
        name: 'statistik.berkur',
        component: () => import("../views/statistik/berat/Berkur.vue")
    },
    //statistik berat lebih
    {
        path: '/statistik/beratt',
        name: 'statistik.beratt',
        component: () => import("../views/statistik/berat/Beratt.vue")
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