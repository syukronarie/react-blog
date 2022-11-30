import axiosInstance from '../network/axiosInstance';
import ApiError from '../utils/ApiError';

const APICategories = {
  async createCategory(createBody) {
    try {
      const { title } = createBody;
      const response = await axiosInstance.post('/category', { title });
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },

  async getCategories() {
    try {
      const response = await axiosInstance.get('/category');
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },
};

export default APICategories;
