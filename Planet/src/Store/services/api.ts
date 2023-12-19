/* eslint-disable prettier/prettier */
import axios from '../../Store/services/axios';
import {showMessage} from 'react-native-flash-message';
import * as RootNavigation from '../../routes/RootNavigation';
import {store} from '../index';
import {logout} from '../auth';

var qs = require('qs');
interface payload {
  data?: Object;
  url: string;
}

export const post = (payload: payload) => {
  try {
    return axios.post(`${payload.url}`, qs.stringify(payload.data));
  } catch (err: any) {
    console.log({errstatus: err.response.status});
    if (err?.response?.status === 401) {
      store.dispatch(logout());
      RootNavigation.navigate('Main', {});
      showMessage({
        message: 'Session Expired',
        description: 'Your session has been expired',
        type: 'danger',
      });
    } else {
      throw err;
    }
  }
};
export const postWithJson = (payload: payload) => {
  try {
    return axios.post(`${payload.url}`,  payload?.data);
  } catch (err: any) {
    console.log('osamama error osamama');
    console.log({errstatus: err.response.status});
    if (err?.response?.status === 401) {
      store.dispatch(logout());
      RootNavigation.navigate('Main', {});
      showMessage({
        message: 'Session Expired',
        description: 'Your session has been expired',
        type: 'danger',
      });
    } else {
      console.log('osamama error osamama');
      throw err;
    }
  }
};

export const postWithPatch = (payload: payload) => {
  try {
    return axios.patch(`${payload.url}`, payload.data);
  } catch (err: any) {
    console.log('osamama error osamama');
    console.log({errstatus: err.response.status});
    if (err?.response?.status === 401) {
      store.dispatch(logout());
      RootNavigation.navigate('Main', {});
      showMessage({
        message: 'Session Expired',
        description: 'Your session has been expired',
        type: 'danger',
      });
    } else {
      throw err;
    }
  }
};
export const get = async (payload: payload) => {
  try {
    let res = await axios.get(`${payload.url}`);
    return res;
  } catch (err: any) {
    //console.log({err})
    if (err?.response?.status === 401) {
      store.dispatch(logout());
      RootNavigation.navigate('Main', {});
      showMessage({
        message: 'Session Expired',
        description: 'Your session has been expired',
        type: 'danger',
      });
    } else {
      throw err;
    }
  }
};

export const deleteApi = async (payload: payload) => {
  try {
    let res = await axios.delete(`${payload.url}`);
    return res;
  } catch (err: any) {
    //console.log({err})
    if (err.response.status === 401) {
      store.dispatch(logout());
      RootNavigation.navigate('Main', {});
      showMessage({
        message: 'Session Expired',
        description: 'Your session has been expired',
        type: 'danger',
      });
    } else {
      throw err;
    }
  }
};
