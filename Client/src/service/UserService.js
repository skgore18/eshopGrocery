<<<<<<< HEAD
import axios from 'axios'

const REST_API_URL = 'http://localhost:9090/eshop/user'

class UserService{

    createUser(formData)
    {
        return axios.post(REST_API_URL + '/register', formData); 
    }
}

=======
import axios from 'axios'

const REST_API_URL = 'http://localhost:9090/eshop/user'

class UserService{

    createUser(formData)
    {
        return axios.post(REST_API_URL + '/register', formData); 
    }
}

>>>>>>> ebfd4258418cc50828d3b35c9aa9be5a4de1ee6f
export default new UserService();