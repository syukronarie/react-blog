/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable no-prototype-builtins */
import axios from 'axios';
import Auth from '../utils/Auth';
import { CONST } from '../utils/Constants';
// import APIAuth from './auth.api';

export const isHandlerEnabled = (config) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? false : true;
};

export const requestHandler = async (config) => {
  if (isHandlerEnabled(config)) {
    const auth = Auth.getAccessToken();
    if (auth) {
      config.headers.token = `${auth}`;
    } else if (config.url !== '/auth/login') {
      console.log({ config });
      const rt = Auth.getRefreshToken();
      await axios.get(`${CONST.BASE_URL_API}/auth/refresh-token`, { headers: { refreshtoken: rt } });
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
