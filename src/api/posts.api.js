import axiosInstance from './axiosInstance';
import ApiError from '../utils/ApiError';
import { CONST } from '../utils/Constants';

const APIPosts = {
  async getPosts() {
    try {
      const response = await axiosInstance.get('/posts');
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },

  async createPost(data) {
    if (!data) throw new Error(CONST.MISSING_REQUIRED_FIELD);
    if ((!data.authorId && !data.title) || !data.content) throw new Error(CONST.MISSING_REQUIRED_FIELD);
    const { authorId, title, content } = data;
    try {
      const response = await axiosInstance.post('/posts', { authorId, title, content });
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },
};

export default APIPosts;
