/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-prototype-builtins */
import axios, { AxiosError } from 'axios';
import Auth from '../utils/Auth';
import { CONST } from '../utils/Constants';

const exceptionApiUrlforRT = (config) => {
  if (config) return null;
  const arr = [config.url.includes('/auth/login'), config.url.includes('/users')];
  return arr.includes(true);
};

export const isHandlerEnabled = (config) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true;
};

export const requestHandler = async (config) => {
  if (isHandlerEnabled(config)) {
    const auth = Auth.getAccessToken();
    if (auth) {
      config.headers.token = auth;
    } else if (config.method === 'post' && exceptionApiUrlforRT(config)) {
      console.log({ config });
      try {
        const rt = Auth.getRefreshToken();
        const resRT = await axios.get(`${CONST.BASE_URL_API}/auth/refresh-token`, { headers: { refreshtoken: rt } });
        const payload = resRT.data.data;
        Auth.storeUserInfoToCookie(payload);
        config.headers.token = payload.access.token;
      } catch (error) {
        const { message, code, request, response } = error;
        throw new AxiosError(message, code, config, request, response);
      }
    }
  }
  return config;
};

export const successHandler = (response) => {
  if (isHandlerEnabled(response)) {
    if (response.status === 200) {
      return response;
    }
  }
  return response;
};

export const errorHandler = (error) => {
  return Promise.reject({ ...error });
};
