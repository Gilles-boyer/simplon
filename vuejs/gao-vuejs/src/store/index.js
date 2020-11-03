import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        computers: [
            { id: 1, name: 'PC 1' },
            { id: 2, name: 'PC 2' },
            { id: 3, name: 'PC 3' },
        ],
    },
    getters: {
        getListComputers: state => {
            return state.computers
        }
    },
    mutations: {
        SET_LIST_COMPUTERS(state, data) {
            state.computers.push(data)
        }
    },
    actions: {
        addNewComputer(context, data) {
            context.commit('SET_LIST_COMPUTERS', data)
        }
    },
    modules: {}
})