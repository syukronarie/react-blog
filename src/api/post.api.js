import axiosInstance from './axiosInstance';
import ApiError from '../utils/ApiError';

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

  async createPost(createBody) {
    try {
      const { title, content, categories, isPublished } = createBody;
      const response = await axiosInstance.post('/posts', { title, content, categories, isPublished });
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },

  async getPostById(id) {
    try {
      const response = await axiosInstance.post(`/posts/${id}`);
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },

  async updatePost(data) {
    const { id, title, content, categories, isPublished } = data;
    try {
      const response = await axiosInstance.patch(`/posts/${id}`, { title, content, categories, isPublished });
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },

  async deletePost(id) {
    try {
      const response = await axiosInstance.delete(`/posts/${id}`);
      return response.data;
    } catch (err) {
      const { status, statusText } = err.response;
      const { message, stack } = err.response.data;
      throw new ApiError(status, statusText, message, true, stack);
    }
  },
};

export default APIPosts;
