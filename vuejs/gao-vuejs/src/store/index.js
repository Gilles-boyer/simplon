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

        date: new Date().toISOString().substr(0, 10),
        login: {
            email: 'boyer.gilles@live.fr',
            password: 'gilles'
        },
        connected: false
    },
    getters: {
        getListComputers: state => {
            return state.computers
        },
        getDate: state => {
            return state.date
        },
        getLogin: state => {
            return state.connected
        }
    },
    mutations: {
        SET_LIST_COMPUTERS(state, data) {
            state.computers.push(data)
        },
        SET_DATE(state, date) {
            state.date = date
        },
        SET_CONNECTED(state, bool) {
            state.connected = bool
        }
    },
    actions: {
        addNewComputer(context, data) {
            context.commit('SET_LIST_COMPUTERS', data)
        },
        changeDate(context, date) {
            context.commit('SET_DATE', date)
        },
        changeStatutConnected(context, bool) {
            context.commit('SET_CONNECTED', bool)
        }
    },
    modules: {}
})