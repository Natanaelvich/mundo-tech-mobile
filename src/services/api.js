import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mundotechbackend.herokuapp.com',
});

export default api;
