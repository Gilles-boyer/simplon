import Vue from 'vue'
import Vuex from 'vuex'
import apiComputer from '../service/computer'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        computers: [],

        date: new Date().toISOString().substr(0, 10),
        login: {
            email: 'boyer.gilles@live.fr',
            password: 'gilles'
        },
        connected: false,
        snackbar: false,
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
            state.computers = data
        },
        SET_DATE(state, date) {
            state.date = date
        },
        SET_CONNECTED(state, bool) {
            state.connected = bool
        }
    },
    actions: {

        changeDate(context, date) {
            context.commit('SET_DATE', date)
        },

        changeStatutConnected(context, bool) {
            context.commit('SET_CONNECTED', bool)
        },

        listOfPc: async function(context) {
            var res = await apiComputer.index()
            context.commit('SET_LIST_COMPUTERS', res.data.data)
        }
    },
    modules: {}
})