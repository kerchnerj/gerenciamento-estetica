import axios from 'axios';

const api = axios.create({
  baseURL: 'http://191.52.55.138:8081',
});

export default api;