import axios from 'axios';
import { API_URL } from '../consts/API_URL';
import { UserType } from '../types/User_Type';

export const update_user = (userData: Partial<UserType>) => {
    return axios({
        method: 'PUT',
        url: `${API_URL}/users`,
        data: JSON.stringify(userData),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
};
