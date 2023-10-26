import axios from 'axios';
import Router from 'router';


const requestApi = async (endpoint, method = 'GET', data = {}, contentType = '') => {

    try {
        const token = localStorage.getItem('applicationToken');
        let response = {};
        response = await axios({
            method: method,
            url: `${process.env.SUPPLIER_API_URL}${endpoint}`,
            data: data,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": contentType
            },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            if (error.response.data.error.includes('expired')) {
                // Refresh token if expired
                const refreshToken = localStorage.getItem('refreshToken');
                const response = await axios({
                    method: 'GET',
                    url: (process.env.SUPPLIER_API_URL + '/refreshToken'),
                    headers: {
                        Authorization: `Bearer ${refreshToken}`,
                        isRefreshToken: true
                    },
                });
                const { token, refreshToken: newRefreshToken } = response.data;
                localStorage.setItem('applicationToken', token);
                localStorage.setItem('refreshToken', newRefreshToken);
                // Retry request
                return requestApi(endpoint, method, data);
            }

            // Redirect to login page
            await Router.push('/');
            return;
        } else {
            console.log('Error fetching API data:', error);
            return error?.response
        }

        // throw error;
    }
};

export default requestApi;


