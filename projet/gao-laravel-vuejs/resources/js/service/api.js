import axios from 'axios'

export default axios.create({
    baseURL: `http://gao.localhost/api`,
    headers: {

        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})