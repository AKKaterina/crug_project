import axios from 'axios';
import { API_URL } from '../consts/API_URL';
import { UserType } from '../types/User_Type';

export const update_user = (id: string, userData: UserType) => {
    return axios({
        method: 'POST',
        url: `${API_URL}/users/${id}`,
        data: JSON.stringify(userData),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
};
