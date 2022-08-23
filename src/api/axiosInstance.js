import axios from 'axios';
import { CONST } from '../utils/Constants';
import { errorHandler, requestHandler, successHandler } from './interceptors';

const axiosInstance = axios.create({
  baseURL: CONST.BASE_URL_API,
});

// Handle request process
axiosInstance.interceptors.request.use((request) => requestHandler(request));

// Handle response process
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error),
);

export default axiosInstance;
