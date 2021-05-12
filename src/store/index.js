import Vue from 'vue';
import Vuex from 'vuex';
import listUser from './modules/listUser'
Vue.use(Vuex);
const storeData = {
    modules:{
        listUser
    }
}
const store = new Vuex.Store(storeData)
//   console.log(listUser);
export default store;