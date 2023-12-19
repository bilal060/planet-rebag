/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import {getSecureInfo} from '../../../utils';
import {rootUrl} from '../../../utils/constants';

const instance = axios.create({
  baseURL: rootUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(async (config: any) => {
  // let token = await getSecureInfo('userIsAuthenticated');
  // let data1 = await JSON.parse(token);
  // config.headers.Authorization = `Bearer ${data1?.AuthToken}`;
  return config;
});

export default instance;
