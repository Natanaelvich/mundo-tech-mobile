import axios from 'axios';

const api = axios.create({
  baseURL: 'http://apinatanaelima-com.umbler.net',
});

export default api;
