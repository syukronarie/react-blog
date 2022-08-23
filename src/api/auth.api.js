import axiosInstance from './axiosInstance';
import { CONST } from '../utils/Constants';
import ApiError from '../utils/ApiError';
import Auth from '../utils/Auth';

const APIAuth = {
  async signin(data) {
    if (!data) throw new Error(CONST.MISSING_REQUIRED_FIELD);
    const { email, password } = data;
    if (!email || !password) throw new Error(CONST.MISSING_REQUIRED_FIELD);
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      Auth.storeUserInfoToCookie(response.data.data);
      return response;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },
};

export default APIAuth;
