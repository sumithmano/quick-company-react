import BaseService from './BaseService'
import axios from 'axios'

class FavoutiteService extends BaseService {

    static addFavourite(payload) {
        // let access_token = localStorage.getItem('access_token')
        let url = `${FavoutiteService.baseUrl}/favourites`
        return axios.post(url, payload)
            .then(response => {
                return (response && response.data) || {}
            })
    }

    static removeFavourite(id) {
        // let access_token = localStorage.getItem('access_token')
        let url = `${FavoutiteService.baseUrl}/favourites/${id}`
        return axios.delete(url)
            .then(response => {
                return (response && response.data) || {}
            })
    }
}

export default FavoutiteService