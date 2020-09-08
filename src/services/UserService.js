import BaseService from './BaseService'
import axios from 'axios'

class UserService extends BaseService {

    static login(payload) {
        let url = `${UserService.baseUrl}/users/login`
        return axios.post(url, payload)
            .then(response => {
                if(response.data) {
                    localStorage.setItem('access_token', response.data.id);
                    localStorage.setItem('userId', response.data.userId);
                }
                return response.data
            })
    }

    static create(payload) {
        let url = `${UserService.baseUrl}/users`
        return axios.post(url, payload)
            .then(response => {
                // if(response.data) {
                //     localStorage.setItem('access_token', response.data.id);
                //     localStorage.setItem('userId', response.data.userId);
                // }
                return response.data
            })
    }

    static isAthenticated() {
        return !!localStorage.getItem('access_token')
    }

    static userId() {
        return localStorage.getItem('userId')
    }

    static logout() {
        let access_token = localStorage.getItem('access_token')
        let url = `${UserService.baseUrl}/users/logout?access_token=${access_token}`
        return axios.post(url)
            .catch(err => console.log(err))
            .finally(() => {
                localStorage.removeItem('access_token');
            })
    }
}

export default UserService