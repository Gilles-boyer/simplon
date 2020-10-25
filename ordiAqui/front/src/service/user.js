import api from './api'

export default {

    login(login) {
        return api.post('login-user', login)
    },
    logout() {
        return api.get('user/logout/me')
    },
}