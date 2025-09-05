import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'http://10.0.2.2:4000/api',
});

export default axiosService;
