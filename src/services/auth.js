import Axios from '@/core/axiosInstance';
import router from '../router/index';
import {authenticate} from '../core/constants';
import {store} from '../store/index';

export default new class Authorization {
    constructor() {
        this.setHeader()
    }

    async login(payload) {
        try {
            const res = await Axios.post(authenticate.login, payload);
            console.log(res.data.token);
            this.setToken(res.data.token);
            this.setHeader();
            await this.getUser();
            router.push('/');
        }
        catch (error) {
            alert(error.response.data.message)
        }
    }

    async logout() {
        await this.logoutFromApi();
        this.removeUser();
        this.removeToken();
        this.removeHeader();
        router.push('/');
    }

    //Tokens
     getToken() {
        return localStorage.getItem('token');
    }

     setToken(token) {
        localStorage.setItem('token', token);
    }

     removeToken() {
        localStorage.removeItem('token');
    }

    //Axios headers
     setHeader() {
         Axios.defaults.headers.common['Authorization'] = `Bearer ${this.getToken()}`;
    }

     removeHeader() {
        delete Axios.defaults.headers.common['Authorization']
    }

    //Users
     async getUser() {
        try {
            const res = await Axios.get(authenticate.getUser);
            this.setUser(res.data.data)
        }
        catch (error) {
            alert(error)
        }
    }

    async logoutFromApi() {
        try {
            await Axios.post(authenticate.logout);
        }
        catch (error) {
            alert(error)
        }
    }

     setUser(user) {
        if (user.avatar === null) {
            user['avatar'] = 'static/img/no-avatar.jpg';
        }
        localStorage.setItem('user', JSON.stringify(user));
        store.commit('SET_USER')
    }

     removeUser() {
        localStorage.removeItem('user');
        store.commit('DELETE_USER')
    }
}