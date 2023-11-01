import axios from 'axios';
import { API_URL } from '../consts/API_URL';
import { UserType } from '../types/User_Type';

export const create_user = (userData: UserType) => {
    return axios({
        method: 'POST',
        url: `${API_URL}/users/`,
        data: JSON.stringify(userData),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    .then((response)=>{
        console.log('Successfully created user',response);
        return response
    })
    .catch((error) =>{
        console.error('Error creating user: ', error)
        throw error;
    });
};
