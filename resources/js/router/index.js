import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home-page',
            component: () => import(/* webpackChunkName: "home-page" */ '@/pages/HomePage.vue'),
        },
        {
            path: '/news',
            name: 'articles',
            component: () => import(/* webpackChunkName: "articles-page" */ '@/pages/NewsCatalogPage.vue'),
        },
        {
            path: '/news/:slug',
            name: 'article',
            component: () => import(/* webpackChunkName: "article-page" */ '@/pages/ArticlePage.vue')
        },
    ],
});

export default router;
