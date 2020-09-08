import BaseService from './BaseService'
import axios from 'axios'

class CompanyService extends BaseService {
    constructor() {
        super()
    }

    // TODO: send access_token through headers
    // https://bezkoder.com/react-jwt-auth/#Add_Navbar_and_define_Routes
    static getCompanyList() {
        let access_token = localStorage.getItem('access_token')
        let url = CompanyService.baseUrl + "/companies" + ""
        let params = {
            access_token,
            filter: {
                include: "favourites"
            }
        }
        return axios.get(url, { params })
            .then(response => {
                return response && response.data || []
            })
    }
}

export default CompanyService