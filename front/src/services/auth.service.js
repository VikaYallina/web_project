import axios from 'axios';

// Service for sending and fetching data from API

const API_URL = 'http://localhost:8080/api/auth';

class AuthService{
    login(username, password){
        return axios
            .post(
                API_URL + '/signin',
                {username, password}
            )
            .then((resp) => {
            if (resp.data.accessToken){
                localStorage.setItem('user', JSON.stringify(resp.data))
            }
            return resp.data;
        });
    }

    logout(){
        localStorage.removeItem('user');
    }

    register(username, email, password ){
        return axios.post(
            API_URL + '/signup',
            {
                username,
                password,
                email
            });
    }
}

export default new AuthService();