import api from './api'

export default {

    allUser() {
        return api.get('utilisateurs')
    },
    createUser(data) {
        return api.post('utilisateur/create', data)
    },
}