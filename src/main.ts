import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible/index.js'
import '@/assets/style/common.less';
Vue.config.productionTip = false;
import { Button, Swipe, SwipeItem, Grid, GridItem } from 'vant';
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
