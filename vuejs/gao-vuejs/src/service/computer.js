import api from './api'

//collection of request to API for computer
export default {
    create(data) {
        return api.post('computer', data)
    },
    index() {
        return api.get('computer/all')
    }
}