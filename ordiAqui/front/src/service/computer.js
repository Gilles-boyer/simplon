import api from './api'

//collection of request to API for computer
export default {

    index(page) {
        return api.get('computers?page=' + page)
    },
    store(data) {
        return api.post('computer/create', data)
    },
    destroy(data) {
        return api.post('computer/delete', data)
    }
}