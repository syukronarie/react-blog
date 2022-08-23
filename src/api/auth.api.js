import Cookies from 'js-cookie';
import axiosInstance from './axiosInstance';
import { CONST } from '../utils/Constants';
import ApiError from '../utils/ApiError';

const storeUserInfoToCookie = (data) => {
  if (!data.access || !data.refresh) return null;
  const { access, refresh, sub } = data;
  const accessExpires = new Date(access.expires);
  const refreshExpires = new Date(refresh.expires);
  Cookies.set('token', access.token, { expires: accessExpires });
  Cookies.set('rt', refresh.token, { expires: refreshExpires });
  Cookies.set('sub', sub);
  return data;
};

const APIAuth = {
  async signin(data) {
    if (!data) throw new Error(CONST.MISSING_REQUIRED_FIELD);
    const { email, password } = data;
    if (!email || !password) throw new Error(CONST.MISSING_REQUIRED_FIELD);
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      storeUserInfoToCookie(response.data.data);
      return response;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },

  async refreshToken() {
    try {
      const response = await axiosInstance.post('/auth/refresh-token');
      storeUserInfoToCookie(response.data.data);
      return response;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },
};

export default APIAuth;
