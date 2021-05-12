import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
import ListUser from '@/views/ListUser'
const routes = [
    {
        path: '/',
        component: ListUser,
        name: 'list'
    },
]
const router = new Router({
    mode: 'history',
    // base: __dirname,
    routes: routes
})
export default router