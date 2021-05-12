import Vue from 'vue'
import Router from 'vue-route'
import App from './App.vue'
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import store from './store';
import { routes } from './routers'
Vue.use(ElementUI);
Vue.config.productionTip = false
// console.log(router);
Vue.use(Router)
const router = new Router({
  // mode: "history",
  // scrollBehavior: () => ({ y: 0 }),
  routes: routes
})
new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App),
  
}).$mount('#app')
