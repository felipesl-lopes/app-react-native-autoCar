import axios from 'axios';
import { Platform } from 'react-native';

const baseURL =
  Platform.OS === 'android'
    ? 'http://10.0.0.192:4000/api' // celular físico
    : 'http://10.0.2.2:4000/api'; // emulador

const axiosService = axios.create({
  baseURL,
});

export default axiosService;
