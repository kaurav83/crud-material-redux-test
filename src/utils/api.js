import axios from  'axios';

const api = axios.create({
    baseURL: 'http://77.120.241.80:8911/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;