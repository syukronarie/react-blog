import axiosInstance from '../network/axiosInstance';
import ApiError from '../utils/ApiError';

const APIVotes = {
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

  async createVote(postId) {
    try {
      const response = await axiosInstance.post('/votes', { postId });
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

  async updateVote(postId) {
    try {
      const response = await axiosInstance.patch('/votes', { postId });
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

export default APIVotes;
