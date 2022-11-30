import axiosInstance from '../network/axiosInstance';
import ApiError from '../utils/ApiError';
import Auth from '../utils/Auth';

const APIAuth = {
  async signin(data) {
    try {
      const { email, password } = data;
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
