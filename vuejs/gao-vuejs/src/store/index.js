import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        computers: [{
                id: 1,
                name: 'PC 1',
                attributions: [{
                    id: 1,
                    hours: 9,
                    client: {
                        id: 1,
                        nickName: 'Boyer Gilles'
                    }
                }]
            },
            {
                id: 2,
                name: 'PC 2',
                attributions: [],
            },
            {
                id: 3,
                name: 'PC 3',
                attributions: [],
            },
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
        },
    },
    actions: {
        addNewComputer(context, data) {
            context.commit('SET_LIST_COMPUTERS', data)
        },
    },
    modules: {}
})