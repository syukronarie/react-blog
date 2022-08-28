import axiosInstance from './axiosInstance';
import ApiError from '../utils/ApiError';

const APIUser = {
  async signup(data) {
    try {
      const response = await axiosInstance.post('/users', data);
      return response;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },
};

export default APIUser;
