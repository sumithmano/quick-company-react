

class BaseService {
    static baseUrl = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:3000/api"
}

export default BaseService