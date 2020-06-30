import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
const Home = () => import('../views/home/index.vue')
const About = () => import('../views/about/index.vue')
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      index: 0
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      index: 1
    }
  },
];

const router = new VueRouter({
  routes,
});

export default router;
