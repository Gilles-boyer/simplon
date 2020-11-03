import api from './api'

//collection of request to API for computer
export default {

    index(date) {
        return api.get('computers/' + date)
    },
    create(data) {
        return api.post('computer-create', data)
    }
}