import api from './api'

//collection of request to API for computer
export default {

    index() {
        return api.get('clients/search')
    },
    attribution(data) {
        return api.post('attribution/create', data)
    },
    createUser(data) {
        return api.post('client/create', data)
    }
}