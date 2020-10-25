import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Api: `http://127.0.0.1:8000/api`,
        computer: {
            name: null,
            time: null,
            attribution: null,
        },
        data: {
            userName: null,
            time: null,
            date: null,
        },
        date: null,
    },
    mutations: {},
    actions: {},
    modules: {}
})