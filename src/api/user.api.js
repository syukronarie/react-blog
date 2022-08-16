import axiosInstance from './axiosInstance';
import { CONST } from '../utils/Constants';
import ApiError from '../utils/ApiError';

const APIUser = {
  async signup(data) {
    if (!data) throw new Error(CONST.MISSING_REQUIRED_FIELD);
    const { email, password, userName, firstName, lastName } = data;
    if (!email || !password || !userName || !firstName || !lastName) throw new Error(CONST.MISSING_REQUIRED_FIELD);
    try {
      const response = await axiosInstance.post('/users', data);
      return response;
    } catch (err) {
      console.log(err);
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },
};

export default APIUser;
