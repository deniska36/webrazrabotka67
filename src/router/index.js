import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/catalog', name: 'catalog', component: () => import('../views/CatalogView.vue') },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  {
    path: '/about/:slug',
    name: 'about-article',
    component: () => import('../views/AboutArticleView.vue'),
    props: true,
  },
  {
    path: '/services/:id',
    name: 'service-detail',
    component: () => import('../views/ServiceDetailView.vue'),
    props: true,
  },
  { path: '/cart', name: 'cart', component: () => import('../views/CartView.vue') },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 }
    return { top: 0 }
  },
})

export default router
