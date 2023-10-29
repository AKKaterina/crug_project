import axios from 'axios';
import { API_URL } from '../consts/API_URL';

export const delete_user = (id: string) => {
    return axios.delete(`${API_URL}/users/${id}`);
};
