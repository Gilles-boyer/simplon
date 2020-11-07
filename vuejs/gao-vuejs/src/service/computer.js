import api from './api'

//collection of request to API for computer
export default {
    create(data) {
        return api.post('computer', data)
    },
    index(date) {
        return api.get('computer/all/' + date)
    },
    delete(id) {
        return api.delete('computer/' + id)
    }
}