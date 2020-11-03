import api from './api'

//collection of request to API for computer
export default {

    index() {
        return api.get('computers')
    },
}