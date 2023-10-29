import axios from 'axios';
import { API_URL } from '../consts/API_URL';

export const get_users = () => {
    return axios.get(`${API_URL}/users`);
};
