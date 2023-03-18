import axios, { Method } from 'axios';

type RequestParams = {
    method?: Method,
    user: string,
    data?: object,
    params?: object
}

const BASE_URL = 'https://api.github.com/users/';

export const makeRequest = ({method = 'GET', user, data, params} : RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${user}`,
        data,
        params
    });
}