import axios from 'axios'

export const API = async (route, method, body, params)  => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BACK_URL}`;

    axios.defaults.headers.get['Content-Type'] =
        'application/json;charset=utf-8;multipart/form-data';

    const url = `${baseUrl}${route}`;

    return axios({
        method: method,
        url,
        data: body,
        params: params
    });
}