import Vue from 'vue';
import Router from 'vue-route';
Vue.use(Router)

import UserDetail from '@/components/UserDetail'
import ListUser from '@/components/ListUser'
export const routes = [
    {
        path: '/',
        component: ListUser
    },
    {
        path: '/user/:id',
        component: UserDetail
    }
]

// export default new Router({
//     mode: "history",
//     scrollBehavior: () => ({ y: 0 }),
//     routes: routes
// })