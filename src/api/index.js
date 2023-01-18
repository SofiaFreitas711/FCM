import axios from 'axios';

const api = axios.create({
    baseURL: 'https://surrealismoapi.onrender.com',
});

export default api;