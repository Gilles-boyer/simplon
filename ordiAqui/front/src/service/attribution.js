import api from './api'

//collection of request to API for User
export default {

    listAttribution(id, date) {
        return api.get('awards/' + id + '/' + date)
    },

    create(data) {
        return api.post('award/create', data)
    },

    update(data) {
        return api.post('award/update', data)
    },

    destroy(data) {
        return api.post('award/delete', data)
    }
}