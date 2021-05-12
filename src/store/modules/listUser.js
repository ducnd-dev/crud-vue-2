import axios from 'axios';
const listUser = {
    state: {
        loading: false,
        listUser: localStorage.getItem('listAllUser') ? JSON.parse(localStorage.getItem('listAllUser')) : []
    },
    getters: {
        list: state => state.listUser,
        loading: state => state.loading,
    },
    mutations: {
        DELETE_USER: (state, listId) => {
            const newList = state.listUser.filter(item => item.id !== listId)
            state.listUser = newList
        },
        GET_ALL_USER: (state, listUser) => {
            state.listUser = listUser
        },
        UPDATE_USER: (state, data) => {
            const update = state.listUser.map(item => {
                if (item.id == data.id) {
                    item = data
                }
                return item
            })
            state.listUser = update
        },
        ADD_USER: (state, data) => {
            state.listUser.unshift(data)
        },
        SEARCH_USER: (state, data) => {
            state.listUser = data

        }
    },

    actions: {
        async getAllUser({ commit, state }) {
            try {
                state.loading = true
                const data = await axios.get('https://609b30fa2b549f00176e3169.mockapi.io/user')
                const list = JSON.stringify(data.data)
                localStorage.setItem('listAllUser', list)
                await commit('GET_ALL_USER', data.data)
                state.loading = false
            } catch (error) {
                console.log(error);
            }
        },
        async deleteUser({ commit, state }, id) {
            try {
                if (id) {
                    state.loading = true
                    await axios.delete(`https://609b30fa2b549f00176e3169.mockapi.io/user/${id}`)
                    commit('DELETE_USER', id)
                    state.loading = false
                }
            } catch (error) {
                console.log(error);
            }
        },
        async updateUser({ commit, state }, data) {
            try {
                state.loading = true
                const user = await axios.put(`https://609b30fa2b549f00176e3169.mockapi.io/user/${data.id}`, data)
                await commit('UPDATE_USER', user.data)
                state.loading = false
            } catch (error) {
                console.log(error);
            }
        },
        async addUser({ commit }, data) {
            try {
                if (data) {
                    const user = await axios.post(`https://609b30fa2b549f00176e3169.mockapi.io/user`, data)
                    await commit('ADD_USER', user.data)
                }
            } catch (error) {
                console.log(error);
            }
        },
        searchUser({ commit }, data) {
            const local = JSON.parse(localStorage.getItem("listAllUser"))
            const objects = local
            let results = objects.filter(obj => Object.keys(obj).some(key => obj[key].includes(data)));
            if (data == "") {
                results = local
            }
            commit('SEARCH_USER', results)
        }

    }
}
export default listUser;