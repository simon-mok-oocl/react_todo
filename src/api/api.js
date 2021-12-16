import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:8080"
    //baseURL: "https://61b9881438f69a0017ce60a9.mockapi.io"
});

export default api;