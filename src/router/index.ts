import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
const Main = () => import('../views/main.vue')
const Home = () => import('../views/home/index.vue')
const About = () => import('../views/about/index.vue')
Vue.use(VueRouter);
const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { index: 0 }
      },
      {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
          index: 1
        }
      },
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
